import React, { Component } from 'react';
import axios from 'axios';
import LoginForm from '../components/auth/login/loginForm';

class UserLogin extends Component {
    
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  //handle form submit 
  handleLoginSubmit(user) {
    console.log("Submitted");
  }


  render() {
    return (
      <div className="container">
      <section>
				<div id="agileits-sign-in-page" class="sign-in-wrapper">
					<div class="agileinfo_signin">
					<h3>Sign In</h3>
                       <LoginForm onLoginSubmit={ this.handleLoginSubmit }/>
                       	<h6> Not a Member Yet? <a href="#signup">Sign Up Now</a> </h6>
					</div>
				</div>
			</section>
       </div>
       
    )
  }
}

export default UserLogin;
