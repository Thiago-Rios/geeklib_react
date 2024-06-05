import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add">Add Product</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/add" element={<AddProduct />} />
                    <Route path="/edit/:id" element={<EditProduct />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;