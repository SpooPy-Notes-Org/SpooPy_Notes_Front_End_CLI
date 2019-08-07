import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Profile from './Profile'


class AboutUs extends Component{
    render(){
        return(
            <>
            <Row>
            <Profile />
            <Profile />
            </Row>

            <Row>
            <Profile />
            <Profile />
            </Row>
            </>
        )
    }
}

export default AboutUs