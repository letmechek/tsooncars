import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as vehiclesAPI from '../../utilities/vehicles-api';
import { Carousel } from 'react-responsive-carousel';
import first from '../../Assets/images/first.webp'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import * as ordersAPI from '../../utilities/orders-api';
import Loader from '../Loader/Loader';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

export default function VehicleDetail({user}) {
  const [cart, setCart] = useState(null)
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  let navigate = useNavigate();
  const location = useLocation();

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
    return <div><Loader /></div>
  }

  async function handleAddToOrder(id) {
    if(user){

      const updatedCart = await ordersAPI.addItemToCart(id)
      alert('Your order has been added to the cart')
      setCart(updatedCart)
      navigate('/cart')
    }else{
      navigate('/login', { state: { from: location } });
    }
  }

  return (
<>
<Link
      to="#"
      onClick={() => navigate(-1)}
      className=" hover:underline mb-2 inline-flex items-center p-2"
    >
      <ChevronLeftIcon className="h-6 w-6" /> Back
 </Link>
  <div className="bg-white p-8 flex flex-col md:flex-row items-center mx-auto max-w-6xl">
    <div className="w-full md:w-3/5 rounded-xl overflow-hidden">
      <Carousel showThumbs={false}>
        {vehicle.image.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`${vehicle.name} `}
              className="h-auto w-full object-cover"
            />
          </div>
        ))}
      </Carousel>
    </div>
    <div className="md:ml-8 flex-1">
      <h2 className="text-4xl font-semibold text-center md:text-left mt-4 text-gray-800">{vehicle.name}</h2>
      <p className="text-green-700 font-bold text-2xl text-center md:text-left mt-4">${vehicle.price}</p>
      <p className="text-gray-600 mt-4 text-lg">{vehicle.description}</p>
      <button onClick={() => handleAddToOrder(id)} className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded mt-6 md:mt-4">
        Rent Now
      </button>
    </div>
  </div>
 
  <div className='flex flex-col md:flex-row p-4 mx-auto max-w-6xl '>
    <img src={first} alt='firstImage' className="w-full md:w-1/2 object-cover rounded-l-lg" />
    <div className='w-full md:w-1/2 bg-custom-blue text-gray-200 p-4 md:p-24 mx-auto max-w-4xl rounded-r-lg '>
      <h1 className="text-4xl md:text-7xl font-semibold pb-6">First Class Service</h1>
      <p className='text-3xl whitespace-normal md:whitespace-pre-line max-w-full'>We really appreciate your time and make the entire process of renting an exotic car hassle-free. You can decide on the car you want and rent it in just a few minutes.</p>
      <div className='bg-red-500 p-4 rounded-full font-semibold text-2xl mt-4 text-center '>
        <a href='tel:+123456789' >Call Us Now</a>
      </div>
    </div>
  </div>
</>
  );
}
          

