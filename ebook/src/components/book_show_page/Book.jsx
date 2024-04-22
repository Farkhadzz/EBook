import React from "react";
import Navbar from "../navbar/Navbar";

function Book() {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="book-section animate__animated animate__zoomInUp">
                    <div className="book-cover">
                        <img src="book-4.png" alt="Book Cover" />
                    </div>
                        <div className="book-info text-center">
                            <h1>"The Great Gatsby"</h1>
                            <p>Genre: Fiction</p>
                            <p>Author: F. Scott Fitzgerald</p>
                            <p>Number of Pages: 180</p>
                            <p>Price: $10.99</p>
                            <p>Number of Copies: 500</p>
                            <p>Number of Copies Sold: 300</p>
                            <p>Language: English</p>
                            <h2>"A novel by F. Scott Fitzgerald about the American Dream and the Jazz Age."</h2> {/*DESCRIPTION */}
                            <button className="buy-button">get book</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Book;