//Keep project wide constants here

// Production constants
export const IN_PRODUCTION = true
export const PRODUCTION_SERVER_DOMAIN = 'localhost'
export const PRODUCTION_SERVER_PORT = 80

// Deployment constants [To be added]

// API Proxy
export const SERVER = `${
    IN_PRODUCTION
        ? `http://${PRODUCTION_SERVER_DOMAIN}:${PRODUCTION_SERVER_PORT}`
        : null
}`