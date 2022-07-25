import React,{useContext} from 'react';
import styled from "styled-components";
import { AppContext } from '../../contextApi/AppContext';
import {darkColor,textColor} from "../../appStyle/styleVariables";

const ContactInfo = () => {
    const {contact}=useContext(AppContext);
    return (
        <ContInfo>
            <h3>contact information</h3>
            <ul className="list-unstyled">
                {
                    (()=>{
                        let contactInfo=[];
                        for (const key in contact) {
                            if (Object.hasOwnProperty.call(contact, key)) {
                                const element = contact[key];
                                contactInfo=[...contactInfo,<li> <strong>{key}: </strong> <span> {element} </span> </li>]
                            }
                        }
                        return contactInfo;
                    })()
                }
            </ul>
        </ContInfo>
    )
}

export default ContactInfo;

const ContInfo=styled.div`
margin-bottom:45px;
    h3{
        margin-bottom:30px;
        text-transform:capitalize;
        font-size:30px;
        color:${darkColor};
    }
    ul{
        li{
            margin-bottom:15px;
            strong{
                text-transform:capitalize;
                color:${darkColor};
            }
            span{
                color:${textColor};
            }
        }
    }
`
