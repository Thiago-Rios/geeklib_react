import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, updateProduct } from '../services/ProductService';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: '',
        genre: '',
        author: '',
        description: '',
    });

    useEffect(() => {
        if (id) {
            loadProduct();
        }
    }, [id]);

    const loadProduct = async () => {
        try {
            const result = await getProductById(id);
            setProduct(result.data);
        } catch (error) {
            console.error('Error loading product:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(id, product);
            navigate('/');
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    return (
        <div>
            <h2>Edit Product</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" value={product.genre} onChange={handleChange} />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" name="author" value={product.author} onChange={handleChange} />
                </div>
                <div>
                    <label>Description:</label>
                    <input type="text" name="description" value={product.description} onChange={handleChange} />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default EditProduct;
