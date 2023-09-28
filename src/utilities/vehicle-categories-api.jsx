import * as vehiclesAPI from './vehicles-api';

async function fetchVehiclesAndCategories(setVehicleItems, setActiveCat, categoriesRef) {
    const vehicles = await vehiclesAPI.getAll();
    categoriesRef.current = [...new Set(vehicles.map(vehicle => vehicle.VehicleModel.image))];
    setVehicleItems(vehicles);
    setActiveCat(categoriesRef.current[0]);
  }

  export default fetchVehiclesAndCategories;