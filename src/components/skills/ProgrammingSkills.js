import React from 'react';
import styled from "styled-components";

const ProgrammingSkills = (props) => {
    const {programmingLanguage}=props;
    return (
        <Programming>
            <h2 className="title">Programming Language</h2>
            <ul>
                {
                    programmingLanguage && programmingLanguage.map((lang,index)=>{
                       return <li key={index}> {lang} </li>
                    })
                }
            </ul>
        </Programming>
    )
}

export default ProgrammingSkills;

const Programming=styled.div`
padding-bottom:30px;
    h2{
        font-weight:bold;
        font-family: 'Cherry Swash', cursive;
    };
    ul{
        list-style-type: square;
        li{
            margin-top:15px;
            margin-left:20px;
        }
    }
`
