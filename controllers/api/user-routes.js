const router = require('express').Router();
const { User } = require('../../models')
//TODO: IMPORT withAuth
//URL: <homeURL>/api/user


//GET ALL USERS
router.get('/', async (req, res) => {
  try {
    // console.log(req);
    console.log(User);
    const dbUserData = await User.findAll({});
    // console.log(dbUserData);
    // const userData = dbUserData.map((user) => user.get({ plain : true}))
    // console.log(userData);
    // res.status(200).json(dbUserData);
    res.status(200).json({message: "test passed"})

  } catch (err) {
    res.status(500).json(err)
  }
});

//GET ONE USER
//TODO: GET ROUTE

//CREATE NEW USER
// SIGNUP
//TODO: POST ROUTE

//LOGIN
//TODO: POST ROUTE

//LOGOUT
//TODO: POST ROUTE

//DELETE A USER
//TODO: DELETE ROUTE


module.exports = router