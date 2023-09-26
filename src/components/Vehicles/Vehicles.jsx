import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
    <h2 className="text-2xl font-semibold mb-4">Vehicles under {name}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {vehicles.map((vehicle) => (
        <div key={vehicle._id} className="bg-white p-4 m-4 shadow-xl rounded-lg">
          <img
            src={vehicle.image[0]}
            alt={vehicle.name}
            className="h-40 w-40 object-cover rounded-lg" 
          />
          <div className='h-16 '>
          <h2 className="text-lg  mt-2 overflow-hidden">{vehicle.name}</h2>
          </div>
          <div className='flex items-center justify-between mt-4'>
          <p className=" text-green-700 font-bold ">${vehicle.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}
