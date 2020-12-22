import * as React from "react";
import HelmetHelper from "../../Helpers/HelmetHelper";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

export default function About() {
    return (
        <div>
            <HelmetHelper/>
            <Navbar/>

            <section className="xs-banner-inner-section parallax-window" style= {{backgroundImage:"url('assets/image/gallery6.jpg')"}}>
                <div className="xs-black-overlay"></div>
                <div className="container">
                    <div className="color-white xs-inner-banner-content">
                        <h2 className="text-white">About Us</h2>
                        
                        <ul className="xs-breadcumb">
                            {/* <li className="badge badge-pill badge-primary"><a href="index.html" className="color-white"> </a> About</li> */}
                        </ul>
                    </div>
                </div>
            </section>


            <main className="xs-main">
                <div className="xs-video-popup-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 content-center">
                            <div className="xs-video-popup-wraper">
                                <img src="assets/image/preLOader/vidimg.png" alt=""/>
                                <div className="xs-video-popup-content">
                                    <a href="assets/image/video.mp4" className="xs-video-popup xs-round-btn">
                                        <i className="fa fa-play"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                
                <section className="xs-content-section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-11 content-center">
                            <div className="xs-heading xs-mb-100 text-center">
                                <h4 className="xs-mb-0"><strong><span className="color-green">Ruralnomics Technologies Pvt Ltd 
                                </span> </strong>is a young Ecommerce and Supply Startup with a vision to enter into the Agri Tech Industry.
A team of professionals, who thought and envisioned that Agriculture, Supply and E- Commerce is an area that could be served and serviced locally. 
This gave birth to a bootstrap strategic organization, with a clear vision to transform the E Commerce and Supply space of the North Eastern market and uplift the Agriculture Sector.</h4>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="xs-about-feature">
                                <h3>Our Mission</h3>
                                <p className="lead" style={{fontSize:"20px"}}>
                                The team of Ruralnomics strongly believes that technology will fail, if it cannot penetrate to the remotest areas. The long term vision of the company is to Organize the Unorganized Supply Market through a perfect blend of Dialogue, Technology, E-Payments ,E-Commerce and Delivery with Producers and Consumers.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="xs-about-feature">
                                <h3>Our Vission</h3>
                                <p className="lead"  style={{fontSize:"20px"}}>
                                The vision is to serve Local, by Local to Uplift Local.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="xs-about-feature">
                                <h3>Our Values</h3>
                                <ul className="xs-unorder-list play green-icon">
                                 <li style={{fontSize:"20px"}}>Reliability</li>
                                    <li style={{fontSize:"20px"}}>Positive Change</li>

                                    <li style={{fontSize:"20px"}}>Cost-effectiveness</li>
                                   
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

              

                
            <section className="xs-section-padding bg-gray">
                <div className="container">
                    <div className="xs-heading row xs-mb-60">
                        <div className="col-md-9 col-xl-9">
                            <h2 className="xs-title">Our Team</h2>
                            <p>
                                A team of harding working leaders.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row xs-mb-60">
                    <div className="col-md-6 col-lg-3">
                            <div className="xs-single-team">
                                <img src="assets/image/team/5.png" alt="" style={{width:"280px", height:"230px"}}/>
                                <div className="xs-team-content">
                                    <h4>Mr. Siddhart Das</h4>
                                    <small> Co-Founder & Director  </small>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-blue" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="xs-single-team">
                                <img src="assets/image/team/6.png" alt="" style={{width:"280px", height:"230px"}}/>
                                <div className="xs-team-content">
                                    <h4>Mrs. Chetna Sridhar</h4>
                                    <small> Co-Founder & Director  </small>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-blue" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                      
                        <div className="col-md-6 col-lg-3">
                        <div className="xs-single-team">
                                <img src="assets/image/team/4.jpg" alt="" style={{width:"290px", height:"220px"}}/>
                                <div className="xs-team-content">
                                    <h4>Mr. Ripunjoy Sonowal</h4>
                                    <small> CTO<br/>  </small>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-purple" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="xs-single-team">
                                <img src="assets/image/team/2.png" alt="" style={{width:"280px", height:"230px"}}/>
                                <div className="xs-team-content">
                                    <h4>Mr. Dharmendra Kalita</h4>
                                    <small> COO </small>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-purple" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="xs-single-team">
                                <img src="assets/image/team/3.jpg" alt="" style={{width:"280px", height:"220px"}}/>
                                <div className="xs-team-content">
                                    <h4>Mr. Mirlang Phanbuh</h4>
                                    <small>    </small>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-blue" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                        <div className="xs-single-team">
                                <img src="assets/image/team/1.jpeg" alt="" style={{width:"280px", height:"230px"}}/>
                                <div className="xs-team-content">
                                    <h4>Mr. Nirupam Chakraborty</h4>
                                    <small>   </small>
                                    <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                        <path className="fill-blue" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)"/>
                                    </svg>
                                </div>
                            </div>
                      
                        </div>
                   
                    </div>
                </div>
            </section>

       
            </main>
            <Footer/>
        </div>
    )
}