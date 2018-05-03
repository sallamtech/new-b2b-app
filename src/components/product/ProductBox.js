import React, { Component } from 'react';
import axios from 'axios';
import {Row, Tabs, Tab} from 'react-materialize';
import ProductCreateForm from './ProductForm';
import ProductTable from './ProductTable';


class ProductBox extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      data: [],
      authUser: null
     };
    this.handleProductSubmit = this.handleProductSubmit.bind(this);
    this.handleProductUpdate = this.handleProductUpdate.bind(this);
    this.handleProductDelete = this.handleProductDelete.bind(this);
    this.pollInterval = null;
  }

  //query to load prodcts
  getProducts() {
   
      axios.get('https://4e3smqniah.execute-api.us-east-1.amazonaws.com/dev/products/getProducts')
        .then(function (response) {
          console.log(response);
          //this.setState({ data: response });
        })
        .catch(function (error) {
          console.log(error);
        });
      
  }


  handleProductSubmit(product) {
   /* let products = this.state.data;
    
    let newJobs = products.concat([product]);*/
    //this.setState({ data: newJobs });
    axios.put('https://4e3smqniah.execute-api.us-east-1.amazonaws.com/dev/products/add', product)
      .catch(err => {
        console.error(err);
        //this.setState({ data: products });
      });
  }
  
  

  handleProductUpdate(id, product) {
    //sends the product id and ohter info to our api
    axios.put(`${this.props.url}/${id}`, product)
      .catch(err => {
        console.log(err);
      })
  }

  handleProductDelete(id) {
    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log('Product deleted');
      })
      .catch(err => {
        console.error(err);
      });
  }
  

  //when incorporating into another project
  //(with react-router for instance),
  //this will prevent error messages every 2 seconds
  //once the JobBox is unmounted
  componentWillUnmount() {
  this.pollInterval && clearInterval(this.pollInterval);
  this.pollInterval = null;
  
}

componentDidMount() {
  
  this.getProducts();
  
 // console.log(this.getProducts());
  
}

componentWillMount() {
  
  this.getProducts();
  
 // console.log(this.getProducts());
  
}


 

  render() {
    
    return (
      <Row>
      <div className="col s12 col m10 right">
       <Tabs className='tab-demo z-depth-1 text-blue'>
          <Tab title="All Products" active>
          <span className='right'>
          <ProductCreateForm onProductSubmit={ this.handleProductSubmit }/>
          </span>
          <p><b>All Products</b></p>
          <ProductTable data={this.state.data}/>
          
          </Tab>
          <Tab title="Others">
         <span className='right'>
          <ProductCreateForm onProductSubmit={ this.handleProductSubmit }/>
          </span>
          <p><b>Others</b></p>
          
          <p>Place holder for other things.</p>
          
          </Tab>
      </Tabs>

      </div>
      </Row>
    );
  }
}

export default ProductBox;