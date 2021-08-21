const router = require('express').Router();
const { User } = require('../../models')
//TODO: IMPORT withAuth
//URL: <homeURL>/api/user


//GET ALL USERS
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
//TODO: GET ROUTE
router.get('/:id', async (req, res) => {
  try {
    // const dbUserData = await User.findByPk(req.params.id);
    
    // res.status(200).json(dbUserData);
    res.status(200).json({message: "test passed"})

  } catch (err) {
    res.status(500).json(err)
  }
});
//CREATE NEW USER
// SIGNUP
//TODO: POST ROUTE
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = req.body.username;

      res.status(200).json(dbUserData);
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//LOGIN
//TODO: POST ROUTE

//LOGOUT
//TODO: POST ROUTE

//DELETE A USER
//TODO: DELETE ROUTE


module.exports = router