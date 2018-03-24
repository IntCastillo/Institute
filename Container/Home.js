import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-dom';

export default class Home extends Component {
    static propTypes = {};
    
    render() {
        return (
            <div>
            <img src={require('../assets/photo.jpg')} at="photo-img"/>
            </div>
        );
    }
}

