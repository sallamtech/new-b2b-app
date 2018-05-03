import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Table, Input, Collapsible, CollapsibleItem, Tabs, Tab, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

class Checkout extends React.Component {

    render() {
    
        return (
            <div className="Checkout">
                
              <Row>
                
                <Col s={12} m={12}>
                        
                    <CardPanel className='white' textClassName='black-text'>
                      <h5><strong>Checkout</strong></h5>
                    </CardPanel>
                    
                    <form s={6} xs={6} onSubmit={this.handleSubmit}>
                    
                    <CardPanel className='white' textClassName='black-text'>
                    
                      <Row>
                      
                      <Input placeholder="" s={6} label="First name" validate/>
                      
                      <Input placeholder="" s={6} label="Last name" />
                      
                      <Input placeholder="" s={6} label="Company name" />
                      
                      <Input s={6} type='select' label="Country" defaultValue='1'>
                        <option value='1'>United States (US)</option>
                        <option value='2'>Other</option>
                      </Input>
                      
                      <Input placeholder="" s={6} label="Street address" />
                      
                      <Input placeholder="" s={6} label="Apartment, suite, unit etc." />
                      
                      <Input placeholder="" s={6} label="Town / City" />
                      
                      <Input s={6} type='select' label="State" defaultValue='NY'>
                                  <option value="AL">Alabama</option>
                                	<option value="AK">Alaska</option>
                                	<option value="AZ">Arizona</option>
                                	<option value="AR">Arkansas</option>
                                	<option value="CA">California</option>
                                	<option value="CO">Colorado</option>
                                	<option value="CT">Connecticut</option>
                                	<option value="DE">Delaware</option>
                                	<option value="DC">District Of Columbia</option>
                                	<option value="FL">Florida</option>
                                	<option value="GA">Georgia</option>
                                	<option value="HI">Hawaii</option>
                                	<option value="ID">Idaho</option>
                                	<option value="IL">Illinois</option>
                                	<option value="IN">Indiana</option>
                                	<option value="IA">Iowa</option>
                                	<option value="KS">Kansas</option>
                                	<option value="KY">Kentucky</option>
                                	<option value="LA">Louisiana</option>
                                	<option value="ME">Maine</option>
                                	<option value="MD">Maryland</option>
                                	<option value="MA">Massachusetts</option>
                                	<option value="MI">Michigan</option>
                                	<option value="MN">Minnesota</option>
                                	<option value="MS">Mississippi</option>
                                	<option value="MO">Missouri</option>
                                	<option value="MT">Montana</option>
                                	<option value="NE">Nebraska</option>
                                	<option value="NV">Nevada</option>
                                	<option value="NH">New Hampshire</option>
                                	<option value="NJ">New Jersey</option>
                                	<option value="NM">New Mexico</option>
                                	<option value="NY">New York</option>
                                	<option value="NC">North Carolina</option>
                                	<option value="ND">North Dakota</option>
                                	<option value="OH">Ohio</option>
                                	<option value="OK">Oklahoma</option>
                                	<option value="OR">Oregon</option>
                                	<option value="PA">Pennsylvania</option>
                                	<option value="RI">Rhode Island</option>
                                	<option value="SC">South Carolina</option>
                                	<option value="SD">South Dakota</option>
                                	<option value="TN">Tennessee</option>
                                	<option value="TX">Texas</option>
                                	<option value="UT">Utah</option>
                                	<option value="VT">Vermont</option>
                                	<option value="VA">Virginia</option>
                                	<option value="WA">Washington</option>
                                	<option value="WV">West Virginia</option>
                                	<option value="WI">Wisconsin</option>
                                	<option value="WY">Wyoming</option>
                                </Input>
                                
                                <Input placeholder="" s={6} label="Zip" />
                                
                                <Input placeholder="" s={6} label="Phone"/>
                                
                                <Input placeholder="" s={6} label="Email address" />
                                
                      </Row>
                        
                    </CardPanel>
                    
                    <CardPanel className='white' textClassName='black-text'>
                    <h5>Your order</h5>
                    <Table>
                      <thead>
                        <tr>
                          <th data-field="product">Product</th>
                          <th data-field="quantity">Quantity</th>
                          <th data-field="total">Total</th>
                          <th data-field="status">Status</th>
                        </tr>
                      </thead>
                    
                      <tbody>
                        <tr>
                          <td><a href="#single">Iphone 7</a></td>
                          <td>1</td>
                          <td>$800.00</td>
                          <td>Pending payment</td>
                        </tr>
                        <tr>
                          <td><a href="#single">Charger</a></td>
                          <td>2</td>
                          <td>$40.00</td>
                          <td>Completed</td>
                        </tr>
                        <tr>
                          <td><strong>Subtotal:</strong></td>
                          <td></td>
                          <td><strong>$840.00</strong></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><strong>Payment method:</strong></td>
                          <td></td>
                          <td><strong>Cash on delivery</strong></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><strong>Total:</strong></td>
                          <td></td>
                          <td><strong>$840.00</strong></td>
                          <td></td>
                        </tr>
                      </tbody>
                    </Table>
                  
                  </CardPanel>
                
                  <Input name='group1' type='radio' value='cash' label='Cash on delivery' />
                  <Input name='group1' type='radio' value='check' label='Check payments' />
                  <Input name='group1' type='radio' value='transfer' label='Direct bank transfer' />
                  <Input name='group1' type='radio' value='paypal' label='PayPal' />
                  <br/><br/><br/>
                  <Button className='red darken-1' waves='light' node='a' href='#order-received'>Place order</Button>
                  
                  </form>
                </Col>
                      
              </Row>

            </div>
        );
    }
} 

export default Checkout;