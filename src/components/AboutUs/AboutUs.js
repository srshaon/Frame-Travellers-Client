import './AboutUs.css';
import React from 'react';

const AboutUs = () => {
    return (
        <div id="aboutus" className="about-us-section">
            <div >
                <hr style={{ fontSize: '40px', fontWeight: '800', borderTop: '10px dashed' }} className="mb-1 mt-1" />
                <h4 style={{ backgroundColor: '#FFFCEF' }} className="about-us-section-header p-1">About Frame Travellers</h4>
                <hr style={{ fontSize: '40px', fontWeight: '800', borderBottom: '10px dashed' }} className="mt-2" />
            </div>
            <div className="inner-div-about-us container " >

                <div className="row about-us-row-container">
                    <div className="col ">
                        <p className="justify-text"><strong>Frame Travellers</strong> is a full-service Outbound Tour Operator in Bangladesh. The founder of <strong>Frame Travellers</strong> is a 100% tourism professional with knowledge of most of the destinations and services in the world for people to enjoy. Our specialized departments with expertise offer a variety of services. Each department works independently to provide the best services to our customers &amp; clients and become the best travel agency in Bangladesh, focusing on creating friendship and a long-lasting relationship with our beloved clients. In the year 2011, we decided to create a tour company by the name <strong>Frame Travellers</strong> to specialize in the receptive tourism market and to achieve the title of the best tours and travel company in Bangladesh. In this regard, we have contracts and alliances with most of the hotels, tourist organizations &amp; companies in most of the countries around the world that help us provide the best quality service to our clients. Therefore, we investigate every single detail of your trip, to ensure each sector has all the ingredients to satisfy our clients and help us become the best tour operator in Bangladesh. </p>
                    </div>
                    <div className="col  m-0 p-0 ">
                        <img className="w-75 h-75 img-fluid mt-5" src="https://i.ibb.co/2sHnkkw/imageedit-10-2927782581.png" alt="" />
                    </div>

                </div>

            </div>
            <div className="inner-div-about-us container " >

                <div className="row about-us-row-container-reverse">
                    <div className="col m-0 p-0 pe-3 ">
                        <img className="mt-5 w-75 h-75 img-fluid" src="https://i.ibb.co/RYLFXJ8/imageedit-1-3839478353.png" alt="" />
                    </div>
                    <div className="col">
                        <p className="justify-text">Our <strong>Vision</strong> is to dominate the tourism industry by excellence in service with innovation &amp; creative concepts in the global marketplace for our clients that will help us achieve the title of best travel agency in Bangladesh. &nbsp;</p>
                        <p className="justify-text">
                            To provide our clients with unforgettable travel experiences with guaranteed more than satisfactory services that exceed the level of their expectations is our company's only <strong>Mission.</strong> &nbsp;</p>
                        <p className="justify-text">Our <strong>Service</strong> includes professional customer consultation providing hassle-free travel and journey. Creative but determined approach to search for the most appropriate travel arrangements and accommodations and identifying the best possible values. Our travel consultants are friendly, polite, professional, and experienced in accommodating both the seasoned traveler and those who are new to the world of travel.&nbsp;</p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default AboutUs;