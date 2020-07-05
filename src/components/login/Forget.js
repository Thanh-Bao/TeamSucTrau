import React, { Component } from 'react';

class Forget extends Component {
    render() {
        return (
          <div>
             <div className="container">
                <div className="row">
                   <div className="col colLogin">
                           <a href="#" className="fb btnLogin">
                               <i className="fa fa-facebook fa-fw"></i> Login with Facebook
                           </a>
                           <a href="#" className="twitter btnLogin">
                                 <i class="fa fa-twitter fa-fw"></i> Login with Twitter
                            </a>
                          <a href="#" className="google btnLogin"><i class="fa fa-google fa-fw">
                               </i> Login with Google+
                           </a>
                     </div>
      
                <div className="col colLogin bg-login sp-login">
     
                          <h3 className="text-center cl-login"><b>Forget</b></h3>
                    <div className="input-container">
      
                           <input className="input-field inputLogin" type="text" placeholder="Email/Phone Number" name="usrnm" />
                
                    </div>
             
                             <input  className="space-bot inputLogin" type="submit" value="Next" />
        
                </div>
      
              </div>
            </div>    
        </div>
        );
    }
}

export default Forget;