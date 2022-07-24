import React from 'react';
import styled from "styled-components";

const Error = (props) => {
    return (
        <ContactError>
            <div className="error"> {props.children} </div>
        </ContactError>
    )
}

export default Error;
 const ContactError=styled.div`
    text-transform:capitalize;
    color:red;
 `
