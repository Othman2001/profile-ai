import React, {useState} from 'react';
import Side from './Sidebar';
import pro1 from "./pro1.png";
import "../css/work.css";
import Nav from './Nav';
function Work() {
 
    return(
        <div className = "work">
        <div className="contaienr">
            {
                /* 

                      */  }
      <Nav />
        <Side />
        <div className="row">
            
        <div className="title">
             <h2>Latest Work</h2>
         </div>
        </div>
<div className = "pro">
        <div className="row">
            <div className="header">
                <h4> <span>  Projects </span></h4>
          
            </div>
            </div>
        </div>   <div className="projects">
            <div className="work_projects">

            
        <div className="row">
         
                
          
            <div className="col-md-4">
                <div className="cart">
                    <div className="cartimage">
                        <img src = {pro1} className = "img-fluid" />
                    </div>
                    <div className="over">
                    <div className="intext">
                        <button className = "buto">View</button>
                    </div>
                    </div>
                
                 
                </div>
            </div>

            <div className="col-md-4">
            <div className="cart">
                    <div className="cartimage">
                        <img src = {pro1} className = "img-fluid" />
                    </div>
                    <div className="over">
                    <div className="intext">
                        <button className = "buto">View</button>
                    </div>
                    </div>
                 
                </div>
            </div>
            <div className="col-md-4">
            <div className="cart">
                    <div className="cartimage">
                        <img src = {pro1} className = "img-fluid" />
                    </div>
                    <div className="over">
                    <div className="intext">
                        <button className = "buto">View</button>
                    </div>
                    </div>
                 
                </div>
            </div>





        </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default Work;