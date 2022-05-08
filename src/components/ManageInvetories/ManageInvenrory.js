import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal/lib/components/Modal';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import './ManageInventory.css';

const ManageInvenrory = () => {
    const [user] = useAuthState(auth)
    const [inventories, setInventories] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/inventories')
            .then(response => setInventories(response.data))

    }, [inventories])

    const handleDelete = async id => {
        await axios.delete(`http://localhost:5000/inventory/${id}`)
        toast('Item deleted')

    }

    const navigate = useNavigate()
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
    const [deleteUserEmail, setDeleteUserEmail] = useState('')
    if (saved) {
        handleDelete(id, deleteUserEmail)
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
        <div className='row  justify-content-center'>


            <div className='container '>
                <div className='text-center mt-3'>
                    <button onClick={() => navigate("/add-inventory-item")} className='add-button-fixing'>Add New item</button>
                </div>
                <table className="table table-striped w-50 container">
                    <thead>
                        <tr>

                            <th scope="col">Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Quantity</th>

                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='newitem'>
                        {
                            inventories?.map(product => <tr key={product._id}>

                                <td>{product.name}</td>
                                <td><img className='img-fluid' src={product.img} alt="" /></td>
                                <td>{product.quantity}</td>


                                <td className='delet-btn-fixing'> <Button onClick={() => {

                                    openModal()
                                    setId(product._id)
                                    setDeleteUserEmail(product?.email)

                                }}>
                                    Delete
                                </Button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
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

export default ManageInvenrory;