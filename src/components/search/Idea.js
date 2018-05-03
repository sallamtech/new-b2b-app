import React from 'react';
import {Autocomplete, Input, SideNavItem, SideNav, Navbar, Icon, Button, Dropdown, NavItem, Collection, CollectionItem, Badge, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Modal, Chip, Tag} from 'react-materialize';

class Idea extends React.Component {
  render() {
    return (
      <div className="col s12 m6 l4">
        <div className='card blue-grey lighten-3'>
          <div className="card-content white-text">
            <Chip><a href="#single"><img src='http://materializecss.com/images/yuna.jpg' alt='Contact Person' />View</a></Chip>
            <span contentEditable 
                  className="card-title"
                  name="title"
                  onBlur={ (event) => this.props.updateTitle(event, this.props.id) }>
                  { this.props.title }
            </span>
            <p contentEditable
               onBlur={ (event) => this.props.updateBody(event, this.props.id) }
               name="body">
              { this.props.body }
            </p>
          </div>
          <div className="card-action">
            <Modal
                              header=''
                              trigger={<Button icon='shopping_cart'></Button>}>
                              <p>"iPhone 7" has been added to your cart.</p>
                            </Modal>&nbsp;&nbsp;
            <button className='btn red darken-1' onClick={ () => this.props.destroy(this.props.id) }><Icon>delete</Icon></button>
          </div>
            
        </div>
      </div>
    )
  }
}

export default Idea;