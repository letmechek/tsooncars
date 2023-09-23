import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <nav className='m-8'>
            <Link to="/orders">Order History</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Order</Link>
            &nbsp; | &nbsp;
            Welcome, {user.name}
            &nbsp; | &nbsp;
            <Link to="" onClick={handleLogOut}>Log Out</Link>
            <div className='bg-red-500'>
            <h1 className='text-2xl font-bold text-white'>hello </h1>
            </div>
        </nav>
    )
}