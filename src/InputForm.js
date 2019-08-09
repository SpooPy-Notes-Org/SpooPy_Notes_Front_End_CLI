import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import DropDown from './dropdown'

class InputForm extends React.Component{

  render(){
    let styles = {
      textbox: {
        height: '200px',
        marginBottom: '20px'
      },
      button: {
        marginRight: '15px'
      }
    }

    return (
      <Form>
        <InputGroup>
          <FormControl 
            as="textarea" 
            aria-label="With textarea"
            style={styles.textbox}
            onChange={this.props.onTextChange}
            onKeyDown={this.props.onEnterPress}
          />
        </InputGroup>
        <DropDown onSelectHandler={this.props.onSelectHandler}/>
        <Button 
          variant="danger" 
          type="submit" 
          onClick={this.props.onSubmit}  
          style={styles.button}
        >
          Submit
        </Button>
        <Button
          variant="dark"
          type="submit"
          onClick={this.props.onDadJokeClick}
          style={styles.button}
        >
          Get Dad Joke
        </Button>
      </Form>
  
  )
  }

}

export default InputForm