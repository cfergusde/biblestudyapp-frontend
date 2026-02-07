// ============================================
// Environment Configuration Template
// ============================================
// Copy this file to create environment-specific configurations:
// - environment.prod.ts (for production)
// - environment.staging.ts (for staging)
// - environment.test.ts (for testing)
//
// NOTE: Production and staging files should NOT be committed to Git!

export const environment = {
  // Production flag
  production: false,

  // API Configuration
  apiUrl: 'https://your-api-url.com/api',  // CHANGE THIS!

  // Application Info
  appName: 'Bible Study App',
  version: '0.0.0',

  // Logging
  logLevel: 'info', // 'debug' | 'info' | 'warn' | 'error'

  // Feature Flags
  enableAnalytics: false,
  enableOfflineMode: false,
  enableAdvancedSearch: true,

  // Limits & Configuration
  maxUploadSize: 10485760, // 10MB in bytes
  maxNotesLength: 5000,
  sessionTimeout: 3600000, // 1 hour in milliseconds

  // External Services (if applicable)
  // firebaseConfig: {
  //   apiKey: 'your-api-key',
  //   authDomain: 'your-app.firebaseapp.com',
  //   projectId: 'your-project-id',
  //   storageBucket: 'your-app.appspot.com',
  //   messagingSenderId: '123456789',
  //   appId: '1:123456789:web:abcdef'
  // },

  // UI Configuration
  defaultTheme: 'light', // 'light' | 'dark' | 'auto'
  itemsPerPage: 20,
  autoSaveInterval: 30000, // 30 seconds
};