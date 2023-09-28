import { useEffect, useState, useRef } from "react";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Faq from "../../components/Faq/Faq";
import * as vehiclesAPI from '../../utilities/vehicles-api'
import * as vehicleCategoriesAPI from '../../utilities/vehicle-categories-api'
import  fetchVehiclesAndCategories from '../../utilities/vehicle-categories-api'

export default function Home() {
    const [vehicleItems, setVehicleItems] = useState([])
    const [activeCat, setActiveCat] = useState('')
    const categoriesRef = useRef([])
    useEffect(() => {
        fetchVehiclesAndCategories(setVehicleItems, setActiveCat, categoriesRef)
    },[])


    return (
       <>
        <Banner />
        <Brands
             categories={categoriesRef.current}
             activeCat={activeCat}
             setActiveCat={setActiveCat}
        />
        <Faq />
       </>
    )
}