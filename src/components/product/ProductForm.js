import React, { Component } from 'react';
import {Icon, Row, Input, Modal, Button} from 'react-materialize';
import Dropzone from 'react-dropzone';
import axios from 'axios';

class ProductCreateForm extends Component {
    
      constructor(props) {
        super(props);
        
        //this.file = null;
        
        this.state = { 
                productName: '',
                productCategory: '',
                productMinPrice: '',
                productMaxPrice: '',
                productDescription: '',
                productDisplayStatus: '',
                files: []
            };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      
      onDrop(files) {
        this.setState({
          files
        });
      }
      
    
      handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
     this.setState({
       [name]: value
     });
    
     }
     
     
     //handle file upload change
      handleFileChange (event) {
        this.file = event.target.files[0];
      }
    
     
      handleSubmit(e) {
        e.preventDefault();
        
            let productName = this.state.productName.trim();
            let productCategory = this.state.productCategory.trim();
            let productMinPrice = this.state.productMinPrice.trim();
            let productMaxPrice = this.state.productMaxPrice.trim();
            let productDescription = this.state.productDescription.trim();
            let productDisplayStatus = this.state.productDisplayStatus.trim();
            //let productImages = this.state.files;
        
    
        if (!productName || !productDescription) {
          return;
        }
        
        this.props.onProductSubmit({ 
            productName: productName,
            productCategory: productCategory, 
            productMinPrice: productMinPrice,
            productMaxPrice: productMaxPrice,
            productDescription: productDescription,
            productDisplayStatus: productDisplayStatus,
        });
        
        this.setState({ 
                productName: '',
                productCategory: '',
                productMinPrice: '',
                productMaxPrice: '',
                productDescription: '',
                productDisplayStatus: '',
            });
      }
      
      
      /*async handleSubmit(e) {
          event.preventDefault();
      
          try {
            
              let productName = this.state.productName.trim();
              let productCategory = this.state.productCategory.trim();
              let productMinPrice = this.state.productMinPrice.trim();
              let productDescription = this.state.productDescription.trim();
              let productDisplayStatus = this.state.productDisplayStatus.trim();
      
            await this.createProduct({
              productName: productName,
              productCategory: productCategory, 
              productMinPrice: productMinPrice,
              productDescription: productDescription,
              productDisplayStatus: productDisplayStatus,
              productImages: this.state.files,
            });
            this.props.history.push("/");
          } catch (e) {
            alert(e);
          }
        }*/
      
      
      createProduct(product) {
        return axios.post("products", "url", {
          body: product
        });
      }
      
  render() {
    
    const dropzoneStyle = {
      width: '100%',
      height: '160px',
      border: '2px dotted DodgerBlue',
    };

    return (
         <div className="Product">
         
             <Modal
              header='PRODUCT INFORMATION'
              fixedFooter
              trigger={<Button className='light-blue darken-4'>ADD PRODUCT <Icon left>add_box</Icon></Button>}>
              
               <form s={6} xs={6} onSubmit={this.handleSubmit}>  
                <Row>
                	<Input type="text" name="productName" placeholder="Product Name" s={6} label="Product Name" onChange={this.handleChange}/>
                	<Input s={6} type='select' name="productCategory" label="Product Category" defaultValue='1' onChange={this.handleChange}>
                		<option value='1'>Option 1</option>
                		<option value='2'>Option 2</option>
                		<option value='3'>Option 3</option>
                	</Input>
                	<Input type="number" name="productMinPrice" s={4} label="Product Min Price" onChange={this.handleChange} />
                	<Input type="number" name="productMaxPrice" s={4} label="Product Max Price" onChange={this.handleChange} />
                	<Input s={4} type='select' name="productDisplayStatus" label="Display Status" defaultValue='1' onChange={this.handleChange}>
                		<option value='1'>On Display</option>
                		<option value='2'>Not Display</option>
                	</Input>
                	<Input type="textarea" name="productDescription" s={12} label="Product Description" onChange={this.handleChange} />
                	
                </Row>
                
                <section>
                  <div className="dropzone white" >
                    <Dropzone onDrop={this.onDrop.bind(this)} style={dropzoneStyle}>
                    <br/>
                    <br/>
                    <br/>
                      <h6 className="center grey-text text-darken-3">Drop images here, or click to upload.</h6>
                    </Dropzone>
                  </div>
                  <aside>
                    <h5>Dropped files</h5>
                    <ul>
                      {
                        this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                      }
                    </ul>
                  </aside>
                </section>
                
                
                 <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                </button>
            </form>		
            
            
            </Modal>
         </div>
    )
  }
}
export default ProductCreateForm;
