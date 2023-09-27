import react from "@heroicons/react";
import { useEffect, useState, useRef } from "react";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Faq from "../../components/Faq/Faq";
import * as vehiclesAPI from '../../utilities/vehicles-api'
import * as vehicleCategoriesAPI from '../../utilities/vehicle-categories-api'


export default function Home() {
    // const [ activeCat, setActiveCat ] = useState('')
    // const vehicleModelsRef = useRef([])
    // const [ vehicleItems, setVehicleItems ] = useState([])
    // const [categories, setCategories] = useState([])

// useEffect(function() {
//      (async function() {
//          const vehicles = await vehiclesAPI.getAll()
//          console.log(vehicles)
//          vehicleModelsRef.current = [...new Set(vehicles.map(vehicle => vehicle.vehicleModel.name))]
//          console.log(vehicleModelsRef)
//          setVehicleItems(vehicles)
//          setActiveCat(vehicleModelsRef.current[0])
//      })();
     
//  }, [])

//  useEffect(function(){
//     (async function(){
//         const fetchedCategories = await vehicleCategoriesAPI.getAll()
//         console.log(fetchedCategories)
//         setCategories(fetchedCategories)
//     })()
//  }, [])

    return (
       <>
        <Banner />
        {/* <Brands
            categories={categories}
            vehicleModels={vehicleModelsRef.current}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
        /> */}
        <Faq />
       </>
    )
}