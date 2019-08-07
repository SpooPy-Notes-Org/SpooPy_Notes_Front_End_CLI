import React, {Fragment} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import josh_face from '../src/profile_images/josh_face.jpg'

function Profile(){
    return(
        <Fragment>

            <Col md={3}>
                <img src={josh_face}></img>        
            </Col>

            <Col md={3}>
                <h3>Josh</h3>
                
                <p>about josh put some more words here</p>
            </Col>    
     
        </Fragment>
  
           
    )

}


export default Profile;
