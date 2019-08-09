import React, {Fragment} from 'react'
import { Link } from 'react-router-dom';

function Header(){

  let styles = {
    title: {
      marginBottom: '50px',
      marginTop: '50px'
    },
    para: {
      marginBottom: '50px'
    },
  }

  return(
    <Fragment>
      
      <h1 className='glitch' value='SpooPy Notes' style={{marginTop:'50px'}}>
        SpooPy Notes
      </h1>
      <p style={{marginBottom: '60px'}}>
        <Link className="socialIconDiv" value='Home' to="/">Home </Link> 
        <Link value='About' to="/about">About</Link>  
      </p>
    </Fragment>
   )
}

export default Header;
