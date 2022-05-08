import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleProduct = () => {
    const navigate = useNavigate()
    const { inventoryId } = useParams();
    const [product, setProduct] = useState([])
    useEffect(() => {
        const getProduct = async () => {
            await axios.get(`http://localhost:5000/inventory/${inventoryId}`)
                .then(response => setProduct(response.data))

        }
        getProduct()
    }, [])

    let newQuantity;
    const handleDelivered = async () => {
        const productQuantity = parseInt(product.quantity)
        newQuantity = productQuantity - 1
        product.quantity = newQuantity
        const newData = { quantity: product.quantity }
        await axios.put(`http://localhost:5000/inventory/${inventoryId}`, newData)
        axios.get(`http://localhost:5000/inventory/${inventoryId}`)
            .then(response => {
                setProduct(response.data)
                toast('Delivered successfully')
            })


    }
    let reStock;
    const hanldeRestock = async (e) => {
        e.preventDefault()

        reStock = parseInt(e.target.reStock.value)

        const reStockQuantity = parseInt(reStock)
        const totalReStockQuantity = reStockQuantity + parseInt(product.quantity)
        const newReStockQuantity = { quantity: totalReStockQuantity }

        if (reStockQuantity <= 0) {

            toast('Please Input valid amount')

            return
        }

        await axios.put(`http://localhost:5000/inventory/${inventoryId}`, newReStockQuantity)
        axios.get(`http://localhost:5000/inventory/${inventoryId}`)
            .then(response => {
                setProduct(response.data)
                toast('Item Restock Successfully')
            })

    }

    return (
        <div>

            <div className='mt-5 row align-items-center'>
                <div className='d-flex justify-content-center col-lg-6'>
                    <div className="card mb-3" style={{ maxWidth: "540px" }}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={product.img} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text">Quantity: {product.quantity}</p>
                                    <p className="card-text">Price:${product.price}</p>
                                    <button onClick={handleDelivered} className='btn btn-success'>Delivered</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-4 mb-4 col-lg-6'>
                    <form onSubmit={hanldeRestock}>
                        <h1>Re stock this items</h1>
                        <label className="form-label" htmlFor="reStock">Enter the quantity </label>
                        <input className="form-control w-50 mx-auto" type="number" name='reStock' />
                        <button type="submit" className="btn w-25 mx-auto btn-success mt-3">Submit</button>
                    </form>
                    <div className='text-center mt-4'>
                        <button onClick={() => navigate('/manage-inventories')} className='btn btn-success'>Manage Inventories</button>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default SingleProduct;