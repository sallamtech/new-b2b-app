import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Collection, CollectionItem, Badge, Tabs, Tab, Collapsible, CollapsibleItem, Icon, Input, Modal, Button, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Autocomplete, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

class Single extends React.Component {
    
    render() {
    
        return (
            <div className="Single">
                
                <Row>
                        
                    <Col s={12} m={7}>
                        
                        <Carousel options={{ fullWidth: true, indicators: true }} images={[
                          'https://img30.jd.id/Indonesia/nHBfsgAABwAAAB0ABukISwABhlA.jpg',
                          'https://cdn.alza.sk/Foto/ImgGalery/Image/Article/iphone_7_recenze.jpg',
                          'http://simplecoupondeals.com/wp-content/uploads/2017/05/iphone-7-case-michael-kors.jpg'
                        ]} />
                        
                        <Card className='white' textClassName='black-text'>
                            <span><h5>Iphone 7</h5></span>
                            <hr/><span><strong>$300 - $800</strong></span><br/>
                            <span>New York, NY&nbsp;-&nbsp;9 hours ago</span>
                            <br/><br/>
                            <span>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time</span>
                            
                            <br/><br/>
                            <hr/>
                            <br/>
                            <Modal
                              header=''
                              trigger={<Button className='red darken-1'>Add to cart</Button>}>
                              <p>"iPhone 7" has been added to your cart.</p>
                            </Modal>
                            
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={5}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                        <Chip>
                          <a href='#profile'><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                          Example Store</a>
                        </Chip>
                        
                        <br/>
                        
                            <Collection>
                            <Col s={12} m={6}>
                              <CollectionItem href="#businesses">
                                <Badge>999</Badge>Following
                              </CollectionItem>
                            </Col>
                            <Col s={12} m={6}>
                              <CollectionItem href="#businesses">
                                <Badge>999</Badge>Followers
                              </CollectionItem>
                              </Col>
                            </Collection>
                        
                            <span><strong>New York</strong></span><br/>
                              <span>Joined on October 4, 2017</span><br/>
                              <hr/>
                              <span><strong>Phone Number: </strong><br/>555-555-5555</span><br/><br/>
                              <span><strong>Address: </strong><br/>123 Street Address, New York, NY 12345</span>
                              
                              <br/><br/>
                                <Modal
                          header='Post Review'
                          fixedFooter
                          trigger={<Button className='red darken-1'>Post Review</Button>}>
                          
                           
                            <Row>
                            
                            <Input s={12} type='select' label="" defaultValue='1'>
                                <option value='1'>Positive</option>
                                <option value='2'>Negative</option>
                            </Input>
                            
                            <Input type="textarea" name="content" s={12} label="Content" onChange={this.handleChange} />
                            
                            <Autocomplete
                                title='Related Product'
                                data={
                                  {
                                    'Iphone 7': null
                                  }
                                }
                              />
                            
                            </Row>  
                            
                            <Button class="blue" waves='light' type="submit">Post Review</Button>
                        
                        
                        
                        </Modal>
                              <br/><br/>
                              <hr/>
                              <br/>
                                <Modal
                          header='Send a message'
                          fixedFooter
                          trigger={<Button className='light-blue darken-4'>Send this seller a message <Icon left>add_box</Icon></Button>}>
                          
                           
                            <Row>
                              <Input type="text" name="firstName" placeholder="First name" s={6} label="First name" onChange={this.handleChange}/>
                              <Input type="text" name="lastName" placeholder="Last name" s={6} label="Last name" onChange={this.handleChange}/>
                              <Input type="text" name="email" placeholder="Email" s={6} label="Email" onChange={this.handleChange}/>
                              <Input type="text" name="phoneNumber" placeholder="Phone Number" s={6} label="Phone Number" onChange={this.handleChange}/>
                              
                              <Input type="textarea" name="message" s={12} label="Message" onChange={this.handleChange} />
                              
                            </Row>  
                            
                            <Button class="blue" waves='light' type="submit">Send Message<Icon right>send</Icon></Button>
                        
                        
                        
                        </Modal>
                        </Card>
                        
                    </Col>

                </Row>

            </div>
        );
    }
} 

export default Single;