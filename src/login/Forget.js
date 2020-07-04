import React, { Component } from 'react';

class Forget extends Component {
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
     
        <h3 className="text-center cl-login"><b>Forget</b></h3>
              <div className="input-container">
      
                  <input className="input-field" type="text" placeholder="Email/Phone Number" name="usrnm" />
                
              </div>
             
           

        <input  className="space-bot" type="submit" value="Next" />
        
        
      </div>
      
      </div>
  </div>    
            </div>
        );
    }
}

export default Forget;