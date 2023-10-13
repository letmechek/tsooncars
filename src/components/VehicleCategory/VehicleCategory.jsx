import React from 'react'
import * as vehiclesAPI from '../../utilities/vehicles-api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VehicleItems from '../VehicleItems/VehicleItems';
import VehicleList from '../VehicleList/VehicleList';
import Loader from '../Loader/Loader';

export default function VehicleCategory() {
    const [vehicles, setVehicles] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const {modelId} = useParams()
    useEffect(function(){
        async function fetchVehicles(){
            const vehicles = await vehiclesAPI.getVehiclesByModel(modelId)
            setVehicles(vehicles)
            setIsLoading(false)
        }
        fetchVehicles()
    }, [modelId])
console.log(vehicles)
  return (
    <>
    {isLoading ? (
        <div className=''>
            <Loader />
        </div>
    ): (
        
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {vehicles && vehicles.map(vehicle => (
            <VehicleList key={vehicle._id} vehicleItem={vehicle} />
        ))}
    </div>
    )}
    </>
  )
}

