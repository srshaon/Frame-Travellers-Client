import './AllOrders.css';
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';

const AllOrders = () => {
    const [allorders, setAllorders] = useState([]);
    useEffect(() => {
        fetch('https://immense-waters-81746.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setAllorders(data))
    }, [])
    console.log(allorders);
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
    const handleConfirm = (id) => {
        console.log(id);
        // const newStatus = { status: 'confirmed' };
        // console.log(newStatus);
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `https://immense-waters-81746.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'put'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Order Confirmed Successfully')

                        fetch('https://immense-waters-81746.herokuapp.com/orders')
                            .then(res => res.json())
                            .then(data => setAllorders(data))
                    }
                })
        }
    }
    if (allorders.length === 0) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div className="py-4">
            <hr style={{ fontSize: '40px', fontWeight: '800', borderTop: '10px dashed' }} className="mb-1 mt-1" />
            <h4>Total Orders of All User: {allorders.length}</h4>
            <hr style={{ fontSize: '40px', fontWeight: '800', borderBottom: '10px dashed' }} className="m-0 mt-2" />
            <div className="mt-2 my-order-map-container px-3">
                {
                    allorders.map(o => <div className="pb-4  single-my-order-container" >
                        <div className="single-my-order-div">
                            <div className="d-flex flex-column">

                                <img src={o.order.img} alt="" className="w-100 img-fluid" />
                                <h6 className="ps-2 pt-2">Package Name: {o.order.name}</h6>
                                <h6 className="ps-2 pt-2">Fee: {o.order.fee} Tk</h6>

                                <h6>Order Status: {o.status}</h6>

                            </div>
                            <br />
                            <div className="delete-btn-div">
                                {o.status === 'pending' ?
                                    <button onClick={() => handleConfirm(o._id)} className="w-100 delete-btn mb-3"><strong>Confirm Order</strong></button> : <></>}
                                <div>

                                    <button onClick={() => handleDelete(o._id)} className="w-100 delete-btn"><strong>Delete Order</strong> </button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AllOrders;