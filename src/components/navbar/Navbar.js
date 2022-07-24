import React from 'react';
import styled from "styled-components";
import {Link} from "react-scroll";
import myImage from "../../assites/myPhoto.jpg";
import {mainColor,darkColor,grayColor,lightColor} from "../../appStyle/styleVariables";

const NavbarLink=({to,lable})=>{
    return <>
        <li> 
            <Link
                activeClass="active"
                to={to}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
            >
                {lable}
            </Link>
        </li>    
    </>
};

const Navbar = (props) => {
    const {show}=props;
    return (
        <NavSide show={show}>
           
            {/*my photo */}
            <div className="myPhoto">
                <img src={myImage} className="img-fluid rounded-circle" alt="profile" />
                <h5>Mohamed Nasrallah Nasrallah </h5>
            </div>
            {/* navbar links */}
            <nav>
                <ul className="list-unstyled links">
                    <NavbarLink to="home" lable="Home"/>
                    <NavbarLink to="about" lable="About me"/>
                    <NavbarLink to="education" lable="my Eduction"/>
                    <NavbarLink to="skills" lable="my skills"/>
                    <NavbarLink to="services" lable="services"/>
                    <NavbarLink to="protfolio" lable="portfolio"/>
                    <NavbarLink to="contact" lable="contact me"/>
                </ul>    
            </nav>
        </NavSide>
    )
}

export default Navbar;

const NavSide=styled.div`
width:300px;
height:100vh;
background-color:${darkColor};
position:fixed;
top:0;
left:${props=>props.show==="active"?"-300px":0};
text-align:center;
display:flex;
flex-direction: column;
align-items: center;
justify-items: center;
transition:all .4s linear;
overflow:auto;
@media (max-width:991px) {
    width:300px;
    left:${props=>props.show==="active"?0:"-300px"};
    z-index:999;
}
@media (min-width:1600px){
    width:500px;
    left:${props=>props.show==="active"?"-500px":0};
}
    .myPhoto{
        width:200px;
        height:200px;
        border:2px solid ${mainColor};
        border-radius:50%;
        position:relative;
        margin-top:30px;
        margin-bottom:70px;
        padding:3px;
        background-color:${lightColor};
        overflow:heddine;
        img{
            box-shadow:5px 5px 10px rgba(${mainColor},.5),
            -5px -5px 10px rgba(${mainColor},.5);
            transform:scale(1);
            -webkit-transition:all 1s ease-in-out;
            -moz-transition:all 1s ease-in-out;
            -o-transition:all 1s ease-in-out;
            transition:all 1s ease-in-out;
        }
        h5{
            font-size:18px;
            margin-top:30px;
            text-transform:capitalize;
            color:${grayColor}
        }
    }

    .links{
        margin-top:20px;
        li{
            padding:10px;
            postion:relative;
            a{
                text-transform:capitalize;
                font-size:20px;
                color:${grayColor};
                display:block;
                text-decoration:none;
                -webkit-transition:all .3s linear;
                -moz-transition:all .3s linear;
                -o-transition:all .3s linear;
                transition:all .3s linear;
                &.active{
                    color:${mainColor};
                    border-bottom:1px solid ${mainColor}
                }
                &:hover{
                    color:${mainColor};
                    border-bottom:1px solid ${mainColor}
                }
               
            }
        }
    }

`
