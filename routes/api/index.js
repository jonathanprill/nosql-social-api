const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');


// add prefix of `/thoughts` to routes created in `thought-routes.js`
router.use('/thoughts', thoughtRoutes);

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);



module.exports = router;