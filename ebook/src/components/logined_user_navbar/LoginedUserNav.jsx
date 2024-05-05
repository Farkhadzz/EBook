import React from "react";
import { Link } from "react-router-dom";
import { BasketOutline } from 'react-ionicons'
import { ChevronDownOutline } from 'react-ionicons'
import { useState } from "react";
import { ExitOutline } from 'react-ionicons'
import { OptionsOutline } from 'react-ionicons'

function LoginedUserNav() {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleMouseEnter = () => {
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        setDropdownOpen(false);
    };

    return (
        <>
            <div className="animate__animated animate__zoomInDown">
                <div className="header-top">
                    <div className="container">

                        <a href="#" className="logo">
                            <img src="icon.png" width="80" alt="EBook home" />
                        </a>

                        <div className="input-wrapper">
                            <input type="search" name="search" placeholder="Search" className="input-field" />

                            <button className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>

                <div className="header-bottom" data-navbar>
                    <div className="container">

                        <nav className="user-logined-navbar">

                            <div className="navbar-top">
                                <input type="search" name="search" placeholder="Search our store" className="input-field" />

                                <button className="search-btn" aria-label="Search">
                                    <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
                                </button>
                            </div>

                            <ul className="navbar-list">

                                <li>
                                    <Link className="navbar-link" to='/Home'>
                                        <a>Home</a>
                                    </Link>
                                </li>

                                <li>
                                    <a href="#" className="navbar-link">Shop</a>
                                </li>

                                <li>
                                    <Link className="navbar-link" to='/Favorite'>
                                        <a>Favorites</a>
                                    </Link>
                                </li>

                                <li>
                                    <Link className="navbar-link" to='/BookList'>
                                        <a>Books</a>
                                    </Link>
                                </li>

                                <li>
                                    <a href="#" className="navbar-link">Genres</a>
                                    <ul className="dropdown-menu animate__animated animate__bounceIn">
                                        <li><a href="#" className="dropdown-link">Fiction</a></li>
                                        <li><a href="#" className="dropdown-link">Non-Fiction</a></li>
                                        <li><a href="#" className="dropdown-link">Science Fiction</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="#" className="navbar-link">Contact</a>
                                </li>

                            </ul>

                            <div className="user-info">
                                <div className="basket">
                                    <BasketOutline className="basket-icon"
                                        height="auto"
                                        width="30px" />
                                </div>
                                <div className="user-photo">
                                    <img src="user.png" />
                                </div>
                                <div className="user-detail">
                                    <h2>Name Surname</h2>
                                    <h3>testemail@gmail.com</h3>
                                </div>
                                <div
                                    className="dropdown-shape"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <ChevronDownOutline className="shape" height="auto" width="25px" />
                                    {dropdownOpen && (
                                        <div className="shape-dropdown">
                                            <ul className="animate__animated animate__bounceIn">
                                                <li><a className="shape-link" href="/Profile"><OptionsOutline /></a></li>
                                                <li><a className="shape-link"><ExitOutline /></a></li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginedUserNav;