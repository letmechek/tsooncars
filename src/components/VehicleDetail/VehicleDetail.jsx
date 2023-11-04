import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as vehiclesAPI from "../../utilities/baby-products-api";
import { Carousel } from "react-responsive-carousel";
import first from "../../Assets/images/first.webp";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import * as ordersAPI from "../../utilities/orders-api";
import Loader from "../Loader/Loader";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

export default function VehicleDetail({ user }) {
  const [cart, setCart] = useState(null);
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
    return (
      <div>
        <Loader />
      </div>
    );
  }

  async function handleAddToOrder(id) {
    if (user) {
      const updatedCart = await ordersAPI.addItemToCart(id);
      alert("Your order has been added to the cart");
      setCart(updatedCart);
      navigate("/cart");
    } else {
      navigate("/login", { state: { from: location } });
    }
  }

  return (
    <>
      <Link
        to="#"
        onClick={() => navigate(-1)}
        className="hover:underline mb-2 inline-flex items-center p-2"
      >
        <ChevronLeftIcon className="h-6 w-6" /> Back
      </Link>
      <div className="bg-white p-8 flex flex-col md:flex-row  mx-auto max-w-6xl">
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
          <h2 className="text-4xl font-semibold text-center md:text-left mt-4 text-gray-800">
            {vehicle.name}
          </h2>
          <p className="text-green-700 font-bold text-2xl text-center md:text-left mt-4">
            ${vehicle.price}
          </p>
          <p className="text-gray-600 mt-4 text-lg">{vehicle.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {vehicle.size.map((size, index) => (
              <div
                // key={index}
                className="border border-gray-300 rounded-md p-2 text-sm"
              >
                {size}
              </div>
            ))}
          </div>
          <button
            onClick={() => handleAddToOrder(id)}
            className="bg-custom-yellow hover:bg-pink-800 text-white font-bold py-2 px-4 rounded mt-6 md:mt-4"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}