const router = require('express').Router();
const { UserTama } = require('../../models')
//TODO: IMPORT withAuth
//URL: <homeURL>/api/usertama

//ALL USER ALL TAMAS
//TODO: GET ROUTE

//ONE USER ALL TAMAS
//TODO: GET ROUTE

//ONE USER ONE TAMA
//TODO: GET ROUTE

//ONE USER ONE TAMA CHANGE STATS
//TODO: TEST
router.put('/:u_id/t_id', async (req, res) => {
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