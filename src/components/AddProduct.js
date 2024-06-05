import React, { useState } from 'react';
import { createProduct } from '../services/ProductService';

const AddProduct = () => {
    const [product, setProduct] = useState({ name: '', genre: '', author: '', description: '' });

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createProduct(product);
        setProduct({ name: '', genre: '', author: '', description: '' });
    };

    return (
        <div>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" />
                <input type="text" name="genre" value={product.genre} onChange={handleChange} placeholder="Genre" />
                <input type="text" name="author" value={product.author} onChange={handleChange} placeholder="Author" />
                <input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Description" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default AddProduct;
