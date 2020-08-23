import React from 'react';
import '../css/about.css';
import pro from '../pro.jpg'
import Nav from './Nav';
import Sidebar from './Sidebar';
function About() {
    return(
   
    <div className = "about">
        <div>

        <Sidebar />
        </div>
        <div>
        <Nav />
        </div>
        
       
            <div className="title">
             <h2>About Me</h2>
         </div>
         <div className="container">

        
<div className="about_main">
                    <h5>
                    About  <span className = "ab" > Information </span> 
                        </h5>
                        <hr/>
                        <img src = {pro} alt = "profile" className = "profile"/>
                </div>
                <div className="about_text">
                    <p>My Name is Othman Abdelaziz Mohamed Iam front End developer from  
                        Egypt,cairo with high techincal skills 
                        expirenced in creating modern web appliaction that solve problem and increase the prodcution of the business
                    </p>
                </div>
                <div className="about_skills">
                    <div className="row">
                        <div className="col-md-4">
                            <p> <span > age </span> : 19</p>
                        </div>
                        <div className="col-md-4">
                            <p>  <span>Residence:</span>Cairo </p>
                        </div>
                        <div className="col-md-4">
                       <p>   <span>Freelance:</span> Available </p>  
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <p><span>Address:</span> Cairo,Egypt</p>
                        </div>
                        <div className="col-md-4">
                            <p><span>Phone:</span> 01281084530</p>
                        </div>
                        <div className="col-md-4">
                            <p><span>E-mail:</span> othmanabdelaziz3@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="skills">
                 
                    <h4>Skills:</h4>
                    <hr/>
                    <div className="row">
                        <div className="col-md-6">
                            <h4> <span> Languages </span> </h4>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>Javascript</p>
                            <p>PHP</p>
                            <p>Mysql</p>
                            <p>Firebase</p>
                        </div>
                        <div className="col-md-6">
                            <h4>  <span>FrameWorks  </span> </h4>
                            <p>Bootstrap4</p>
                            <p>React Js</p>
                            <p>JSON</p>
                            <p>API</p>
                        </div>
                    </div>
                   
                   
                </div>
                </div>

        </div>
       
    )
}
export default About;