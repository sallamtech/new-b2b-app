import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Table, Autocomplete, Input, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

class Cart extends React.Component {

    render() {
    
        return (
            <div className="Cart">
                
                <Row>
                
                    <Col s={12} m={12}>
                    
                        <CardPanel className='white' textClassName='black-text'>
                            <h5>Cart</h5>
                        </CardPanel>
                    
                    </Col>
                    
                    <Col s={12} m={12}>
                        
                        <CardPanel className='white' textClassName='black-text'>
                        <Table>
                          <thead>
                            <tr>
                              <th data-field="product">Product</th>
                              <th data-field="price">Price</th>
                              <th data-field="quantity">Quantity</th>
                              <th data-field="total">Total</th>
                            </tr>
                          </thead>
                        
                          <tbody>
                            <tr>
                              <td><a href="#single">Iphone 7</a></td>
                              <td>$800.00</td>
                              <td><Input defaultValue="1" min="0" s={2} type="number" /></td>
                              <td>$800.00</td>
                            </tr>
                            <tr>
                              <td><a href="#single">Charger</a></td>
                              <td>$20.00</td>
                              <td><Input defaultValue="2" min="0" s={2} type="number" /></td>
                              <td>$40.00</td>
                            </tr>
                          </tbody>
                        </Table>
                        
                        <hr/>
                        
                        <Button className='blue' waves='light'>Update cart</Button>
                        
                        </CardPanel>
                        <br/>
                    
                        <Card 
                        className='white' textClassName='black-text' title='Cart totals'>
                            <span>
                            <strong>Subtotal</strong>&nbsp;&nbsp;&nbsp;$840.00
                            <br/><br/>
                            <strong>Total</strong>&nbsp;&nbsp;&nbsp;$840.00
                            </span>
                            <hr/>
                            <Button className='red darken-1' waves='light' node='a' href='#checkout'>Proceed to checkout</Button>
                        </Card>
                        
                    </Col>
                    
                </Row>

            </div>
        );
    }
} 

export default Cart;