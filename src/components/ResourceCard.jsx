/**
 * Resource Card Component
 * Displays a single food resource with all relevant information
 */

import React from 'react';

const ResourceCard = ({ resource }) => {
  const {
    name,
    address,
    phone,
    distance_miles,
    is_open_now,
    hours,
    offerings,
    dietary_options,
    requirements,
    notes,
  } = resource;

  // Get today's hours
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const todayHours = hours?.[today];

  // Format phone number for tel: link
  const phoneLink = phone?.replace(/[^\d]/g, '');

  // Get Google Maps directions link
  const mapsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

  return (
    <div className="card">
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-bold text-lg text-gray-900 mb-1">{name}</h4>
          <p className="text-sm text-gray-600">{address}</p>
        </div>
        {is_open_now !== null && (
          <div
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              is_open_now
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}
          >
            {is_open_now ? '🟢 OPEN NOW' : '🔴 Closed'}
          </div>
        )}
      </div>

      {/* Distance */}
      {distance_miles && (
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{distance_miles} miles away</span>
          {distance_miles <= 1 && <span className="ml-2 text-green-600 font-medium">• Walking distance!</span>}
        </div>
      )}

      {/* Today's Hours */}
      {todayHours && todayHours.status === 'open' && (
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            Today: {todayHours.open} - {todayHours.close}
          </span>
        </div>
      )}

      {/* Offerings */}
      {offerings && offerings.length > 0 && (
        <div className="mb-3">
          <div className="text-xs font-medium text-gray-500 mb-1">OFFERINGS:</div>
          <div className="flex flex-wrap gap-1">
            {offerings.slice(0, 4).map((offering, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs"
              >
                {offering.replace(/-/g, ' ')}
              </span>
            ))}
            {offerings.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                +{offerings.length - 4} more
              </span>
            )}
          </div>
        </div>
      )}

      {/* Dietary Options */}
      {dietary_options && dietary_options.length > 0 && (
        <div className="mb-3">
          <div className="text-xs font-medium text-gray-500 mb-1">DIETARY OPTIONS:</div>
          <div className="flex flex-wrap gap-1">
            {dietary_options.map((option, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-green-50 text-green-700 rounded text-xs"
              >
                {option}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Requirements */}
      {requirements && requirements.toLowerCase() !== 'no restrictions' && (
        <div className="mb-3 p-2 bg-yellow-50 border border-yellow-200 rounded">
          <div className="flex items-start">
            <svg className="w-4 h-4 text-yellow-600 mr-1 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <div>
              <div className="text-xs font-medium text-yellow-800 mb-0.5">Requirements:</div>
              <div className="text-xs text-yellow-700">{requirements}</div>
            </div>
          </div>
        </div>
      )}

      {/* Notes */}
      {notes && (
        <div className="mb-3 text-sm text-gray-600 bg-gray-50 p-2 rounded">
          <div className="text-xs font-medium text-gray-500 mb-1">NOTE:</div>
          {notes.length > 150 ? `${notes.substring(0, 150)}...` : notes}
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-2 pt-3 border-t border-gray-200">
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary flex-1 text-center text-sm"
        >
          <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
          </svg>
          Directions
        </a>
        {phone && (
          <a
            href={`tel:${phoneLink}`}
            className="btn-secondary flex-1 text-center text-sm"
          >
            <svg className="w-4 h-4 inline mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call
          </a>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
