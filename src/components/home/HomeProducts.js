import React, { Component } from 'react';
import axios from 'axios';
import {Table, Collection, CollectionItem, Badge, Tabs, Tab, Collapsible, CollapsibleItem, Icon, Input, Modal, Button, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Autocomplete, Chip, Tag} from 'react-materialize';
//import { makeData } from "./Data";

// Import React Table
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

class HomeProducts extends React.Component {
  constructor(props) {
      super(props);
    this.state = {
      data: this.props.data,
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>

        <Col s={12} m={7}>
                        
                        <CardPanel className='white' textClassName='black-text' data={data} filterable>
                            <Row>
                              <Input s={12} type='select' label='Browse Products' defaultValue='1'>
                                <option value="all">All Products</option>
                              <option value="Featured">Featured</option>
                              <option value="Latest">Latest</option>
                              <option value="Price">Price</option>
                              <option value="Popular">Popular</option>
                              </Input>
                            </Row>
                            
                        </CardPanel>
                        
                        <Row>

                            <Col s={12} m={4}>
                                
                                <Card 
                                header=''
                                className='white' textClassName='black-text' title='Iphone 7'>
                                    <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong><br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time</span>
                                <br/><br/>
                                <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                                <br/><br/>
                                <Modal
                                      header=''
                                      trigger={<Button className='red darken-1'>Add to cart</Button>}>
                                      <p>"iPhone 7" has been added to your cart.</p>
                                    </Modal>
                                
                                </Card>
                                
                            </Col>
                            
                            <Col s={12} m={4}>
                                
                                <Card 
                                header=''
                                className='white' textClassName='black-text' title='Iphone 7'>
                                    <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong><br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time</span>
                                <br/><br/>
                                <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                                <br/><br/>
                                <Modal
                                      header=''
                                      trigger={<Button className='red darken-1'>Add to cart</Button>}>
                                      <p>"iPhone 7" has been added to your cart.</p>
                                    </Modal>
                                
                                </Card>
                                
                            </Col>
                            
                            <Col s={12} m={4}>
                                
                                <Card 
                                header=''
                                className='white' textClassName='black-text' title='Iphone 7'>
                                    <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong><br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time</span>
                                <br/><br/>
                                <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                                <br/><br/>
                                <Modal
                                      header=''
                                      trigger={<Button className='red darken-1'>Add to cart</Button>}>
                                      <p>"iPhone 7" has been added to your cart.</p>
                                    </Modal>
                                
                                </Card>
                                
                            </Col>
                            
                        </Row>
                        
                    </Col>
                    
                    <Col s={12} m={5}>
                        
                        <Card className='white' textClassName='black-text' title='BROWSE BY CATEGORY'>
                        
                            <Collection>
                              <CollectionItem href="#">
                                Computer <Badge>4</Badge>
                              </CollectionItem>
                              <CollectionItem href="#">
                                Phone <Badge newIcon>3</Badge>
                              </CollectionItem>
                              <CollectionItem href="#">
                                Book
                              </CollectionItem>
                              <CollectionItem href="#">
                                Fasion <Badge>1</Badge>
                              </CollectionItem>
                            </Collection>
                        
                        </Card>
                        
                        <Card className='white' textClassName='black-text' title='BROWSE BY LOCATION'>
                        
                            <a href="#">All Locations</a>
                            
                            <Collapsible accordion>
                              <CollapsibleItem header='California' icon='place'>
                                <Collection>
                                  <CollectionItem href='#'>Los Angeles</CollectionItem>
                                  <CollectionItem href='#'>San Francisco</CollectionItem>
                                  <CollectionItem href='#'>San Diego</CollectionItem>
                                </Collection>
                              </CollapsibleItem>
                              <CollapsibleItem header='New York' icon='place'>
                                <Collection>
                                  <CollectionItem href='#'>Rochester</CollectionItem>
                                  <CollectionItem href='#'>Buffalo</CollectionItem>
                                  <CollectionItem href='#'>Long Island</CollectionItem>
                                </Collection>
                              </CollapsibleItem>
                            </Collapsible>
                        
                        </Card>
                        
                    </Col>
        
      </div>
    );
  }
}

export default HomeProducts;