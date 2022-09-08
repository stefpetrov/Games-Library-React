import { Link } from "react-router-dom"

import { useAuthContext } from "../contexts/AuthContext"



const Header = () => {

    const { isAuthenticated, user } = useAuthContext()

    let userNavigation = (
        <div id="user">
            <h5 className="welcome-message">Welcome, {user.email}</h5>
            <Link to="/catalog">All games</Link>
            <Link to="/create">Create Game</Link>
            <Link to="/logout">Logout</Link>
        </div>

    )

    let guestNavigation = (
        <div id="guest">
            <Link to="/catalog">All games</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div>

    )

    return (
        <header>
            <h1><Link className="home" to="/home">GamesPlay</Link></h1>
            <nav>
                
                {isAuthenticated
                ? userNavigation
                : guestNavigation}
                
            </nav>
        </header>
    )
}

export default Header