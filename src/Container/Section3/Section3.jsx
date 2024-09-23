import React, { useContext, useEffect, useState } from 'react'
import "./section3.css";
import { DataContext } from '../../Context/DataContext';

const Section3 = ({next,back}) => {
    const {formData,setFormData,bankFile,setBankFile} = useContext(DataContext);
    const [bankFilename,setBankFileName] = useState("");

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleTypeSupp = e => {
        setFormData({...formData, typeOfSupplier: e.target.value });
    }

    const bankFileChange = e => {
        setBankFile(e.target.files[0]);
    }

    const handleNext = e => {
        e.preventDefault();
        if(
            (formData.typeOfSupplier !== 'NA' && formData.typeOfSupplier !== '') &&
            (formData.bankAccNumber !== 'NA' && formData.bankAccNumber !== '') &&
            ((formData.typeOfSupplier === 'Foreign') ? (formData.bankSwift !== 'NA' && formData.bankSwift !== ''): true) &&
            ((formData.typeOfSupplier === 'Indian') ? ((formData.bankIFSC !== 'NA' && formData.bankIFSC !== '') && (formData.bankAccType !== 'NA' && formData.bankAccType !== '')) : true) &&
            bankFile !== null
        ) {
            // Proceed with the next action
            next();
        } else {
            alert("All fields are required");
        }
        
    }
    console.log(formData,bankFile)

  return (
    <div className='section1'>
        <div className='form'>
            <div className='form_holder'>
                <div className='form_group'>
                    <p>Type of Supplier</p>
                    <select className='dropdown' onChange={handleTypeSupp} defaultValue={formData.typeOfSupplier?formData.typeOfSupplier:null}>
                        <option disabled selected>---Select Answer---</option>
                        <option value="Indian">Indian</option>
                        <option value="Foreign">Foreign</option>
                    </select>
                </div>
                <div className='form_group'>
                    <p>{formData.typeOfSupplier==='Foreign'?"14. Signed and Stamped Bank letter head":"14. Bank cancelled cheque"}</p>
                    <input type="file" name="" id="" onChange={bankFileChange} className='textbox' /> {bankFilename && <p>{bankFilename}</p>}
                </div>
                <div className='form_group'>
                    <p>Bank Account Number</p>
                    <input type="text" name="bankAccNumber" value={formData.bankAccNumber==='NA'?"":formData.bankAccNumber} id="" className='textbox' onChange={handleChange} />
                </div>
            </div>
            <div className='form_holder'>
                <div className='form_group'>
                    <p>Bank Name</p>
                    <input type="text" name="bankName" id="" value={formData.bankName==='NA'?"":formData.bankName} className='textbox' onChange={handleChange} />
                </div>
                <div className='form_group'>
                    <p>{formData.typeOfSupplier==='Foreign'?"Swift Code":"Bank IFSC Code"}</p>
                    <input type="text" name={formData.typeOfSupplier==='Foreign'?"bankSwift":"bankIFSC"} id="" className='textbox' value={formData.typeOfSupplier==="Foreign"?formData.bankSwift==="NA"?"":formData.bankSwift:formData.bankIFSC==='NA'?"":formData.bankIFSC} onChange={handleChange} />
                </div>
                {
                    formData.typeOfSupplier==='Indian'?
                    <div className='form_group'>
                        <p>Supplier Account Type</p>
                        <select className='dropdown' name='bankAccType' defaultValue={formData.bankAccType!=='NA'?formData.bankAccType:null} onChange={handleChange}>
                            <option disabled selected>---Select Answer---</option>
                            <option value="Saving">Saving</option>
                            <option value="Current">Current</option>
                            <option value="Overdraft">Overdraft</option>
                        </select>
                    </div>
                    : null
                }
                 {
                    formData.typeOfSupplier==='Foreign'?
                        <div className='form_group' style={{position:"absolute"}}>
                            <p>{"IBAN (Optional)"}</p>
                            <input type="text" name="iban" value={formData.iban==='NA'?"":formData.iban} id="" className='textbox' onChange={handleChange} />
                        </div>
                    : null
                }
            </div>
        </div>
        <div className='action_box'>
            <button className='' onClick={back}>Back</button>
            <button className='btn_next' onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Section3