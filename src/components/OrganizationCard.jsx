/**
 * Organization Card Component
 * Displays organization details for donors
 */

import React from 'react';

const OrganizationCard = ({ organization }) => {
  const {
    name,
    address,
    phone,
    email,
    website,
    commonDistributions,
    pickupAvailable,
    notes,
    contact,
    area
  } = organization;

  // Format phone number for tel: link
  const phoneLink = phone?.replace(/[^\d]/g, '');

  return (
    <div className="card bg-white dark:bg-dark-card">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-bold text-lg text-gray-900 dark:text-dark-text mb-1">{name}</h4>
          {area && (
            <span className="inline-block px-2 py-1 bg-blue-100 dark:bg-accent-900/30 text-blue-700 dark:text-accent-400 rounded text-xs font-medium mb-2">
              📍 {area}
            </span>
          )}
          <p className="text-sm text-gray-600 dark:text-dark-muted">{address}</p>
        </div>
        {pickupAvailable && (
          <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
            Pickup Available
          </div>
        )}
      </div>

      {/* Common Distributions */}
      {commonDistributions && commonDistributions.length > 0 && (
        <div className="mb-3">
          <div className="text-xs font-medium text-gray-500 dark:text-dark-muted mb-1">THEY DISTRIBUTE:</div>
          <div className="flex flex-wrap gap-1">
            {commonDistributions.map((item, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Notes */}
      {notes && (
        <div className="mb-3 p-3 bg-gray-50 dark:bg-dark-elevated/50 rounded text-sm text-gray-700 dark:text-dark-muted">
          {notes}
        </div>
      )}

      {/* Contact Info */}
      <div className="border-t border-gray-200 dark:border-dark-elevated pt-3 space-y-2">
        <div className="text-xs font-medium text-gray-500 dark:text-dark-muted mb-2">CONTACT TO COORDINATE:</div>
        
        {phone && (
          <a
            href={`tel:${phoneLink}`}
            className="flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {phone}
          </a>
        )}

        {email && (
          <a
            href={`mailto:${email}`}
            className="flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {email}
          </a>
        )}

        {website && (
          <a
            href={website}
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

        {contact && (
          <div className="mt-2 p-2 bg-blue-50 dark:bg-accent-900/20 rounded">
            <p className="text-xs text-gray-700 dark:text-dark-muted">
              <span className="font-medium">💡 Next Step:</span> {contact}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganizationCard;