/**
 * Donate Page Component
 * Interface for donors to contribute food
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

const DonatePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-3xl">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">💝</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Donate Food</h1>
          <p className="text-xl text-gray-600">
            Thank you for wanting to help! Your generosity makes a real difference.
          </p>
        </div>

        {/* Coming Soon Notice */}
        <div className="card mb-8 text-center">
          <div className="text-5xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Donor Portal Coming Soon!
          </h2>
          <p className="text-gray-600 mb-6">
            We're building an AI-powered donation system to make it easy for grocery stores, restaurants, and individuals to donate food safely and efficiently.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg text-left">
            <h3 className="font-bold text-gray-900 mb-2">What we're building:</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>AI-guided donation process with food safety validation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Smart matching with organizations that need your donation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Pickup coordination and scheduling</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Impact tracking - see how many people you've helped</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Options */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Want to Donate Now?</h3>
          
          <div className="card">
            <h4 className="font-bold text-gray-900 mb-2">🏪 Westside Food Bank</h4>
            <p className="text-gray-600 mb-3">
              Primary food bank serving West LA. Accepts donations from grocery stores, restaurants, and individuals.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (310) 828-6016
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                1710 22nd St, Santa Monica, CA 90404
              </div>
            </div>
            <a
              href="https://www.wsfb.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 inline-block"
            >
              Visit Website
            </a>
          </div>

          <div className="card">
            <h4 className="font-bold text-gray-900 mb-2">🏠 St. Joseph Center</h4>
            <p className="text-gray-600 mb-3">
              Serves people experiencing homelessness in West LA. Accepts food donations and coordinates with donors.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (310) 396-6468
              </div>
              <div className="flex items-center text-gray-700">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                204 Hampton Drive, Venice, CA 90291
              </div>
            </div>
            <a
              href="https://stjosephctr.org"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-4 inline-block"
            >
              Visit Website
            </a>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Interested in helping build the donor portal?
          </p>
          <button
            onClick={() => navigate('/chat')}
            className="btn-secondary"
          >
            Contact Us Through Chat
          </button>
        </div>
      </main>
    </div>
  );
};

export default DonatePage;
