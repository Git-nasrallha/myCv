import React,{useContext} from 'react';
import styled from "styled-components";
import { darkColor,roundedAnimation, secendColor } from '../../appStyle/styleVariables';
import { AppContext } from '../../contextApi/AppContext';
import SectionTitle from '../SectionTitle';
import MyInfo from './MyInfo';
import {FiDribbble} from "react-icons/fi";

const About = () => {

    const {about}=useContext(AppContext);
    return (
        <Aboutme id="about">
            <SectionTitle title="about me" />
            <div className="myinfo mt-5">
                <div class="media">
                    <span> <FiDribbble /> </span>
                    <div class="media-body">
                        <h5 class="mt-0">Let me introduce myself.</h5>
                        <p>
                            Hi, my name is Mohamed Nasrallah , a graduate of the Faculty of Computers and Information, Zagazig University, Department of Information Technology, with a good general grade. I have a great experience in web design
                        </p>
                    </div>
                </div>
                
               
            </div>
            <MyInfo info={about} />
           
            <hr/>
           
        </Aboutme>
    )
}

export default About;

const Aboutme=styled.div`
margin:50px 0;
padding:20px;
text-transform:capitalize;
@media(max-width:991px){
    padding:20px 0;
}
    .myinfo{
        .media{
            h5{
                font-weight:bold;
                font-size: 25px;
                margin-bottom: 20px;
                color:${darkColor};
            }
            span{
                margin-right:5px;
                svg{
                    font-size:40px;
                    color:${secendColor};
                    animation:${roundedAnimation} 2s linear infinite;
                }
            }
            p{
                font-size:17px;
                @media(max-width:576px){
                    font-size:15px;
                }
            }
        } 
    }
   

`