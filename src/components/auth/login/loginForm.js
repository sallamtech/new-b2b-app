import React, { Component } from 'react';
//import "../style.css";

class Form extends Component {
    
  render() {
      const style = {
      width: '450px'
     };
      
    return (
        
						<form action="#" method="post" onSubmit={this.handleSubmit}>
							<input type="email" name="email" placeholder="Your Email" onChange={this.handleChange}/> 
							<input type="password" name="password" placeholder="Password" onChange={this.handleChange}/> 
							<input type="submit" value="Sign In"/>
							<div class="forgot-grid">
								<label class="checkbox"><input type="checkbox" name="checkbox"/>Remember me</label>
								<div class="forgot">
									<a href="#" data-toggle="modal" data-target="#myModal2">Forgot Password?</a>
								</div>
		
								<div class="modal fade" id="myModal2" role="dialog">
									<div class="modal-dialog">
		
									<div class="modal-dialog modal-lg">
										<div class="modal-content">
											<div class="modal-header">
												<button type="button" class="close" data-dismiss="modal">&times;</button>
												<h3 class="w3ls-password">Get Password</h3>		
												<p class="get-pw">Enter your email address below and we'll send you an email with instructions.</p>
												<form action="#" method="post">
													<input type="text" class="user" name="email" placeholder="email"/>
													<input type="submit" value="Submit"/>
												</form>
											</div>
										</div>
									</div>
									</div>
								</div>
								<div class="clearfix"> </div>
							</div>
						</form>
					
    )
  }
}


class ForgetPassForm extends Component {
    
  render() {
     
    return (
		
			<div class="modal fade" align="center" id="myModal2" role="dialog">
				<div class="modal-dialog">
		
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<button type="button" class="close" data-dismiss="modal">&times;</button>
								<h3 class="w3ls-password">Get Password</h3>		
								<p class="get-pw">Enter your email address below and we'll send you an email with instructions.</p>
								<form action="#" method="post">
									<input type="text" class="user" name="email" placeholder="email"/>
								    <input type="submit" value="Submit"/>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
							
    )
  }
}


class LoginForm extends Component {
    
      constructor(props) {
        super(props);
        this.state = { 
                    email: '',
                    password: '',
                    };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
     this.setState({
       [name]: value
     });
    
     }
    
      handleSubmit(e) {
        e.preventDefault();
        let email = this.state.email.trim();
        let password = this.state.password.trim();
        
    
        if (!email || !password) {
          return;
        }
        this.props.onLoginSubmit({ 
            email: email, 
            password: password,
            
        });
        this.setState({ 
                    email: '',
                    password: '',
            });
      }
      
  render() {
    return (
         <div className="login"  id="custom-container">
            <Form/>
            <ForgetPassForm/>
          </div>
    )
  }
}

export default LoginForm;
