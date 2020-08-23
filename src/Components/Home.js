import React, {useState} from 'react';
import Nav from '../Components/Nav';
import "../css/home.css"
import photo from '../photo.jpg';
import Cards from './Cards';
import Sidebar from './Sidebar'
const   Home = (props)=> {
let styles = {
    color: props.background,
} 
    return (
    <div className = "home">
      <div>
          <Sidebar />
      </div>
    <Nav />
    <div className = "overlay"></div>
       <div class="container">
        <div className = "home_main">
        <div class="row">
        
        <div className = "col-md-6 ">
           <div className = "home_text">
           <h3>A completly  <span>voice recognition</span> Web app take <span>voice commands</span>  and transfer it to real action</h3>
            <h4>Press on th down blue button to start <span>sending voice </span> commands</h4> and you cand open the side bar to have list of commands
            <p>Ready To Have <span>New Experince </span>  ? </p>
            <button className = "button">start</button>
           </div>

           
            </div>   
            <div className = "col-md-6">
       
                
                </div> 
       </div>
        </div>
       
        </div>
      
        
    </div>
)
}
export default Home;
/*
 change the props.background from light to dark 
 onClick=> {props.background = "dark"}
*/