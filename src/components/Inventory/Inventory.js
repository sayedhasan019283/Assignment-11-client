import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Inventory.css'


const Inventory = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/inventories')
            .then(response => setProducts(response.data))
    }, [])
    const sliceProducts = products.slice(0, 6)

    return (
        <div className='row  justify-content-center mt-5'>
            <h1 className='text-center mt-5'>CATALOGUE</h1>
            {
                sliceProducts.map(product => <div key={product._id} className='col-lg-4 relative d-flex  mt-5 justify-content-center'>
                    <div className="card  card-style" style={{ width: " 18rem" }}>
                        <img src={product.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text" >{product.description.slice(0, 150)}<button data-bs-toggle="tooltip" data-bs-placement="top" className='btn' title={product.description}>...</button></p>
                            <p>Price:${product.price}</p>
                            <p>Quantity:{product.quantity}</p>
                            <p className='mb-5'>Supllier: {product.supplier}</p>
                            <button onClick={() => navigate(`/inventory/${product._id}`)} className="  button-fixing   ">update</button>
                        </div>
                    </div>
                </div>)
            }
        </div >
    );
};

export default Inventory;