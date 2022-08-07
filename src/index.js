import * as ReactDOM from 'react-dom';
import React from "react";
import Header from "./info/Info";
import About from "./About/About";
import './index.css';
import Interests from './Interests/Interests';
import Footer from './Footer/Footer';


function Index(){
    return(
        <div>
            <Header/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    )
}


ReactDOM.render(
    <Index/>,
    document.querySelector('#root')
    );