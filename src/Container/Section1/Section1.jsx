import React, { useContext, useState } from 'react'
import "./section1.css";
import { DataContext } from '../../Context/DataContext';

const Section1 = ({next,setname,setaddress}) => {
    const {formData,setFormData} = useContext(DataContext);

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleDropdown = e => {
        setFormData({...formData, businessVertical: e.target.value });
    }


    const handleNext = e => {
        e.preventDefault();
        if(
            (formData.businessVertical !== 'NA' && formData.businessVertical !== '') &&
            (formData.supplierName !== 'NA' && formData.supplierName !== '') &&
            (formData.supplierAddress !== 'NA' && formData.supplierAddress !== '') &&
            (formData.supplierCity !== 'NA' && formData.supplierCity !== '') &&
            (formData.supplierState !== 'NA' && formData.supplierState !== '') &&
            (formData.supplierPostal !== 'NA' && formData.supplierPostal !== '')
        ) {
            next();
        } else {
            alert("All fields are required");
        }
    }
    

    console.log(formData);

  return (
    <div className='section1'>
        <div className='form'>
            <div className='form_holder'>
                <div className='form_group'>
                    <p>Select the business vertical</p>
                    <select className='dropdown' defaultValue={formData.businessVertical!==""?formData.businessVertical:null} onChange={handleDropdown}>
                        <option selected disabled>---Select Answer---</option>
                        <option value="Amber Enterprises India Limited">Amber Enterprises India Limited</option>
                    </select>
                </div>
                <div className='form_group'>
                    <p>Supplier Name</p>
                    <input type="text" name="supplierName" id="" className='textbox' onChange={handleChange} value={formData.supplierName==="NA"?"":formData.supplierName} />
                </div>
                <div className='form_group'>
                    <p>Supplier Address</p>
                    <input type="text" name="supplierAddress" id="" className='textbox' onChange={handleChange} value={formData.supplierAddress==='NA'?"":formData.supplierAddress} />
                </div>
            </div>
            <div className='form_holder'>
                <div className='form_group'>
                    <p>City</p>
                    <input type="text" name="supplierCity" id="" className='textbox' onChange={handleChange} value={formData.supplierCity==='NA'?"":formData.supplierCity} />
                </div>
                <div className='form_group'>
                    <p>State/Province</p>
                    <input type="text" name="supplierState" id="" className='textbox' onChange={handleChange} value={formData.supplierState==='NA'?"":formData.supplierState} />
                </div>
                <div className='form_group'>
                    <p>Postal/Zip Code</p>
                    <input type="text" name="supplierPostal" id="" className='textbox' onChange={handleChange} value={formData.supplierPostal==='NA'?"":formData.supplierPostal}/>
                </div>
            </div>
        </div>
        <div className='action_box'>
            {/* <button className=''>Back</button> */}
            <button className='btn_next' onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Section1