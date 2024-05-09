import React from "react";
import Card from "../card/Card";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import LoginedUserNav from "../logined_user_navbar/LoginedUserNav";

function Shop() {
    const cardData = {
        imageSrc: "book-4.png",
        category: "Action",
        title: "Some Book",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!",
        price: "12.99"
    };

    return (
        <>
        <LoginedUserNav/>
            <div className="container animate__animated animate__zoomInDown">
                <div className="row">
                    {Array.from({ length: 15}).map((_, index) => (
                        <div className="col-md-3" key={index}>
                            <Card {...cardData} />
                        </div>
                    ))}
                </div>
            </div>
        <Footer/>
        </>
    );
}

export default Shop;
