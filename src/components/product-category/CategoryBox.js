import React, { Component } from 'react';
import axios from 'axios';
import {Table, Button, Collection, Row} from 'react-materialize';
import CategoryCreateForm from './CategoryForm';
import CategoryList from './CategoryList';
import DashNav from '../../pages/dashboard/DashboardNav';

// Import React Table
import ReactTable from "react-table";

class CategoryBox extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      data: [
          {categoryName: 'Phone'},
          {categoryName: 'Cumputer'},
          {categoryName: 'Book'},
          {categoryName: 'Magazine'},
          {categoryName: 'Electronic'},
          {categoryName: 'Cloth'},
          {categoryName: 'Fashion'},
        ],
      authUser: null
     };
    this.loadCategoriesFromServer = this.loadCategoriesFromServer.bind(this);
    this.handleCategorySubmit = this.handleCategorySubmit.bind(this);
    this.handleCategoryUpdate = this.handleCategoryUpdate.bind(this);
    this.handleCategoryDelete = this.handleCategoryDelete.bind(this);
    this.pollInterval = null;
  }

  //query to load categories
  loadCategoriesFromServer() {
    axios.get('url')
      .then(res => {
        this.setState({ data: res.data });
      })
  }

  handleCategorySubmit(cat) {
    let categories = this.state.data;
    
    let newCategories = categories.concat([cat]);
    this.setState({ data: newCategories });
    axios.post('url', cat)
      .catch(err => {
        console.error(err);
        this.setState({ data: categories });
      });
  }

  handleCategoryUpdate(id, cat) {
    //sends the category id and ohter info to our api
    axios.put(`${this.props.url}/${id}`, cat)
      .catch(err => {
        console.log(err);
      })
  }

  handleCategoryDelete(id) {
    axios.delete(`${this.props.url}/${id}`)
      .then(res => {
        console.log('Category deleted');
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

  render() {
   /* var divStyle = {
        margin: '0 25px 0 0',
          // width: '400px'
        };*/
        
    
    return (
      <Row>
      <div className="col s12 col m10 right">
      
      <span className='left'>
       <CategoryCreateForm onCategorySubmit={ this.handleCategorySubmit }/>
       </span>
       <br/>
       <br/>
        {/*<span className='left'>*/}
        <Collection header='Product Categories'>
          <CategoryList data={ this.state.data }/>
        </Collection>
        {/*</span>*/}
      </div>
      </Row>
    );
  }
}

export default CategoryBox;