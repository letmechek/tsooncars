import React from 'react';
import { useParams, Link } from 'react-router-dom';
import * as vehiclesAPI from '../../utilities/vehicles-api';

export default function Vehicles({ vehicleItem}) {
  const { name, categoryName } = useParams(); 


  return (
    <div>
  <div className="bg-gray-200 p-12 ">
    <h2 className="text-4xl font-extrabold text-black">{vehicleItem.name.toUpperCase()}</h2>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 mx-auto max-w-6xl ">
    {/* {vehicleItem.map((vehicle) => ( */}
      <Link
        to={`/brands/${vehicleItem._id}`} // Link to the vehicle's ID
        // key={vehicle._id}
        className=" bg-white p-4 m-4 shadow-xl rounded-lg hover:shadow-2xl flex flex-col items-center justify-between"
      >
        <img
          src={vehicleItem.image[0]}
          alt={vehicleItem.name}
          className="h-40 w-full object-cover rounded-lg hover:scale-105"
        />
        <div className="h-18 text-center ">
          <h2 className="text-lg mt-2 overflow-hidden">{vehicleItem.name}</h2>
        </div>
        <div className="mt-4">
          <p className="text-green-700 font-bold">${vehicleItem.price}</p>
        </div>
      </Link>
    {/* ))} */}
  </div>
</div>
  );
}
