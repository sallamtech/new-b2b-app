import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import {Collection, CollectionItem, Badge, Tabs, Tab, Collapsible, CollapsibleItem, Icon, Input, Modal, Button, Card, CardTitle, Col, Row, CardPanel, Carousel, Slider, Slide, Autocomplete, Chip, Tag} from 'react-materialize';
import SearchForm from '../components/home/SearchForm';
import FilterProducts from "../components/home/FilterProducts";

class SearchResults extends React.Component {

  

    render() {
    
        return (
            <div className="page">
                <Row>
                    
                    <Col s={12} m={12}>
                        
                        <FilterProducts/>
                        
                    </Col>
                    
                </Row>
                
            </div>
        );
    }
} 

export default SearchResults;