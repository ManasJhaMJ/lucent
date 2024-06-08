import { Link, NavLink } from 'react-router-dom'

import Logo from '../../assets/logo.png'

import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <div className='navbar'>
                <div className='logo'>
                    <Link to='/'>
                        <img src={Logo} alt="Lucent Logo" />
                    </Link>
                </div>
                <div className='links'>
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
            </div>
        </nav >
    )
}

export default Navbar