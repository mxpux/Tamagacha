const router = require('express').Router();
const { User } = require('../../models')
const {signToken, withAuth} = require('../../utils/auth'); //signToken subject to change possibly
//TODO: IMPORT withAuth
//URL: <homeURL>/api/user


//GET ALL USERS
router.get('/', async (req, res) => {
  try {
    const dbUserData = await User.findAll({});
    const userData = dbUserData.map((user) => user.get({ plain : true}))
    res.status(200).json(userData);
    // res.status(200).json({message: "test passed"})

  } catch (err) {
    res.status(500).json(err)
  }
});

//GET ONE USER
router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id);
    const user = userData.get({ plain: true })
    res.status(200).json(user);
    // res.status(200).json({message: "test passed"})

  } catch (err) {
    res.status(500).json(err)
  }
});
//CREATE NEW USER
// SIGNUP
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
    const token = signToken(userData)

    return {token, userData}; 

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//LOGIN
router.post('/login', withAuth, async (req, res) => {
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

    const token = signToken(userData);
    return {token, userData};

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//LOGOUT
router.post('/logout', async (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
})

//DELETE A USER
router.delete('/:id', async (req, res) => {
  try {
    const dbUserData = await User.destroy({
      where: {
        id: req.params.id
      },
    });

    if (!dbUserData) {
      res.status(404).json({ message: "No user found with that id! "});
      return
    }

    res.status(200).json({dbUserData, message: "User deleted!"});
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }
})

module.exports = router