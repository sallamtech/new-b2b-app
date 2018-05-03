import React, { Component } from 'react';
import axios from 'axios';
import {Table, Collection, CollectionItem, Badge, Tabs, Tab, Collapsible, CollapsibleItem, Icon, Input, Modal, Button, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Autocomplete, Chip, Tag} from 'react-materialize';
import InfiniteScroll from 'react-infinite-scroller';
import InputRange from 'react-input-range';

    
class PriceFilter extends Component { 

constructor(props) {
    super(props);

    this.state = {
      value: 5,
      value2: {
        min: 300,
        max: 800,
      },
    };
  }

  render() {
    return (
      <div>
      
      <form className="form">
        
        <h5>Price range</h5>
        <br/><br/>
        <InputRange
          draggableTrack
          maxValue={1000}
          minValue={0}
          onChange={value => this.setState({ value2: value })}
          onChangeComplete={value => console.log(value)}
          value={this.state.value2} />
          <br/>
      </form>
      
      </div>
    );
  }
}

export default PriceFilter;
