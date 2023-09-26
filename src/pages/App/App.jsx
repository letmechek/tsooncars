import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'
import Navbar from '../../components/Navbar/Navbar'
import Home from '../Home/Home'
import Brands from '../../components/Brands/Brands';
import Vehicles from '../../components/Vehicles/Vehicles';

export default function App() {
  const [user, setUser] = useState({})
  // getUser()
  return (
    <main className="App">
      { user ? 
        <>
          <Navbar user={user} setUser={setUser}  />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brands/:name" element={<Vehicles />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


