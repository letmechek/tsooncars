import { useEffect, useState, useRef } from "react";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Faq from "../../components/Faq/Faq";
import * as vehiclesAPI from '../../utilities/vehicles-api'
import * as vehicleCategoriesAPI from '../../utilities/vehicle-categories-api'
import  fetchVehiclesAndCategories from '../../utilities/vehicle-categories-api'
import { Link } from "react-router-dom";

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
        <div className="">
        <Link to='/brands'>
        <Brands
             categories={categoriesRef.current}
            //  activeCat={''}
            //  setActiveCat={setActiveCat}
        />
        </Link>
        </div>
        <Faq />
       </>
    )
}