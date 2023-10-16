const Order = require('../../models/order');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


module.exports = {
  cart,
  addToCart,
  setItemQtyInCart,
  checkout,
};

// A cart is the unpaid order for a user
async function cart(req, res) {
  const cart = await Order.getCart(req.user._id)
  res.json(cart)
}

async function addToCart(req, res) {
  const cart = await Order.getCart(req.user._id)
  await cart.addItemToCart(req.params.id)
  res.json(cart)
}

async function setItemQtyInCart(req, res) {
  const cart = await Order.getCart(req.user._id)
  await cart.setItemQty(req.body.vehicleId, req.body.newQty)
  res.json(cart)
}

async function checkout(req, res) {
  try {
    const { orderId } = req.params;

    // Use the `findOne` method to find the order by its unique ID
    const order = await Order.findOne(req.body.orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const orderTotalCents = order.orderTotal * 100; 

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Total',
            },
            unit_amount: orderTotalCents, 
          },
          quantity: order.totalQty, 
        },
      ],
      mode: 'payment',
      success_url: 'https://tsooncars-e2376d515cb8.herokuapp.com/success',
      cancel_url: 'https://tsooncars-e2376d515cb8.herokuapp.com/cancel',
    });

  res.json({ sessionUrl: session.url });
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to create session');
  }



  // const cart = await Order.getCart(req.user._id)
  // cart.isPaid = true
  // await cart.save()
  // res.json(cart)
}
