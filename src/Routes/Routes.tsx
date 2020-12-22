import {compose} from "redux";
import {map, mount, route, withView} from "navi";
import {View} from "react-navi";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home/Home";
import React from "react";
import About from "../Pages/About/About";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import Blog from "../Pages/Blog/Blog";
import Gallery from "../Pages/Gallery/Gallery";

export default compose<any>(
    withView((request, context: any, arg) => <Layout authService={context.authService}>
        <View />
    </Layout>),
    mount({
        '/': map((request, context: any) => route({
            title: 'Home',
            view: <Home authService={context.authService} />
        })),
        '/about': map((request, context: any) => route({
            title: 'About',
            view: <About/>
        })),
        '/contact' : map((request, context:any) => route({
            title:'Contact',
            view : <Contact/>
        })),
        '/projects' : map((request, context:any) => route({
            title:'Projects',
            view : <Projects/>
        })),
        '/blog' : map((request, context:any) => route({
            title:'Blog',
            view : <Blog/>
        })),
        'gallery' : map((request, context:any) => route({
            title:'Gallery',
            view : <Gallery/>
        }))
    })
)




