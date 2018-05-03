import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Icon, Input, Button, Col, Row} from 'react-materialize';
import HomeSearchResualt from '../../pages/home/HomeSearchResualt';

class SearchForm extends React.Component {
    
     constructor(props) {
        super(props);
        
        this.state = { 
            redirect: false,
            initialItems: [
             { businessName: "Apples", city: 'New York', phone: '123-233-4455'},
             { businessName: "Tech Group", city: 'NHG', phone: '156-553-4455'},
             { businessName: "Google", city: 'Cali', phone: '123-233-4455'},
             { businessName: "Amazon", city: 'New Main', phone: '917-233-4455'},
             { businessName: "No Business", city: 'New York', phone: '123-233-4455'},
             { businessName: "New Tech", city: 'Mai', phone: '123-233-4455'},
             { businessName: "Applers", city: 'New York', phone: '123-233-4455'},
           ],
           items: []
         };
         this.filterList = this.filterList.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
      }
        
      filterList(event){
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
          return item.businessName.toLowerCase().search(
            event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
      }
      
      
      handleSubmit(e) {
            e.preventDefault();
            this.setState({redirect: true});
      }
      
    
      componentWillMount(){
        this.setState({items: this.state.initialItems})
      }
    
    render() {
    
        return (
            <div className='container'>
            <Col s={12} m={12}>
                        
            <div class="row hide-on-small-only">
                <form class="col s12" onSubmit={this.handleSubmit}>
                  <div class="row">
                    <div class="input-field col s2">
                     <select class="browser-default">
                        <option value="" selected>All</option>
                        <option value='1'>Computer</option>
                        <option value='2'>Phone</option>
                        <option value='3'>Book</option>
                        <option value='4'>Fasion</option>
                      </select>
                    </div>
                    <div class="input-field col s9">
                      <input id="last_name" type="text" class="validate" onChange={this.filterList} placeholder='Search ...' />
                    </div>
                    
                     <br/>
                 {/* <Button className='light-blue darken-4 col s1' s={1} waves='light' node='a' href='#search-results'><Icon>search</Icon></Button>*/}
                  <Button className='light-blue darken-4 col s1' s={1} waves='light' type="submit" name="action"><Icon>search</Icon></Button>
                    
                  </div>
                </form>
            { /* {this.state.items.length < 3 &&
                      <Redirect to={{
                        pathname: '/home-search-results',
                        state: { items: this.state.items }
                      }}/>
                    }*/}
                    
                    
                     {(this.state.redirect)
                    //Create Developer user form
                    ?( <Redirect to={{
                        pathname: '/home-search-results',
                        state: { items: this.state.items }
                      }}/>)
                   : null }
                  
              </div>
    
                </Col>
            </div>
        );
    }
}

export default SearchForm;
