import React, {useEffect ,useState} from 'react';
import '@alan-ai/alan-sdk-web';
import './App.css';
import  {BrowserRouter as Router , Switch , Route} 
from 'react-router-dom';
import Home from './Components/Home';
import Nav from './Components/Nav';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.js';


function App() {
  alert("this app uses Ai to transfer voice commands to action please allow voice and pop ups")
   const [background, setBackground] = useState("dark");
  const APP_URI =window.location.href ;
  useEffect(()=>{
    const alanBtn = require('@alan-ai/alan-sdk-web');
     let alanButton = alanBtn({
       key: "418c4b4a40dacc21fd32fcdca16b99da2e956eca572e1d8b807a3e2338fdd0dc/stage",
       rootEl: document.getElementById("alan-btn"),
       onCommand: function(commandData) {
        if(commandData.command === 'home'){
           console.log("home is working");
         }else if(commandData.command ==='about'){
              window.open(`${APP_URI}about`);
             console.log("about is working");
         }
         else if (commandData.command === 'latest work'){
           window.open(`${APP_URI}work`);
             console.log('latest work is working');
         }else if (commandData.command === 'contact') {
         window.open(`${APP_URI}contact`);
             console.log("contact is working");
         }
       }
       
     })
  },[]);
  
  return (

   <Router>
     <div>
     
     <Route path = "/" component = {Home} exact></Route>
     <Route path = "/about" component = {About} ></Route>
      <Route path = "/work" component = {Work} ></Route>
      <Route path = "/contact" component = {Contact}></Route>
     </div>
  </Router>
  )
}



export default App;
/*
commands: what this app does ==> {this is profile website for front-ende-developer called othamn}
          who is othman ==> {he is pro front end-developer with 2 years experince you can know more about his just say(show me his work) 
           show me his work ==> scroll left to latest work gallery {here is his latest work witht the most modern technolgoies in the web}
           how can i hire him ==> you can hire him by sending e-mail or from upwork.com, freelancer.com 
           }


*/
//exact == only when tehre ar / 
   /*nav items == Home , About us, latest work,  contact 
     //conainer compoennts:
         HOME , ABOUT US , LATEEST WORK, CONTACNT
      miniComponets:
          Nav, cards , buttons 
     
   
     nav: upper nav in all components 
     about us => personal info, experince in front end development
     latest work => will be a gallery
     concatc => simple concact form withh php and mysql 
     
     */