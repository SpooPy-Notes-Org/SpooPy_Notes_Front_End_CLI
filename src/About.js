import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'

import joshPicture from './profile_images/josh_face.jpg'
import skylerPicture from './profile_images/skyler_face.jpg'
import tammyPicture from './profile_images/tammy_face.png'
import aliyahPicture from './profile_images/aliyah_face.png'

import Profile from './Profile'

class AboutUs extends Component{
    render(){
        return(
            <>
            <Row style={{marginBottom:"40px"}}>
                <Profile 
                    img={tammyPicture}
                    name="Tammy Do"
                    description="SpooPy inspiration: Nancy Drew mysteries and My Favorite Murder podcast."
                    github="https://github.com/tammytdo"
                    linkedIn="https://www.linkedin.com/in/tammytdo/"
                />
                <Profile 
                    img={aliyahPicture}
                    name="Aliya Summers"
                    description="Enjoys weird art projects, books, photography, and Python."
                    github="https://github.com/arsummers"
                    linkedIn="https://www.linkedin.com/in/aliya-summers/"
                />
            </Row>
            <Row>
                <Profile 
                    img={skylerPicture}
                    name="Skyler Burger"
                    description="SpooPy Notes will save him time and money on crafting supplies."
                    github="https://github.com/SkylerBurger"
                    linkedIn="https://www.linkedin.com/in/skylerburger/"
                />
                <Profile 
                    img={joshPicture}
                    name="Joshua Ho"
                    description="He spends his time drinking hot water, sitting in traffic, and wearing slip on shoes."
                    github="https://github.com/ricecreamdude"
                    linkedIn="https://www.linkedin.com/in/joshua-ho-80b6a251/"
                />
            </Row>
            </>
        )
    }
}

export default AboutUs


