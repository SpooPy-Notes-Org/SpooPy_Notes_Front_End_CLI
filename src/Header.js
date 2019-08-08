import React,{Fragment} from 'react'


function Header(){

  let styles = {
    title: {
      marginBottom: '50px'
    },
    para: {
      marginBottom: '50px'
    },
  }

  return(
    <Fragment>
      {/* <image></image> */}
      <h1 style={styles.title}>
        SpooPy Notes
      </h1>
      <p style={styles.para}>
        Welcome to SpooPy Notes! Please enter your ransom note into the textbox below and we will create a special, 
        SpooPy image for you.
      </p>
    </Fragment>
   )
}

export default Header;
