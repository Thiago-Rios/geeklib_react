import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts, deleteProduct } from '../services/ProductService';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const result = await getProducts();
        setProducts(result.data);
    };

    const handleDelete = async (id) => {
        await deleteProduct(id);
        loadProducts();
    };

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    return (
        <div>
            <h2>Product List</h2>
            {products.map(product => (
                <Product key={product.id} product={product} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
        </div>
    );
};

export default ProductList;