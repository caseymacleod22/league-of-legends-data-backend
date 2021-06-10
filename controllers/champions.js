const Champion = require('../models/champion')

async function index(req, res) {
    try {
        const champions = await Champion.find({})
        res.status(200).json(champions)
    } catch (error) {
        console.log(error)
        res.status(400).json({errors: 'something went wrong'})
    }
}

async function create(req, res) {
    try {
        const champion = await Champion.create(req.body)
        res.status(201).json(champion)
    } catch (error) {
        res.status(401).json({error: 'something went wrong'})
    }
}

module.exports = {
    index,
    create,
}