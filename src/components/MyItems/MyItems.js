import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Modal from 'react-modal/lib/components/Modal';
import './MyItems.css';

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:5000/my-items?email=${user.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(response => setMyItems(response.data))
    }, [myItems])
    const handleDelete = async id => {
        await axios.delete(`http://localhost:5000/inventory/${id}`)
        toast('Item deleted')


    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [saved, setSaved] = useState(false)
    const [id, setId] = useState('')
    if (saved) {
        handleDelete(id)
        setSaved(false)

    }

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='container'>
            <h1 className='text-center'>YOUR ITEMS : {myItems.length}</h1>
            <div className='row  '>
                {
                    myItems.map(product => <div key={product._id} className='col-lg-4 relative d-flex  mt-5 justify-content-center'>
                        <div className="card " style={{ width: " 18rem" }}>
                            <img src={product.img} className="card-img-top" alt="..." />
                            <div className="card-body bacground-fixing">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text" >{product.description.slice(0, 150)}<button data-bs-toggle="tooltip" data-bs-placement="top" className='btn' title={product.description}>...</button></p>
                                <p>Price:${product.price}</p>
                                <p>Quantity:{product.quantity}</p>
                                <p className='mb-5'>Supllier: {product.supplier}</p>
                                <button onClick={() => {
                                    openModal()
                                    setId(product._id)
                                }} className='delet-btn-fixing'>Delete</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Alert</h2>
                <div>Are You sure You want to delete</div>
                <div className='d-flex justify-content-around'>
                    <button className='mt-4 btn btn-success' onClick={closeModal}>close</button>
                    <button className='mt-4 btn btn-danger' onClick={() => {
                        closeModal()
                        setSaved(true)
                    }}>Delete</button>
                </div>



            </Modal>
        </div>
    );
};

export default MyItems;