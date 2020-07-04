import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div>
                   <div className="container">
            <div className="row">
               <div class="col">
        <a href="#" class="fb btn">
          <i class="fa fa-facebook fa-fw"></i> Login with Facebook
         </a>
        <a href="#" class="twitter btn">
          <i class="fa fa-twitter fa-fw"></i> Login with Twitter
        </a>
        <a href="#" class="google btn"><i class="fa fa-google fa-fw">
          </i> Login with Google+
        </a>
      </div>
      
      <div className="col bg-login sp-login">
     
        <h3 className="text-center cl-login"><b>Register</b></h3>
              <div className="input-container">
      
                  <input className="input-field" type="text" placeholder="Email/Phone number" name="usrnm" />
                  
              </div>
              <div className="input-container">
      
                    <input type="password" name="password" placeholder="Password" required />
                       
              </div>
              <div className="input-container">
      
                     <input type="password" name="password" placeholder="Repeat Password" required />
         
                </div>
                

        <input  className="space-bot" type="submit" value="Register" />
        
        
      </div>
      
      </div>
   
          </div>
            </div>
        );
    }
}

export default Register;