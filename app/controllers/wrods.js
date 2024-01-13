const { getAllWrods, getWrods, createWrods } = require('../services/wrods')

module.exports = {
    listWrods: async (req, res) => {
        try {
            const wrods = await getAllWrods()
            res.json(wrods)
        }
        catch (err) {
            res.status(500).send(err)
        }
    },
    getWrods: async (req, res) => {
        try {
            const id = req.params.id
            const wrods = await getWrods(id)
            res.json(wrods)
        }
        catch (err) {
            res.status(500).send(err)
        }
    },
    createWrods: async (req, res) => {
        try {
            const { name,difficulty } = req.body
            const newWrods = await createWrods(name, difficulty)
            res.json(newWrods)
        }
        catch (err) {
            res.status(500).send(err)
        }
    }

}