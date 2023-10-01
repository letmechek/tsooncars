import React, { useEffect, useState, useRef } from 'react'
import * as vehiclesAPI from '../../utilities/vehicles-api';
import VehicleItems from '../../components/VehicleItems/VehicleItems';
import Brands from '../../components/Brands/Brands';
import VehicleList from '../../components/VehicleList/VehicleList';


export default function Vehicle() {
    const [vehicleItems, setVehicleItems] = useState([]);
    const [activeCat, setActiveCat] = useState('')
    const categoriesRef = useRef([])

    useEffect(function(){
        (async function(){
            const vehicles = await vehiclesAPI.getAll()
            categoriesRef.current = [...new Set(vehicles.map(vehicle => vehicle.VehicleModel.image))];
            setVehicleItems(vehicles)
            // console.log(vehicles)
            setActiveCat(categoriesRef.current[0])
            // console.log(categoriesRef.current)
        })()
    }, [])
  return (
    <>
    <Brands
        categories={categoriesRef.current}
        activeCat={activeCat}
        setActiveCat={setActiveCat}
    />

    <VehicleList vehicleItems={vehicleItems} />
    </>
  )
}
