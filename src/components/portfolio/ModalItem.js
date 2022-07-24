import React,{useContext} from 'react';
import styled from "styled-components";
import Modal from 'react-modal';
import { AppContext } from '../../contextApi/AppContext';
import {FaTimes,FaGithub} from "react-icons/fa";
import {GrView} from "react-icons/gr";
import {darkColor,grayColor,mainColor} from "../../appStyle/styleVariables";
import Zoom from "react-reveal/Zoom";



Modal.setAppElement('#root');

const ModalItem = () => {
   
    const customStyles = {
        content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        transform             : 'translate(-50%, -50%)',
        width                 :'450px',
        height                :'auto',
        }
  };

    const {isOpen,closeModal,modalProject}=useContext(AppContext);
    const {image,title,to,code}=modalProject;
    return (
        <div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                style={customStyles}
                >
                    <Zoom>
                        <Mymodal>
                            <div className="card" >
                                <h4 className="text-center">  portfolio project </h4>
                                <div className="close-modal" onClick={closeModal}> <FaTimes /> </div>
                                <img src={image} className="card-img-top" alt={title} />
                                <div className="card-body">
                                <a href={to} target="_blank" rel="noreferrer" onClick={closeModal} > <h5 className="card-title"> {title} </h5> </a>
                                <div className="project-links d-flex">
                                        <div>
                                            <div class="media">
                                                <FaGithub/>
                                                <div class="media-body">
                                                    <h5 class="mt-0"> <a href={code} target="_blank" rel="noreferrer" onClick={closeModal}> view project code </a> </h5>
                                                </div>
                                            </div> {/*end media */}
                                        </div> {/* end link one */}

                                        <div>
                                            <div class="media">
                                                <GrView/>
                                                <div class="media-body">
                                                    <h5 class="mt-0"> <a href={to} target="_blank" rel="noreferrer" onClick={closeModal}> view project </a> </h5>
                                                </div>
                                            </div> {/*end media */}
                                        </div> {/* end link one */}
                                    </div> {/*end div project links */}
                                    
                                </div>{/* end card body */}
                            </div> {/* end card */} 
                        
                        </Mymodal>
                    </Zoom>
            </Modal>
        </div>
    )
}

export default ModalItem;

const Mymodal=styled.div`
    .card{
        border:none;
        padding-top:20px;
        text-transform:capitalize;
        .card-img-top{
            width:100%;
            height:200px;
        }
        h4{
          color:${darkColor};
          margin-bottom:20px;  
        }
        
           a{
                .card-title{
                    color:${darkColor};
                    transition:all .4s ease-in-out;
                    &:hover{
                        color:${mainColor};
                    }
                }
            }
        .project-links{
            justify-content: space-between;
            .media{
                a{
                    color:${darkColor};
                    font-size:20px;
                    transition:all .4s ease-in-out;
                    &:hover{
                        color:${mainColor};
                    }
                }
                svg{
                    margin-right:10px;
                    margin-top:5px;
                    font-size:20px;
                    color:${mainColor};
                }
            }
        }
        .close-modal{
            width: 40px;
            height: 40px;
            background: ${darkColor};
            text-align: center;
            line-height: 40px;
            font-size: 20px;
            cursor: pointer;
            border-radius: 12px;
            position: absolute;
            top:5px;
            right: 5px;
            svg{
                color:${grayColor};
            }
        }
    }
    
`


