import React from 'react';
import styled from "styled-components";
import { mainColor,darkColor, textColor,grayColor } from '../../appStyle/styleVariables';


const Service = (props) => {
    const {service,index}=props;
    const {icon,title,description}=service;
    return (
        <>
            <div key={index} className="col-md-6 col-lg-4">
                <CardItem >
                    <div class="icon"> {icon} </div>
                    <div className="card-body">
                        <h5 className="card-title"> {title} </h5>
                        <p className="card-text"> {description} </p> 
                    </div>
                </CardItem>
            </div>
        </>
    )
}

export default Service;

const CardItem=styled.div`
text-align:center;
background-color:#ecf0f1;
border-radius:10px;
border-bottom:3px solid ${mainColor} ;
margin-top:30px;
text-transform:capitalize;
padding:20px 0;
transition:all .3s ease-in-out;
    .icon{
        width: 70px;
        height: 70px;
        border: 1px solid ${darkColor};
        border-radius: 50%;
        text-align: center;
        margin: 10px auto;
        line-height: 70px;
        background-color:${mainColor};
        transition:all .3s ease-in-out;
        svg{
            font-size:30px;
            color:${grayColor}
        }
    }
    .card-title{
        font-size:22px;
        color:${darkColor};
        font-weight:600;
    } 
    .card-text{
        color:${textColor};
    } 
    &:hover{
        border-bottom-color:${darkColor};
        .icon{
            background-color:${darkColor};
            svg{
                color:${mainColor};
            }
        }
    }  
`
