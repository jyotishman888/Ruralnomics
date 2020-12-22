import * as React from "react";
import * as firebase from 'firebase';
import HelmetHelper from "../../Helpers/HelmetHelper";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

import { Drawer, Form, Button, Col, Row, Input, notification, DatePicker, Select} from 'antd';
import 'antd/dist/antd.css';

export default function Home({authService}) {

	const [isDrawerVisible, setIsDrawerVisible] = React.useState(false);

	const [user, setUser] = React.useState({
		name : "",
		courseOfStudy : "",
		institution : "",
		address : "",
		whatsAppNumber : "",
		email : "",
		whyJoinUs : "",
		joinDate : "",
		paymentMode : ""
	});

	const email_validator = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	const phone_validator = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

	const { name, courseOfStudy, institution, address, whatsAppNumber, email, whyJoinUs, joinDate, paymentMode } = user;

	const handleRegistration = () => {
		// console.log(name, courseOfStudy, institution, address, whatsAppNumber, email,whyJoinUs, joinDate, paymentMode)
		if(
			name !== "" &&
			courseOfStudy !== "" &&
			institution !== "" &&
			address !== "" &&
			phone_validator.test(whatsAppNumber) &&
			email_validator.test(email) &&
			whyJoinUs !== "" && joinDate!=="" && paymentMode!==""
		){
			firebase.firestore().collection("Registrations").add({
				name : name,
				courseOfStudy : courseOfStudy,
				institution : institution,
				address : address,
				whatsAppNumber : whatsAppNumber,
				email : email,
				whyJoinUs : whyJoinUs,
				joinDate : joinDate,
				paymentMode : paymentMode
			})
			.then( ()=> {
				notification["success"]({
					message: 'Registration Successfull',
					description: 'Thank you for joing with us.. We will get back to you..',
				});
				setUser({
					...user,
					name : "",
					courseOfStudy : "",
					institution : "",
					address : "",
					whatsAppNumber : "",
					email : "",
					whyJoinUs : "",
					paymentMode : "",
					joinDate : ""
				})
			})
			.catch(error => {
				notification["error"]({
					message: 'Registration Failed',
					description: `Sorry, Unable to save the data.. Please try again later..${error}`,
				});
			})
		}
		else{
			notification["warning"]({
				message: 'Typo..',
				description: 'Please check all the inputs..',
			});
		}
	}

    return (
        <div>
            <HelmetHelper/>
			<Navbar/>

			<section className="xs-welcome-slider">
				<div className="xs-banner-slider owl-carousel">
					<div className="xs-welcome-content" style={{backgroundImage: "url(assets/image/bg_1.jpg)"}}>
						<div className="container row">
							<div className="xs-welcome-wraper banner-verion-2 color-white  content-left">
							{/* <img src="assets/images/welcome-text-1.png" alt=""/> */}
								<p>LOCAL FOR LOCAL</p>
								<h2 style={{color : '#fff', fontWeight:"bold"}}>RURALNOMICS</h2>
								{/* <div className="xs-btn-wraper">
									<a  style={{color : '#00b3b3'}} onClick={ ()=>setIsDrawerVisible(true) } className="btn btn-outline-primary">
										Registration
									</a>
									<a href="javascript:;" onClick = { ()=> window.open("https://instamojo.com/@eljeffa") } className="btn btn-primary">
										<span className="badge"><i className="fa fa-heart"></i></span> Donate Now
									</a>
								</div> */}
							</div>
						</div>
						<div className="xs-black-overlay"></div>
					</div>
					<div className="xs-welcome-content" style={{backgroundImage: "url(assets/image/bg_2.jpg)"}}>
						<div className="container row">
							<div className="xs-welcome-wraper banner-verion-2 color-white  content-left">
							{/* <img src="assets/images/welcome-text-1.png" alt=""/> */}
								<p>BRIDGING THE GAP</p>
								<h2 style={{color : '#fff', fontWeight:"bold"}}>RURALNOMICS</h2>
								{/* <div className="xs-btn-wraper">
									<a  style={{color : '#00b3b3'}} onClick={ ()=>setIsDrawerVisible(true) } className="btn btn-outline-primary">
										Registration
									</a>
									<a href="javascript:;" onClick = { ()=> window.open("https://instamojo.com/@eljeffa") } className="btn btn-primary">
										<span className="badge"><i className="fa fa-heart"></i></span> Donate Now
									</a>
								</div> */}
							</div>
						</div>
						<div className="xs-black-overlay"></div>
					</div>
					<div className="xs-welcome-content" style={{backgroundImage: "url(assets/image/bg_10.jpg)"}}>
						<div className="container row">
							<div className="xs-welcome-wraper banner-verion-2 color-white  content-left">
							{/* <img src="assets/images/welcome-text-1.png" alt=""/> */}
								<p>BE THE CHANGE YOU WISH TO SEE</p>
								<h2 style={{color : '#fff', fontWeight:"bold"}}>RURALNOMICS</h2>
								{/* <div className="xs-btn-wraper">
									<a  style={{color : '#00b3b3'}} onClick={ ()=>setIsDrawerVisible(true) } className="btn btn-outline-primary">
										Registration
									</a>
									<a href="javascript:;" onClick = { ()=> window.open("https://instamojo.com/@eljeffa") } className="btn btn-primary">
										<span className="badge"><i className="fa fa-heart"></i></span> Donate Now
									</a>
								</div> */}
							</div>
						</div>
						<div className="xs-black-overlay"></div>
					</div>
					{/* <div className="xs-welcome-content" style={{backgroundImage: "url(assets/images/slider/slider_6.jpg)"}}>
						<div className="container row">
							<div className="xs-welcome-wraper banner-verion-2 color-white col-md-8 content-left">
								<p>Charity for childrens</p>
								<h2 style={{color : '#fff'}}>Hunger is stalking the globe</h2>
								<div className="xs-btn-wraper">
									<a style={{color : '#000'}} onClick={ ()=>setIsDrawerVisible(true) }className="btn btn-outline-primary">
										join us now
									</a>
									<a href="#" className="btn btn-primary">
										<span className="badge"><i className="fa fa-heart"></i></span> Donate Now
									</a>
								</div>
							</div>
						</div>
						<div className="xs-black-overlay"></div>
					</div> */}
				</div>
			</section>


			<section className="xs-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-lg-7">
							<div className="xs-feature-text-content">
								<div className="xs-heading">
									{/* <h2>About EL JEFFA FOUNDATION</h2> */}
									<h3 className="xs-title" data-title="ABOUT">About RURALNOMICS</h3>
									<span className="xs-separetor bg-bondiBlue"></span>
								</div>
								<p style={{fontSize:"20px"}}><strong><span className="color-orange">Ruralnomics Technologies Pvt Ltd 
                                </span> </strong> is a young Ecommerce and Supply Startup with a vision to enter into the Agri Tech Industry.
A team of professionals, who thought and envisioned that Agriculture, Supply and E- Commerce are areas that could be served <strong><span className="color-green">ZZ  </span> </strong>and serviced locally. 
This gave birth to a bootstrap strategic organization, with a clear vision to transform the E Commerce and Supply space of North East and uplift the Agriculture Sector.
</p>
								<a href="/about" className="btn btn-secondary bg-bondiBlue">see more</a>
							</div>
						</div>
						<div className="col-lg-5">
							<div className="xs-feature-image-box image-1">
								<img src="assets/image/home3.jpeg" alt="" style={{height:"200px", width:"280px"}}/>
							</div>
							<div className="xs-feature-image-box image-2">
								<img src="assets/image/home1.jpeg" alt="" style={{height:"250px", width:"380px"}}/>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="bg-gray waypoint-tigger xs-section-padding xs-popularCauses-v2">
				<div className="container">
					<div className="xs-heading row xs-mb-60">
						<div className="col-md-9 col-xl-9">
							<h2 className="xs-title">Our Products</h2>
							{/* <span className="xs-separetor dashed"></span> */}
							{/* <p>FundPress has built a platform focused on aiding entrepreneurs, startups, and <br/> companies raise capital from anyone.</p> */}
						</div>
						<div className="col-xl-3 col-md-3 xs-btn-wraper">
							<a href="/projects" className="btn btn-primary bg-orange">all products</a>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-md-6">
							<div className="xs-popular-item xs-box-shadow">
								<div className="xs-item-header">

									<img src="assets/image/1.jpg" alt="" style={{height:"230px", width:"500px"}}/>

									<div className="xs-skill-bar">
										{/* <div className="xs-skill-track bg-light-red">
											<p><span className="number-percentage-count number-percentage" data-value="90" data-animation-duration="3500">0</span>%</p>
										</div> */}
									</div>
								</div>
								<div className="xs-item-content">
									<ul className="xs-simple-tag xs-mb-20">
										<li><a className="color-light-red" href="#">Garden and Food</a></li>
									</ul>

									<a href="#" className="xs-post-title xs-mb-20">RunoFresh</a>

									<p className="xs-list-with-content" >
										{/* <li>$67,000<span>Pledged</span></li>
										<li><span className="number-percentage-count number-percentage" data-value="90" data-animation-duration="3500">0</span>% <span>Funded</span></li>
										<li>3<span>Days to go</span></li> */}
										As its first vision story implementation, Ruralnomics launched its first B2B and B2C product category by the name of #RunoFresh.
										RunoFresh quickly acquired its brand presence in Guwahati, Dibrughar, Patshala and Shillong.  
									</p><br/><br/><br/><a href="/projects"><h6 style={{color:'#ff0000', fontSize:'17px'}}>Learn More &#8594;</h6></a>
												
									{/* <span className="xs-separetor"></span>
									
									<div className="row xs-margin-0">
										<div className="xs-round-avatar">
											<img src="assets/images/avatar/avatar_1.jpg" alt=""/>
										</div>
										<div className="xs-avatar-title">
											<a href="/about"><span></span>-READ MORE</a>
										</div>
									</div> */}
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="xs-popular-item xs-box-shadow">
								<div className="xs-item-header">

									<img src="assets/image/2.jpg" alt="" style={{height:"230px", width:"500px"}}/>

									<div className="xs-skill-bar">
										{/* <div className="xs-skill-track bg-purple">
											<p><span className="number-percentage-count number-percentage" data-value="59" data-animation-duration="3500">0</span>%</p>
										</div> */}
									</div>
								</div>
								<div className="xs-item-content">
									<ul className="xs-simple-tag xs-mb-20">
										<li><a className="color-purple" href="#">Technology</a></li>
									</ul>

									<a href="#" className="xs-post-title xs-mb-60">RunoUtility</a>

									<p className="xs-list-with-content">
									Ruralnomics is all geared to launch its second product by the name of RuralUtility. RuralUtility .
									The vision is to provide utility services to rural, semi rural and semi urban area with the best in class home service.
									</p><br/><a href="/projects"><h6 style={{color:'#ff0000', fontSize:'17px'}}>Learn More &#8594;</h6></a>
												
									
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="xs-popular-item xs-box-shadow">
								<div className="xs-item-header">

									<img src="assets/image/3.jpg" style={{height:"240px", width:"380px"}} alt=""/>

									<div className="xs-skill-bar">
										{/* <div className="xs-skill-track bg-blue">
											<p><span className="number-percentage-count number-percentage" data-value="35" data-animation-duration="3500">0</span>%</p>
										</div> */}
									</div>
								</div>
								<div className="xs-item-content">
									<ul className="xs-simple-tag xs-mb-20">
										<li><a className="color-blue" href="#">Education</a></li>
									</ul>

									<a href="/" className="xs-post-title xs-mb-50">RunoTech</a>
									<p className="xs-list-with-content">
									RunoTech is the visionary software patented platform of Ruralnomics Technologies. This is the third product category.
									 The Platform will enable young software development professionals from the North East to be a part of the technology journey. 
									</p><a href="/projects"><h6 style={{color:'#ff0000', fontSize:'17px'}}>Learn More &#8594;</h6></a>
									
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="xs-popular-item xs-box-shadow">
								<div className="xs-item-header">

									<img src="assets/image/4.jpg" style={{height:"220px", width:"380px"}} alt=""/>

									<div className="xs-skill-bar">
										{/* <div className="xs-skill-track bg-burntOrange">
											<p><span className="number-percentage-count number-percentage" data-value="85" data-animation-duration="3500">0</span>%</p>
										</div> */}
									</div>
								</div>
								<div className="xs-item-content">
									<ul className="xs-simple-tag xs-mb-20">
										<li><a className="color-burntOrange" href="#">   </a></li>
									</ul>

									<a href="/" className="xs-post-title xs-mb-50">RunoStandUp </a>

									<p className="xs-list-with-content">
									RunoStandUP is a platform to enable and promote young startup entrepreneurs through a series of short and long term venture funding.
									 The platform will enable them to reach out to short term seed funding and long term venture capitalist of North East .
									</p><a href="/projects"><h6 style={{color:'#ff0000', fontSize:'17px'}}>Learn More &#8594;</h6></a>
									
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="xs-popular-item xs-box-shadow">
								<div className="xs-item-header">

									<img src="assets/image/5.jpg" style={{height:"220px", width:"500px"}} alt=""/>

									<div className="xs-skill-bar">
										{/* <div className="xs-skill-track bg-riptide">
											<p><span className="number-percentage-count number-percentage" data-value="74" data-animation-duration="3500">0</span>%</p>
										</div> */}
									</div>
								</div>
								<div className="xs-item-content">
									<ul className="xs-simple-tag xs-mb-20">
										<li><a className="color-riptide" href="#">Awareness</a></li>
									</ul>

									<a href="/" className="xs-post-title xs-mb-30">RunoAgri</a>
									
									<p className="xs-list-with-content">
									RunoAgri is a very unique OTT and Predictive Platform for organic farming. The product will work as a strong integration between farmers, 
									State Bodies, International Councils  and Sensor based App to help farmers and organic producers with predictive data to improve productivity.
									</p><a href="/projects"><h6 style={{color:'#ff0000', fontSize:'17px'}}>Learn More &#8594;</h6></a>
									
								</div>
							</div>
						</div>

						<div className="col-lg-4 col-md-6">
							<div className="xs-popular-item xs-box-shadow">
								<div className="xs-item-header">

									<img src="assets/image/runofarm.jpeg" style={{height:"220px", width:"380px"}} alt=""/>

									<div className="xs-skill-bar">
										{/* <div className="xs-skill-track bg-orange">
											<p><span className="number-percentage-count number-percentage" data-value="100" data-animation-duration="3500">0</span>%</p>
										</div> */}
									</div>
								</div>
								<div className="xs-item-content">
									<ul className="xs-simple-tag xs-mb-30">
										<li><a className="color-orange" href="#">Environment</a></li>
									</ul>

									<a href="/" className="xs-post-title xs-mb-50">RunoFarm</a>

									<p className="xs-list-with-content">
									RunoFarm is a unique farm utility product that will enable farmer to get an access to the latest farm equipment nationally or internationally, through our RunoFarm Platform.
									</p><br/><a href="/projects"><h6 style={{color:'#ff0000', fontSize:'17px'}}>Learn More &#8594;</h6></a>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="xs-section-padding">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-lg-6">
							<div className="xs-text-content xs-pr-20">
								<h1 className="color-navy-blue">Ruralnomics Vision</h1>
								{/* <p>The CharityPress community was named a “Top 25 Best Global Philanthropist” by Barron’s. We beat Oprah. And, Mashable named CharityPress something like “the best place to raise money online for your favorite causes.”</p> */}
								<blockquote>
								<h2>The vision is “For Local, By Local”.</h2>
								</blockquote>
								{/* <a href="javascript:;" onClick = { ()=> window.open("https://instamojo.com/@eljeffa") } className="btn btn-primary bg-light-red">
									<span className="badge"><i className="fa fa-heart"></i></span> Donate Now
								</a> */}
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div className="xs-feature-image">
								<img src="assets/image/111.jpeg" style={{borderRadius:12 ,boxShadow:"13px 10px 5px #aaaaaa"}} alt=""/>
							</div>
						</div>
						<div className="col-md-6 col-lg-3">
							<div >
								<img src="assets/image/222.jpeg" style={{borderRadius:12 ,boxShadow:"13px 10px 5px #aaaaaa"}} alt=""/>
							</div>
						</div>
					</div>
				</div>
			</section>

		



			<section className="xs-section-padding">
			
				<Drawer
					title="Regration Fields.."
					width="100%"
					onClose={ ()=> setIsDrawerVisible(false) }
					visible={ isDrawerVisible }
					bodyStyle={{ paddingBottom: 80 }}
				>
					<Form layout="vertical" hideRequiredMark>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									label="Name"
								>
								<Input 
									value = {name}
									onChange = { event => setUser({...user, name : event.target.value}) }
									placeholder="Please enter your name" 
								/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									label="Course Of Study"
								>
								<Input 
									value = { courseOfStudy }
									onChange = { event => setUser({...user, courseOfStudy : event.target.value}) }
									placeholder="Please enter course of study" 
								/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									label="Institution"
								>
								<Input 
									value = { institution }
									onChange = { event => setUser({...user, institution : event.target.value}) }
									placeholder="Please enter your institution name" 
								/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									label="Place where you'd carry out the activities "
								>
								<Input 
									value = {address}
									onChange = { event => setUser({...user, address : event.target.value}) }
									placeholder="Please enter place where you would carry out the activities " 
								/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									label="WhatsApp Number"
								>
								<Input 
									value = { whatsAppNumber }
									onChange = { event => setUser({...user, whatsAppNumber : event.target.value}) }
									placeholder="Please enter your whatsapp number without country code" 
								/>
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									label="Email"
								>
								<Input 
									value = { email }
									onChange = { event => setUser({...user, email : event.target.value}) }
									placeholder="Please enter email id" 
								/>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									label="Date of Joining"
								>
								<Input
									type="date" 
									value = { joinDate }
									onChange = { event => setUser({...user, joinDate : event.target.value}) }
								 />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									label="Mode of Payment "
								>
								<select 
									style={{width:"100%", height:30}}
									value={paymentMode}
									onChange = { event => setUser({...user, paymentMode : event.target.value}) }
								>
									<option >Online</option>
									<option >Offline</option>
								</select>
								</Form.Item>
							</Col>
						</Row>
						<Row gutter={16}>
							<Col span={24}>
								<Form.Item
									label="Why Do You Choose To Volunteer For This Organisation? "
								>
									<Input.TextArea 
										value = {whyJoinUs}
										onChange = { event => setUser({...user, whyJoinUs : event.target.value}) }
										rows={4} 
										placeholder="Describe Here " 
									/>
								</Form.Item>
							</Col>
						</Row>
						<Button
							type = "primary"
							block
							onClick = { ()=> handleRegistration() }
						>
							Submit
						</Button>
					</Form>
					<br/>
					<h1>NOTE : </h1>
					You can pay the one time MEMBERSHIP FEE of Rupees 100 either online or offline.We will soon contact you once the payment is received.
					<br/><br/>
					<a href="javascript:;" 
					 onClick = {()=> window.open("https://instamojo.com/@eljeffa")}
					 className="btn btn-primary bg-light-red">Pay Online</a> 
					</Drawer>
			</section>
			
			<Footer/>
        </div>
    )
}