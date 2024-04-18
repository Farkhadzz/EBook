import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";

function Authentication() {
    return (
        <>
            <Navbar />

            <div className="reg animate__animated animate__zoomInDown">
                <div className="main">
                    <input className="form-input" type="checkbox" id="chk" aria-hidden="true" />

                    <div className="signup">
                        <form>
                            <label className="form-label" for="chk" aria-hidden="true">Sign up</label>
                            <input className="form-input" type="text" name="txt" placeholder="First Name" required=""></input>
                            <input className="form-input" type="text" name="txt" placeholder="Last Name" required=""></input>
                            <input className="form-input" type="email" name="email" placeholder="Email" required=""></input>
                            <input className="form-input" type="password" name="pswd" placeholder="Password" required=""></input>
                            <input className="form-input" type="password" name="pswd" placeholder="Confirm Password" required=""></input>
                            <button className="form-button">Sign up</button>
                        </form>
                    </div>

                    <div className="login">
                        <form>
                            <label className="form-label" for="chk" aria-hidden="true">Login</label>
                            <input className="form-input" type="email" name="email" placeholder="Email" required=""></input>
                            <input className="form-input" type="password" name="pswd" placeholder="Password" required=""></input>
                            <button className="form-button">Login</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Authentication;