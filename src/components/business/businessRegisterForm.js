import React, { Component } from 'react';
import {Col} from 'react-bootstrap';

class Form extends Component {
    
  render() {
      const style = {
      width: '450px'
     };
      
    return (
              
                				<form onSubmit={this.handleSubmit}>
                					<input type="text" class="form-control" id="businessName" name="businessName" placeholder="Business Name" onChange={this.handleChange}/>
                					<input type="email" class="form-control" id="email" name="email" placeholder="Email" onChange={this.handleChange}/>
                					<input type="text" required="required" class="form-control" id="phone" name="phone" placeholder="Enter Phone" onChange={this.handleChange}/>
                					<label for="businessType">Business Type</label>
                                    <select class="form-control" id="businessType" name="businessType" onChange={this.handleChange}>
                                        <option>Supplier</option>
                                        <option>Buyer</option>
                                        <option>Both</option>
                                    </select>
                
                                    <label for="businessCategory">Business Category</label>
                                    <select class="form-control" id="businessCategory" name="businessCategory" onChange={this.handleChange}>
                                        <option>Electronics & Appliance</option>
                                        <option>Sport</option>
                                        <option>Fashion</option>
                                        <option>Food & Beverage</option>
                                        <option>Automotive</option>
                                        <option>Home Appliance</option>
                                        <option>Furniture</option>
                                    </select>
                					<br />
                					<input type="text" class="form-control" name="Name" placeholder="Street Address" required=""/> 
                					<label for="city">City</label>
                                    <select class="form-control" id="exampleFormControlSelect1" name="city" onChange={this.handleChange}>
                                        <option>Dakar</option>
                                        <option>Touba</option>
                                        <option>Thiès</option>
                                        <option>Rufisque</option>
                                        <option>Kaolack</option>
                                        <option>M'Bour</option>
                                        <option>Ziguinchor</option>
                                        <option>Saint-Louis</option>
                                        <option>Diourbel</option>
                                        <option>Louga</option>
                                        <option>Tambacounda</option>
                                        <option>Richard Toll</option>
                                        <option>Kolda</option>
                                        <option>Mbacké</option>
                                        <option>Tivaouane</option>
                                        <option>Joal-Fadiouth</option>
                                        <option>Kaffrine</option>
                                        <option>Dahra</option>
                                        <option>Bignona</option>
                                        <option>Fatick</option>
                                        <option>Dagana</option>
                                        <option>Bambey</option>
                                        <option>Vélingara</option>
                                        <option>Sédhiou</option>
                                        <option>Sébikhotane</option>
                                        <option>Kédougou</option>
                                        <option>Nguékhokh</option>
                                        <option>Kayar</option>
                                        <option>Pout</option>
                                        <option>Mékhé</option>
                                        <option>Matam</option>
                                        <option>Ouro Sogui</option>
                                        <option>Nioro du Rip</option>
                                        <option>Kébémer</option>
                                        <option>Koungheul</option>
                                        <option>Guinguinéo</option>
                                        <option>Bakel</option>
                                        <option>Mboro</option>
                                        <option>Linguère</option>
                                        <option>Sokone</option>
                                        <option>Goudomp</option>
                                        <option>Thiadiaye</option>
                                        <option>Ndioum</option>
                                        <option>Damniadio</option>
                                        <option>Khombole</option>
                                        <option>Gossas</option>
                                        <option>Kanel</option>
                                </select>
                					<br />
                				
                					<div class="signin-rit">
                						<span class="agree-checkbox">
                							<label class="checkbox"><input type="checkbox" name="checkbox"/>I agree to your <a class="w3layouts-t" href="#terms" target="_blank">Terms of Use</a> and <a class="w3layouts-t" href="#privacy" target="_blank">Privacy Policy</a></label>
                						</span>
                					</div>
                					<input type="submit" value="Sign Up"/>
                				</form>
                		
    )
  }
}



class BusinessRegisterForm extends Component {
    
      constructor(props) {
        super(props);
        this.state = { 
                    email: '',
                    businessName: '',
                    businessType: '',
                    businessCategory: '',
                    phone: '',
                    address: '',
                    country: 'Senegal',
                    city: '',
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
            let businessName = this.state.businessName.trim();
            let businessType = this.state.businessType.trim();
            let businessCategory = this.state.businessCategory.trim();
            let phone = this.state.phone.trim();
            let country = this.state.country.trim();
            let city = this.state.city.trim();
        
    
        if (!email || !businessName || !businessType) {
          return;
        }
        this.props.onBusinessSubmit({ 
            email: email,
            businessName: businessName, 
            businessType: businessType,
            businessCategory: businessCategory,
            phone: phone,
            country: country,
            city: city,
            
        });
        this.setState({ 
                    email: '',
                    businessName: '',
                    businessType: '',
                    businessCategory: '',
                    phone: '',
                    address: '',
                    country: 'Senegal',
                    city: '',
            });
      }
      
  render() {
    return (
         <div className="register"  id="custom-container">
            <section>
                <div id="agileits-sign-in-page" class="sign-in-wrapper">
                    <div class="agileinfo_signin">
                	<h3>BUSINESS INFORMATION</h3>
                	
                        <Form />
                        
            	    </div>
                </div>
            </section>
         </div>
    )
  }
}

export default BusinessRegisterForm;
