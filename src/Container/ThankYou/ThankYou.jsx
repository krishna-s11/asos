import React, { useState } from 'react'
import "./thankYou.css";

const ThankYou = ({next,back,name}) => {
  return (
    <div className='section1 thankyou'>
        <h1 id="thank_heading">Thank you for submitting the form!</h1>
        <p id="thank_text">Your information has been submitted successfully.</p>
    </div>
  )
}

export default ThankYou