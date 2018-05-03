import React, {Component} from 'react';
import Category from './Category';

// Import React Table
import ReactTable from "react-table";


class CategoryList extends Component {
    render() {
        
        let categoryNodes = this.props.data.map(category => {
            
            return (
                
                <Category
                    uniqueID={ category['_id'] }
                    categoryName={category.categoryName}
                    >
                </Category>
                
                )
        })
        
        return (
            <div>
            
            { categoryNodes} 
                
            </div>
        );
    }
} 

export default CategoryList;