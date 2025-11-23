/**
 * API Service for FoodLink LA
 * Handles all communication with the backend
 */

import axios from 'axios';

// Base URL - update this if deploying
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor for debugging
api.interceptors.request.use(
  (config) => {
    console.log('📤 API Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => {
    console.error('❌ API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  (response) => {
    console.log('📥 API Response:', response.status, response.config.url);
    return response;
  },
  (error) => {
    console.error('❌ API Response Error:', error.response?.status, error.message);
    return Promise.reject(error);
  }
);

/**
 * Generate a unique session ID
 */
export const generateSessionId = () => {
  return `session-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

/**
 * Health Check
 */
export const healthCheck = async () => {
  try {
    const response = await api.get('/health');
    return response.data;
  } catch (error) {
    console.error('Health check failed:', error);
    throw error;
  }
};

/**
 * Chat with AI Agent
 */
export const sendChatMessage = async ({
  sessionId,
  message,
  agentType = 'recipient',
  location = null,
}) => {
  try {
    const response = await api.post('/api/chat', {
      session_id: sessionId,
      message,
      agent_type: agentType,
      location,
    });
    return response.data;
  } catch (error) {
    console.error('Chat message failed:', error);
    throw error;
  }
};

/**
 * Get Food Resources
 */
export const getResources = async ({
  lat = null,
  lon = null,
  locationText = null,
  maxDistanceMiles = 5.0,
  dietaryNeeds = null,
  openNow = false,
  limit = 10,
} = {}) => {
  try {
    const params = {
      max_distance_miles: maxDistanceMiles,
      open_now: openNow,
      limit,
    };

    if (lat && lon) {
      params.lat = lat;
      params.lon = lon;
    }

    if (locationText) {
      params.location_text = locationText;
    }

    if (dietaryNeeds && dietaryNeeds.length > 0) {
      params.dietary_needs = Array.isArray(dietaryNeeds) 
        ? dietaryNeeds.join(',') 
        : dietaryNeeds;
    }

    const response = await api.get('/api/resources', { params });
    return response.data;
  } catch (error) {
    console.error('Get resources failed:', error);
    throw error;
  }
};

/**
 * Get Single Resource by ID
 */
export const getResourceById = async (resourceId) => {
  try {
    const response = await api.get(`/api/resources/${resourceId}`);
    return response.data;
  } catch (error) {
    console.error('Get resource by ID failed:', error);
    throw error;
  }
};

/**
 * Get User's Location (using browser geolocation)
 */
export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  });
};

export default api;
