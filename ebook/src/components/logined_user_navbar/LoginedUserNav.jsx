import React from "react";

function LoginedUserNav() {
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
                                    <a href="/Home" className="navbar-link">Home</a>
                                </li>

                                <li>
                                    <a href="#" className="navbar-link">Shop</a>
                                </li>

                                <li>
                                    <a href="#" className="navbar-link">Genres</a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#" className="dropdown-link">Fiction</a></li>
                                        <li><a href="#" className="dropdown-link">Non-Fiction</a></li>
                                        <li><a href="#" className="dropdown-link">Science Fiction</a></li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="#" className="navbar-link">About Us</a>
                                </li>

                                <li>
                                    <a href="#" className="navbar-link">Contact</a>
                                </li>

                            </ul>

                            <div className="user-info">
                                <div className="user-photo">
                                    <img src="user.png" />
                                </div>
                                <div className="user-detail">
                                    <h2>Name Surname</h2>
                                    <h3>testemail@gmail.com</h3>
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