import React, { useState } from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

function OrderDetail() {
  // Dummy cart data
  const cartItems = [
    {
      id: 1,
      name: 'Iphone 6S',
      brand: 'Apple',
      quantity: 1,
      price: 400.0,
    },
    {
      id: 2,
      name: 'Xiaomi Mi 20000mAh',
      brand: 'Xiaomi',
      quantity: 1,
      price: 40.0,
    },
    {
      id: 3,
      name: 'Airpods',
      brand: 'Apple',
      quantity: 1,
      price: 150.0,
    },
  ];

  const [hasItems, setHasItems] = useState(cartItems.length > 0);

  return (
    <div className="container mx-auto mt-10">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{cartItems.length} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Total</h3>
          </div>
          {hasItems ? (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                {/* Product details */}
                <div className="flex w-2/5">
                  <div className="w-20">
                    <img className="h-24" src={`https://drive.google.com/uc?id=${item.id}`} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 flex-grow">
                    <span className="font-bold text-sm">{item.name}</span>
                    <span className="text-red-500 text-xs">{item.brand}</span>
                    <a href="#" className="font-semibold hover:text-red-500 text-gray-500 text-xs">
                      Remove
                    </a>
                  </div>
                </div>
                {/* Quantity */}
                <div className="flex justify-center w-1/5">
                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    {/* Quantity decrease icon */}
                  </svg>
                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={item.quantity}
                    readOnly
                  />
                  <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                    {/* Quantity increase icon */}
                  </svg>
                </div>
                {/* Price */}
                <span className="text-center w-1/5 font-semibold text-sm">${item.price.toFixed(2)}</span>
                {/* Total */}
                <span className="text-center w-1/5 font-semibold text-sm">${(item.quantity * item.price).toFixed(2)}</span>
              </div>
            ))
          ) : (
            <p className="text-center py-5">No items in the cart. <a href="#">Continue shopping</a></p>
          )}
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          {hasItems && (
            <>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">Items {cartItems.length}</span>
                <span className="font-semibold text-sm">
                  ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
                </span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-10">
                <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">
                  Promo Code
                </label>
                <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
              </div>
              <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>
                    $
                    {cartItems
                      .reduce((total, item) => total + item.price * item.quantity, 0)
                      .toFixed(2)}
                  </span>
                </div>
                <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;