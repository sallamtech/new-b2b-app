import React, { Component } from 'react';

class Form extends Component {
    
  render() {
      const style = {
      width: '450px'
     };
      
         return (
               
                				<form onSubmit={this.handleSubmit}>
                					<input type="text" class="form-control" id="name" name="name" placeholder="Full Name" onChange={this.handleChange}/>
                					<input type="email" class="form-control" id="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                					<input type="password" required="required" class="form-control" id="password" name="password" placeholder="Enter Password" onChange={this.handleChange}/>
                					<input type="password" required="required" class="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" onChange={this.handleChange}/>
                					
                					<input type="submit" value="Sign Up"/>
                				</form>
                			
       )
  }
}


class UserRegisterForm extends Component {
    
      constructor(props) {
        super(props);
        this.state = { 
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
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
        let name = this.state.name.trim();
        let password = this.state.password.trim();
        
    
        if (!email || !name || !password) {
          return;
        }
        this.props.onUserSubmit({ 
            name: name,
            email: email, 
            password: password,
            
        });
        this.setState({ 
                    name: '',
                    email: '',
                    password: '',
            });
      }
      
  render() {
    return (
         <div className="register"  id="custom-container">
            <section>
              <div id="agileits-sign-in-page" class="sign-in-wrapper">
                <div class="agileinfo_signin">
                <h3>USER INFORMATION</h3>
                
                  <Form />
                  
              </div>
            </div>
          </section>
        </div>
    )
  }
}

export default UserRegisterForm;
