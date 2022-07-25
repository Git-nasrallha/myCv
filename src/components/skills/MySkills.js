import React,{useContext} from 'react';
import styled from "styled-components";
import { AppContext } from '../../contextApi/AppContext';
import SectionTitle from '../SectionTitle';
import JsFramwork from './JsFramwork';
import ProgrammingSkills from './ProgrammingSkills';
import WebSiklls from './WebSkills';

const MySkills = () => {
    const {skills}=useContext(AppContext);

    return (
        <Skills id="skills">
            <SectionTitle title="my skills" />
            <WebSiklls webSkills={skills.web} />
            <JsFramwork jsFrams={skills.jsFramwork} />
            <ProgrammingSkills programmingLanguage={skills.programmingLang}/>
            <hr/>
        </Skills>
    )
}

export default MySkills;

const Skills=styled.div`
margin-top:50px;
padding:20px;
@media(max-width:991px){
    padding:20px 0;
}
`
