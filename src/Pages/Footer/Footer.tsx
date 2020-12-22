import * as React from "react";
import HelmetHelper from "../../Helpers/HelmetHelper";
import {Modal, Button } from 'antd';
import 'antd/dist/antd.css';


export default function Footer() {
    const [Modalvisible, setModalvisible] = React.useState(false)

    
    return (
        <div>
            <HelmetHelper/>
            <footer className="xs-footer-section">
                <div className="container">
                    <div className="xs-footer-top-layer">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 footer-widget xs-pr-20">
                                <a href="/" className="xs-footer-logo">
                                    <img style={{width:"50%", height:"50%", borderRadius : 25}} src="assets/image/preLOader/logo_1.png"alt=""/>
                                </a>
                                <p>Ruralnomics vision is to serve Local, by Local to Uplift Local. </p>
                                <ul className="xs-social-list-v2">
                                    <li><a href="javascript:;" onClick = { ()=> window.open("https://www.facebook.com/ruralnomics/?hc_ref=ARSWwMA_3yNAR0wBmk6Zaj-TNJSNP_cXsWUfpDVsMuQHoTFdH16QuhW4-wt1Oa01QBc&ref=nf_target") } className="color-facebook"><i className="fa fa-facebook"></i></a></li>
                                    {/* <li><a href="#" className="color-twitter"><i className="fa fa-twitter"></i></a></li> */}
                                    <li><a href="javascript:;" onClick={()=> window.open("https://www.instagram.com/ruralnomics/")} className="color-dribbble"><i className="fa fa-instagram"></i></a></li>
                                    {/* <li><a href="#" className="color-pinterest"><i className="fa fa-pinterest"></i></a></li> */}
                                </ul>
                            </div>
                            {/* <div className="col-lg-2 col-md-6 footer-widget">
                                <h3 className="widget-title">Short Links</h3>
                                <ul className="xs-footer-list">
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/gallery">Gallery</a></li>
                                    <li><a href="/projects">Projects</a></li>
                                    <li><a href="/blog">Board</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div> */}
                         
                            <div className="col-lg-4 col-md-6 footer-widget">
                                <h3 className="widget-title">Guwahati Office</h3>
                                <ul className="xs-info-list">
                                    <li><i className="fa fa-home bg-red"></i>Guwhati, Assam, India.</li>
                                    <li><i className="fa fa-phone bg-green"></i>+91 9957552828 </li>
                                    <br/>
                                    <li><i className="fa fa-envelope-o bg-blue"></i><a >jyotishman.parasar8496@gmail.com</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-widget">
                                <h3 className="widget-title">Shillong Office</h3>
                                <ul className="xs-info-list">
                                    <li><i className="fa fa-home bg-red"></i>Lachumiere, Shillong, Meghalaya.<br/> 793001.</li>
                                    <li><i className="fa fa-phone bg-green"></i>+91 9957552828 </li>
                                    <br/>
                                    <li><i className="fa fa-envelope-o bg-blue"></i><a >jyotishman.parasar8496@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="xs-copyright">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="xs-copyright-text" >
                                    <p> With love from 
                                        <a style={{fontWeight:"bold", color:"white"}} onClick={() => setModalvisible(true)}> 
                                        &nbsp; Morning Code </a></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                {/* <nav className="xs-footer-menu">
                                    <ul>
                                        <li><a href="/about">About</a></li>
                                        <li><a href="/projects">Projects</a></li>
                                        <li><a href="/contact">Support</a></li>
                                    </ul>
                                </nav> */}
                                <div>
                                    <Modal
                                        title="Morning Code"
                                        visible={ Modalvisible }
                                        onCancel={ ()=> setModalvisible(false) }
                                        onOk = { ()=> setModalvisible(false) }
                                    >
                                        <p>Email : jyottshman.parasar8496@gmail.com</p>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xs-back-to-top-wraper">
                    <a href="/" className="xs-back-to-top"><i className="fa fa-angle-up"></i></a>
                </div>
            </footer>	
        </div>
    )
}