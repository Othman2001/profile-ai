import React from 'react';
import '../css/contact.css'
import Side from './Sidebar';
import Nav from './Nav';
function Contact () {
    return(
        <div className = "contact">
        <div>
            <Side />
        </div>
        <div>
            <Nav />
        </div>
              <div className="row">
              <div className="title">
             <h2>Contact </h2>
         </div>
              </div>
              <div className="row">
                  <div className="container">
                      <form  className="contact-from">
                          <input  className = "form-control"
                           type="text" placeholder = "Enter your name"/>
                           <input type="e-mail"
                           placeholder = "Enter your Mail"
                           className = "form-control"/>
                            <input  className = "form-control"
                           type="text" placeholder = "Enter your phone"/>
                           <textarea className = "form-control"
                           placeholder = "Enter your message"
                           >
                               
                           </textarea>
                           <input className = "button"  type = "submit"
                            placeholder = "submit"
                           / >
    
                      </form>
                  </div>
              </div>



     
        </div>
    )
}
export default Contact;