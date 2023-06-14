import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://frame-travellers.onrender.com/packages')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    if (services.length === 0) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <div id="services" className="services-section">
            <hr style={{ fontSize: '40px', fontWeight: '800', borderTop: '10px dashed' }} className="mb-1 mt-1" />
            <h4 className="services-section-header">Our Top Packages</h4>
            <hr style={{ fontSize: '40px', fontWeight: '800', borderBottom: '10px dashed' }} className="mt-2" />
            <div className="services-container">


                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }


            </div>
        </div>
    );
};

export default Services;