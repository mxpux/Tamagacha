const router = require('express').Router();
const { Tama } = require('../../models')
const { authMiddleware } = require('../../utils/auth')

//URL: <homeURL>/api/tama

//GET ALL TAMAS
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

//GET ONE TAMA
router.get('/:id', async (req, res) => {
    try {
        const tamaData = await Tama.findByPk(req.params.id);
        const tama = tamaData.get({ plain: true });
        res.status(200).json(tama)
    }
    catch (err) {
        res.status(500).json(err);
    }
});

//ADD A TAMA
router.post('/add', async (req, res) => {
    console.log("body", req.body)
    try {
        const tamaData = await Tama.create({
            name: req.body.name,
            description: req.body.description,
            pictures: req.body.pictures
        })
        res.status(200).json(tamaData);
    }
    catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router