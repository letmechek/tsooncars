import React , { useEffect}from 'react';
import VehicleItems from '../VehicleItems/VehicleItems';
import ScrollReveal from "scrollreveal";

export default function VehicleList({ vehicleItem, handleAddToOrder }) {
  const sr = ScrollReveal();
  useEffect(() => {
    sr.reveal(".scroll", {
      origin: "bottom",
      distance: "20px",
      duration: 1000,
      delay: 200,
      scale: 1,
    });
  }, []);
  return (
    <div className='scroll'>
        <VehicleItems
          key={vehicleItem._id}
          vehicleItem={vehicleItem}
          handleAddToOrder={handleAddToOrder}
        />
    </div>
  );
}
