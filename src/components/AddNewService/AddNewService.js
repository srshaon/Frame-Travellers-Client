import './AddNewService.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';


const AddNewService = () => {
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory()
    const location = useLocation()
    const url = "/home"

    const onSubmit = data => {
        console.log(data)
        axios.post('https://frame-travellers.onrender.com/packages', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('data insert successfully')
                    reset();
                }
                history.push(url)
            })
    };
    return (
        <div className="pt-3" >
            <h5 className="py-1" style={{ backgroundColor: '#c7ebe9' }}>Add New Service</h5>
            <div className="add-new-service-div">
                <form className="new-service-form" onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder="name" {...register("name", { required: true, maxLength: 30 })} />

                    <textarea placeholder="description" {...register("description")} />
                    <input type="number" min="0" {...register("fee")} placeholder="fee" />
                    <input placeholder="duration" {...register("duration", { required: true, maxLength: 20 })} />
                    <input placeholder="guide" {...register("guide", { required: true, maxLength: 20 })} />
                    <input placeholder="photographer" {...register("photographer", { required: true, maxLength: 20 })} />
                    <textarea placeholder="additional info" {...register("additionalInfo")} />

                    <input {...register("img")} placeholder="image url" />
                    <input style={{ backgroundColor: 'rgb(248, 211, 142)', fontWeight: '700' }} type="submit" />
                </form>

            </div>
        </div>
    );
};

export default AddNewService;
