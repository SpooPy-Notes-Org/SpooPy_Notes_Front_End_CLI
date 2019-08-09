import React, { Component, Fragment } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

class DropDown extends Component {

    render() {
        return (
            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Output Image Width</Form.Label>
                    <Form.Control as="select" onChange={this.props.onSelectHandler}>
                        <option>-select-</option>
                        <option value="200">200px</option>
                        <option value="300">300px</option>
                        <option value="600">600px</option>
                        <option value="900">900px</option>
                    </Form.Control>
            </Form.Group>
        )
    }

}

export default DropDown