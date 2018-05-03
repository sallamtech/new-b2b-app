import React, { Component } from 'react';
import axios from 'axios';
import {Table, Button} from 'react-materialize';
//import { makeData } from "./Data";

// Import React Table
import ReactTable from "react-table";
import matchSorter from 'match-sorter';

class PreOrderTable extends React.Component {
  constructor(props) {
      super(props);
    this.state = {
        data: this.props.data,
    };
    
  }
  
  
  render() {
    const { data } = this.state;
    return (
      <div>
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
                  Header: "Order ID",
                  accessor: "orderId",
                  filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) &&
                    row[filter.id].endsWith(filter.value)
                },
                {
                  Header: "Customer Name",
                  id: "customerName",
                  accessor: d => d.customerName,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["customerName"] }),
                  filterAll: true
                }
              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "Order Date",
                  id: "orderDate",
                  accessor: d => d.orderDate,
                  filterMethod: (filter, rows) =>
                    matchSorter(rows, filter.value, { keys: ["orderDate"] }),
                  filterAll: true
                },
                {
                  Header: "Offer Status",
                  accessor: "offerStatus",
                  id: "offerStatus",
                  //Cell: ({ value }) => (value >= 21 ? value : value),
                  filterMethod: (filter, row) => {
                    if (filter.value === "all") {
                      //return true;
                      return row[filter.id] !== 'N/A';
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
                      <option value="Accepted">Accepted Offers</option>
                      <option value="Declined">Declined Offers</option>
                      <option value="Pending">Pending Offers</option>
                      <option value="Negotiating">Negotiating Offers</option>
                    </select>
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default PreOrderTable;