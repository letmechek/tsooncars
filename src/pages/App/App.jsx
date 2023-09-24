import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage/AuthPage'

import Navbar from '../../components/NavBar/Navbar'
import Home from '../Home/Home'

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
          </Routes>
        </>
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


