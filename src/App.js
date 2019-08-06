import React, {Component} from 'react';
import axios from 'axios'
import './App.css';



import Header from './Header'
import InputForm from './InputForm'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      text: '',
      imgLink: ''
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    e.preventDefault()

    let baseUrl = `https://spoopy-notes.onrender.com/home/${this.state.text}`

    axios.get(baseUrl)
      .then( res => {
        console.log(res)
        this.setState({ 
          // imgUrl: res.imageUrl
        })
        console.log('GET Request completed successfully')
      })
      .catch( err => {
        console.log('Axios Get Request Error:', err)
      })

    // this.setState({
    //   imgUrl: 'potatoLand'
    // })
  }


  render(){
    return(
      <div className="App">

        {/*HEADER 
            Logo 
            Instructions
        */}
        <Header />


        {/* Textbox */}

        {/* Submit Button */}

        {/* Image Display */}
        <InputForm 
          onTextChange={this.handleTextChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }

}

export default App;
