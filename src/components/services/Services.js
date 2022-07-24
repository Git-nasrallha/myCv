import React,{useContext} from 'react';
import styled from "styled-components";
import { AppContext } from '../../contextApi/AppContext';
import SectionTitle from "../SectionTitle";
import Service from './Service';

const Services = () => {
    const {services}=useContext(AppContext);
    return (
        <ServciesSection id="services">
            <SectionTitle title="services"/>
            <div className="row mt-5 pb-5">
                {
                    services && services.map((service,index)=>{
                        return <Service service={service} index={index} />
                    })
                }
            </div>

            <hr/>
        </ServciesSection>
    )
}

export default Services;

const ServciesSection=styled.div`
margin:30px 0;
padding:20px;
@media(max-width:991px){
    padding:20px 0;
}
`
