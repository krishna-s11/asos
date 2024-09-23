import React from 'react'
import "./thankYouPg.css";
import amber from "../../Assets/download.jpeg"
import approve from "../../Assets/approve.png";
import "../Result/result.css";

const ThankYouPg = () => {
  return (
    <div className='main_form'>
    <div className='form_card'>
        <div className='form_card_header'>
            <img src={amber} alt=""/>
            <h2 style={{fontSize: "24px", fontWeight: "600"}}>Amber Supplier Onboarding</h2>
        </div>
        <div className='main_content'>
          <img src={approve} alt="" />
          <p style={{marginTop:"30px", fontSize:"18px", fontWeight: "600"}}>Thank You! Your onboarding request is in process</p>
          <p>You will be notified through email soon.</p>
        </div>
        <div style={{position: "absolute", bottom: "10px", left:"50%", transform: "translateX(-50%)", color: "#fff", fontWeight:"600", display:"flex", alignItems:"center"}}>
        <p style={{marginRight: "10px"}}>Powered by</p><img style={{width: "30px"}} src='https://qa.dfos.co/app/assets/image_used/logo_login.png'/>
        </div>
    </div>
</div>
  )
}

export default ThankYouPg