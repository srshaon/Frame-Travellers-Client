import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = (props) => {
    console.log(props.service);
    const { name, img, description, fee, _id } = props.service;
    return (
        <div className="container text-start">
            <div className="row single-service-card-row h-100">
                <div className="col d-flex justify-content-between flex-column m-0 p-0 mx-2 single-service-card">

                    <div className="single-service-card-image-div">
                        <img src={img} alt="" className="w-100 img-fluid" />
                        <h6 className="px-1 pt-2">Package Name:<strong> {name}</strong></h6>
                        <h6 className="px-1">Fee: <strong>{fee}</strong> Tk</h6>
                        <p className="px-1 single-service-card-description"> <strong>Details: </strong>  {description}</p>
                    </div>
                    <div className="booking-btn-div pb-1">
                        <Link to={`/booknow/${_id}`} >
                            <button className="mb-3 px-5 booking-btn "><strong>Book Now</strong></button>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Service;