import React, { useState } from 'react'
import amber from "../../Assets/download.jpeg"
import reject from "../../Assets/reject.png";

const Reject = () => {
    const [display,setDisplay] = useState(false);
  return (
    <div className='main_form'>
    <div className='form_card'>
        <div className='form_card_header'>
            <img src={amber} alt=""/>
            <h2 style={{fontSize: "24px", fontWeight: "600"}}>Amber Supplier Onboarding</h2>
        </div>
        <div className='main_content' style={{marginTop: "40px"}}>
          <img src={reject} alt="" />
          <p style={{marginTop:"30px", fontSize:"18px", fontWeight: "600"}}>The new vendor onboarding has been rejected.</p>
          {
            !display?
            <>
                <p style={{marginTop: "10px", marginBottom:"10px"}}>{"Please specify the reason: (Vendor will recieve this through email)"}</p>
                <textarea type="text" name="" id="" style={{width: "300px", marginBottom: "10px"}}/><br></br>
                <button className='btn_next' onClick={() => {setDisplay(true)}}>Submit</button>
            </>
            :null
          }
          {
            display?
            <p>All details regarding vendor will be sent via mail to the concerned persons.</p>
            :null
          }
        </div>
        <div style={{position: "absolute", bottom: "10px", left:"50%", transform: "translateX(-50%)", color: "#fff", fontWeight:"600", display:"flex", alignItems:"center"}}>
        <p style={{marginRight: "10px"}}>Powered by</p><img style={{width: "30px"}} src='https://qa.dfos.co/app/assets/image_used/logo_login.png'/>
        </div>
    </div>
</div>
  )
}

export default Reject