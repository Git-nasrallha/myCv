import React from 'react';
import styled from "styled-components";
import Bounce from 'react-reveal/Bounce';
import {mainColor,darkColor} from "../appStyle/styleVariables";

const SectionTitle = (props) => {
    const {title}=props;
    return (
        <Title>
            <Bounce> <h2>{title}</h2> </Bounce>
        </Title>
    )
}

export default SectionTitle;

const Title=styled.div`
position:relative;
text-transform:capitalize;
text-align:center;
    h2{
        color:${darkColor};
        font-weight:bold;
        position:relative;
        font-size:35px;
        font-family: 'Cherry Swash', cursive;
        @media(max-width:576px){
            font-size:30px;
        }
        &:before{
            content:"";
            position:absolute;
            top:50px;
            left:50%;
            display:block;
            width:200px;
            height:2px;
            background-color:${darkColor};
            transform:translateX(-50%);
           
        }
        &:after{
            content:"";
            position:absolute;
            top:50px;
            left:50%;
            display:block;
            width:80px;
            height:2px;
            background-color:${mainColor};
            transform:translateX(-50%);
           
        }
    }


`
