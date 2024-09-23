import React, { useContext } from 'react'
import { DataContext } from '../../Context/DataContext'

const Section6 = ({next,back,address}) => {

  const {formData,setFormData,setPanFile,setGstFile,gstFile,panFile} = useContext(DataContext);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value })
  }

  const handleNext = e => {
    e.preventDefault();
    if(formData.pancard !== '' && formData.gst !== '' && formData.pancard !== 'NA' && formData.gst !== 'NA' && gstFile !== 'NA' && gstFile !== '' && panFile !== 'NA' && panFile !== '' ) {
        next();
    }
    else{
        alert("All fields are required");  
    }
  }

  console.log(formData);

  return (
    <div className='section1'>
        <div className='form'>
            <div className='form_holder'>
                <div className='form_group'>
                    <p>Pan Card</p>
                    <input type="text" name="pancard" defaultValue={formData.pancard==='NA'?"":formData.pancard} onChange={handleChange} id="" className='textbox'/>
                    <input type="file" name="" onChange={e => {setPanFile(e.target.files[0])}} id="" className='textbox'/>
                </div>
                <div className='form_group'>
                    <p>{"Nature of Assessee (Optional)"}</p>
                    <input type="text" name="nameOfAssessee" defaultValue={formData.NOA==='NA'?"":formData.NOA} onChange={handleChange} id="" className='textbox'/>
                </div>
                <div className='form_group'>
                    <p>GST Number</p>
                    <input type="text" name="gst" defaultValue={formData.gst==='NA'?"":formData.gst} onChange={handleChange} id="" className='textbox'/>
                    <input type="file" name="" onChange={e => {setGstFile(e.target.files[0])}} id="" className='textbox'/>
                </div>
            </div>
            <div className='form_holder'>
                
            </div>
        </div>
        <div className='action_box'>
            <button className='' onClick={back}>Back</button>
            <button className='btn_next' onClick={handleNext}>Next</button>
        </div>
    </div>
  )
}

export default Section6