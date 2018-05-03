import React, { Component } from 'react';
import axios from 'axios';
import {Card, Col, Row, Chip} from 'react-materialize';
import InfiniteScroll from 'react-infinite-scroller';
    
class Following extends Component { 
    
    
    constructor(props) {
    super(props);
    
    this.state = { 
        initialItems: [
         { businessName: "Apples", city: 'New York', phone: '123-233-4455'},
         { businessName: "Tech Group", city: 'NHG', phone: '156-553-4455'},
         { businessName: "Google", city: 'Cali', phone: '123-233-4455'},
         { businessName: "Amazon", city: 'New Main', phone: '917-233-4455'},
         { businessName: "No Business", city: 'New York', phone: '123-233-4455'},
         { businessName: "New Tech", city: 'Mai', phone: '123-233-4455'},
         { businessName: "Applers", city: 'New York', phone: '123-233-4455'},
       ],
       items: []
     };
     this.filterList = this.filterList.bind(this);
  }
    
  filterList(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.businessName.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }
  

  componentWillMount(){
    this.setState({items: this.state.initialItems})
  }
  
  render(){
       /*var divStyle = {
        margin: '0 25px 0 0',
          // width: '400px'
        };*/
      
      
    return (
    <Row>
      <div className="col s12 col m10 right">
        <input type="text" placeholder="Search" onChange={this.filterList}/>
      <List items={this.state.items}/>
      </div>
      </Row>
    );
  }
  
}  


    
class List extends Component {
    
  render(){
      
       let businessNodes = this.props.items.map(item => {
            
            return (
                
                
                 <Col s={12} m={4}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                        <Chip>
                          <a href='#profile'><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                          {item.businessName}</a>
                        </Chip>
                        <br/>
                            <span><strong>{item.city}</strong></span><br/>
                        	    <span>Joined on October 4, 2017</span><br/>
                        	    <hr/>
                        	    <span><strong>Phone Number: </strong><br/>{item.phone}</span><br/><br/>
                        	    <span><strong>Address: </strong><br/>123 Street Address, New York, NY 12345</span>
                        	    
                        	    <br/><br/>
                               
                        	    <br/><br/>
                        	    <hr/>
                        	    <br/>
                       
                        </Card>
                        
                    </Col>
                
                 
                );
        });
        
        return (
            <Row>
            <InfiniteScroll
                pageStart={0}
                //loadMore={loadFunc}
                hasMore={true || false}
                loader={<div className="loader">Loading ...</div>}
            >
                { businessNodes} 
            </InfiniteScroll>
                
            </Row>
        );
      
  }
}

export default Following;
