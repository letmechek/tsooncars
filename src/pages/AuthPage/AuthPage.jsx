import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react'

export default function AuthPage({ setUser }) {
    const [showSignup, setShowSignup] = useState(false)
    return (
        <main>     
        <div > 
         {showSignup ? <SignUpForm setUser={setUser} /> :
         <LoginForm setUser={setUser} />}
         <button onClick={() => setShowSignup(!showSignup)}>
             {showSignup ? 'Log In' : 'Sign Up'}
         </button>
         </div>
     </main>
    )
}