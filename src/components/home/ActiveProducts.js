import React, { Component } from 'react';
import axios from 'axios';
import {Table, Collection, CollectionItem, Badge, Tabs, Tab, Collapsible, CollapsibleItem, Icon, Input, Modal, Button, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Autocomplete, Chip, Tag} from 'react-materialize';
import InfiniteScroll from 'react-infinite-scroller';
import createClass from 'create-react-class';
import InputRange from 'react-input-range';
    
class ActiveProducts extends Component { 

constructor(props) {
    super(props);

    this.state = {
      value: 5,
      value2: {
        min: 100,
        max: 300,
      },
    };
  }

render() {
    
    var filterData = [
  { name: 'Iphone 7', price: '$0 - $100', category: 'Phone', location: 'New York', description: 'Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time' },
  { name: 'Chromebook', price: '$100 - $200', category: 'Laptop', location: 'California', description: 'Exactly what you want Samsungs Chromebook provides the perfect balance to computing and mobility.' },
  { name: 'iMac', price: '$200 - $300', category: 'Computer', location: 'Buffalo', description: 'A desktop experience that draws you in and keeps you there: this is the idea behind iMac. And now that idea is more powerful.' }
];
var FilterForm = createClass({
  getInitialState: function() {
    return {
      data: this.props.data,
      category: '',
      location: '',
      price: ''
    }
  },
  filterItems: function(val, type) {
     switch (type) {
      case 'category':
        this.setState({category: val});
        break;
      case 'location': 
        this.setState({location: val});
        break;
      case 'price': 
        this.setState({price: val});
        break;
      default:
        break;
    }
  },
  render: function() {
    var filteredItems = this.props.data;
    var state = this.state;
    ["category", "location", "price"].forEach(function(filterBy) {
      var filterValue = state[filterBy];
      if (filterValue) {
        filteredItems = filteredItems.filter(function(item) {
          return item[filterBy] === filterValue;
        });
      }
    });
    var categoryArray = this.props.data.map(function(item) { return item.category });
    var locationArray = this.props.data.map(function(item) { return item.location });
    var priceArray = this.props.data.map(function(item) { return item.price });
    categoryArray.unshift("");
    locationArray.unshift("");
    priceArray.unshift("");
    return (
      <div>
        <FilterOptions 
            data={this.state.data} 
            categoryOptions={categoryArray}
            locationOptions={locationArray}
            priceOptions={priceArray}
            changeOption={this.filterItems} />
        <div className="filter-form">
          <FilterItems data={filteredItems} />
        </div>
      </div>
    )
  }
});


var FilterOptions = createClass({
  changeOption: function(type, e) {
    var val = e.target.value;
    this.props.changeOption(val, type);
  },
  render: function() {
    return (
      <Col s={12} m={5}>
      
      <div className="filter-options">
        <div className="filter-option">
                        
          <CardPanel className='white' textClassName='black-text' filterable>
              <Row>
              <h5>Latest Products</h5>
              <br/>
                
                <Input s={12} type='select' id="price" label='BROWSE BY PRICE' value={this.props.price} onChange={this.changeOption.bind(this, 'price')}>
                {this.props.priceOptions.map(function(option) {
                  return ( <option key={option} value={option}>{option}</option> )
                })}
                </Input>
                
                <Input s={12} type='select' id="category" label='BROWSE BY CATEGORY' value={this.props.category} onChange={this.changeOption.bind(this, 'category')}>
                {this.props.categoryOptions.map(function(option) {
                  return ( <option key={option} value={option}>{option}</option> )
                })}
                </Input>
                <Input s={12} type='select' id="location" label='BROWSE BY LOCATION' value={this.props.location} onChange={this.changeOption.bind(this, 'location')}>
                {this.props.locationOptions.map(function(option) {
                  return ( <option key={option} value={option}>{option}</option> )
                })}
                </Input>
                
                </Row>
              
          </CardPanel>
                        
        </div>
      </div>
    </Col>
    
      
    );
  }
  
});
var FilterItems = createClass({
  render: function() {
    return (
      
      <Col s={12} m={7}>
      
      <div className="filter-items">
      {this.props.data.map(function(item){
        return (
          <div className="filter-item">
          
            <Col s={12} m={4}>
                                
                <Card 
                header=''
                className='white' textClassName='black-text' title={item.name}>
                <span>{item.location}</span>
                <br/><br/>
                <span><strong>{item.price}</strong>
                <br/><br/>{item.description}</span>
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
          </div>
        );
      })}
      </div>
      </Col>
    );
  }
});

    return (
    <div>
      <FilterForm data={filterData} />
    </div>
    );
  } 
}


export default ActiveProducts;
