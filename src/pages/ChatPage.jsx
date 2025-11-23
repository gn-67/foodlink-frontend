/**
 * Chat Page Component
 * Main interface for chatting with the AI agent
 */

import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { sendChatMessage, generateSessionId } from '../services/api';
import ResourceCard from '../components/ResourceCard';
import LoadingDots from '../components/LoadingDots';

const ChatPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const isUrgent = searchParams.get('urgent') === 'true';

  const [sessionId] = useState(() => generateSessionId());
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resources, setResources] = useState([]);
  const [location, setLocation] = useState('');
  
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Send initial urgent message if coming from emergency button
useEffect(() => {
  if (isUrgent && messages.length === 0) {
    handleSendMessage('I need food right now, it\'s urgent');
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [isUrgent, messages.length]); // Fixed: proper dependencies

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
      // Send message to backend
      const response = await sendChatMessage({
        sessionId,
        message: userMessage,
        agentType: 'recipient',
        location: location || null,
      });

      // Add assistant response
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: response.response },
      ]);

      // Update resources if returned
      if (response.resources && response.resources.length > 0) {
        setResources(response.resources);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      
      // Add error message
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I apologize, but I encountered an error. Please try again or check that the backend server is running.',
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

  const handleLocationUpdate = (newLocation) => {
    setLocation(newLocation);
    handleSendMessage(`I'm near ${newLocation}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back</span>
            </button>
            <div className="flex items-center space-x-2">
              <div className="text-2xl">🤖</div>
              <div>
                <h1 className="font-bold text-gray-900">Food Assistant</h1>
                <p className="text-xs text-gray-500">AI-powered help</p>
              </div>
            </div>
            <div className="w-16"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          {/* Welcome Message */}
          {messages.length === 0 && !isUrgent && (
            <div className="text-center py-12 animate-fadeIn">
              <div className="text-6xl mb-4">👋</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Hi! I'm here to help you find food.
              </h2>
              <p className="text-gray-600 max-w-md mx-auto mb-6">
                Tell me where you are and what you need. I can help you find food pantries, meal services, and other resources nearby.
              </p>
              
              {/* Quick Location Buttons */}
              <div className="flex flex-wrap gap-2 justify-center">
                <button
                  onClick={() => handleLocationUpdate('UCLA')}
                  className="btn-secondary text-sm"
                >
                  📍 Near UCLA
                </button>
                <button
                  onClick={() => handleLocationUpdate('Santa Monica')}
                  className="btn-secondary text-sm"
                >
                  📍 Santa Monica
                </button>
                <button
                  onClick={() => handleLocationUpdate('Venice')}
                  className="btn-secondary text-sm"
                >
                  📍 Venice
                </button>
              </div>
            </div>
          )}

          {/* Messages */}
          <div className="space-y-4">
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

            {/* Resources Section */}
            {resources.length > 0 && (
              <div className="animate-fadeIn">
                <div className="bg-primary-50 rounded-lg p-4 mb-4">
                  <h3 className="font-bold text-gray-900 mb-2 flex items-center">
                    <span className="text-xl mr-2">📍</span>
                    Food Resources Near You
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Found {resources.length} resource{resources.length !== 1 ? 's' : ''} that can help
                  </p>
                  <div className="space-y-4">
                    {resources.map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 sticky bottom-0">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <div className="flex space-x-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message... (e.g., 'I need food near UCLA')"
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
            Powered by Claude AI • Your conversation is private
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
