import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Collapsible, CollapsibleItem, Autocomplete, Input, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

import CreateIdeaForm from '../components/search/CreateIdeaForm';
import IdeaList from '../components/search/IdeaList';
import Search from '../components/search/Search';

class Businesses extends React.Component {

    constructor() {
    super()
    this.state = { ideas: [], allIdeas: [] }
  }

  componentDidMount(){
    const ideas = JSON.parse(localStorage.getItem('ideas')) || []
    this.setState({ ideas: ideas, allIdeas: ideas})
  }

  storeIdea(idea){
    this.state.ideas.push(idea);

    let ideas = this.state.ideas

    this.setState({ ideas: ideas }, () => this.lstore(ideas))
  }

  lstore(ideas) {
    localStorage.setItem('ideas', JSON.stringify(ideas))
  }

  destroyIdea(id){
    let ideas = this.state.ideas.filter( idea => idea.id !== id )
    this.setState({ideas: ideas}, () => this.lstore(ideas))
  }

  updateTitle(event, id){
    let ideas = this.state.ideas.map( idea => {
      if(idea.id === id) {
        idea.title = event.target.textContent
      }
      return idea
    })
    this.setState({ideas: ideas}, () => this.lstore(ideas))
  }

  updateBody(event, id){
    console.log(event.target.textContent)
    let ideas = this.state.ideas.map( idea => {
      if(idea.id === id) {
        idea.body = event.target.textContent
      }
      return idea
    })
    this.setState({ideas: ideas}, () => this.lstore(ideas))
  }

  searchIdeas(query){
    let ideas = this.state.allIdeas.filter((idea) => {
      return idea.title.includes(query) || idea.body.includes(query)
    });
    this.setState({ideas: ideas})
  }
    
    render() {
    
        return (
            <div className="Businesses">
                
                <Row>
                
                    <Col s={12} m={12}>

                        <CardPanel className='white' textClassName='black-text'>
                            <h5>5 Businesses</h5>
                        </CardPanel>
                        
                        
                        
                    </Col>
                    
                </Row>
                
                <Row>
                
                
                <Col s={12} m={3}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <Chip>
                              <a href='#profile'><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                              Example Store</a>
                            </Chip>
                            <br/>
                            <span><strong>New York, USA</strong></span><br/>
                                <span>Chain retailer with a large array of brand-name electronics, computers, appliances & more.</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={3}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <Chip>
                              <a href='#profile'><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                              Example Store</a>
                            </Chip>
                            <br/>
                            <span><strong>New York, USA</strong></span><br/>
                                <span>Chain retailer with a large array of brand-name electronics, computers, appliances & more.</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={3}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <Chip>
                              <a href='#profile'><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                              Example Store</a>
                            </Chip>
                            <br/>
                            <span><strong>New York, USA</strong></span><br/>
                                <span>Chain retailer with a large array of brand-name electronics, computers, appliances & more.</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={3}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <Chip>
                              <a href='#profile'><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                              Example Store</a>
                            </Chip>
                            <br/>
                            <span><strong>New York, USA</strong></span><br/>
                                <span>Chain retailer with a large array of brand-name electronics, computers, appliances & more.</span><br/>
                        </Card>
                        
                    </Col>
                    
                    <Col s={12} m={3}>
                        
                        <Card className='white' textClassName='black-text' title=''>
                            <Chip>
                              <a href='#profile'><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                              Example Store</a>
                            </Chip>
                            <br/>
                            <span><strong>New York, USA</strong></span><br/>
                                <span>Chain retailer with a large array of brand-name electronics, computers, appliances & more.</span><br/>
                        </Card>
                        
                    </Col>
            
                </Row>

            </div>
        );
    }
} 

export default Businesses;