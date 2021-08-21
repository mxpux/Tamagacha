const router = require('express').Router();
const { Tama } = require('../../models')
// const withAuth = require('../utils/auth');


//TODO: IMPORT withAuth
//URL: <homeURL>/api/tama



//GET ALL TAMAS
//TODO: GET ROUTE
router.get('/', async (req, res) => {
    try {
        // Get the tamas for the current user
        const tamaData = await Tama.findAll({});
        const tamas = tamaData.map((tama) =>
            tama.get({ plain: true })
        );
        res.status(200).json(tamas)
    }
    catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router