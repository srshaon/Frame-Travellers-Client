import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut, name, auth } = useAuth();
    console.log('this is state', name);
    console.log(user.displayName);
    let loggedUserName = '';
    if (user?.displayName === null) {

        console.log('came from name')
        loggedUserName = name;
    }
    else {
        loggedUserName = user?.displayName;
        console.log('came from display')
    }
    return (
        <div className="pb-5 mb-3" >
            <nav className="header-container  navbar navbar-expand-lg navbar-light  fixed-top">
                <div className="container-fluid mx-5">
                    <NavLink to="/" className="navbar-brand">
                        <img src="https://i.ibb.co/rwN24TS/filename-3.png" height="50" alt="" />

                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse nav-container" id="navbarTogglerDemo02">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-1">
                                <NavLink style={{ color: 'white' }} className="navlinks nav-link active " aria-current="page" to="/home">Home</NavLink>

                            </li>
                            <li className="nav-item me-1">
                                <NavHashLink style={{ color: 'white' }} className="nav-link navlinks" as={HashLink} to="/home#services">Services</NavHashLink>
                            </li>
                            <li className="nav-item me-1">
                                <NavHashLink style={{ color: 'white' }} className="nav-link navlinks" as={HashLink} to="/home#aboutus">AboutUs</NavHashLink>
                            </li>
                            <li className="nav-item me-1 navlinks">
                                <NavHashLink style={{ color: 'white' }} className="nav-link" as={HashLink} to="/home#destinations">Destinations</NavHashLink>
                            </li>

                        </ul>


                        <ul className="navbar-nav mb-2 mb-lg-0">

                            {user.email ?
                                <>


                                    <li className="nav-item  me-1">
                                        <NavLink style={{ color: 'white' }} className="nav-link active navlinks" aria-current="page" to="/myorders"> My Orders</NavLink>
                                    </li>
                                    <li className="nav-item  me-1">
                                        <NavLink style={{ color: 'white' }} className="nav-link active navlinks" aria-current="page" to="/allorders">All Orders</NavLink>
                                    </li>
                                    <li className="nav-item me-1">
                                        <NavLink style={{ color: 'white' }} className="nav-link active  navlinks" aria-current="page" to="/addnewservice"> Add Service</NavLink>
                                    </li>

                                    <button className="log-out-btn me-1" onClick={logOut}><i class="fas fa-user-minus"></i> LogOut</button>
                                    <span className="pt-2 span-user-name">Hello Dear {loggedUserName.slice(0, 10)}</span>

                                </>
                                :

                                <>
                                    <li className="nav-item me-1">
                                        <NavLink style={{ color: 'white' }} className="nav-link active  navlinks" aria-current="page" to="/login"><i className="fas fa-user-check"> Log In</i></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink style={{ color: 'white' }} className="nav-link active  navlinks" to="/register"><i className="fas fa-user-plus"> Registration</i></NavLink>
                                    </li>
                                </>}


                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
