import React, {Component, Fragment} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import josh_face from '../src/profile_images/josh_face.jpg'

class Profile extends Component{


    render(){

        let styles = {
            image:{
                maxWidth: "100%"
            },
            name: {
                fontSize: "32px",
            },
            para:{
                fontSize: "14px",
            }
        }

        return(
            <Fragment>
                <Col md={2}>
                    <img 
                    style={styles.image}
                    src={this.props.img}></img>        
                </Col>
                <Col md={4}>
                    <h3 style={styles.name}>{this.props.name}</h3>
                    <p style={styles.para}>{this.props.description}</p>
                </Col>    
            </Fragment>         
        )
    }
}


export default Profile;
