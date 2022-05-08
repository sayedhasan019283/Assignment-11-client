import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../components/firebase.init'
import "./AddInventory.css";

const AddInventory = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        axios.post('http://localhost:5000/inventories', { ...data, email: user.email })
            .then(response => {
                console.log(response.data)
                toast("New item Added")
                e.target.img.value = ""
                e.target.name.value = ""
                e.target.price.value = ""
                e.target.quantity.value = ""
                e.target.description.value = ""
                e.target.supplier.value = ""

            })
    };
    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div className='text-center'>
                <h1 className='text-center'>ADD NEW ITEM</h1>
                <form className='w-100' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-3' placeholder='Product name' {...register("name", { required: true })} /><br />
                    <input className='mb-3' placeholder='Image url' {...register("img", { required: true })} /><br />
                    <input className='mb-3' placeholder='Product price' type="number" {...register("price", { required: true })} /><br />
                    <input className='mb-3' placeholder='Product quantity' type="number" {...register("quantity", { required: true })} /><br />
                    <input className='mb-3' placeholder='supplier name' type="text" {...register("supplier", { required: true })} /><br />
                    <textarea className='mb-3' placeholder='description' type="number" {...register("description", { required: true })} /><br />
                    <input className='btn-fixing' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddInventory;