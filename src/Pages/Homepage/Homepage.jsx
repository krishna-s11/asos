import React, { useContext } from 'react'
import "./homepage.css";
import right_arrow from "../../Assets/arrow-right.png";
import down from "../../Assets/download.jpeg";
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../Context/DataContext';

const Homepage = () => {
    const navigate = useNavigate();
    const {setAuth} = useContext(DataContext);

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            // var formdata = new FormData();
            // formdata.append("email", "test@amber.com");
            // formdata.append("password", "12345");

            // var requestOptions = {
            //     method: 'POST',
            //     body: formdata,
            //     redirect: 'follow'
            //   };

            // const response = await fetch("/app/api/v1/login",requestOptions);

            // // fetch("https://qa.dfos.co/app/api/v1/login", requestOptions)
            // // .then(response => response.text())
            // // .then(result => console.log(result))
            // // .catch(error => console.log('error', error));
    
            // if (!response.ok) {
            //     throw new Error(`HTTP error! status: ${response.status}`);
            // }
    
            // const data = await response.json();
            // console.log(data.Root.Authorization);
            // setAuth(data.Root.Authorization);
            navigate("/registration");
            
        } catch (error) {
            console.error("Error during submission:", error);
        }
    }
  return (
    <div>
         <div class="page_wrapper">
        <div class="left_wrapper">
            <div style={{textAlign: "left"}}>
                <h2>Welcome to</h2>
                <h1 style={{textAlign: 'left', fontWeight: "600"}}>Amber Supplier Onboarding System</h1>
                <a href="https://www.ambergroupindia.com/" target="_blank">Visit the Amber Group <img src={right_arrow} style={{width: "18px",transform: "translate(5px,5px)"}} /></a>
            </div>
        </div>
        <div class="right_wrapper">
             <img src={down} alt="" style={{width: "200px", marginBottom: "30px"}}/>
            <h2 style={{fontSize: "24px", fontWeight: "600"}}>Our values</h2>
            <p style={{marginTop: "20px", lineHeight: "1.2",textAlign:"justify",textJustify: "inter-word"}}>Amber enterprises India limited is dedicated to providing the best Quality & value to meet the customers needs, we have a long standing commitment to provide our customers with the best possible services they shop and continually maintain a strong and lasting relationship with them, We hope our suppliers will have similar work culture and intent while joining hands with us</p>
            <div class="info_box">
                <h3 style={{marginBottom: "20px", fontSize: "18px", fontWeight: "600"}}>Instructions</h3>
                <p style={{lineHeight: "1.1"}}>Please check carefully before filling this form. The form will be directed to Amber Portal with all relevant credentials.<br/><br/><b>Note:</b> All the Attachment wherever captioned are mandate and have no deviation process for the same.</p>
            </div>
            <div class="btn_holder">
                <button onClick={handleSubmit}>Start Onboarding</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Homepage