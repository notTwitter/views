//Keep project wide constants here

// Frontend
export const IN_PRODUCTION = true
export const PRODUCTION_SERVER_DOMAIN = 'localhost'             //API Domain
export const PRODUCTION_SERVER_PORT = 80

// Backend
export const LOGIN_ROUTE = 'userHandling/loginUser'
export const REGISTER_ROUTE = 'userHandling/createUser'
export const CHECK_AUTH_ROUTE = 'userHandling/checkAuth'
export const POST_TWEET_ROUTE = 'postHandling/createPost'
export const GET_TWEETS_ROUTE = 'postHandling/getHomePosts'
// API Proxy
export const SERVER = `${
    IN_PRODUCTION
        ? `http://${PRODUCTION_SERVER_DOMAIN}:${PRODUCTION_SERVER_PORT}`
        : null
}`


//Front-end project constants
export const SIDEMENU_BREAK_POINT = 1024     //in px
export const SMALL_SIDEMENU_WIDTH = 70      //in px
export const MOBILE_BREAK_POINT = 500
export const TABLET_BREAK_POINT = SIDEMENU_BREAK_POINT
