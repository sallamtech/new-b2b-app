import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Table, Input, Collapsible, CollapsibleItem, Tabs, Tab, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

class Account extends React.Component {

    render() {
    
        return (
            <div className="Account">
                
                <Row>
                
                    <Col s={12} m={12}>
                        
                        <CardPanel className='white' textClassName='black-text'>
                            <h5><strong>Account</strong></h5>
                        </CardPanel>
                        
                        <Tabs className='z-depth-1'>
                            
                            <Tab title="Profile" active>
                            <br/>
                                
                                <Row>
                                    <Input s={4} label="Your full name" />
                                    <Input type="email" label="Email" s={4} />
                                    <Input s={4} label="Phone" validate type='tel'></Input>
                                      
                                      <Input s={4} label="Street" />
                                      <Input s={4} label="City" />
                                      <Input s={4} type='select' label="State" defaultValue='AL'>
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
                                      
                                    <Input type="password" label="Old Password" s={4} />
                                    <Input type="password" label="New Password" s={4} />
                                    <Input type="password" label="Retype New Password" s={4} />
                                </Row>
                                <Button class="blue" waves='light' type="submit">Update Changes</Button>
                                
                            </Tab>
                            
                            <Tab title="Products">
                                
                                <Card 
                                  header=''
                                  className='white' 
                                  textClassName='black-text' 
                                  title='Iphone 7'>
                                      <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong>
                                      <br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time
                                      </span>
                                      <br/><br/>
                                      <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                                      &nbsp;&nbsp;&nbsp;
                                      <Modal
                                        header='Edit Product'
                                        fixedFooter
                                        trigger={<Button className='red darken-1'>Edit</Button>}>
                                        
                                         
                                          <Row>
                                          
                                          <Input placeholder="" s={6} label="Title" />
                                          
                                          <Input placeholder="" s={6} label="Price ($)" />
                                          
                                          <Input placeholder="" s={6} label="Address" />
                                          
                                          <Input s={6} type='select' label="Location" defaultValue='1'>
                                              <option value='1'>New York</option>
                                              <option value='2'>Negative</option>
                                          </Input>
                                          
                                          <Input s={12} type='select' label="Category" defaultValue='1'>
                                            <option value='1'>Select some categories</option>
                                            <option value='2'>Category 1</option>
                                            <option value='3'>Category 2</option>
                                          </Input>
                                          
                                          <Input type="textarea" name="description" s={12} label="Description" onChange={this.handleChange} />
                                          
                                          <Input name='sold' type='checkbox' value='sold' label='Mark as Sold' />
                                          
                                          </Row>  
                                          
                                          <Button className='light-blue darken-4' waves='light' type="submit">Save</Button>
                                          &nbsp;&nbsp;&nbsp;
                                          <Modal
                                            header=''
                                            trigger={<Button className='red darken-1'>Delete</Button>}>
                                            <p>"iPhone 7" has been archived.</p><br/>
                                            <div>
                                              <Button className='red darken-1' waves='light' node='a'>Undo</Button>
                                          </div>
                                          </Modal>
                                      
                                      
                                      </Modal>
                                  </Card>
                                  
                                  <Card 
                                  header=''
                                  className='white' 
                                  textClassName='black-text' 
                                  title='Iphone 7'>
                                      <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong>
                                      <br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time
                                      </span>
                                      <br/><br/>
                                      <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                                      &nbsp;&nbsp;&nbsp;
                                      <Modal
                                        header='Edit Product'
                                        fixedFooter
                                        trigger={<Button className='red darken-1'>Edit</Button>}>
                                        
                                         
                                          <Row>
                                          
                                          <Input placeholder="" s={6} label="Title" />
                                          
                                          <Input placeholder="" s={6} label="Price ($)" />
                                          
                                          <Input placeholder="" s={6} label="Address" />
                                          
                                          <Input s={6} type='select' label="Location" defaultValue='1'>
                                              <option value='1'>New York</option>
                                              <option value='2'>Negative</option>
                                          </Input>
                                          
                                          <Input s={12} type='select' label="Category" defaultValue='1'>
                                            <option value='1'>Select some categories</option>
                                            <option value='2'>Category 1</option>
                                            <option value='3'>Category 2</option>
                                          </Input>
                                          
                                          <Input type="textarea" name="description" s={12} label="Description" onChange={this.handleChange} />
                                          
                                          <Input name='sold' type='checkbox' value='sold' label='Mark as Sold' />
                                          
                                          </Row>  
                                          
                                          <Button className='light-blue darken-4' waves='light' type="submit">Save</Button>
                                          &nbsp;&nbsp;&nbsp;
                                          <Modal
                                            header=''
                                            trigger={<Button className='red darken-1'>Delete</Button>}>
                                            <p>"iPhone 7" has been archived.</p><br/>
                                            <div>
                                              <Button className='red darken-1' waves='light' node='a'>Undo</Button>
                                          </div>
                                          </Modal>
                                      
                                      
                                      </Modal>
                                  </Card>
                                  
                                  <Card 
                                  header=''
                                  className='white' 
                                  textClassName='black-text' 
                                  title='Iphone 7'>
                                      <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong>
                                      <br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time
                                      </span>
                                      <br/><br/>
                                      <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                                      &nbsp;&nbsp;&nbsp;
                                      <Modal
                                        header='Edit Product'
                                        fixedFooter
                                        trigger={<Button className='red darken-1'>Edit</Button>}>
                                        
                                         
                                          <Row>
                                          
                                          <Input placeholder="" s={6} label="Title" />
                                          
                                          <Input placeholder="" s={6} label="Price ($)" />
                                          
                                          <Input placeholder="" s={6} label="Address" />
                                          
                                          <Input s={6} type='select' label="Location" defaultValue='1'>
                                              <option value='1'>New York</option>
                                              <option value='2'>Negative</option>
                                          </Input>
                                          
                                          <Input s={12} type='select' label="Category" defaultValue='1'>
                                            <option value='1'>Select some categories</option>
                                            <option value='2'>Category 1</option>
                                            <option value='3'>Category 2</option>
                                          </Input>
                                          
                                          <Input type="textarea" name="description" s={12} label="Description" onChange={this.handleChange} />
                                          
                                          <Input name='sold' type='checkbox' value='sold' label='Mark as Sold' />
                                          
                                          </Row>  
                                          
                                          <Button className='light-blue darken-4' waves='light' type="submit">Save</Button>
                                          &nbsp;&nbsp;&nbsp;
                                          <Modal
                                            header=''
                                            trigger={<Button className='red darken-1'>Delete</Button>}>
                                            <p>"iPhone 7" has been archived.</p><br/>
                                            <div>
                                              <Button className='red darken-1' waves='light' node='a'>Undo</Button>
                                          </div>
                                          </Modal>
                                        
                                      </Modal>
                                  </Card>
                            </Tab>
                            <Tab title="Orders">
                                <Collection>
                                  <Col s={12} m={6}>
                                  <Collection header='Sale orders'>
                                    <CollectionItem href='#order-detail'>Order No. #3<br/></CollectionItem>
                                    <CollectionItem href='#order-detail'>Order No. #2<br/></CollectionItem>
                                    <CollectionItem href='#order-detail'>Order No. #1<br/></CollectionItem>
                                  </Collection>
                                  </Col>
                                  <Col s={12} m={6}>
                                  <Collection header='Purchase orders'>
                                    <CollectionItem href='#view-order'>Order No. #3<br/></CollectionItem>
                                    <CollectionItem href='#view-order'>Order No. #2<br/></CollectionItem>
                                    <CollectionItem href='#view-order'>Order No. #1<br/></CollectionItem>
                                    </Collection>
                                    </Col>
                                  </Collection>
                            </Tab>
                            <Tab title="Transactions">
                                
                                <Row>
                                    
                                    <Input label='Start date:' name='on' type='date' onChange={function(e, value) {}} />
                                    <Input label='End date:' name='on' type='date' onChange={function(e, value) {}} />
                                    <br/><Button class="blue" waves='light' type="submit">View</Button>
                                    
                                    <Table>
                                      <thead>
                                        <tr>
                                          <th data-field="date">Date</th>
                                          <th data-field="sale">Sale</th>
                                          <th data-field="earning">Earning</th>
                                        </tr>
                                      </thead>
                                    
                                      <tbody>
                                        <tr>
                                          <td>2018-03-07</td>
                                          <td>3</td>
                                          <td>Processing : $800.00</td>
                                        </tr>
                                        <tr>
                                          <td>2017-12-20</td>
                                          <td>2</td>
                                          <td>Processing : $40.00</td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                
                                </Row>
                                
                                
                            </Tab>
                        </Tabs>
                        
                    </Col>
                    
                </Row>

            </div>
        );
    }
} 

export default Account;