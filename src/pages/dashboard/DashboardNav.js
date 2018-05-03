import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Row} from 'react-materialize';
import './DashboardNav.css';

class DashNav extends React.Component {
    
  render() {
      const style = {
      width: '450px'
     };
      
    return (
        <Row>
              <SideNav className="side-nav fixed col m2"
            	trigger={<Button>SIDE NAV</Button>}
            	options={{ 
            	    closeOnClick: true,
            	    draggable: true,
            	    
            	}}
            	>
            	<SideNavItem userView
            		user={{
            			background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBT0QipkXJK-XJfeV-WqoYKjOSCM8Z1-4stPzfQ3beCCLFwOMn',
            			image: 'http://materializecss.com/images/yuna.jpg',
            			name: 'John Doe',
            			email: 'jdandturk@gmail.com'
            		}}
            	/>
            	<li class="bold"><a class="collapsible-header waves-effect waves-teal"> <i class="material-icons">home</i> Home</a></li>
            	<SideNavItem divider />
            
                {/*<li class="bold" onClick={this.props.showProductBox}><a class="collapsible-header waves-effect waves-teal"> <i class="material-icons">list</i> Products</a></li>*/}
                <li class="bold"><a href="#dashboard/products" class="collapsible-header waves-effect"> <i class="material-icons">list</i> Products</a></li>
                
                <li class="bold"><a href="#dashboard/orders" class="collapsible-header waves-effect"> <i class="material-icons">shopping_basket</i> Orders</a></li>
                
                
                {/*Category Link*/}
            	<li class="bold"><a href="#dashboard/categories" class="collapsible-header waves-effect waves-teal"> <i class="material-icons">filter_none</i> Categories</a></li>
                
                <Dropdown trigger={
            		<li class="bold"><a class="collapsible-header waves-effect waves-teal"> <i class="material-icons">store</i> Businesses</a></li>
            	}>
            	<li class="bold"><a href="#dashboard/following" class="collapsible-header waves-effect waves-teal black-text">Following Businesses</a></li>
            	<li class="bold"><a href="#dashboard/followers" class="collapsible-header waves-effect waves-teal black-text">Business Followers</a></li>
            
            	<NavItem divider />
            	<li class="bold"><a class="collapsible-header waves-effect waves-teal grey-text">Other Businesses</a></li>
                </Dropdown>
                
                <li class="bold"><a class="collapsible-header waves-effect waves-teal"> <i class="material-icons">supervisor_account</i> Users</a></li>
            	<li class="bold"><a class="collapsible-header waves-effect waves-teal"> <i class="material-icons">settings</i> Settings</a></li>
                
                <SideNavItem divider />
            	<SideNavItem subheader>Footer</SideNavItem>
               
            	<SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
                
            </SideNav>
            </Row>
    )
  }
}

export default DashNav;