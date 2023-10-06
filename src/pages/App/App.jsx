import { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import Navbar from '../../components/NavBar/NavBar'
import Home from '../Home/Home'
import VehicleDetail from '../../components/VehicleDetail/VehicleDetail';
import Vehicle from '../Vehicle/Vehicle';
import VehicleCategory from '../../components/VehicleCategory/VehicleCategory';
import Location from '../../components/Location/Location';
import FooterWithSitemap  from '../../components/Footer/Footer';
import Faq from '../../components/Faq/Faq';
import AboutUs from '../../components/AboutUs/AboutUs';
import Cart from '../../components/CartIcon/CartIcon';
import OrderDetail from '../../components/OrderDetail/OrderDetail';

export default function App() {
  const [user, setUser] = useState({})
  // getUser()
  return (
    <main className="">
  <Navbar  />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/brands" element={<Vehicle />} />
    <Route path="/:name/:id" element={<VehicleDetail />} />
    <Route path="/model/:modelId" element={<VehicleCategory />} />
    <Route path="/location" element={<Location />} />
    <Route path="/faqs" element={<Faq />} />
    <Route path="/about-us" element={<AboutUs />} />
      <Route path="/cart" element={<OrderDetail />} />
    <Route path="/login" element={<AuthPage />} />
  </Routes>
  <FooterWithSitemap />
</main>
  );
}


