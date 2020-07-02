import React, { Component } from 'react';


class Login extends Component {
    render() {
        return (
            <div className="container space-top-lg">
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
      <div className="hide-md-lg">
          <p>Or sign in manually:</p>
        </div>
        <h4 className="text-center cl-login">Đăng Nhập</h4>
        <div className="input-container">
      
        <input className="input-field" type="text" placeholder="Username" name="usrnm" />
        <i className="fa fa-user icon" />
      </div>
      <div className="input-container">
      
      <input type="password" name="password" placeholder="Password" required />
      <i class="fa fa-key icon"></i>
    </div>
      <div>
    <p className="f-right"><a href="">Quên mật khẩu?</a></p>
    </div>
        <input  type="submit" value="Đăng Nhập" />
      
         <p>Bạn chưa có tài khoản? <a href="">Đăng ký tài khoản mới</a></p>
      </div>
      
      </div>

               
                
                
      
            
          </div>
        );
    }
}

export default Login;