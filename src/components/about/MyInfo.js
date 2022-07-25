import React from 'react';
import styled from "styled-components";
import { darkColor, secendColor } from '../../appStyle/styleVariables';
import {FiInfo} from "react-icons/fi";

const MyInfo = (props) => {
    const {info}=props;
    return (
        <PersonalData>
            <h5> <span><FiInfo /> </span> My personal data. </h5>
            <ul className="ml-4">
            {
                (()=>{
                    let myInfo=[];
                    for (const key in info) {
                        if (Object.hasOwnProperty.call(info, key)) {
                            const element = info[key];
                            myInfo=[...myInfo,<li> <strong>{key}: </strong> <span> {element} </span> </li>]
                        }
                    }
                     return myInfo;
                })()
            }
               
            </ul>
        </PersonalData>
    )
}

export default MyInfo;

const PersonalData=styled.div`
margin-top:40px;
padding-bottom:30px;
text-transform:capitalize;
    h5{
        margin-bottom:20px;
        color:${darkColor};
        font-weight:bold;
        font-size:25px;
        span{
            svg{
                font-size:30px;
                margin-right:10px;
                color:${secendColor}
            }
        }
    }
    ul{
        list-style-type: square;
        li{
            margin-top:15px;
            strong{
                font-size:18px;
                margin-right:10px;
                color:${darkColor};
            }
            span{
                font-size:16px;
                @media(max-width:576px){
                    font-size:14px;
                }
            }
        }
    }
`
