import React from 'react'

import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class InputForm extends React.Component{


  render(){
    return (
      <Form>
        <InputGroup>
          <FormControl 
            as="textarea" 
            aria-label="With textarea" 
            onChange={this.props.onTextChange}
          />
        </InputGroup>
        <Button 
          variant="primary" 
          type="submit" 
          onClick={this.props.onSubmit}  
        >
          Submit
        </Button>
      </Form>
  
  )
  }

}

export default InputForm