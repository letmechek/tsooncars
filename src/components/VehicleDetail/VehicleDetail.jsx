import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as vehiclesAPI from '../../utilities/vehicles-api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function VehicleDetail() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    async function fetchVehicle() {
      try {
        const response = await vehiclesAPI.getById(id);
        setVehicle(response);
        console.log(response);
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
    <div className="bg-white p-8  ">
      <div className="relative">
        <Slider {...settings}>
          {vehicle.image.map((image, index) => (
            <div key={index} className="h-100">
              <img
                src={image}
                alt={`${vehicle.name} - Image ${index + 1}`}
                className="object-cover h-100 w-80 rounded-lg shadow-xl"
              />
            </div>
          ))}
        </Slider>
      </div>
      <h2 className="text-2xl font-semibold text-center mt-4">{vehicle.name}</h2>
      <p className="text-green-700 font-bold text-2xl text-center mt-4">${vehicle.price}</p>
      <p className="mt-4">{vehicle.description}</p>
    </div>
  );
}
