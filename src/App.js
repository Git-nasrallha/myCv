import React,{useState,useContext} from "react";
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Main from "./components/main/Main";
import { AppContext } from "./contextApi/AppContext";
import LoadingPage from "./components/LoadingPage";


function App() {
  const {loading}=useContext(AppContext);
  const [toggleSideBar,setToggleSideBar]=useState(false);
  const [classToggle,setClassToggle]=useState("");
 const toggleSideBarAction=()=>{
    setToggleSideBar(!toggleSideBar);
    if(toggleSideBar===true){
      setClassToggle("");
    }else{
      setClassToggle("active");
    }
  }

  if(loading){
    return <LoadingPage/>
  }else{

    return (
      <BrowserRouter>
        <div className="App">
      
          <Navbar show={classToggle} />
          <Main toggle={toggleSideBar} show={classToggle} toggleAction={toggleSideBarAction} />
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
