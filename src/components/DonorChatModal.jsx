/**
 * Donor Chat Modal Component
 * Handles conversation flow for food donations
 */

import React, { useState, useEffect, useRef } from 'react';
import { sendChatMessage, generateSessionId } from '../services/api';
import LoadingDots from './LoadingDots';
import OrganizationCard from './OrganizationCard';

const DonorChatModal = ({ isOpen, onClose }) => {
  const [sessionId] = useState(() => generateSessionId());
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [matchedOrganizations, setMatchedOrganizations] = useState([]);
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      
      // Send initial greeting if no messages
      if (messages.length === 0) {
        setMessages([
          {
            role: 'assistant',
            content: "Hi! Thank you for wanting to donate. What do you have to donate? Even a little goes a long way! 🌟"
          }
        ]);
      }
    }
  }, [isOpen]);

  const handleSendMessage = async (messageText = inputValue) => {
    if (!messageText.trim() || isLoading) return;

    const userMessage = messageText.trim();
    
    // Add user message to chat
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: userMessage },
    ]);
    
    setInputValue('');
    setIsLoading(true);

    try {
      // Send message to backend (donor agent)
      const response = await sendChatMessage({
        sessionId,
        message: userMessage,
        agentType: 'donor',
      });

      // Add assistant response
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: response.response },
      ]);

      // If organizations are returned, display them
      if (response.organizations && response.organizations.length > 0) {
        setMatchedOrganizations(response.organizations);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I apologize, but I encountered an error. Please try again or contact the organizations directly using the information on this page.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Quick reply buttons
  const quickReplies = [
    "I have canned goods to donate",
    "Fresh produce from my garden",
    "Unopened groceries",
    "Business surplus food"
  ];

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="text-3xl">💝</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Donation Assistant</h2>
              <p className="text-sm text-gray-500">We'll help connect you with organizations</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
            >
              <div className={message.role === 'user' ? 'message-user' : 'message-assistant'}>
                {message.content}
              </div>
            </div>
          ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex justify-start animate-fadeIn">
              <div className="bg-gray-200 rounded-2xl rounded-bl-sm px-4 py-3">
                <LoadingDots />
              </div>
            </div>
          )}

          {/* Quick Replies (show only at start) */}
          {messages.length === 1 && !isLoading && (
            <div className="animate-fadeIn">
              <p className="text-sm text-gray-500 mb-2">Quick options:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickReply(reply)}
                    className="btn-secondary text-sm"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Matched Organizations */}
          {matchedOrganizations.length > 0 && (
            <div className="animate-fadeIn">
              <div className="bg-green-50 rounded-lg p-4 mb-4">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                  <span className="text-xl mr-2">✅</span>
                  Matched Organizations for Your Donation
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  These organizations can accept what you're offering. Contact them directly to coordinate pickup or drop-off.
                </p>
                <div className="space-y-4">
                  {matchedOrganizations.map((org) => (
                    <OrganizationCard key={org.id} organization={org} />
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Describe what you have to donate..."
              className="input flex-1"
              disabled={isLoading}
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputValue.trim() || isLoading}
              className="btn-primary px-6 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">
            We'll connect you with organizations - you coordinate pickup/drop-off directly with them
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonorChatModal;