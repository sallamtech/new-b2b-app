import React, { Component } from 'react';
import {Icon, Row, Input, Modal, Button} from 'react-materialize';


class CategoryCreateForm extends Component {
    
      constructor(props) {
        super(props);
        
        this.state = { 
                categoryName: '',
            };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
     this.setState({
       [name]: value
     });
    
     }
    
     
      handleSubmit(e) {
        e.preventDefault();
        
            let categoryName = this.state.categoryName.trim();
        
    
        if (!categoryName) {
          return;
        }
        
        this.props.onCategorySubmit({ 
            categoryName: categoryName,
            
        });
        
        this.setState({ 
                categoryName: '',
            });
      }
      
  render() {
       
      
    return (
         <div className="Category">
         
             <Modal
              header='Category'
              fixedFooter
              trigger={<Button className='light-blue darken-4'>ADD PRODUCT CATEGORY <Icon left>add_box</Icon></Button>}>
              
               <form s={6} xs={6} onSubmit={this.handleSubmit}>  
                <Row>
                	<Input name="categoryName" type="text" label="Category Name" s={12} onChange={this.handleChange}/>
                </Row>	
                
                <Button class="blue" waves='light' type="submit">submit<Icon right>send</Icon></Button>
            </form>		
            
            
            </Modal>
         </div>
    )
  }
}
export default CategoryCreateForm;
