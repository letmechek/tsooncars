import React from 'react'

export default function LineItem({lineItem, key, name}) {
  return (
    <div  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
      {/* Product details */}
      <div className="flex w-2/5">
        <div className="w-20">
          <img className="h-24" src={lineItem.vehicle.image[0]} alt="" />
        </div>
        <div className="flex flex-col justify-between ml-4 flex-grow">
          <span className="font-bold text-sm">{name}</span>
          {/* <span className="text-red-500 text-xs">{lineItem.brand}</span> */}
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
          // value={lineItem.quantity}
          readOnly
        />
        <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
          {/* Quantity increase icon */}
        </svg>
      </div>
      {/* Price */}
      {/* <span className="text-center w-1/5 font-semibold text-sm">${lineItem.price.toFixed(2)}</span> */}
      {/* Total */}
      {/* <span className="text-center w-1/5 font-semibold text-sm">${(lineItem.quantity * lineItem.price).toFixed(2)}</span> */}
    </div>
  );
}
