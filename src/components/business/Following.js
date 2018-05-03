import React, { Component } from 'react';
import axios from 'axios';
import {Card, Col, Row, Chip, Button} from 'react-materialize';
import InfiniteScroll from 'react-infinite-scroller';
    
class Following extends Component { 
    
    
    constructor(props) {
    super(props);
    
    this.state = { 
        loadMore: true,
        limit: 6,
        itemLength: 0,
        initialItems: [
         { businessName: "Apples", city: 'New York', phone: '123-233-4455'},
         { businessName: "Tech Group", city: 'NHG', phone: '156-553-4455'},
         { businessName: "Amazon", city: 'New Main', phone: '917-233-4455'},
         { businessName: "No Business", city: 'New York', phone: '123-233-4455'},
         { businessName: "New Tech", city: 'Mai', phone: '123-233-4455'},
         { businessName: "Applers", city: 'New York', phone: '123-233-4455'},
         { businessName: "Applers", city: 'New York', phone: '123-233-4455'},
       ],
       items: []
     };
     this.filterList = this.filterList.bind(this);
     this.handleLoadMore = this.handleLoadMore.bind(this);
  }
    
 async filterList(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.businessName.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    await this.setState({
        items: updatedList,
        itemLength: updatedList.length,
    });
    
    
    //reset load more button
    if(this.state.limit >= this.state.itemLength){
        
       this.setState({
          loadMore: !this.state.loadMore,
        });
        
      }
    
  }
  

 async componentWillMount(){
     
     try{
         await this.setState({
            items: this.state.initialItems,
            itemLength: this.state.initialItems.length
            
         });
         
         if(this.state.limit >= this.state.itemLength){
                
             this.setState({
                  loadMore: !this.state.loadMore,
                });
                
              }
         
        
         
     } catch(e){
         alert(e);
     }
     
   
  }
  
  
  //handle load more 
    handleLoadMore = async e =>  {
    
        try{
          
          await this.setState({ limit: this.state.limit + 10 });
          
          
           if(this.state.limit >= this.state.itemLength){
                
               this.setState({
                  loadMore: !this.state.loadMore,
                });
                
              }
          
        }catch(e){
          alert(e);
        }
    
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
      <List 
       loadMore={this.state.loadMore}
       limit={this.state.limit}
       items={this.state.items}
       onLoadMore={this.handleLoadMore}
       />
      </div>
      </Row>
    );
  }
  
}  


    
class List extends Component {
    
  render(){
      
       //let businessNodes = this.props.items.map(item => {
       let businessNodes = this.props.items.slice(0, this.props.limit).map(item => {
            
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
            <div>
            <Row>
            
                { businessNodes} 
           
            </Row>
            
            <div className="center">
             { (this.props.loadMore)
            ? (<Button className="grey lighten-1" onClick={this.props.onLoadMore} waves='light'>load more</Button>)
            : null}
            </div>
            
            
            </div>
        );
      
  }
}

export default Following;
