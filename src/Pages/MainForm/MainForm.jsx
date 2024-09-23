import React, { useContext, useState } from 'react'
import "./mainForm.css";
import amber from "../../Assets/download.jpeg"
import Section1 from '../../Container/Section1/Section1';
import Section2 from '../../Container/Section2/Section2';
import Section3 from '../../Container/Section3/Section3';
import Section4 from '../../Container/Section4/Section4';
import Section5 from '../../Container/Section5/Section5';
import Section6 from '../../Container/Section6/Section6';
import Section7 from '../../Container/Section7/Section7';
import Section8 from '../../Container/Section8/Section8';
import ThankYou from '../../Container/ThankYou/ThankYou';
import { DataContext } from '../../Context/DataContext';

const MainForm = () => {
    const [section1,setSection1] = useState(true);
    const [section2,setSection2] = useState(false);
    const [section3,setSection3] = useState(false);
    const [section4,setSection4] = useState(false);
    const [section5,setSection5] = useState(false);
    const [section6,setSection6] = useState(false);
    const [section7,setSection7] = useState(false);
    const [section8,setSection8] = useState(false);
    const [thankyou,setThankYou] = useState(false);
    const [name,setName] = useState("");
    const [address,setAddress] = useState();
    const [grp,setGrp] = useState();
    const [cat,setCat] = useState();
    const {formData,setFormData} = useContext(DataContext);

  return (
    <div className='main_form'>
        <div className='form_card'>
            <div className='form_card_header'>
                <img src={amber} alt="" />
                <h2 style={{fontSize: "24px", fontWeight: "600"}}>Amber Supplier Onboarding</h2>
            </div>
            {
                thankyou?"":<p className='inst'>Please answer the following questions correctly.</p>
            }
            {
                section1?<Section1 next={() => {setSection1(false);setSection2(true)}} setname={setName} setaddress={setAddress}/>:null
            }
            {
                section2?<Section2 next={() => {setSection2(false);setSection3(true)}} back={() => {setSection1(true); setSection2(false)}} address={address} />:null
            }
            {
                section3?<Section3 next={() => {setSection3(false);setSection4(true)}} back={() => {setSection2(true); setSection3(false)}}/>:null
            }
            {
                section4?<Section4 next={() => {setSection4(false);setSection5(true)}} back={() => {setSection3(true); setSection4(false)}} setcat={setCat} setgrp={setGrp}/>:null
            }
            {
                section5?<Section5 name={name} next={() => {setSection5(false);if(formData.typeOfSupplier==="Indian"){setSection6(true)}else{setSection7(true)}}} back={() => {setSection4(true); setSection5(false)}}/>:null
            }
            {   
                section6?<Section6 next={() => {
                    if(formData.supplierGroup === 'PK' || formData.supplierGroup === 'RM'){
                        setSection6(false);setSection7(true)
                    }
                    else{
                        setSection6(false);setSection8(true)
                    }
                }} back={() => {
                    setSection5(true); setSection6(false)
                }}/>:null
            }
            {
                section7?<Section7 name={name} next={() => {setSection7(false);setSection8(true)}} 
                back={() => {
                    if(formData.typeOfSupplier === 'Foreign'){
                        setSection5(true); setSection7(false);
                    }
                    else{
                        setSection6(true); setSection7(false)
                    }
                }}/>:null
            }
            {
                section8?<Section8 name={name} next={() => {setSection8(false);setThankYou(true)}} back={() => {
                    if(formData.typeOfSupplier === 'Foreign'){
                        setSection7(true); setSection8(false);
                    }
                    else{
                        if(formData.supplierGroup === 'PK' || formData.supplierGroup === 'RM'){
                            setSection7(true);setSection8(false)
                        }
                        else{
                            setSection6(true); setSection8(false)
                        }
                    }
                }}/>:null
            }
            {
                thankyou?<ThankYou name={name}/>:null
            }
            <div style={{position: "absolute", bottom: "10px", left:"50%", transform: "translateX(-50%)", color: "#fff", fontWeight:"600", display:"flex", alignItems:"center"}}>
            <p style={{marginRight: "10px"}}>Powered by</p><img style={{width: "30px"}} src='https://qa.dfos.co/app/assets/image_used/logo_login.png'/>
            </div>
        </div>
    </div>
  )
}

export default MainForm