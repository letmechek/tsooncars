import VehicleItems from '../VehicleItems/VehicleItems';
export default function VehicleList({ vehicleItems, handleAddToOrder }) {
  const vehicles = vehicleItems.map(vehicle =>
    <VehicleItems
      key={vehicle._id}
      vehicleItem={vehicle}
      handleAddToOrder={handleAddToOrder}    />
  );
  return (
    <div >
      {vehicles}
    </div>
  );
}