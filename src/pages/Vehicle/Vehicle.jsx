import React, { useEffect, useState, useRef } from 'react'
import * as vehiclesAPI from '../../utilities/vehicles-api';
import VehicleItems from '../../components/VehicleItems/VehicleItems';
import Loader from '../../components/Loader/Loader';
import ProfileBanner from '../../components/Banner/ProfileBanners'
import banner3 from '../../Assets/images/banner3.jpeg'


export default function Vehicle() {
    const [vehicleItems, setVehicleItems] = useState([]);
    const [activeCat, setActiveCat] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const categoriesRef = useRef([])

    useEffect(function(){
        (async function(){
            const vehicles = await vehiclesAPI.getAll()
            setVehicleItems(vehicles)
            setIsLoading(false)
        })()
    }, [])
  return (
    <>
    <ProfileBanner image={banner3} title='Location' />
    {isLoading ? (
      <div className=''>
        <Loader/>
      </div>
    ) :(
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
    {vehicleItems.map((vehicle, index) => (
      <VehicleItems key={vehicle._id} vehicleItem={vehicle} />
      ))}
  </div>
    )}
  </>
)
}


