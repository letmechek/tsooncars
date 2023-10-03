import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as vehiclesAPI from '../../utilities/vehicles-api';
import { Carousel } from 'react-responsive-carousel';
import first from '../../Assets/images/first.webp'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function VehicleDetail() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    async function fetchVehicle() {
      try {
        const response = await vehiclesAPI.getById(id);
        setVehicle(response);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVehicle();
  }, [id]);

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  return (
    <div>

    <div className="bg-white p-8 flex flex-col md:flex-row items-stretch ">
      <div className="w-full md:w-2/5 rounded-xl overflow-hidden">
        <Carousel showThumbs={false}>
          {vehicle.image.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={`${vehicle.name} - Image ${index + 1}`}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="md:ml-8 flex-1 ">
        <h2 className="text-4xl font-semibold text-center md:text-left mt-4">{vehicle.name}</h2>
        <p className="text-green-700 font-bold text-2xl text-center md:text-left mt-4">${vehicle.price}</p>
        <p className="mt-4">{vehicle.description}</p>
        <button className="bg-green-700 text-white font-bold py-2 px-4 rounded mt-4">Rent Now</button>
      </div>
    </div>
    <div className='flex flex-col md:flex-row p-4 shadow-md mx-auto max-w-6xl '>
  <img src={first} alt='firstImage' className="w-full md:w-1/2 object-cover rounded-l-lg" />
  <div className='w-full md:w-1/2 bg-custom-blue text-gray-200 p-24 mx-auto max-w-4xl rounded-r-lg'>
    <h1 className="text-7xl font-semibold pb-6">First Class Service</h1>
        <p className='text-3xl'>We really appreciate your time and make the entire process of renting an exotic car hassle-free. You can decide on the car you want and rent it in just a few minutes.</p>
        <div className='bg-red-500 p-4 rounded-full font-semibold text-2xl mt-4 text-center '>
        <a href='tel:+123456789' >Call Us Now</a>
        </div>
      </div>
    </div>
    </div>
  );
}
          
