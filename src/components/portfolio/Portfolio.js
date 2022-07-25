import React,{useContext} from 'react';
import styled from "styled-components";
import { AppContext } from '../../contextApi/AppContext';
import SectionTitle from "../SectionTitle";
import ModalItem from './ModalItem';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
    const {portfolio,openModal}=useContext(AppContext);

    return (
        <Myportfolio id="protfolio">
            <SectionTitle title="my portfolio" />
            <div className="row py-5 mt-5">
                {
                    portfolio && portfolio.map((port)=>{
                        return <PortfolioItem portfolio={port} openModal={openModal} />
                    })
                }
            </div>
            <ModalItem />
            <hr />
        </Myportfolio>
    )
}

export default Portfolio;
const Myportfolio=styled.div`
margin:30px 0;
padding:20px;
@media(max-width:991px){
    padding:20px 0;
}
`
