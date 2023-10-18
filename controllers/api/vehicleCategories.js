const VehicleModel = require('../../models/vehicleCategory')
module.exports = {
    index,
   
}

async function index(req, res) {
    const vehicles = await VehicleModel.find({})
    console.log(vehicles)
    res.json(vehicles)
}

