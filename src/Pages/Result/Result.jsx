import React from 'react'
import amber from "../../Assets/download.jpeg"
import approve from "../../Assets/approve.png";
import "./result.css";

const Result = () => {
  return (
    <div className='main_form'>
    <div className='form_card'>
        <div className='form_card_header'>
            <img src={amber} alt=""/>
            <h2 style={{fontSize: "24px", fontWeight: "600"}}>Amber Supplier Onboarding</h2>
        </div>
        <div className='main_content'>
          <img src={approve} alt="" />
          <p style={{marginTop:"30px", fontSize:"18px", fontWeight: "600"}}>The new vendor has been onboarded successfully.</p>
          <p>All details regarding vendor will be sent via mail to the concerned persons.</p>
        </div>
        <div style={{position: "absolute", bottom: "10px", left:"50%", transform: "translateX(-50%)", color: "#fff", fontWeight:"600", display:"flex", alignItems:"center"}}>
        <p style={{marginRight: "10px"}}>Powered by</p><img style={{width: "30px"}} src='https://qa.dfos.co/app/assets/image_used/logo_login.png'/>
        </div>
    </div>
</div>
  )
}

export default Result