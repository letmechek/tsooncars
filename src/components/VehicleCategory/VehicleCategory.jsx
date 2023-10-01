import React from 'react'
import * as vehiclesAPI from '../../utilities/vehicles-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VehicleItems from '../VehicleItems/VehicleItems';
import VehicleList from '../VehicleList/VehicleList';

export default function VehicleCategory() {
    const [vehicles, setVehicles] = useState(null)
    const {modelId} = useParams()
    useEffect(function(){
        async function fetchVehicles(){
            const vehicles = await vehiclesAPI.getVehiclesByModel(modelId)
            setVehicles(vehicles)
        }
        fetchVehicles()
    }, [modelId])
console.log(vehicles)
  return (
    <div>
        {vehicles && vehicles.map(vehicle => (
            <VehicleList key={vehicle._id} vehicleItem={vehicle} />
        ))}
    </div>
  )
}
