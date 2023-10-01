import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../Home/Home'
import Brands from '../../components/Brands/Brands';
import Vehicles from '../../components/VehicleItems/VehicleItems';
import VehicleDetail from '../../components/VehicleDetail/VehicleDetail';
import Vehicle from '../Vehicle/Vehicle';

export default function App() {
  const [user, setUser] = useState({})
  // getUser()
  return (
    <main className="">
      { user ? 
        <>
          <Navbar user={user} setUser={setUser}  />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brands" element={<Vehicle />} />
            <Route path="/:name/:id" element={<VehicleDetail />} />

          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


