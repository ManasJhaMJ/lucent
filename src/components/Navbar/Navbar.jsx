import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div>
                <Link to='/'>
                    Logo
                </Link>
            </div>
            <div>
                <NavLink to={'/'} className={({ isActive }) => `links 
                ${isActive ? "active" : "non-active"}`}>
                    Home
                </NavLink>
                <NavLink to={'/work'} className={({ isActive }) => `links 
                ${isActive ? "active" : "non-active"}`}>
                    Work
                </NavLink>
                <NavLink to={'/about'} className={({ isActive }) => `links 
                ${isActive ? "active" : "non-active"}`}>
                    About
                </NavLink>
                <NavLink to={'/contact'} className={({ isActive }) => `links 
                ${isActive ? "active" : "non-active"}`}>
                    Contact
                </NavLink>
            </div>
        </nav >
    )
}

export default Navbar