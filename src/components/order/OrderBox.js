import React, { Component } from 'react';
import axios from 'axios';
import {Row, Tabs, Tab} from 'react-materialize';
import OrderTable from "./OrderTable";
import PreOrderTable from "./PreOrderTable";

class OrderBox extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
       data: [
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '05/07/2019', orderStatus: 'Shipped', offerStatus: 'Pending'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '06/07/2019', orderStatus: 'New', offerStatus: 'Accepted'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '07/07/2019', orderStatus: 'Confirmed', offerStatus: 'Declined'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '08/07/2019', orderStatus: 'Confirmed', offerStatus: 'Negotiating'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '08/07/2019', orderStatus: 'Confirmed', offerStatus: 'Accepted'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '09/07/2019', orderStatus: 'New', offerStatus: 'Negotiating'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '10/07/2019', orderStatus: 'Shipped', offerStatus: 'Negotiating'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '09/07/2019', orderStatus: 'New', offerStatus: 'Accepted'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '03/07/2019', orderStatus: 'New', offerStatus: 'Accepted'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '05/07/2019', orderStatus: 'Shipped', offerStatus: 'Declined'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '06/07/2019', orderStatus: 'Shipped', offerStatus: 'Declined'},
          {orderId: '434344c7', customerName: 'Davin Jay', orderDate: '03/07/2019', orderStatus: 'Shipped', offerStatus: 'N/A'},
        ],
      authUser: null
     };
    this.pollInterval = null;
  }


  render() {
   /* var divStyle = {
        margin: '0 25px 0 0',
          // width: '400px'
        };*/
        
    
    return (
      <Row>
      <div className="col s12 col m10 right">
      {/*<h4 class=''>Orders Page</h4>*/}
      
      <Tabs className='tab-demo z-depth-1 text-blue'>
          <Tab title="All Orders" active>
          <p><b>All Orders</b></p>
          <OrderTable data={this.state.data}/>
          
          </Tab>
          <Tab title="Pre-Orders">
          <p><b>Pre-Orders</b></p>
          <PreOrderTable data={this.state.data}/>
          </Tab>
      </Tabs>
      
       
       
       
        {/* <ProductList data={ this.state.data }/>*/}

      </div>
      </Row>
    );
  }
}

export default OrderBox;