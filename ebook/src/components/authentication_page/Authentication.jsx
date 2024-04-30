import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Authentication() {
    const [loginChecked, setLoginChecked] = React.useState(false);

    const handleLoginCheckboxChange = () => {
        setLoginChecked(!loginChecked);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            <Navbar />
            <div className="reg animate__animated animate__zoomInDown">
                <div className="main">
                    <input
                        className="form-input"
                        type="checkbox"
                        id="chk"
                        aria-hidden="true"
                        checked={loginChecked}
                        onChange={handleLoginCheckboxChange}
                    />

                    <div className="signup">
                        <form>
                            <label className="form-label" htmlFor="chk" aria-hidden="true">
                                Sign up
                            </label>
                            <input
                                className="form-input"
                                type="text"
                                name="txt"
                                placeholder="First Name"
                                required=""
                                disabled={loginChecked}
                                onChange={stopPropagation}
                            ></input>
                            <input
                                className="form-input"
                                type="text"
                                name="txt"
                                placeholder="Last Name"
                                required=""
                                disabled={loginChecked}
                                onChange={stopPropagation}
                            ></input>
                            <input
                                className="form-input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required=""
                                disabled={loginChecked}
                                onChange={stopPropagation}
                            ></input>
                            <input
                                className="form-input"
                                type="password"
                                name="pswd"
                                placeholder="Password"
                                required=""
                                disabled={loginChecked}
                                onChange={stopPropagation}
                            ></input>
                            <input
                                className="form-input"
                                type="password"
                                name="pswd"
                                placeholder="Confirm Password"
                                required=""
                                disabled={loginChecked}
                                onChange={stopPropagation}
                            ></input>
                            <button className="form-button" disabled={loginChecked}>
                                Sign up
                            </button>
                        </form>
                    </div>

                    <div className="login">
                        <form>
                            <label className="form-label" htmlFor="chk" aria-hidden="true">
                                Login
                            </label>
                            <input
                                className="form-input"
                                type="email"
                                name="email"
                                placeholder="Email"
                                required=""
                            ></input>
                            <input
                                className="form-input"
                                type="password"
                                name="pswd"
                                placeholder="Password"
                                required=""
                            ></input>
                            <button className="form-button">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Authentication;