import React from "react";
import Card from "../card/Card";

function Collection() {
    return (
        <section className="section featured animate__animated animate__zoomIn" aria-label="featured collection">
            <div className="container">
                <Card
                    imageSrc="book-4.png"
                    category="Action"
                    title="Some Book"
                    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!"
                    price="12.99"
                />
            </div>
        </section>
    );
}

export default Collection;
