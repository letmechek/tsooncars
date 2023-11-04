const BabyCategory = require('../../models/babyCategory')
module.exports = {
    index,
   
}

async function index(req, res) {
    const babyProducts = await BabyCategory.find({})
    console.log(babyProducts)
    res.json(babyProducts)
}

