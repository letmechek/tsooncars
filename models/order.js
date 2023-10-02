const mongoose = require('mongoose')
const Schema = mongoose.Schema
const vehicleSchema = require('./vehicleSchema')

const lineItemSchema = new Schema({
    qty: { type: Number, default: 1 },
    vehicle: vehicleSchema
}, {
    // timestamps: true,
    toJSON: { virtuals: true }
})

lineItemSchema.virtual('extPrice').get(function() {
    return this.qty * this.vehicle.price
})

const orderSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    lineItems: [lineItemSchema],
    isPaid: { type: Boolean, default: false }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

orderSchema.virtual('orderTotal').get(function() {
    return this.lineItems.reduce((total, vehicle) => total + vehicle.extPrice, 0)
})

orderSchema.virtual('totalQty').get(function() {
    return this.lineItems.reduce((total, vehicle) => total + vehicle.qty, 0)
})

orderSchema.virtual('orderId').get(function() {
    return this.id.slice(-6).toUpperCase()
})

orderSchema.statics.getCart = function(userId) {
    return this.findOneAndUpdate(
        { user: userId, isPaid: false },
        { user: userId },
        { upsert: true, new: true }
    )
}

orderSchema.methods.addItemToCart = async function(vehicleId) {
    const cart = this
    const lineItem = cart.lineItems.find(lineItem => lineItem.vehicle._id.equals(vehicleId))
    if(lineItem) {
        lineItem.qty += 1
    } else {
        const vehicle = await mongoose.model('Vehicle').findById(vehicleId)
        cart.lineItems.push({ vehicle })
    }
    return cart.save()
}

orderSchema.methods.setItemQty = function(vehicleId, newQty) {
    const cart = this
    const lineItem = cart.lineItems.find(lineItem => lineItem.vehicle._id.equals(vehicleId))
    if(lineItem && newQty <= 0) {
        lineItem.remove()
    } else if(lineItem){
        lineItem.qty = newQty
    }

    return cart.save()
}

module.exports = mongoose.model('Order', orderSchema)