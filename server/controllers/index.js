const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// const { authMiddleware } = require('../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
// router.route('/').post(createUser).put(authMiddleware);

// router.route('/login').post(login);

// router.route('/:u_id').get(authMiddleware, getSingleUser);


module.exports = router