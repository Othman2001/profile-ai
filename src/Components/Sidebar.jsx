import React, {useState} from 'react';
import "../css/side.css";
import gear from './gear.png';
function Sidebar() {
  const [active , setActive]  =useState(false);
    
    return(
        <div className = "sid">
 <button  className = "but" onClick = {()=> setActive(!active)}  >
                {active ? "X" :  <img src = {gear} alt = "gear"  className = "img-fluid img"/> }
                </button>
     
        <div className= {active? "side" : "display" }>
           
            <div class="sidebar">

</div>
<div class="content">
 <div className="title">
     <h3> Commands to say</h3>
     <p>1. What this website does </p>
     <p> 2. Show me   <span>or </span> Let Me see  </p> 
     <p >then choos the place you want to go <span> (home ,about , latest work , contact ) </span></p>
     <p>3. what modern technology he is using</p>
     <p>4. how this website is built </p>
     <p> 5. How old he is </p>
     <p > 6. is he graduated</p>
     <p> 7. how many years of experience he has in front-end</p>
     <p>8. what is reactjs </p>
     <p>9. what does front end means </p>
     <p> 10. give me a brief abotu him</p>
     <p>11. how can i hire him</p>
 </div>
</div>
        </div>
        </div>
    )
}
export default Sidebar;