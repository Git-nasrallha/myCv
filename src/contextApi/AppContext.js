import React, { Component,createContext } from 'react';
import axios from "axios";
import {BsDisplay} from "react-icons/bs";
import {SiWebcomponentsDotOrg} from "react-icons/si";
import {MdGraphicEq} from "react-icons/md";


export const AppContext=createContext();

export  class ThemeProvider extends Component {
    state={
        loading:true,
        isOpen:false,
        about:{},
        skills:{},
        services:[
            {
                "icon":<BsDisplay />,
                "title":"web design",
                "description":"i approach each project individually and always fouce the result"
            },
            {
                "icon":<SiWebcomponentsDotOrg />,
                "title":"web development",
                "description":"your website will be build with an new proven technologies"
            },
            {
                "icon":<MdGraphicEq/>,
                "title":"ui/ux",
                "description":"i approach each project individually and always fouce the result"
            }
        ] ,
        portfolio:[],
        contact:{} ,
        modalProject:{}
    }

    
    //component did mount
    componentDidMount=()=>{
        axios.get("/json/data.json").then(res=>{
              return (
                  this.setState({
                      about:res.data.about,
                      skills:res.data.skills,
                      portfolio:res.data.portfolio,
                      contact:res.data.contact
                  })
              )
        });
        this.setState({
            loading:false,
        })
    }
    getProject=(id)=>{
        const projects=this.state.portfolio;
        const Id=parseInt(id);
        const project=projects.find(pro=>pro.id===Id);
        return project;
    }
    openModal=(id)=> {
        const project=this.getProject(id);
        this.setState({
                isOpen:true,
                modalProject:project
        })
    }
    closeModal=()=> {
        this.setState({
            isOpen:false
        })
    }
   

    
    render() {
        return (
            <AppContext.Provider value={
                {
                    ...this.state,
                    openModal:this.openModal,
                    closeModal:this.closeModal,
                    

                }

            }>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}
