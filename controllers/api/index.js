const router = require('express').Router();

const userRoutes = require('./user-routes');
const tamaRoutes = require('./tamagachi');

router.use('/user', userRoutes);
router.use('/tama', tamaRoutes);

module.exports = router