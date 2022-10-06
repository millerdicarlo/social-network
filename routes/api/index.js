// connecting routes to the server 
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

// add prefix 
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);


module.exports = router;