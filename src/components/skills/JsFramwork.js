import React from 'react';
import styled from "styled-components";


const JsFramwork = (props) => {
    const {jsFrams}=props;
    return (
        <Framwork>
            <h2 className="title"> js framework </h2>
            <ul>
                {
                    jsFrams && jsFrams.map((fram,index)=>{
                        return (
                            <li key={index}>
                                {fram}    
                            </li>
                        )
                    })
                }
            </ul>
        </Framwork>
    )
}

export default JsFramwork;

const Framwork=styled.div`
    h2{
        font-weight:bold;
        font-family: 'Cherry Swash', cursive;
    };
    ul{
        list-style-type: square;
        li{
            margin-top:10px;
            margin-left:20px;
            text-transform:capitalize
        }
    }
`


