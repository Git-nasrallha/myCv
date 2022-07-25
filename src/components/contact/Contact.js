import React from 'react';
import styled from "styled-components";
import SectionTitle from '../SectionTitle';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import ScrollToTop from "../ScrollToTop";

const Contact = () => {
    return (
        <ContactMe id="contact">
            <SectionTitle title="contact me" />
            <div className="container">
                <div className="row mt-5 pb-5">
                    <div className="col-md-6">
                        <ContactInfo />
                    </div>

                    <div className="col-md-6">
                    <ContactForm/>
                    </div>
                </div>
                <ScrollToTop />
            </div>
        </ContactMe>
    )
}

export default Contact;

const ContactMe=styled.div`
margin-top:30px;
padding:0 20px;
padding-top:70px;
background-color:#ecf0f1;
@media(max-width:991px){
    padding:20px 0;
}
`
