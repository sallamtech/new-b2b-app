import React, { Component } from 'react';
import axios from 'axios';
import {Table, Button} from 'react-materialize';

// Import React Table
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

class ProductTable extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      data: this.props.data,
      authUser: null
     };
  }


  render() {
        
    const { data } = this.state;
    
    return (
        <ReactTable
          data={data}
          filterable
          defaultFilterMethod={(filter, row) =>
            String(row[filter.id]) === filter.value}
          columns={[
            {
              Header: "Name",
              columns: [
                {
                  Header: "Product Name",
                  id: "productName",
                  accessor: d => d.productName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["productName"] }),
                  filterAll: true
                },
                {
                  Header: "Product Category",
                  id: "category",
                  accessor: d => d.category,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["category"] }),
                  filterAll: true
                }
              ]
            },
            {
              Header: "Price",
              columns: [
                {
                  Header: "Min Price",
                  id: "minPrice",
                  accessor: d => d.minPrice,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["minPrice"] }),
                  filterAll: true
                },
                 {
                  Header: "Max Price",
                  id: "maxPrice",
                  accessor: d => d.maxPrice,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["maxPrice"] }),
                  filterAll: true
                },
                {
                  Header: "Display Status",
                  accessor: "displayStatus",
                  id: "displayStatus",
                  //Cell: ({ value }) => (value >= 21 ? value : value),
                  filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      return true;
                    }else{
                        return row[filter.id] === filter.value;
                    }
                   
                    //return row[filter.id] < 21;
                  },
                  Filter: ({ filter, onChange }) =>
                    <select
                      type='select'
                      onChange={event => onChange(event.target.value)}
                      style={{ width: "100%", display: "inline"}}
                      value={filter ? filter.value : "all"}
                    >
                      <option value="all">Show All</option>
                      <option value="Display">On Display</option>
                      <option value="Hide">Hide</option>
                    </select>
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
    );
  }
}

export default ProductTable;