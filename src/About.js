import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import joshPicture from './profile_images/josh_face.jpg'


import Profile from './Profile'


class AboutUs extends Component{
    render(){
        return(
            <>
            <Row>
                <Profile 
                    img={joshPicture}
                    name="Joshua Ho"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer est nulla, elementum et tellus vitae, vehicula fringilla lectus. 
                    Donec eu nisl sagittis, commodo sem in, porta mi. Aliquam tempus nisi justo, 
                    nec iaculis lectus posuere ut."
                    github="https://github.com/ricecreamdude"
                    linkedIn="https://www.linkedin.com/in/joshua-ho-80b6a251/"
                />
                <Profile 
                    img={joshPicture}
                    name="Aliya Summers"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer est nulla, elementum et tellus vitae, vehicula fringilla lectus. 
                    Donec eu nisl sagittis, commodo sem in, porta mi. Aliquam tempus nisi justo, 
                    nec iaculis lectus posuere ut."
                    github="https://github.com/arsummers"
                    linkedIn="https://www.linkedin.com/in/aliya-summers/"
                />
            </Row>
            <Row>
                <Profile 
                    img={joshPicture}
                    name="Skyler Burger"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer est nulla, elementum et tellus vitae, vehicula fringilla lectus. 
                    Donec eu nisl sagittis, commodo sem in, porta mi. Aliquam tempus nisi justo, 
                    nec iaculis lectus posuere ut."
                    github="https://github.com/SkylerBurger"
                    linkedIn="https://www.linkedin.com/in/skylerburger/"
                />
                <Profile 
                    img={joshPicture}
                    name="Tammy Do"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Integer est nulla, elementum et tellus vitae, vehicula fringilla lectus. 
                    Donec eu nisl sagittis, commodo sem in, porta mi. Aliquam tempus nisi justo, 
                    nec iaculis lectus posuere ut."
                    github="https://github.com/tammytdo"
                    linkedIn="https://www.linkedin.com/in/tammytdo/"
                />
            </Row>
            </>
        )
    }
}

export default AboutUs


