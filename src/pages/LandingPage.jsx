/**
 * Landing Page Component
 * First page users see - clean hero with main actions
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-primary-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="text-3xl">🍽️</div>
            <h1 className="text-2xl font-bold text-primary-700">FoodLink LA</h1>
          </div>
          <a 
            href="https://github.com/yourusername/foodlink-la" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            About
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-8 animate-fadeIn">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Find Food.
              <br />
              <span className="text-primary-600">Get Help.</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              24/7 AI-powered assistance connecting you with food resources across West Los Angeles
            </p>
          </div>

          {/* Emergency Button */}
          <div className="mb-12 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
            <button
              onClick={() => navigate('/chat?urgent=true')}
              className="btn-emergency w-full md:w-auto md:px-12 shadow-2xl transform hover:scale-105 transition-transform"
            >
              🚨 I Need Food NOW
            </button>
            <p className="text-sm text-gray-500 mt-2">
              Immediate assistance • Open resources • Real-time help
            </p>
          </div>

          {/* Main Action Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
            {/* I Need Food */}
            <button
              onClick={() => navigate('/chat')}
              className="card hover:border-primary-300 border-2 border-transparent cursor-pointer group text-left"
            >
              <div className="text-5xl mb-4">🙏</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                I Need Food
              </h3>
              <p className="text-gray-600 mb-4">
                Find nearby food pantries, meal services, and resources. Get personalized help based on your location and needs.
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Get Started
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>

            {/* I Want to Donate */}
            <button
              onClick={() => navigate('/donate')}
              className="card hover:border-primary-300 border-2 border-transparent cursor-pointer group text-left"
            >
              <div className="text-5xl mb-4">💝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                I Want to Donate
              </h3>
              <p className="text-gray-600 mb-4">
                Have food to share? Connect with organizations that can distribute it to people in need. Make an impact today.
              </p>
              <div className="flex items-center text-primary-600 font-medium">
                Start Donating
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">18+</div>
              <div className="text-sm md:text-base text-gray-600">Food Resources</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">24/7</div>
              <div className="text-sm md:text-base text-gray-600">AI Assistant</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-1">Free</div>
              <div className="text-sm md:text-base text-gray-600">Always</div>
            </div>
          </div>

          {/* How It Works */}
          <div className="text-left max-w-3xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">How It Works</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Share Your Location</h4>
                  <p className="text-gray-600">Tell us where you are or what landmark you're near</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Get Personalized Help</h4>
                  <p className="text-gray-600">Our AI assistant finds resources that match your needs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Access Food</h4>
                  <p className="text-gray-600">Get addresses, hours, and directions to nearby resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-200">
        <div className="text-center text-gray-600">
          <p className="mb-2">Built with 💙 for UCLA Claude Hackathon</p>
          <p className="text-sm">
            Addressing homelessness and food insecurity in West Los Angeles
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
