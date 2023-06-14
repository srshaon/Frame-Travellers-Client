import './BookNow.css';
import { useHistory, useLocation, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import React, { useEffect, useState } from 'react';


const BookNow = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user, name, auth } = useAuth();
    const { _id } = useParams();
    const history = useHistory()
    const location = useLocation()
    const url = "/myorders"
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`https://frame-travellers.onrender.com/packages/${_id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setService(data)
            })
    }, [])
    const onSubmit = data => {

        const orderedService = service;
        data.order = orderedService;
        console.log(data);

        fetch('https://frame-travellers.onrender.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order processed Successfully');

                    reset();
                }
                history.push(url)
            })
    };
    return (
        <div className="service-details-container pt-3" >
            <div className="service-details-upper-section" >
                <h5 style={{ backgroundColor: '#c7ebe9' }} className="py-1"><strong>"{service.name}"</strong></h5>
                <img className="img-fluid " src={service?.img} alt="" />
            </div>
            <div className="service-details-lower-section" >
                <div className="service-details-section" >
                    <h5 className="pb-4 pt-2" style={{ backgroundColor: '#c7ebe9' }}>Details of the Service:</h5>
                    <div className="p-0 m-0 service-inner-details-section" >
                        <div >
                            <div className="details-field" >
                                <p className="pe-2" style={{ textAlign: 'right' }}>Name: </p>
                                <p className="ps-2" style={{ textAlign: 'left' }}> {service?.name} </p>
                            </div>
                            <div className="details-field" >
                                <p className="pe-2" style={{ textAlign: 'right' }}>Description: </p>
                                <p className="ps-2" style={{ textAlign: 'left' }}>{service?.description}</p>
                            </div>
                            <div className="details-field" >
                                <p className="pe-2" style={{ textAlign: 'right' }}>Fee: </p><p className="ps-2" style={{ textAlign: 'left' }}> {service?.fee}</p>
                            </div>
                            <div className="details-field" >
                                <p className="pe-2" style={{ textAlign: 'right' }}>Duration: </p><p className="ps-2" style={{ textAlign: 'left' }}> {service?.duration}</p>
                            </div>
                            <div className="details-field" >
                                <p className="pe-2" style={{ textAlign: 'right' }}>Guide: </p><p className="ps-2" style={{ textAlign: 'left' }}>{service?.guide}</p>

                            </div>
                            <div className="details-field" >
                                <p className="pe-2" style={{ textAlign: 'right' }}>Photographer: </p><p className="ps-2" style={{ textAlign: 'left' }}>{service?.photographer}</p>
                            </div>
                            <div className="details-field" >
                                <p className="pe-2 pt-1" style={{ textAlign: 'right' }}>Additional: </p><p className="ps-2" style={{ textAlign: 'left' }}> {service?.additionalInfo}</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="order-details-section" style={{ borderLeft: '2px solid green' }}>
                    <h5 className="py-2" style={{ backgroundColor: '#c7ebe9' }}>Please, fill up the form to book your order</h5>
                    <div >
                        <form className="shipping-form pt-4 w-100" onSubmit={handleSubmit(onSubmit)}>

                            <input placeholder="Name" defaultValue={user.displayName} {...register("name")} />
                            <br />
                            <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className="error">This field is required</span>}
                            <input placeholder="City" defaultValue="" {...register("city")} />
                            <br />
                            <textarea className="m-0" placeholder="Address" defaultValue="" {...register("address")} />
                            <br />

                            <input type="number" min="0" placeholder="Contact Number" defaultValue="" {...register("phone")} />

                            <br />
                            <input style={{ backgroundColor: 'rgb(248, 211, 142)', padding: '2px', fontWeight: '700' }} type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNow;

