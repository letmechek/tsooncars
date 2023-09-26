import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as vehiclesAPI from '../../utilities/vehicles-api';

export default function Vehicles() {
  const { name, categoryName } = useParams(); 
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    async function fetchVehicles() {
      try {
        const response = await vehiclesAPI.getAll(categoryName);
        setVehicles(response); 
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVehicles(); 
  }, [categoryName]);

  return (
    <div>
  <div className="bg-gray-200 p-12 ">
    <h2 className="text-4xl font-extrabold text-black">{name.toUpperCase()}</h2>
  </div>
  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 mx-auto max-w-6xl ">
    {vehicles.map((vehicle) => (
      <Link
        to={`/${name}/${vehicle._id}`} // Link to the vehicle's ID
        key={vehicle._id}
        className=" bg-white p-4 m-4 shadow-xl rounded-lg hover:shadow-2xl flex flex-col items-center justify-between"
      >
        <img
          src={vehicle.image[0]}
          alt={vehicle.name}
          className="h-40 w-full object-cover rounded-lg hover:scale-105"
        />
        <div className="h-18 text-center ">
          <h2 className="text-lg mt-2 overflow-hidden">{vehicle.name}</h2>
        </div>
        <div className="mt-4">
          <p className="text-green-700 font-bold">${vehicle.price}</p>
        </div>
      </Link>
    ))}
  </div>
</div>
  );
}
