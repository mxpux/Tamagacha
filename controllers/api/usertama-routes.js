const router = require('express').Router();
const { UserTama, Tama, User } = require('../../models')

//TODO: IMPORT withAuth
//URL: <homeURL>/api/usertama

//ALL USER ALL TAMAS
//TODO: GET ROUTE
router.get('/', async (req, res) => {
  console.log('hehehhehehehehe')
  try {
    const dbUserData = await UserTama.findAll({
      include:[
        {model: User}
      ]
    });

    const data = dbUserData.map((user) => user.get({ plain : true}))
    res.status(200).json(data)
  }
  catch (err) {
    res.status(500).json(err)
  }
})
//ONE USER ALL TAMAS
//TODO: GET ROUTE

//ONE USER ONE TAMA
//TODO: GET ROUTE

//ONE USER ONE TAMA CHANGE STATS
//TODO: PUT ROUTE

//ONE USER NEW TAMA
//TODO: POST ROUTE


module.exports = router