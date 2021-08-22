const router = require('express').Router();
const { UserTama,  Tama, User} = require('../../models')
//TODO: IMPORT withAuth
//URL: <homeURL>/api/usertama

//ALL USER ALL TAMAS
router.get('/', async (req, res) => {
  try {
    const dbUserTamaData = await User.findAll({
      include:
      [
        {all: true, nested: true},
        // { as: "usertama", model: Tama },
      ]
    })

    const UserTamaData = dbUserTamaData.map((usertama) => usertama.get({ plain: true }))

    res.status(200).json(UserTamaData)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})
//ONE USER ALL TAMAS
router.get('/:u_id', async (req, res) => {
  try {
    const dbUserTamaData = await User.findByPk(req.params.u_id, {
      include:
      [
        {all: true, nested: true}
        // { as: "usertama", model: Tama },
      ]
    })

    if (!dbUserTamaData) {
      res.status(404).json({ message: `No user with this ${req.params.u_id} id !`})
    };

    const UserTamaData = dbUserTamaData.get({ plain: true })

    res.status(200).json(UserTamaData)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})
//ONE USER ONE TAMA
router.get('/:u_id/:t_id', async (req, res) => {
  try {
    const dbUserTamaData = await User.findByPk(req.params.u_id, {
      include:
      [
        // {all: true, nested: true},
        { as: "usertama", model: Tama, where: {id: req.params.t_id} },
      ]
    })

    if (!dbUserTamaData) {
      res.status(404).json({ message: `No user or tama with user id of ${req.params.u_id} or tama id of ${req.params.t_id}!`})
    };

    const UserTamaData = dbUserTamaData.get({ plain: true })

    res.status(200).json(UserTamaData)

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//ONE USER ONE TAMA CHANGE STATS
//TODO: TEST
router.put('/:u_id/:t_id', async (req, res) => {
  try{
    const dbUserTamaData = await UserTama.update(
      {
        age: req.body.age,
        hunger: req.body.hunger,
        happiness: req.body.happiness,
        bladder: req.body.bladder,
        date_modified: req.body.date_modified,
        status: req.body.status
      }, {
        where: {
          user_id: req.params.u_id,
          tama_id: req.params.t_id
        }
      }
    );
    
    if (!dbUserTamaData) {
      res.status(404).json({ message: "No user or tama with these IDs! (/u_id/t_id) or where clause is not working"})
    };

    res.status(200).json({dbUserTamaData, message: "Tama stats changed!"});

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})
//ONE USER NEW TAMA
//TODO: POST ROUTE


module.exports = router