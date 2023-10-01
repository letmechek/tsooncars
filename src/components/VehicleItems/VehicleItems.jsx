import React from 'react';
import { Link } from 'react-router-dom';

export default function VehicleItems({ vehicleItem }) {
  return (
    <div className="bg-white p-4 m-4 shadow-xl rounded-lg hover:shadow-2xl flex flex-col items-center justify-between">
      <Link
        to={`/${vehicleItem.VehicleModel.name}/${vehicleItem._id}`}
        className=""
      >
        <img
          src={vehicleItem.image[0]}
          alt={vehicleItem.name}
          className="h-40 w-full object-cover rounded-lg hover:scale-105 transition-transform duration-100 ease-in-out"
        />
        <div className="h-18 text-center">
          <h2 className="text-lg mt-2 overflow-hidden">{vehicleItem.name}</h2>
        </div>
        <div className="mt-4">
          <p className="text-green-700 font-bold">${vehicleItem.price}</p>
        </div>
      </Link>
    </div>
  );
}
