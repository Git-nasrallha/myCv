import React from 'react';
import styled from "styled-components";
import Particles from "react-particles-js";
import Zoom from 'react-reveal/Zoom';
import Typed from "react-typed";
import {CgChevronDoubleDownO} from "react-icons/cg";
import Scroll from "react-scroll";
import slide1 from "../assites/bg2.jpg";
import {mainColor,grayColor,moveToggle} from "../appStyle/styleVariables";


let scroll = Scroll.animateScroll;


const Header = () => {
    return (
        <HeadeContent bg={slide1} id="home" >
            
            <Particles 
               params={{
                particles: {
                   number:{
                       value:30,
                       density:{
                           enable:true,
                           value_area:500
                       }
                   },
                   shape: {
                    type: 'circle',
                    stroke:{
                        width:6,
                        color:`${mainColor}`
                    }
                    
                }
                }
            }} />
           <div className="header-content">
               <Zoom> <h1>welcome in my website</h1> </Zoom>
               <Typed
                    strings={[
                            'This site helps introduce myself',
                            'Provides a brief summary of my education',
                            'Provides an overview of my skills',
                            'It displays some of my work and my accomplishments'
                        ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                />
           </div>
           <div className="get-start" title="Get Start">
                <CgChevronDoubleDownO onClick={()=>scroll.scrollTo(630)}/>
           </div>
        </HeadeContent>
    )
}

export default Header;

const HeadeContent=styled.div`
height:100vh;
position:relative;
padding:0;margin:0;
background-image:linear-gradient(45deg, black, transparent),url(${props=>props.bg}) ;
background-size:cover;
display:flex;
flex-direction: column;
align-items: center;
justify-items: center;

    .tsparticles-canvas-el{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 2;
    }
    .header-content{
        text-transform:capitalize;
        position:absolute;
        text-align:center;
        top:30%;
        left:40%;
        width:100%;
        transform:translate(-40%);
        
        h1{
            color:${mainColor};
            font-size:50px;
            background-color:rgba(2,2,2,.4);
            padding:10px;
            border-radius:10px;
            margin-bottom:30px;
            @media(max-width:576px){
                font-size:25px;
            }
        }
        span{
            color: ${grayColor};
            font-size: 25px;
            text-transform: capitalize;
            @media(max-width:576px){
              font-size:18px;
            }
        }
    }
    .get-start{
        position:absolute;
        bottom:20px;
        z-index:100;
        svg{
            font-size:35px;
            cursor: pointer;
            color:${mainColor};
            transition:all 3s linear;
            animation:${moveToggle} 3s linear infinite;
        }
    }

`
