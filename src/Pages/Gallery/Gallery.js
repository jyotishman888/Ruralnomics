
import React, {useState, useEffect} from 'react'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import "../Firebase/Firebase";
import * as firebase from "firebase";
import M from "materialize-css";

export default function GalleryHelper() {


    const [images, setImages] = useState([]);

    const loadAllImages = () => {
        firebase.firestore().collection("Images").get()
            .then( snapshot => {
                const images = []
                snapshot.forEach( doc => {
                    const data = doc.data();
                    // console.log("DATA : ", doc)
                    images.push(data.url);
                    console.log(data)
                })
                setImages(images)
                console.log(`snapshot  ${snapshot}`)
                // console.log(snapshot)
                console.log(images)
            })
            .catch(error => console.log(error))
    }


   useEffect(() => {
       loadAllImages()
   }, [])


const displayImage = () => {
  
        return(
            images.map( (imge, index) => (
                <div>
                <div className="card" key={index} style={{borderRadius:17 ,marginBottom:"10px", marginTop:"14px",backgroundColor:"black" ,marginRight:"19px",  boxShadow:"10px 10px 5px #aaaaaa"}}>
                    <div className="card-image" >
                        <a href={imge} className="xs-single-portfolio-item xs-image-popup">
                            <img src={imge} style={{ height : 300, borderRadius : 18, width:320 }}/>
                            <div className="xs-portfolio-content">
                                <span className="icon-plus-button"></span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            ))
        );
    
    }



return(
    <div>
    <Navbar/>
        <section className="xs-banner-inner-section parallax-window" style={{backgroundImage:"url('assets/image/memory.jpeg')"}}>
            <div className="xs-black-overlay"></div>
            <div className="container">
                <div className="color-white xs-inner-banner-content">
                    <h2 className="text-white">Gallery</h2>
                    <p>Memories made so far</p>
                </div>
            </div>
        </section>
        <div style={{alignItems:"center",alignSelf:"center",marginBottom:"10px",marginLeft:"7%",  alignContent:"center", alignItems:"center", justifySelf:"center"}}>
            <div className="col s12 m6"  >
                <div  className="row" >
                    {
                        images.length > 0 ? displayImage() : <div><h1>Loading....</h1></div>
                    }
                </div>
            </div>
        </div>
    <Footer/>
    </div>
)
};
