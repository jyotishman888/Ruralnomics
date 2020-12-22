import * as React from "react";
import HelmetHelper from "../../Helpers/HelmetHelper";
import {BellFilled} from '@ant-design/icons';

import { Menu, Dropdown, Modal, Tag, List, Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'
import { Spin } from 'antd';

import * as firebase from "firebase";

export default function Navbar() {

	const [notifications, setNotifications] = React.useState([]);

    const loadNotifications = () => {
        firebase.firestore().collection('Notifications').get()
            .then( response => {
                const notifications = [];
                // console.log(response)
                response.forEach( notification => {
                    // console.log("NN...",notification.data())
                    const notice = notification.data();
                    notifications.push(notice);
                })
                setNotifications(notifications);
                // console.log(notifications);
            })
            .catch(error => console.log(error))
    };

	React.useEffect(() => {
        loadNotifications();
    }, []);

	const menus = (
		<List
			itemLayout="horizontal"
			dataSource={ notifications }
			renderItem={item => (
			<List.Item style={{margin :20, width:"300px"}}>
				<List.Item.Meta
					avatar={<Avatar src="assets/image/bell.jpg" />}
					title={<a href="https://ant.design">{item.notification}</a>}
					description={item.date}
				/>
			</List.Item>
			)}
		/>
	  );


    return (
        <div>
            <HelmetHelper/>
            <div id="preloader" style={{backgroundColor:"rgb(0, 230, 230)"}}>
				<div className="spinner" >
					<Spin/>
				</div>
			</div>

			{/* <div className='colors' >
				<a href="#" className="btn btn-primary panel_opener"><i className="fa fa-gear"></i></a>
				<div className="colors_panel">
					<h5>Colors</h5>
					<a className='color-1' data-val='color-1' href='#' ></a>
					<a className='color-2' data-val='color-2' href='#' ></a>
					<a className='color-3' data-val='color-3' href='#' ></a>
					<a className='color-4' data-val='color-4' href='#' ></a>
					<a className='color-5' data-val='color-5' href='#' ></a>
					<a className='color-6' data-val='color-6' href='#' ></a>
					<a className='color-7' data-val='color-7' href='#' ></a>
				</div>
			</div> */}

			<div className="xs-top-bar top-bar-second">
				<div className="container clearfix">
					<ul className="xs-top-social">
						<li><a href="https://www.facebook.com/ruralnomics/?hc_ref=ARSWwMA_3yNAR0wBmk6Zaj-TNJSNP_cXsWUfpDVsMuQHoTFdH16QuhW4-wt1Oa01QBc&ref=nf_target"><i className="fa fa-facebook"></i></a></li>
						{/* <li><a href="/"><i className="fa fa-twitter"></i></a></li> */}
						<li><li><a href="javascript:;" onClick={()=> window.open("https://www.instagram.com/ruralnomics/")} className="color-dribbble"><i className="fa fa-instagram"></i></a></li></li>
						<li>
							<Dropdown overlay={menus}>
								<a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
									<BellFilled/>
								</a>
							</Dropdown>
						</li>

						{/* <li><a href="#"><i className="fa fa-wordpress"></i></a></li>
						<li><a href="#"><i className="fa fa-slack"></i></a></li> */}
					</ul>
					<a href="mailto:eljeffaf@gmail.com" className="xs-top-bar-mail"><i className="fa fa-envelope-o"></i>jyotishman.parasar8496@gmail.com</a>
				</div>
			</div>
			<header className="xs-header xs-fullWidth">
				<div className="container">
					<nav className="xs-menus">
						<div className="nav-header">
							<div className="nav-toggle"></div>
							<a href="/" className="xs-nav-logo" style={{  }}  >
								<img style={{width:"30%", height:"50%", borderRadius : 20}} src="assets/image/preLOader/logo_1.png" alt=""/>
							</a>
						</div>
						<div className="nav-menus-wrapper row">
							<div className="xs-logo-wraper col-lg-3">
								<a className="nav-brand" href="/">
									<img style={{width:"20%", height:"60%", borderRadius : 25}} src="assets/image/preLOader/logo_1.png" alt=""/>
								</a>
							</div>
							<div className="col-lg-9">
								<ul className="nav-menu">
									
									<li><a href="/">Home</a>
									</li>
									<li><a href="/about">About</a></li>
									<li><a href="/projects">Products</a></li>
									{/* <li><a href="/gallery">Gallery</a></li> */}
									<li><a href="/blog">Blogs</a></li>
									<li><a href="/contact">Contact</a></li>
									
								</ul>
							</div>
						</div>
					</nav>
				</div>
			</header>
        </div>
    )
}