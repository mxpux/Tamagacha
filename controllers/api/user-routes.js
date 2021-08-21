const router = require('express').Router();
const { endsWith } = require('sequelize/types/lib/operators');
const { User } = require('../../models')
//TODO: IMPORT withAuth
//URL: <homeURL>/api/user


//GET ALL USERS
//TODO: TEST
router.get('/', async (req, res) => {
  try {
    // const dbUserData = await User.findAll({});
    // const userData = dbUserData.map((user) => user.get({ plain : true}))
    // res.status(200).json(dbUserData);
    res.status(200).json({message: "test passed"})

  } catch (err) {
    res.status(500).json(err)
  }
});

//GET ONE USER
//TODO: TEST
router.get('/:id', async (req, res) => {
  try {
    // const userData = await User.findByPk(req.params.id);
    
    // res.status(200).json(userData);
    res.status(200).json({message: "test passed"})

  } catch (err) {
    res.status(500).json(err)
  }
});
//CREATE NEW USER
// SIGNUP
//TODO: TEST
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = req.body.username;

      res.status(200).json(userData);
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//LOGIN
//TODO: TEST
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (!userData) {
      res.status(400).json({ message: "Incorrect email/password.  Please try again!" });
      return;
    };

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "Incorrect email/password.  Please try again!" });
      return;
    };

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = req.body.username;
      res.status(200).json({ user: userData, message: "You are now logged in!" })
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//LOGOUT
//TODO: TEST
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
})

//DELETE A USER
//TODO: DELETE ROUTE


module.exports = router