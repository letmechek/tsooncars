const Vehicle = require('../../models/vehicle')

module.exports = {
    index,
    show
}

async function index(req, res) {
    const vehicles = await Vehicle.find({}).sort('name').populate('VehicleModel').exec()
    vehicles.sort((a, b) => a.VehicleModel.sortOrder - b.VehicleModel.sortOrder)
    res.json(vehicles)
}

async function show(req, res) {
    const vehicle = await Vehicle.findById(req.params.id)
    res.json(vehicle)
}