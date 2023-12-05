const Vehicle = require('../../models/vehicle')
module.exports = {
    index,
    show,
    getVehiclesByModel
}

async function index(req, res) {
    const vehicles = await Vehicle.find({}).sort('name').populate('VehicleModel').exec()
    vehicles.sort((a, b) => a.VehicleModel.sortOrder - b.VehicleModel.sortOrder)
    console.log(vehicles)
    res.json(vehicles)
}


async function getVehiclesByModel(req, res) {

  try {
    const vehicles = await Vehicle.find({
        VehicleModel: {_id: req.params.modelId}
        });
    res.status(200).json(vehicles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

async function show(req, res) {
    const vehicle = await Vehicle.findById(req.params.id)
    res.json(vehicle)
}