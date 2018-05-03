import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Autocomplete, Input, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';
import ProductBox from '../components/product/ProductBox';

import CreateIdeaForm from '../components/search/CreateIdeaForm';
import IdeaList from '../components/search/IdeaList';
import Search from '../components/search/Search';

class EditProfile extends React.Component {

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
            <div className="EditProfile">
                
                <Row>
                
                    <Col s={12} m={5}>
                    
                        <Card className='white' textClassName='black-text' title=''>
                            <a href="#profile">
                            <Chip>
                              <img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />
                              Example Store
                            </Chip>
                            </a>
                            
                            <br/>
                            <Collection>
                            <Col s={12} m={6}>
                              <CollectionItem href="#businesses">
                                <Badge>999</Badge>Following
                              </CollectionItem>
                            </Col>
                            <Col s={12} m={6}>
                              <CollectionItem href="#businesses">
                                <Badge>999</Badge>Followers
                              </CollectionItem>
                              </Col>
                            </Collection>
                            
                            <span><strong>New York</strong></span><br/>
                              <span>Joined on October 4, 2017</span><br/>
                              <hr/>
                              <span><strong>Phone Number: </strong><br/>555-555-5555</span><br/><br/>
                              <span><strong>Address: </strong><br/>123 Street Address, New York, NY 12345</span>
                              
                              <br/><br/>
                                <Modal
                          header='Post Review'
                          fixedFooter
                          trigger={<Button className='red darken-1'>Post Review</Button>}>
                          
                           
                            <Row>
                            
                            <Input s={12} type='select' label="" defaultValue='1'>
                                <option value='1'>Positive</option>
                                <option value='2'>Negative</option>
                            </Input>
                            
                            <Input type="textarea" name="content" s={12} label="Content" onChange={this.handleChange} />
                            
                            <Autocomplete
                                title='Related Product'
                                data={
                                  {
                                    'Iphone 7': null
                                  }
                                }
                              />
                            
                            </Row>  
                            
                            <Button class="blue" waves='light' type="submit">Post Review</Button>
                        
                        
                        
                        </Modal>
                              
                        </Card>
                    
                    </Col>
                    
                    <Col s={12} m={7}>
                        
                        
                        
                        <CardPanel className='white' textClassName='black-text'>
                            <h5>Edit Profile</h5>
                        </CardPanel>
                        
                        <Card
                        className='white' textClassName='black-text'>
                            
                            <Search searchIdeas={this.searchIdeas.bind(this)}/>
                            
                            <Modal
                              trigger={<a href="">&nbsp;+ Add product</a>}>
                              <CreateIdeaForm saveIdea={ this.storeIdea.bind(this) }/>
                            </Modal>
                            <br/><br/>
                            <IdeaList ideas={this.state.ideas}
                                      destroy={this.destroyIdea.bind(this)}
                                      updateTitle={this.updateTitle.bind(this)}
                                      updateBody={this.updateBody.bind(this)}/>
                        
                        </Card>
                        
                        <Card 
                        header=''
                        className='white' textClassName='black-text' title='Iphone 7'>
                            <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong><br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time</span>
                        <br/><br/>
                        <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Modal
                              header=''
                              trigger={<Button className='red darken-1'>Add to cart</Button>}>
                              <p>"iPhone 7" has been added to your cart.</p>
                            </Modal>
                        
                        </Card>
                        
                        <Card 
                        header=''
                        className='white' textClassName='black-text' title='Iphone 7'>
                            <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong><br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time</span>
                        <br/><br/>
                        <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Modal
                              header=''
                              trigger={<Button className='red darken-1'>Add to cart</Button>}>
                              <p>"iPhone 7" has been added to your cart.</p>
                            </Modal>
                        
                        </Card>
                        
                        <Card 
                        header=''
                        className='white' textClassName='black-text' title='Iphone 7'>
                            <span>New York&nbsp;&nbsp;<strong>$300 - $800</strong><br/><br/>Apple · iPhone · iPhone 7 · iPhone 7 (Original) · iOS · 4.7 in · Fingerprint Scanner · Rear Camera: 12 MP · 4G LTE · 14 hours talk time</span>
                        <br/><br/>
                        <Button className='light-blue darken-4' waves='light' node='a' href='#single'>View</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Modal
                              header=''
                              trigger={<Button className='red darken-1'>Add to cart</Button>}>
                              <p>"iPhone 7" has been added to your cart.</p>
                            </Modal>
                        
                        </Card>
                        
                    </Col>
                    
                </Row>

            </div>
        );
    }
} 

export default EditProfile;