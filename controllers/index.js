const router = require('express').Router();

const apiRoutes = require('./api/');
const homepageRoutes = require('./homepage-routes.js');
const userDashRoutes = require('./userdash-routes.js');

router.use('/', homepageRoutes);
router.use('/dashboard', userDashRoutes);
router.use('/api', apiRoutes);

module.exports = router;