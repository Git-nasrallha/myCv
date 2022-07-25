import React from 'react';
import styled from "styled-components";
import { darkColor,grayColor } from '../../appStyle/styleVariables';

const PortfolioItem = (props) => {
    const {portfolio,openModal}=props;
    const {id,image}=portfolio;

    return (
        <>
           <div key={id} className="col-md-6 col-lg-4 mb-5">
                <PortItem >
                    <img src={image} className="img-fluid" alt="portfolio" onClick={()=>{openModal(id)} }/>
                </PortItem>
           </div> 
        </>
    )
}

export default PortfolioItem;

const PortItem=styled.div`
    width: 100%;
    height: 250px;
    border: 1px solid ${darkColor};
    border-radius: 30px 0 30px 0;
    box-shadow: 5px 5px 30px ${grayColor},-5px -5px 30px ${grayColor};
    cursor: pointer;
    overflow:hidden;
    transition: all .4s ease-in-out;
    &:hover{
       img{
          transform:scale(1.2);
       }
    }
    img{
        height:100%; width:100%;
        border-radius: 30px 0 30px 0;
        transition: all .4s ease-in-out;
    }
`
