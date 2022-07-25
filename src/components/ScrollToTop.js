import React,{useEffect,useState} from 'react';
import styled from "styled-components";
import {FiChevronsUp} from "react-icons/fi";
import {mainColor,darkColor,grayColor} from "../appStyle/styleVariables";
import Scroll from "react-scroll";
import {useWindowScroll} from "react-use";

let scroll = Scroll.animateScroll;

const ScrollToTop = () => {
    const {y: pageYoffset}=useWindowScroll();
    const [visible,setVisible]=useState(false);
    
    useEffect(()=>{
        if(pageYoffset>400){
            setVisible(true);
        }else{
            setVisible(false);
        }
    },[pageYoffset]);

    if(!visible){
        return false;
    }
    return (
        <ScrollTop>
            <div className="scroll-top"> <FiChevronsUp onClick={()=>scroll.scrollTo(0)} /> </div>
        </ScrollTop>
    )
}

export default ScrollToTop;

const ScrollTop=styled.div`
position:relative;
    .scroll-top{
        position:absolute;
        bottom:10px;
        left:50%;
        transform:translateX(-50%);
        z-index:100;
        width:50px;
        text-align:center;
        line-height:50px;
        height:50px;
        border:1px solid ${grayColor};
        background-color:${darkColor};
        border-radius:50%;
        svg{
            font-size:30px;
            cursor: pointer;
            color:${mainColor};
            transition:all 2s linear;
        }
    }    
`
