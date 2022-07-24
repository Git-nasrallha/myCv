import React from 'react';
import styled from "styled-components";
import {FaTimes,FaBars} from "react-icons/fa";
import {darkColor,grayColor} from "../../appStyle/styleVariables";
import Header from "../Header";
import About from '../about/About';
import Education from '../education/Education';
import MySkills from '../skills/MySkills';
import Services from '../services/Services';
import Portfolio from '../portfolio/Portfolio';
import Contact from '../contact/Contact';



const Main = (props) => {
    const {toggle,show,toggleAction}=props;
    return (
        <MainDiv show={show}>
            <span className="menuo-icon" onClick={toggleAction}> {toggle?<FaBars/>:<FaTimes/>} </span>
            <Header />
           <div className="container">
               <About />
               <Education />
               <MySkills />
               <Services />
               <Portfolio/>
           </div>{/* end div container */}
           <Contact />
        </MainDiv>
    )
}

export default Main;


const MainDiv=styled.div`
width:${props=>props.show==="active"?"100%":"calc(100% - 300px)"} ;
@media (min-width:1600px){
    width:${props=>props.show==="active"?"100%":"calc(100% - 500px)"}
}
float: ${props=>props.show==="active"?"none":"right"};
position:relative;
@media (max-width:991px) {
    width:100%;
    float:none;
}
    .menuo-icon{
        display: block;
        width: 40px;
        height: 40px;
        background-color:${darkColor};
        text-align: center;
        line-height: 40px;
        position:fixed;
        top:0;
        left:${props=>props.show==="active"?"0":"18%"};
        z-index:999;
        @media(max-width:350px){
            left:${props=>props.show==="active"?"75%":0}; 
        }
        @media (min-width:351px) and (max-width:576px) {
            left:${props=>props.show==="active"?"60%":0}; 
        }
        @media (min-width:578px) and (max-width:991px) {
            left:${props=>props.show==="active"?"33%":0}; 
        }
        @media (min-width:992px) and (max-width:1024px) {
            left:${props=>props.show==="active"?"0":"24%"};
        }
        @media (min-width:1600px){
            left:${props=>props.show==="active"?"0":"17%"};
        }
        svg{
            font-size: 25px;
            color: ${grayColor};
            cursor: pointer;
        }
    }    
}

`