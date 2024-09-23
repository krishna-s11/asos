import React, { useContext, useState } from 'react'
import "./section4.css";
import { DataContext } from '../../Context/DataContext';

const Section4 = ({next,back,setgrp,setcat}) => {
    const [suppCat,setSuppCat] = useState();
    const [suppGrp,setSuppGrp] = useState();
    const {formData,setFormData} = useContext(DataContext);

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleCat = e => {
        setFormData({...formData, supplierType: e.target.value});
        setSuppCat(e.target.value);
    }
    const handleGrp = e => {
        setFormData({...formData, supplierGroup: e.target.value});
        setSuppGrp(e.target.value);
    }

    const handleNext = e => {
        e.preventDefault();
        if(formData.typeOfSupplier === 'Foreign'){
            if((formData.email !== '' && formData.email !== 'NA')
                && (formData.contact !== '' && formData.contact !== 'NA')
                && (formData.personInCharge !== '' && formData.personInCharge !== 'NA')
                && (formData.owner !== '' && formData.owner !== 'NA')
                && (formData.supplierGroup !== '' && formData.supplierGroup !== 'NA')
            ){
                next();
            } else {
                alert('Please fill all required fields');
            }
        }
        else{
            if((formData.email !== '' && formData.email !== 'NA')
                && (formData.contact !== '' && formData.contact !== 'NA')
                && (formData.personInCharge !== '' && formData.personInCharge !== 'NA')
                && (formData.owner !== '' && formData.owner !== 'NA')
                && (formData.supplierType !== '' && formData.supplierType !== 'NA')
                && (formData.supplierGroup !== '' && formData.supplierGroup !== 'NA')
            ){
                next();
            } else {
                alert('Please fill all required fields');
            }
        }
    }

    return (
      <div className='section1'>
          <div className='form'>
              <div className='form_holder'>
                  <div className='form_group'>
                      <p>Email Address</p>
                          <input type="email" name="email" value={formData.email==='NA'?"":formData.email} onChange={handleChange} id="" className='textbox'/>
                  </div>
                  <div className='form_group'>
                      <p>Contact No.</p>
                      <input type="text" name="contact" value={formData.contact==='NA'?"":formData.contact} onChange={handleChange} id="" className='textbox' />
                  </div>
                  <div className='form_group'>
                      <p>Name of Person Incharge </p>
                      <input type="text" name="personInCharge" value={formData.personInCharge==='NA'?"":formData.personInCharge} onChange={handleChange} id="" className='textbox' />
                  </div>
              </div>
              <div className='form_holder'>
                  <div className='form_group'>
                      <p>Owner/M.D Name</p>
                          <input type="email" name="owner" value={formData.owner==='NA'?"":formData.owner} onChange={handleChange} id="" className='textbox'/>
                  </div>
                  {
                    formData.typeOfSupplier==="Indian"?
                    <div className='form_group'>
                        <p>Supplier Type.</p>
                        <select className='dropdown' name="supplierType" defaultValue={formData.supplierType!=='NA'?formData.supplierType:null} onChange={handleCat}>
                            <option disabled selected>---Select Answer---</option>
                            <option value="OEM">OEM</option>
                            <option value="ODM">ODM</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                    :null
                  }
                  <div className='form_group'>
                      <p>Supplier Group.</p>
                      {
                        formData.typeOfSupplier==="Foreign"?
                        <select className='dropdown' name="supplierGroup" defaultValue={formData.supplierGroup!=='NA'?formData.supplierGroup:null} onChange={handleGrp}>
                            <option disabled selected>---Select Answer---</option>
                            <option value="CR-IMP">CR-IMP | Creditors Imports Raw Material</option>
                            <option value="CR-IMP-CAP">CR-IMP-CAP | Creditors Import Capex</option>
                            <option value="CR-IMP-EXP">CR-IMP_EXP | Creditors Import Expense</option>
                            <option value="CR-IMP-SER">CR-IMP_SER | Creditors Import Service</option>
                        </select>
                        :
                        <select className='dropdown' name="supplierGroup" defaultValue={formData.supplierGroup!=='NA'?formData.supplierGroup:null} onChange={handleGrp}>
                            <option disabled selected>---Select Answer---</option>
                            <option value="RM">RM - Raw Material</option>
                            <option value="PK">PK - Packaging</option>
                            <option value="Consumables">Consumables</option>
                            <option value="Others">Others</option>
                        </select>
                        }
                  </div>
              </div>
          </div>
          <div className='action_box'>
              <button className='' onClick={back}>Back</button>
              <button className='btn_next' onClick={handleNext}>Next</button>
          </div>
      </div>
    )
  }
  
  export default Section4