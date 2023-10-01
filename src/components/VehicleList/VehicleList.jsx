import React from 'react';
import VehicleItems from '../VehicleItems/VehicleItems';

export default function VehicleList({ vehicleItems, handleAddToOrder }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-auto max-w-6xl">
      {vehicleItems.map(vehicle => (
        <VehicleItems
          key={vehicle._id}
          vehicleItem={vehicle}
          handleAddToOrder={handleAddToOrder}
        />
      ))}
    </div>
  );
}
