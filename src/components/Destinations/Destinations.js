import './Destinations.css';
import React from 'react';

const Destinations = () => {
    return (
        <div id="destinations">
            <div className="" >
                <hr style={{ fontSize: '40px', fontWeight: '800', borderTop: '10px dashed' }} className="mb-1 mt-1" />
                <h4 style={{ color: '#112D4E' }}>Our Wide Range Of Destinations</h4>
                <hr style={{ fontSize: '40px', fontWeight: '800', borderBottom: '10px dashed' }} className="mt-2 mb-0" />
            </div>
            <div className="p-0 m-0 mb-2 destination-section">
                <div className="destination-single-card" >
                    <img className="img-thumbnail img-fluid" src="https://i.ibb.co/bgdbvX7/Bangladesh.png" alt="" />
                    <h6>Bangladesh</h6>
                </div>
                <div className="destination-single-card" >
                    <img className="img-thumbnail img-fluid" src="https://i.ibb.co/9WqjpBn/India.png" alt="" />
                    <h6>India</h6>
                </div>
                <div className="destination-single-card" >
                    <img className="img-thumbnail img-fluid" src="https://i.ibb.co/THN7gFN/Bhutan.png" alt="" />
                    <h6>Bhutan</h6>
                </div>
                <div className="destination-single-card" >
                    <img className="img-thumbnail img-fluid" src="https://i.ibb.co/WgHVkDd/Dubai.png" alt="" />
                    <h6>Dubai</h6>
                </div>
                <div className="destination-single-card" >
                    <img className="img-thumbnail img-fluid" src="https://i.ibb.co/x5QmfnN/Thailand-1.png" alt="" />
                    <h6>Thailand</h6>
                </div>
                <div className="destination-single-card" >
                    <img className="img-thumbnail img-fluid" src="https://i.ibb.co/KqpnZxN/Maldives.png" alt="" />
                    <h6>Maldives</h6>
                </div>
            </div>
            <div className="destination-section">
                <div className="destination-single-card" >
                    <img className="img-thumbnail img-fluid" src="https://i.ibb.co/mChh1JQ/France.png" alt="" />
                    <h6>France</h6>
                </div>
                <div className="destination-single-card" >
                    <img className="img-thumbnail img-fluid" src="https://i.ibb.co/D1VvMF0/Italy.png" alt="" />
                    <h6>Italy</h6>
                </div>
                <div className="destination-single-card" >
                    <img className="img-thumbnail img-fluid" src="https://i.ibb.co/wL4YKsX/Germany.png" alt="" />
                    <h6>Germany</h6>
                </div>
                <div className="destination-single-card" >
                    <img className="img-thumbnail img-fluid" src="https://i.ibb.co/gDXtv9T/Switzerland.png" alt="" />
                    <h6>Switzerland</h6>
                </div>
                <div className="destination-single-card" >
                    <img className="img-thumbnail img-fluid" src="https://i.ibb.co/N3K8wPL/Japan.png" alt="" />
                    <h6>Japan</h6>
                </div>
                <div className="destination-single-card" >
                    <img className="img-thumbnail img-fluid" src="https://i.ibb.co/NmGVDyK/Egypt.png" alt="" />
                    <h6>Egypt</h6>
                </div>
            </div>
            <hr style={{ fontSize: '40px', fontWeight: '800', borderTop: '10px dashed' }} className="mb-1 mt-1" />
            <h4 style={{ color: '#112D4E' }}>And Many More.....Please Call For Details</h4>
            <hr style={{ fontSize: '40px', fontWeight: '800', borderBottom: '10px dashed' }} className="mt-2 mb-0" />
        </div>
    );
};

export default Destinations;