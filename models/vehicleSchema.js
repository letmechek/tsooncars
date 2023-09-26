const Schema = require('mongoose').Schema;



const vehicleSchema = new Schema({
  name: { type: String, required: true },
  image: [{ type: String, required: true }],
  VehicleModel: {type: Schema.Types.ObjectId, ref: 'vehicleCategories'},
  price: { type: Number, required: true, default: 0 },
  
}, {
  timestamps: true
});

module.exports = vehicleSchema;

