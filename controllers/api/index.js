const router = require('express').Router();

const userRoutes = require('./user-routes');
const tamaRoutes = require('./tama-routes');
const userTamaRoutes = require('./usertama-routes');

router.use('/user', userRoutes);
router.use('/tama', tamaRoutes);
router.use('/usertama', userTamaRoutes);

module.exports = router