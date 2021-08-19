const router = require('express').Router();

const userRoutes = require('./user-routes');
const tamaRoutes = require('./tamagachi');
const userTamaRoutes = require('./usertama-routes');

router.use('/user', userRoutes);
router.use('/tama', tamaRoutes);
router.user('/usertama', userTamaRoutes);

module.exports = router