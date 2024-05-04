import React, { useState } from "react";
import LoginedUserNav from "../logined_user_navbar/LoginedUserNav";
import Footer from "../footer/Footer";

function AddBook() {
    // State for book data
    const [book, setBook] = useState({
        title: "",
        category: "",
        price: "",
        author: "",
        sold: "",
        copies: ""
    });

    // State for file selection error message
    const [fileError, setFileError] = useState(null);

    // Handler for changing book data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBook(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handler for image selection
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type !== "image/png") {
            // File type check (should be PNG)
            setFileError("Please choose a PNG file.");
        } else {
            setFileError(null);
            // Set the file to state or process it
        }
    };

    return (
        <>
            <LoginedUserNav />
            <div className="container animate__animated animate__zoomInUp">
                <h2>Add New Book</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="image">Choose Image (PNG only):</label>
                        <input type="file" className="form-control-file" id="image" accept=".png" onChange={handleImageChange} />
                        {fileError && <p className="text-danger">{fileError}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="title">Title:</label>
                        <input type="text" className="form-control" id="title" name="title" value={book.title} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="category">Category:</label>
                        <input type="text" className="form-control" id="category" name="category" value={book.category} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input type="number" className="form-control" id="price" name="price" value={book.price} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Author:</label>
                        <input type="text" className="form-control" id="author" name="author" value={book.author} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sold">Sold Copies:</label>
                        <input type="number" className="form-control" id="sold" name="sold" value={book.sold} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="copies">Total Copies:</label>
                        <input type="number" className="form-control" id="copies" name="copies" value={book.copies} onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                </form>
            </div>
            <Footer />
        </>
    );
}

export default AddBook;
