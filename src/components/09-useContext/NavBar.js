import React from 'react';
import {Link, NavLink} from 'react-router-dom';

export const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">

            <Link to="/" className="navbar-brand"> useContext </Link>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" exact to="/" className="nav-link">Home</NavLink>
                    <NavLink activeClassName="active" exact to="/about" className="nav-link">About</NavLink>
                    <NavLink activeClassName="active" exact to="/login" className="nav-link">Login</NavLink>
                </div>
            </div>
        </nav>
        // <nav>
        //     <ul>
        //         <li><Link to="/">Home</Link></li>
        //         <li><Link to="/about">About</Link></li>
        //         <li><Link to="/login">Login</Link></li>
        //     </ul>
        // </nav>
    )
}
