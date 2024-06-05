import React from 'react';

const Product = ({ product, onDelete, onEdit }) => {
    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.genre}</p>
            <p>{product.author}</p>
            <p>{product.description}</p>
            <button onClick={() => onEdit(product.id)}>Edit</button>
            <button onClick={() => onDelete(product.id)}>Delete</button>
        </div>
    );
};

export default Product;
