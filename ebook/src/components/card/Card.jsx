import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeartOutline, HeartSharp } from 'react-ionicons'
import { CartOutline, CartSharp } from 'react-ionicons'

function Card({ imageSrc, category, title, description, price }) {

    const [isHeartHovered, setIsHeartHovered] = useState(false);
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const [isCartHovered, setIsCartHovered] = useState(false);
    const [isCartClicked, setIsCartClicked] = useState(false);

    const handleHeartMouseEnter = () => {
        setIsHeartHovered(true);
    };

    const handleHeartMouseLeave = () => {
        setIsHeartHovered(false);
    };

    const handleHeartClick = () => {
        setIsHeartClicked(prevState => !prevState);
    };

    const handleCartMouseEnter = () => {
        setIsCartHovered(true);
    };

    const handleCartMouseLeave = () => {
        setIsCartHovered(false);
    };

    const handleCartClick = () => {
        setIsCartClicked(prevState => !prevState);
    };

    return (
        <div className="product-card">
            <div className="product-tumb">
                <Link to="/BookView">
                    <img src={imageSrc} alt={title} />
                </Link>
            </div>
            <div className="product-details">
                <span className="product-catagory">{category}</span>
                <Link className="product-title" to="/BookView">
                    <h4><a href="">{title}</a></h4>
                </Link>
                <p>{description}</p>
                <div className="product-bottom-details">
                    <div className="product-price">${price}</div>
                    <div className="product-icons">
                        {isHeartClicked ? (
                            <HeartSharp
                                className="product-icon"
                                onMouseEnter={handleHeartMouseEnter}
                                onMouseLeave={handleHeartMouseLeave}
                                onClick={handleHeartClick}
                            />
                        ) : (
                            <HeartOutline
                                className="product-icon"
                                onMouseEnter={handleHeartMouseEnter}
                                onMouseLeave={handleHeartMouseLeave}
                                onClick={handleHeartClick}
                            />
                        )}
                        {isCartClicked ? (
                            <CartSharp
                                className="product-icon"
                                onMouseEnter={handleCartMouseEnter}
                                onMouseLeave={handleCartMouseLeave}
                                onClick={handleCartClick}
                            />
                        ) : (
                            <CartOutline
                                className="product-icon"
                                onMouseEnter={handleCartMouseEnter}
                                onMouseLeave={handleCartMouseLeave}
                                onClick={handleCartClick}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;







// import React from "react";

// function Card({ product }) {
//     const { description } = product;
//     const words = description.split(' ');
//     let limitedText = words.slice(0, 15).join(' ');

//     if (words.length > 15) {
//         limitedText += '...';
//     }

//     return (
//         <>
//             <div className="product-card">
//                 <div className="badge">Hot</div>
//                 <div className="product-tumb">
//                     <img src="https://i.imgur.com/xdbHo4E.png" />
//                 </div>
//                 <div className="product-details">
//                     <span className="product-catagory">Women,bag</span>
//                     <h4><a href="">Women leather bag</a></h4>
//                     <p>{limitedText}</p>
//                     <div className="product-bottom-details">
//                         <div className="product-price"><small>$96.00</small>$230.99</div>
//                         <div className="product-links">
//                             <a href=""><i className="fa fa-heart"></i></a>
//                             <a href=""><i className="fa fa-shopping-cart"></i></a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Card;

// Этот код надо будет использовать уже когда мы возьмем описание с дб. Тут стоит ограничение description на 15 слов 