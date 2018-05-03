import React, { Component } from 'react';
import axios from 'axios';
import {Icon, Input, Button, Col, Row, CardPanel, Slider, Tabs, Tab, CardTitle, Card} from 'react-materialize';


class Electronics extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

  }


  render() {
    
    return (
      <div className=''>
      
       <Col s={12} m={12}>
       
        <div class="card center">
        <h5>HOME APPLIANCES & ELECTRONICS</h5>
        <div class="col s12 m12">
          <div class="card horizontal cardit">
            <div class="card-image col s12 m6 hide-on-small-only">
              <img class="col s12 m12" src="https://financialtribune.com/sites/default/files/field/image/december/04-zs-home_appliances_111-ab.jpg"/>
            </div>
            <div class="card-stacked col s12 m6">
              <div class="card-content">
              
              <div class="row">
                <div class="center col s6 m4">
                <p>TVs</p>
                  <div class="cardSS-image">
                    <img style={{height:"130px"}} class="col s12 m12" src="http://images.samsung.com/is/image/samsung/my-full-hd-k6300-ua49k6300akxxm-001-front-black?$PD_GALLERY_L_JPG$"/>
                  </div>
               
                </div>
                
                 <div class="col s6 m4">
                <p class='center'>Mobile Phones</p>
                  <div class="cardSS-image">
                    <img style={{height:"130px"}} class="col s12 m12"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-bAuaYAvLkYNmSGJIIOlTd-TpUY3BerJDm9cuPmaxB5mdtjNOSA"/>
                  </div>
               
                </div>
                
                 <div class="col s6 m4">
                <p class='center'>Tablets</p>
                  <div class="cards-image">
                    <img style={{height:"130px"}} class="col s12 m12"  src="https://image.freepik.com/free-icon/big-tablet_318-10958.jpg"/>
                     <a class="btn-floating halfway-fab waves-effect waves-light grey darken-4"><i class="material-icons">list</i></a>
                  </div>
                </div>
                
                  <div class="col s6 m4">
                <p class='center'>Refrigetor</p>
                  <div class="cardSS-image">
                    <img style={{height:"130px"}} class="col s12 m12"  src="https://ll-us-i5.wal.co/asr/45c6e513-8fb6-4494-b729-d0a3efc156ab_1.9897d41452125ada24b18034e70baabe.jpeg"/>
                  </div>
               
                </div>
                <div class="center col s6 m4">
                <p>Computers</p>
                  <div class="cardSS-image">
                    <img style={{height:"130px"}} class="col s12 m12" src="https://cdn2.iconfinder.com/data/icons/ourea-icons/256/Computer_256x256-32.png"/>
                  </div>
                </div>
                
                
                 <div class="col s6 m4">
                <p class='center'>iPhones</p>
                  <div class="cards-image">
                    <img style={{height:"130px"}} class="col s12 m12"  src="https://cdn2.iconfinder.com/data/icons/modern-future-technology/128/mobile-phone-512.png"/>
                     <a class="btn-floating halfway-fab waves-effect waves-light grey darken-4"><i class="material-icons">list</i></a>
                  </div>
                  
                  
                </div>
                
            </div>
          { /* <div class="row hide-on-small-only">
            
                
            </div>*/}
                
              </div>
            
            </div>
          </div>
        </div>
            
        </div>
        
      </Col>
      
      </div>
    );
  }
}




class Fashion extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

  }


  render() {
    
    return (
      <div className=''>
      
       <Col s={12} m={12}>
       
        <div class="card center">
        <h5>FASHION</h5>
        <div class="col s12 m12">
          <div class="card horizontal cardit">
            <div class="card-image col s12 m6 hide-on-small-only">
              <img  class="col s12 m12" src="https://theknclan.com/wp-content/uploads/2017/10/635980679147435890-488367249_FashionHeader.png"/>
            </div>
            <div class="card-stacked col s12 m6">
              <div class="card-content">
              
              <div class="row">
                <div class="center col s6 m4">
                <p>Men's Clothing</p>
                  <div class="cardSS-image">
                    <img style={{height:"130px"}} class="col s12 m12" src="https://ss.tbdress.com/images/product/13/13015/13015293_6_470x627.jpg"/>
                  </div>
               
                </div>
                
                 <div class="col s6 m4">
                <p class='center'>Women's Clothing</p>
                  <div class="cardSS-image">
                    <img style={{height:"130px"}} class="col s12 m12"  src="https://images-na.ssl-images-amazon.com/images/I/71zS6UfmSNL._UX679_.jpg"/>
                  </div>
               
                </div>
                
                 <div class="col s6 m4">
                <p class='center'>Kid's Clothing</p>
                  <div class="cards-image">
                    <img style={{height:"130px"}} class="col s12 m12" src="http://www.gifpage.com/wp-content/uploads/2016/12/1000-images-about-kids-on-pinterest-african-prints-african-pictures-to-print-for-children.jpg"/>
                     <a class="btn-floating halfway-fab waves-effect waves-light grey darken-4"><i class="material-icons">list</i></a>
                  </div>
                </div>
                
                
                 <div class="col s6 m4">
                <p class='center'>Jewlry</p>
                  <div class="cardSS-image">
                    <img style={{height:"130px"}} class="col s12 m12"  src="https://image.flaticon.com/sprites/new_packs/475366-jewelry.png"/>
                  </div>
               
                </div>
                <div class="center col s6 m4">
                <p>Shoes</p>
                  <div class="cardSS-image">
                    <img style={{height:"130px"}} class="col s12 m12" src="https://media.journeys.com/images/products/1_437729_ZM.JPG"/>
                  </div>
                </div>
                
                  <div class="col s6 m4">
                <p class='center'>New Arrivals</p>
                  <div class="cards-image">
                    <img style={{height:"130px"}} class="col s12 m12"  src="https://images-na.ssl-images-amazon.com/images/I/71ql1qt2APL._AC_SR201,266_.jpg"/>
                     <a class="btn-floating halfway-fab waves-effect waves-light grey darken-4"><i class="material-icons">list</i></a>
                  </div>
                  
                  
                </div>
                
            </div>
          
                
              </div>
            
            </div>
          </div>
        </div>
            
        </div>
        
      </Col>
      
      </div>
    );
  }
}


class Grocery extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

  }


  render() {
    
    return (
      <div className=''>
      
       <Col s={12} m={12}>
       
        <div class="card center">
        <h5>GROCERY</h5>
        <div class="col s12 m12">
          <div class="card horizontal cardit">
            <div class="card-image col s12 m6 hide-on-small-only">
              <img  class="col s12 m12" src="http://kaisersfoodcenter.com/media/site_assets/750624dc37c2e63f8b0b793b204f5cfd/assets/ban2.jpg"/>
            </div>
            <div class="card-stacked col s12 m6">
              <div class="card-content">
              
              <div class="row">
                <div class="center col s6 m4">
                <p>Water</p>
                  <div class="cardSS-image">
                    <img style={{height:"130px"}} class="col s12 m12" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST4YOurL1Y-wG8XLzYvK7rU9udriaDIhTTmWw11fNdJ7igewb--g"/>
                  </div>
               
                </div>
                
                 <div class="col s6 m4">
                <p class='center'>Rice</p>
                  <div class="cardSS-image">
                    <img style={{height:"130px"}} class="col s12 m12"  src="https://d30y9cdsu7xlg0.cloudfront.net/png/94344-200.png"/>
                  </div>
               
                </div>
                
                 <div class="col s6 m4">
                <p class='center'>Oil</p>
                  <div class="cards-image">
                    <img style={{height:"130px"}} class="col s12 m12" src="https://previews.123rf.com/images/sergio34/sergio341502/sergio34150200380/37108247-barrel-of-oil-icon-flat-style-vector-illustration-watercolor-icon-.jpg"/>
                     <a class="btn-floating halfway-fab waves-effect waves-light grey darken-4"><i class="material-icons">list</i></a>
                  </div>
                </div>
                
                
                 <div class="col s6 m4">
                <p class='center'>Gas</p>
                  <div class="cardSS-image">
                    <img style={{height:"130px"}} class="col s12 m12"  src="https://cdn2.iconfinder.com/data/icons/energy-technology-flat/2048/300_-_Gas_Cylinder-512.png"/>
                  </div>
               
                </div>
                <div class="center col s6 m4">
                <p>Juice</p>
                  <div class="cardSS-image">
                    <img style={{height:"130px"}} class="col s12 m12" src="https://cdn.iconscout.com/public/images/icon/premium/png-512/juice-coffee-drink-beverage-cold-hot-food-35d588a0675eb065-512x512.png"/>
                  </div>
                </div>
                
                
                 <div class="col s6 m4">
                <p class='center'>Fruit</p>
                  <div class="cards-image">
                    <img style={{height:"130px"}} class="col s12 m12"  src="http://www.livemint.com/rf/Image-621x414/LiveMint/Period2/2017/10/31/Photos/Processed/fruits-kFLF--621x414@LiveMint.jpg"/>
                     <a class="btn-floating halfway-fab waves-effect waves-light grey darken-4"><i class="material-icons">list</i></a>
                  </div>
                  
                  
                </div>
                
            </div>
          
                
              </div>
            
            </div>
          </div>
        </div>
            
        </div>
        
      </Col>
      
      </div>
    );
  }
}



class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    document.getElementById("demo").innerHTML = 'Your favorite flavor is: ' + this.state.value;
    event.preventDefault();
  }

  render() {
    
    return (
      <div className=''>
      
      <Electronics/>
      <Fashion/>
      <Grocery/>
      
      </div>
    );
  }
}

export default Home;