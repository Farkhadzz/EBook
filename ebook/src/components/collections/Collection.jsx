import React from "react";

function Collection() {
    return (
        <>
            <section className="section featured animate__animated animate__zoomIn" aria-label="featured collection">
                <div className="container">
                    <div className="product-card">
                        <div className="product-tumb">
                            <img src="book-4.png" />
                        </div>
                        <div className="product-details">
                            <span className="product-catagory">Action</span>
                            <h4><a href="">Some Book</a></h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
                            <div className="product-bottom-details">
                                <div className="product-price">
                                    $12.99
                                </div>
                                <div className="product-links">
                                    <a href=""><i className="fa fa-heart"></i></a>
                                    <a href=""><i className="fa fa-shopping-cart"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Collection;
