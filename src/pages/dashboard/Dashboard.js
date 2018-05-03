import React from 'react';
//import { Table } from 'react-bootstrap';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Col} from 'react-materialize';
import DashNav from './DashboardNav';


class Dashboard extends React.Component {
    
      constructor(props) {
        super(props);
        
      }
      
    
    render() {
    
        return (
            
            <div className="Dashboard" >
            <Col s={6} m={6}>
            <DashNav/>
            </Col>
            
            </div>
        );
    }
} 

export default Dashboard;