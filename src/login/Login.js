import React, { Component } from 'react';
import Forget from './Forget';


class Login extends Component {
    render() {
        return (
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
     
        <h3 className="text-center cl-login"><b>Login</b></h3>
              <div className="input-container">
      
                  <input className="input-field" type="text" placeholder="Email/Phone Number" name="usrnm" />
                  <i className="fa fa-user icon" />
              </div>
              <div className="input-container">
      
                    <input type="password" name="password" placeholder="Password" required />
                        <i class="fa fa-key icon"></i>
                
              </div>
             <div className = "row"><label className = "col-1 "><input type ="checkbox"/></label>
             <label className = "col-6 remember">Remember me</label>
             </div>
              

        <input className="space-bot" type="submit" value="Login" />
        
        
      </div>
      
      </div>
      
  </div>
        );
    }
}

export default Login;