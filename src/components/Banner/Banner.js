import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div >

            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/qxBgHVm/pexels-porapak-apichodilok-346885.jpg" className="img-fluid d-block w-100" alt="..." />
                        <div style={{ marginBottom: '100px' }} className="carousel-caption d-block ">
                            <h2>Welcome to Frame Travellers</h2>
                            <h5 style={{ fontWeight: '700' }}>Your Journey, Our Frames.</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/j6RLX0Y/pexels-andrei-tanase-1271619-min.jpg" className="img-fluid d-block w-100" alt="..." />
                        <div style={{ marginBottom: '100px' }} className="carousel-caption d-block ">
                            <h2>Welcome to Frame Travellers</h2>
                            <h5 style={{ fontWeight: '700' }}>Your Journey, Our Frames.</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/n0yxnJP/pexels-asad-photo-maldives-1024960-1.jpg" className="img-fluid d-block w-100" alt="..." />
                        <div style={{ marginBottom: '100px' }} className="carousel-caption d-block ">
                            <h2>Welcome to Frame Travellers</h2>
                            <h5 style={{ fontWeight: '700' }}>Your Journey, Our Frames.</h5>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/pPzf4ty/pexels-helena-lopes-4453153.jpg" className="img-fluid d-block w-100" alt="..." />
                        <div style={{ marginBottom: '100px' }} className="carousel-caption d-block ">
                            <h2>Welcome to Frame Travellers</h2>
                            <h5 style={{ fontWeight: '700' }}>Your Journey, Our Frames.</h5>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;