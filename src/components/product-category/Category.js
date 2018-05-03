import React, { Component } from 'react';
import {Collection, CollectionItem, Badge} from 'react-materialize';
//import marked from 'marked';


class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toBeUpdated: false,
      ...props.e
    };
    this.updateCategory = this.updateCategory.bind(this);
    this.handleCategoryUpdate = this.handleCategoryUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    
  }

  updateCategory(e) {
    e.preventDefault();
    //brings up the update field when we click on the update link.
    this.setState({ toBeUpdated: !this.state.toBeUpdated });
  }

  handleCategoryUpdate(e) {
    e.preventDefault();
    let id = this.props.uniqueID;
    //if job fields changed, set it. if not, leave null and our PUT request
    //will ignore it.
    let categoryName = (this.state.categoryName) ? this.state.categoryName : null;
    
    let job = { categoryName: categoryName};
    this.props.onJobUpdate(id, job);
    
    this.setState({
      toBeUpdated: !this.state.toBeUpdated,
      categoryName: '',
    })
  }
  
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

 this.setState({
   [name]: value
 });

 }

 deleteCategory(e) {
  e.preventDefault();
  let id = this.props.uniqueID;
  this.props.onCategoryDelete(id);
  console.log('oops deleted');
}

  render() {
    
    
    return (
      
      <div>
      
        
          <CollectionItem href="#!">
            {this.props.categoryName} <Badge>1</Badge>
          </CollectionItem>
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

export default Category;