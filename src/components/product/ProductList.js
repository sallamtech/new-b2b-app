import React, {Component} from 'react';
import Product from './Product';

// Import React Table
import ReactTable from "react-table";


class ProductList extends Component {
    render() {
        
        let productNodes = this.props.data.map(product => {
            
            return (
                
                <Product
                    productName={product.productName}
                    category={product.category}
                    minPrice={product.minPrice}
                    maxPrice={product.maxPrice}
                    displayStatus={product.displayStatus}
                    descriptions={product.descriptions}
                    >
                </Product>
                
                )
        })
        
        return (
            <div>
            
            { productNodes} 
                
            </div>
        );
    }
} 

export default ProductList;