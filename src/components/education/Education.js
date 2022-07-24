import React from 'react';
import styled from "styled-components";
import { darkColor, grayColor, mainColor,secendColor,textColor } from '../../appStyle/styleVariables';
import SectionTitle from '../SectionTitle';

const Education = () => {
    return (
        <MyEducation id="education">
            <SectionTitle title="my education"/>
            <div className="d-flex content mt-5 pb-5">
                <div className="year">
                    <div className="date">2013 : 2016</div> 
                    <div className="date">2016 : 2020</div> 
                    
                </div>
                <div className="education">
                    <div className="stage">
                        <h5> High school </h5>
                        <p> Martyr Hazem Makkawi Secondary Mixed School. </p>
                    </div>
                    <div className="stage">
                        <h5> University stage </h5>
                        <p> Faculty Of Computers And Information,Zagazig University. </p>
                    </div>
                </div>        
            </div>
            <hr/>
        </MyEducation>
    )
}

export default Education;

const MyEducation=styled.div`
text-transform:capitalize;
    .content{
        justify-content:center;
        @media(max-width:576px){
            justify-content:space-around;
        }
        @media (min-width:1600px){
            justify-content:center;
        }
    }
    .year{
        text-align: center;
        flex-basis: 40%;
    }
    .education{
        border-left:3px solid ${grayColor};
        position:relative;
        .stage{
            font-size:20px;
            margin-top:20px;
            padding:0 40px;
            position:relative;
            @media(max-width:576px){
                padding:0 4px;
            }
            &:before{
                content:"";
                display:block;
                width:15px;
                height:15px;
                border:1px solid ${darkColor};
                border-radius:50%;
                position:absolute;
                top: 10px;
                left: -9px;
            }
            &:after{
                content:"";
                display:block;
                width:10px;
                height:10px;
                background-color:${mainColor};
                border-radius:50%;
                position:absolute;
                top: 12px;
                left: -7px;
            }
            h5{
                color:${secendColor};
                @media(max-width:576px){
                    font-size:18px;
                }
            }
            p{
                color:${textColor};
                font-size:16px;
                @media(max-width:576px){
                    font-size:14px;
                }
            }
            
        }
    
    }
    .date{
        font-size:20px;
        margin-top:20px;
        padding:0 40px;
        color:${textColor};
        height:60px;
        @media(max-width:576px){
            margin-bottom:40px;
            padding:0 -1px;
            text-align: center;
        }
        @media(min-width:992px) and (max-width:1200px){
            padding:0 24px;
        }
    }

}

`