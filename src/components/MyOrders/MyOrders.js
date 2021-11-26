import './MyOrders.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const MyOrders = () => {

    const { user, name, auth } = useAuth();

    const [allorders, setAllorders] = useState([]);
    useEffect(() => {
        fetch('https://immense-waters-81746.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllorders(data))
    }, [])
    console.log(allorders);
    const myOrder = allorders.filter(order => order.email === user.email)
    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `https://immense-waters-81746.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remaining = allorders.filter(o => o._id !== id);
                        setAllorders(remaining);
                    }
                })
        }
    }

    return (
        <div className="my-4 py-2">
            <div className="m-0 p-0 " >
                <hr style={{ fontSize: '40px', fontWeight: '800', borderTop: '10px dashed' }} className="mb-1 mt-1" />
                <h4>Order List of {user.displayName.slice(0, 10)}</h4>
                <hr style={{ fontSize: '40px', fontWeight: '800', borderBottom: '10px dashed' }} className="m-0 mt-2" />
            </div>
            <div >
                {
                    (myOrder.length === 0) ?
                        <>
                            <div className="d-flex flex-column justify-content-center">
                                <h2>No Order Found!!</h2>
                                <img className="img-fluid w-100 h-75 px-5" src="https://i.ibb.co/c18WNYb/Women-holding-yellow-speech-bubble-with-sad-face.jpg" alt="" />
                            </div>
                        </> :
                        <>
                            <div className="mt-2 my-order-map-container px-3">
                                {
                                    myOrder.map(o => <div className="pb-4 single-my-order-container" >
                                        <div className="single-my-order-div" >
                                            <div className="d-flex flex-column">

                                                <img src={o.order.img} alt="" className="w-100 img-fluid" />
                                                <h6 className="ps-2 pt-2">Package Name: {o.order.name}</h6>
                                                <h6 className="ps-2 pt-2">Fee: {o.order.fee} Tk</h6>

                                                <h6>Order Status: {o.status}</h6>

                                            </div>
                                            <div className="delete-btn-div">
                                                <button onClick={() => handleDelete(o._id)} className="w-100 delete-btn"><strong>Delete Order</strong> </button>
                                            </div>
                                        </div>
                                    </div>)
                                }
                            </div>
                        </>
                }
            </div>


        </div>
    );
};

export default MyOrders;