import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Badge, NavItem, Navbar, Icon, Input, Button, Col, Row, CardPanel} from 'react-materialize';
import SearchForm from '../components/home/SearchForm';

class NavBar extends React.Component {
    
    constructor(props){
        super(props);

        this.state ={
          appName : 'WebSiteName',
          authenticated: true
        };
    }

    render() {
    
        return (
            <div>
            <Navbar className="blue-grey darken-4" brand='SallamTec Group' right>
            	<NavItem href='#'><Icon>home</Icon></NavItem>
            	<NavItem href='#dashboard'><Icon>dashboard</Icon></NavItem>
            	<NavItem href='#post'><Icon>create</Icon></NavItem>
            	<NavItem href='#cart'><Icon>shopping_cart</Icon></NavItem>
            	<NavItem href='#account'><Icon>account_circle</Icon></NavItem>
            	<NavItem href='#sign-in'><Icon>power_settings_new</Icon></NavItem>
            </Navbar>
            
            </div>
        );
    }
}

export default NavBar;