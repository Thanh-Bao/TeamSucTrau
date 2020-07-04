import React, { Component } from 'react';
import '../CSS/Feedback/main.css'
class Feedback extends Component {
    render() {
        return (
            <div>
                <div className="bg-contact100" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}>
                    <div className="container-contact100">
                        <div className="wrap-contact100">
                            <div className="contact100-pic js-tilt" data-tilt>
                                <img src="images/img-01.png" alt="IMG" />
                            </div>
                            <form className="contact100-form validate-form">
                                <span className="contact100-form-title">
                                   <h2><b>Send us feedback</b></h2>
                                </span>
                                <div className="wrap-input100 validate-input" data-validate="Name is required">
                                    <input className="input100" type="text" name="name" placeholder="Name" />
                                    <span className="focus-input100" />
                                    <span className="symbol-input100">
                                        <i className="fa fa-user" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                    <input className="input100" type="text" name="email" placeholder="Email" />
                                    <span className="focus-input100" />
                                    <span className="symbol-input100">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="wrap-input100 validate-input" data-validate="Message is required">
                                    <textarea className="input100" name="message" placeholder="Message" defaultValue={""} />
                                    <span className="focus-input100" />
                                </div>
                                <div className="container-contact100-form-btn">
                                    <button className="contact100-form-btn">
                                        Send
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Feedback;