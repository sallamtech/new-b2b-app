import React, { Component } from 'react';
import axios from 'axios';
import BusinessRegisterForm from '../components/business/businessRegisterForm';

class BusinessRegister extends Component {
    
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.handleRegisterSubmit = this.handleRegisterSubmit.bind(this);
  }

  //handle form submit 
  handleRegisterSubmit(business) {
    let businesses = this.state.data;
    business.id = Date.now();
    
    let newBusinesses = businesses.concat([business]);
    this.setState({ data: newBusinesses });
    axios.post('https://vgu2b4kbxc.execute-api.us-east-1.amazonaws.com/dev/auth/register', business)
      .catch(err => {
        console.error(err);
        this.setState({ data: businesses });
      });
  }


  render() {
    return (
      <div className="container">
       <BusinessRegisterForm onBusinessSubmit={ this.handleRegisterSubmit }/>
       </div>
       
    )
  }
}

export default BusinessRegister;
