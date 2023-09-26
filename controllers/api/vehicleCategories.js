const vehicleCategories = require('../../models/vehicleCategory')

module.exports = {
    index,
}

async function index(req, res){
    try {
      const vehicleModels = await vehicleCategories.find();
      console.log(vehicleModels);
      res.json(vehicleModels);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
}
