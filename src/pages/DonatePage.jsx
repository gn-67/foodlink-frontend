/**
 * Donate Page Component - Enhanced with Chat Interface
 * Connects donors (families and businesses) with organizations
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DonorChatModal from '../components/DonorChatModal';
import ThemeToggle from '../components/ThemeToggle';

const DonatePage = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Featured organizations from different areas
  const featuredOrganizations = [
    {
      id: "2",
      name: "St. Joseph Center",
      area: "Venice",
      address: "204 Hampton Drive, Venice, CA 90291",
      phone: "(310) 396-6468",
      website: "https://stjosephctr.org",
      commonDistributions: ["Fresh produce", "Non-perishables", "Hygiene products"],
      acceptsDonations: true,
      pickupAvailable: true,
      notes: "Serves people experiencing homelessness in West LA. Can coordinate pickup for larger donations.",
      contact: "Call to coordinate donation pickup"
    },
    {
      id: "7",
      name: "Westside Food Bank",
      area: "Santa Monica",
      address: "1710 22nd Street, Santa Monica, CA 90404",
      phone: "(310) 828-6016",
      website: "https://www.wsfb.org",
      commonDistributions: ["All food types", "Produce", "Frozen foods", "Shelf-stable goods"],
      acceptsDonations: true,
      pickupAvailable: true,
      notes: "Primary food bank for West LA. Accepts large donations from grocery stores and restaurants. Has 'Extra Helpings' program for food recovery.",
      contact: "Call (310) 828-6016 Ext. 20 for donation coordination"
    },
    {
      id: "1",
      name: "UCLA CPO Basic & Essential Needs Collective",
      area: "UCLA/Westwood",
      address: "220 Westwood Plaza, Suite 105, Los Angeles, CA 90095",
      phone: "(310) 825-9090",
      email: "foodcloset@cpo.ucla.edu",
      website: "https://cpo.ucla.edu",
      commonDistributions: ["Fresh produce", "Non-perishables", "Frozen foods", "Hygiene products"],
      acceptsDonations: true,
      pickupAvailable: false,
      notes: "Serves UCLA students experiencing food insecurity. Accepts donations of unopened, non-expired food items.",
      contact: "Email foodcloset@cpo.ucla.edu or call to arrange drop-off"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm dark:bg-gradient-dark transition-all duration-300">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Header */}
      <header className="bg-white/80 dark:bg-dark-card/80 backdrop-blur-sm border-b border-primary-200 dark:border-dark-elevated transition-colors duration-300">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 dark:text-dark-muted hover:text-gray-900 dark:hover:text-dark-text transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Back to Home</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fadeIn">
          <div className="text-6xl mb-4">💝</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-dark-text mb-4">
            Donate Food
          </h1>
          <p className="text-xl text-gray-600 dark:text-dark-muted max-w-2xl mx-auto">
            Your donation helps feed neighbors in need. Whether you're a family with extra groceries or a business with surplus food, every contribution matters.
          </p>
        </div>

        {/* Main CTA - Chat Interface */}
        <div className="card mb-16 text-center bg-gradient-to-br from-primary-50 to-white dark:from-primary-900/20 dark:to-dark-card animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          <div className="text-5xl mb-4">🤝</div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-dark-text mb-3">
            Ready to Donate?
          </h2>
          <p className="text-lg text-gray-600 dark:text-dark-muted mb-6 max-w-xl mx-auto">
            Tell us what you have, and we'll connect you with organizations that need it most. Even a little goes a long way!
          </p>
          <button
            onClick={() => setIsChatOpen(true)}
            className="btn-primary text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
            Start Donation Process →
          </button>
          <p className="text-sm text-gray-500 mt-4">
            We support one-time and recurring donations • Food items only
          </p>
        </div>

        {/* What We Accept */}
        <div className="mb-16 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-6 text-center">What We Accept</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card text-center">
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-gray-900 dark:text-dark-text mb-2">Accepted</h3>
              <ul className="text-sm text-gray-600 dark:text-dark-muted space-y-1 text-left">
                <li>• Unopened packaged foods</li>
                <li>• Fresh produce (good quality)</li>
                <li>• Canned goods (undamaged)</li>
                <li>• Frozen foods (kept frozen)</li>
                <li>• Bakery items (fresh)</li>
                <li>• Dairy (before expiration)</li>
              </ul>
            </div>
            <div className="card text-center bg-red-50 dark:bg-red-900/20">
              <div className="text-4xl mb-3">❌</div>
              <h3 className="font-bold text-gray-900 dark:text-dark-text mb-2">Not Accepted</h3>
              <ul className="text-sm text-gray-600 dark:text-dark-muted space-y-1 text-left">
                <li>• Home-cooked meals</li>
                <li>• Expired food (>3 days)</li>
                <li>• Opened packages</li>
                <li>• Unlabeled items</li>
                <li>• Improperly stored food</li>
                <li>• Alcohol</li>
              </ul>
            </div>
            <div className="card text-center bg-blue-50 dark:bg-accent-900/20">
              <div className="text-4xl mb-3">💡</div>
              <h3 className="font-bold text-gray-900 dark:text-dark-text mb-2">Most Needed</h3>
              <ul className="text-sm text-gray-600 dark:text-dark-muted space-y-1 text-left">
                <li>• Protein (canned, frozen)</li>
                <li>• Fresh fruits & vegetables</li>
                <li>• Whole grains & pasta</li>
                <li>• Canned vegetables</li>
                <li>• Peanut butter</li>
                <li>• Baby food & formula</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Organizations */}
        <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-3 text-center">Featured Partner Organizations</h2>
          <p className="text-gray-600 dark:text-dark-muted text-center mb-8 max-w-2xl mx-auto">
            These organizations serve different areas of West LA and accept food donations. You can coordinate directly with them or use our chat to find the best match.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {featuredOrganizations.map((org) => (
              <div key={org.id} className="card hover:shadow-xl dark:hover:shadow-primary-500/30 transition-shadow">
                {/* Area Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-400 rounded-full text-sm font-medium">
                    📍 {org.area}
                  </span>
                  {org.pickupAvailable && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                      Pickup Available
                    </span>
                  )}
                </div>

                {/* Organization Name */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-dark-text mb-2">{org.name}</h3>
                <p className="text-sm text-gray-600 dark:text-dark-muted mb-4">{org.address}</p>

                {/* Common Distributions */}
                <div className="mb-4">
                  <div className="text-xs font-medium text-gray-500 dark:text-dark-muted mb-2">COMMONLY DISTRIBUTES:</div>
                  <div className="flex flex-wrap gap-1">
                    {org.commonDistributions.map((item, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 dark:bg-accent-900/30 text-blue-700 dark:text-accent-400 rounded text-xs">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Notes */}
                <div className="mb-4 p-3 bg-gray-50 dark:bg-dark-elevated/50 rounded text-sm text-gray-700 dark:text-dark-muted">
                  {org.notes}
                </div>

                {/* Contact Info */}
                <div className="border-t border-gray-200 dark:border-dark-elevated pt-4 space-y-2">
                  <div className="text-xs font-medium text-gray-500 dark:text-dark-muted mb-2">CONTACT:</div>
                  <a
                    href={`tel:${org.phone.replace(/[^\d]/g, '')}`}
                    className="flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {org.phone}
                  </a>
                  {org.email && (
                    <a
                      href={`mailto:${org.email}`}
                      className="flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      {org.email}
                    </a>
                  )}
                  {org.website && (
                    <a
                      href={org.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
                    >
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Visit Website
                    </a>
                  )}
                </div>

                {/* Contact Button */}
                <div className="mt-4">
                  <p className="text-xs text-gray-600 dark:text-dark-muted italic">{org.contact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 card bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-accent-900/20 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-text mb-4 text-center">Why Donate Food?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <h4 className="font-bold text-gray-900 dark:text-dark-text mb-1">Reduce Waste</h4>
              <p className="text-sm text-gray-600 dark:text-dark-muted">Keep good food out of landfills and help the environment</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">❤️</div>
              <h4 className="font-bold text-gray-900 dark:text-dark-text mb-1">Help Neighbors</h4>
              <p className="text-sm text-gray-600 dark:text-dark-muted">Directly support people in your community who need food</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">💪</div>
              <h4 className="font-bold text-gray-900 dark:text-dark-text mb-1">Make Impact</h4>
              <p className="text-sm text-gray-600 dark:text-dark-muted">Even small donations provide meals for families in need</p>
            </div>
          </div>
        </div>
      </main>

      {/* Donor Chat Modal */}
      <DonorChatModal 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  );
};

export default DonatePage;