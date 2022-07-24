import React from 'react';
import styled from "styled-components";
import { darkColor } from '../../appStyle/styleVariables';
import Slide from 'react-reveal/Slide';


const SkillPrograss=({skill,lable,bg})=>{
    return(
      <>
        <h5 className="skill mb-3"> {skill} </h5>
        <div className="progress mb-3">
            <div className={`progress-bar ${bg}`} role="progressbar" style={{width: `${lable}`}} aria-valuenow={lable} aria-valuemin="0" aria-valuemax="100"> {lable} </div>
        </div>
      </>
    )
}

const WebSkills = (props) => {
    const {webSkills}=props;
 
    return (
        <Skill>
            <h2 className="title mt-5"> web skills</h2>
            <Slide left>
                <div className="row mt-2">
                    {
                    webSkills && webSkills.map((s,index)=>{
                        return(
                            <div key={index} className="col-md-6"> <SkillPrograss skill={s.skill} lable={s.prcentage} bg={s.bg} /> </div>
                        )
                    })
                    }
                </div>
            </Slide>
        </Skill>
    )
}

export default WebSkills;

const Skill=styled.div`
margin:30px 0;
    h2{
        font-weight:bold;
        font-family: 'Cherry Swash', cursive;
    };
    .skill{
        text-transform:capitalize;
        font-weight:bold;
        color:${darkColor};
        font-size:16px;
    }
    .progress{
        height:1.5rem;
        border-radius: 1.25rem;
    }
    .progress-bar{
        text-align:right;
        padding:5px;
        border-radius: 1.25rem;
        color:${darkColor};

    }

`
