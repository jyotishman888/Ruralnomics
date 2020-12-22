import * as React from "react";
import HelmetHelper from "../../Helpers/HelmetHelper";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import * as firebase from "firebase";
import "../Firebase/Firebase";

import { notification } from 'antd';
import 'antd/dist/antd.css';

export default function Contact() {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");


    const onSubmit = (name, email, message) => {

        const db = firebase.firestore();

        if (name!="" && email!="" && message!="")
        {
            db.collection("Contacts")
            .add({
                name,
                email,
                message,
            })
            .then(() =>{
                notification["success"]({
                    message: 'Successfully Sent',
                    description:
                        'Thanks for contacting us. We will get back to you soon..',
                });
                setName("");
                setEmail("");
                setMessage("")
            })
            .catch(error => {
                notification["error"]({
                    message: 'Sending Failed',
                    description:
                        'Ooppss!! Something went wrong!!',
                });
                console.log("error")
            })
        }
        notification["error"]({
            message: 'Sending Failed',
            description:
                'Fill up all the fields!',
        });
    }

    return (
        <div>
            <HelmetHelper/>
            <Navbar/>

            <section className="xs-banner-inner-section parallax-window" style={{backgroundImage:"url('assets/image/2.jpg')"}}>
                <div className="xs-black-overlay"></div>
                <div className="container">
                    <div className="color-white xs-inner-banner-content">
                        <h2 className="text-white">Contact Us</h2>
                    </div>
                </div>
            </section>


            <main className="xs-main">
                <section className="xs-contact-section-v2">
                <div className="container">
                    <div className="xs-contact-container col-lg-10">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="xs-contact-form-wraper">
                                    <h4>Drop us a line</h4>
                                    <form action="#" method="POST" id="xs-contact-form" className="xs-contact-form contact-form-v2">
                                        <div className="input-group">
                                            <input type="text"
                                             className="form-control" 
                                             placeholder="Enter Your Name"
                                             onChange = {e => setName(e.target.value)}
                                             value={name}
                                             />
                                            <div className="input-group-append">
                                                <div className="input-group-text"><i className="fa fa-user"></i></div>
                                            </div>
                                        </div>
                                        <div className="input-group">
                                            <input type="email"
                                            className="form-control" 
                                            placeholder="Enter Your Email"
                                            onChange = {e => setEmail(e.target.value)}
                                            value={email}
                                            />
                                            <div className="input-group-append">
                                                <div className="input-group-text"><i className="fa fa-envelope-o"></i></div>
                                            </div>
                                        </div>
                                        <div className="input-group massage-group">
                                            <textarea name="massage" placeholder="Enter Your Message....." 
                                            className="form-control"
                                            onChange = {e => setMessage(e.target.value)}
                                            value={message}
                                            />
                                            <div className="input-group-append">
                                                <div className="input-group-text"><i className="fa fa-pencil"></i></div>
                                            </div>
                                        </div>
                                        <button className="btn btn-success" type="submit" 
                                         onClick = {() => onSubmit(name, email, message)}
                                        >submit</button>
                                    </form>
                                </div>
                            </div> 
                            <div >
                                <div className="xs-maps-wraper map-wraper-v2">
                                    <div id="xs-map" style={{marginTop:"14%"}}>
                                        <div className="col-8">
                                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7001.8088448145745!2d77.30490984478608!3d28.66258034342269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sH.NO-A-155T%2FF%20SURAJMAL%20VIHAR%20DELHI-110092!5e0!3m2!1sen!2sin!4v1592841656835!5m2!1sen!2sin" width="300" height="320" ></iframe> */}
                                    </div>
                                    </div>
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