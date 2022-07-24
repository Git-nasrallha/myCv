import {keyframes} from "styled-components";
import styled from "styled-components";


export const mainColor="#ffba08";
export const secendColor="#153516";
export const lightColor="#fff";
export const darkColor="#2c3e50";
export const grayColor="#ecf0f1";
export const textColor="#636e72";



export const moveToggle = keyframes`
  0% {
    transform:translateY(0);
  }
  50% {
    transform:translateY(20px);
  }
  100% {
    transform:translateY(0);
  }
`
export const roundedAnimation=keyframes`
  0%{
    transform: rotate(0deg);
  }
 
  100%{
    transform: rotate(360deg);
  }
`
export const ButtonControl=styled.button`
    width: 200px;
    margin: 20px auto;
    padding: 10px 40px;
    border-radius: 25px;
    border: 1px solid ${darkColor};
    text-transform:capitalize;
    margin-bottom:30px;
    font-weight:500;
    color:${darkColor};
    background-color:${mainColor};
    outline:none;
    transition: all .3s ease-in-out;
    &:hover{
      color:${mainColor};
      background-color:${darkColor};
      border-color:${grayColor};
    }

`
