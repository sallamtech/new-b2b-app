import React, { Component } from 'react';
import {Table, Navbar, Icon, Row, Input} from 'react-materialize';
//import marked from 'marked';


class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toBeUpdated: false,
      ...props.e
    };
   /* this.updateJob = this.updateJob.bind(this);
    this.handleJobUpdate = this.handleJobUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteJob = this.deleteJob.bind(this);*/
    
  }

 /* updateJob(e) {
    e.preventDefault();
    //brings up the update field when we click on the update link.
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
  }*/

  /*handleJobUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    //if job fields changed, set it. if not, leave null and our PUT request
    //will ignore it.
    let job_title = (this.state.job_title) ? this.state.job_title : null;
    let company_name = (this.state.company_name) ? this.state.company_name : null;
    let city = (this.state.city) ? this.state.city : null;
    let state = (this.state.state) ? this.state.state : null;
    let descriptions = (this.state.descriptions) ? this.state.descriptions : null;
    let image = (this.state.image) ? this.state.image : null;
    let start_date = (this.state.start_date) ? this.state.start_date : null;
    let end_date = (this.state.end_date) ? this.state.end_date : null;
    let job = { job_title: job_title, company_name: company_name, city: city, state: state, descriptions: descriptions, image:image, start_date: start_date, end_date: end_date};
    this.props.onJobUpdate(id, job);
    
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      job_title: '',
      company_name: '',
      city: '',
      state: '',
      descriptions: '',
      image: '',
      start_date: '',
      end_date: ''
    })
  }*/
  
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

 this.setState({
   [name]: value
 });

 }

/* deleteJob(e) {
  e.preventDefault();
  let id = this.props.uniqueID;
  this.props.onJobDelete(id);
  console.log('oops deleted');
}*/

  render() {
    
    
    return (
      
      <div>
      
        		<tr>
        			<td>Alvin</td>
        			<td>Eclair</td>
        			<td>$0.87</td>
        		</tr>
        		<tr>
        			<td>Alan</td>
        			<td>Jellybean</td>
        			<td>$3.76</td>
        		</tr>
        		<tr>
        			<td>Jonathan</td>
        			<td>Lollipop</td>
        			<td>$7.00</td>
        		</tr>
        			
    { /* { (this.state.toBeUpdated)
          ? (<form class="col s12" onSubmit={this.handleJobUpdate}>
            <div class="row">
                <div class="input-field col s6">
                <input 
                  placeholder="Job Title"
                  id="job_title" 
                  name="job_title" 
                  type="text" 
                  class="validate" 
                  onChange={this.handleChange} 
                  defaultValue={this.props.job_title}
                  />
                <label class="active" for="job_title">Job Title</label>
                </div>
                <div class="input-field col s6">
                <input 
                  placeholder="Company Name" 
                  id="company_name" 
                  name="company_name" 
                  type="text" 
                  class="validate" 
                  onChange={this.handleChange}
                  defaultValue={this.props.company_name}
                  />
                <label class="active" for="company_name">Company Name</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                <input 
                  placeholder="City" 
                  id="city" 
                  name="city" 
                  type="text" 
                  class="validate" 
                  onChange={this.handleChange}
                  defaultValue={this.props.city}
                  />
                <label class="active" for="city">City</label>
                </div>
                <div class="input-field col s6">
                <input 
                  placeholder="State" 
                  id="state" 
                  name="state" 
                  type="text" 
                  class="validate" 
                  onChange={this.handleChange}
                  defaultValue={this.props.state}
                  />
                <label class="active" for="company_name">State</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s6">
                <input 
                  placeholder="Start Date" 
                  id="start_date" 
                  name="start_date" 
                  type="text" 
                  class="validate" 
                  onChange={this.handleChange}
                  defaultValue={this.props.start_date}
                  />
                <label class="active" for="start_date">Start Date</label>
                </div>
                <div class="input-field col s6">
                <input 
                  placeholder="End Date" 
                  id="end_date" 
                  name="end_date" 
                  type="text" 
                  class="validate" 
                  onChange={this.handleChange}
                  defaultValue={this.props.end_date}
                  />
                <label class="active" for="end_date">End Date</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s6">
                <input 
                  placeholder="Image" 
                  id="image" 
                  name="image" 
                  type="text" 
                  class="validate" 
                  onChange={this.handleChange}
                  defaultValue={this.props.image}
                  />
                <label class="active" for="image">Image</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                <textarea 
                  id="descriptions" 
                  name="descriptions" 
                  class="materialize-textarea" 
                  onChange={this.handleChange}
                  defaultValue={this.props.descriptions}>
                  </textarea>
                <label class="active" for="descriptions">Job Descriptions</label>
                </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
            </button>
            </form>)
          : null}
*/}
      </div>
    ) 
    
  }
}

export default Product;