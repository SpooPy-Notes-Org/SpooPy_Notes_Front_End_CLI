import React, {Component, Fragment} from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from './Header'
import InputForm from './InputForm'
import AboutUs from './About'

//Combining the router with this app to control end points 
class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
      imgLink: ''
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDadJoke = this.handleDadJoke.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
  }

  //Manages the state of the textbox where user will input the string they want to translate 
  //a ransom note
  handleTextChange = (e) => {
    let text = e.target.value
    this.setState({
      text: text,
      imgUrl: ''
    }) 
  }

  //Manages button and updates image link state.  This will need to query the python server in order
  // to work properly, using a promise.
  handleSubmit = (e) => {

    e.preventDefault();

    let t = new Date()
    let d = t.getTime() 

    let uri = encodeURIComponent(this.state.text)

    let baseUrl = `https://spoopy-notes.onrender.com?query=${uri}&t=${d}`;

    this.setState({
      imgLink:baseUrl
    })
  }

  handleDadJoke = (e) => {

    e.preventDefault();
    let t = new Date()
    let d = t.getTime() 

    this.setState({
      imgLink: `https://spoopy-notes.onrender.com/dadjoke?t=${d}`
    })

  }

  onEnterPress = (e) => {
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      
      this.handleSubmit(e)
    }
  }

  render(){
    let image;
    if (this.state.imgLink) {
      image = <img 
        style={{maxHeight:'100%', maxWidth:'100%'}}
        src={this.state.imgLink}
        alt={this.state.text}
      />
    }

    return(
      <Fragment>
        <p style={{marginBottom:'50px'}}>
          Welcome to SpooPy Notes! Please enter your ransom note into the textbox below and we will create a special, 
          SpooPy image for you.
        </p>
        <Row style={{margin:'75px 0 50px 0'}}>
          <Col sm={6}>
            <InputForm 
              onTextChange={this.handleTextChange}
              onSubmit={this.handleSubmit}
              onDadJokeClick={this.handleDadJoke}
              onEnterPress={this.onEnterPress}
            />
          </Col>
          <Col sm={6}>
            {image}
          </Col>
        </Row>
      </Fragment>
    )
  }

}

export default Home;
