import { useEffect, useState, useRef } from "react";
import Banner from "../../components/Banner/Banner";
import Brands from "../../components/Brands/Brands";
import Faq from "../../components/Faq/Faq";
import * as categoriesAPI from '../../utilities/vehicle-categories-api'

export default function Home() {
    const [vehicleItems, setVehicleItems] = useState([])

    useEffect(() => {
        const fetchUniqueCategories = async () => {
          try {
            const vehicles = await categoriesAPI.getAll();
            setVehicleItems(vehicles);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchUniqueCategories();
      }, []);

    return (
       <>
        <Banner />
        <Brands
             categories={vehicleItems}
        />
        <Faq />
       </>
    )
}