const VehicleModel = require('../../models/vehicleCategory')
module.exports = {
    index,
   
}

async function index(req, res) {
    const vehicles = await VehicleModel.find({})
    // vehicles.sort((a, b) => a.VehicleModel.sortOrder - b.VehicleModel.sortOrder)
    console.log(vehicles)
    res.json(vehicles)
}

