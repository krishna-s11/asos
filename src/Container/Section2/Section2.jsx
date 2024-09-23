import React, { useContext, useEffect, useState } from 'react'
import "./section2.css";
import { DataContext } from '../../Context/DataContext';

const Section2 = ({next,back,address}) => {
    const [check,setCheck] = useState(false);
    const {formData,setFormData} = useContext(DataContext);
    const [countries,setCountries] = useState([]);
    const {sameAddress,setSameAddress} = useContext(DataContext);
    
    const handleDropdown = e => {
        setFormData({...formData, countryOrigin: e.target.value });
    }

    const handleCheckboxChange = e => {
        let isChecked = e.target.checked;
        setSameAddress(isChecked);
        if (isChecked) {
            setFormData({
                ...formData,
                businessAddress: formData.supplierAddress,
                businessCity: formData.supplierCity,
                businessState: formData.supplierState,
                businessPostal: formData.supplierPostal
            });
        } else {
            setFormData({
                ...formData,
                businessAddress: "",
                businessCity: "",
                businessState: "",
                businessPostal: ""
            });
        }
    }

    const handleNext = e => {
        e.preventDefault();
        if(formData.countryOrigin !== '' && formData.countryOrigin !== 'NA'
            && formData.businessAddress!== ''  && formData.businessAddress!== 'NA'  
            && formData.businessCity!== '' && formData.businessCity!== 'NA' 
            && formData.businessState!== '' && formData.businessState!== 'NA' 
            && formData.businessPostal!== '' && formData.businessPostal!== 'NA')
        {
            next();
        }
        else{
            alert("All fields are required");
        }
    }

    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            const countryNames = data.map(country => country.name.common).sort();
            setCountries(countryNames);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };
    

    useEffect(() => {
        fetchCountries();
    },[])

    console.log(countries);

  return (
    <div className='section1'>
        <div className='form'>
            <div className='form_holder'>
                <div className='form_group'>
                    <p>Is the registered address same as supply address ?</p>
                    <div style={{display: "flex", alignItems: "center", marginBottom: "35px"}}>
                        <input type="checkbox" name="" id="" style={{marginLeft: "18px", marginRight: "10px"}} defaultChecked={sameAddress} onChange={handleCheckboxChange}/>
                        <label>Yes</label>
                    </div>
                </div>
                <div className='form_group'>
                    <p>Business Registered Address</p>
                    <input type="text" name="businessAddress" id="" className='textbox' value={formData.businessAddress==='NA'?"":formData.businessAddress} disabled={sameAddress?true:false}/>
                </div>
                <div className='form_group'>
                    <p>City </p>
                    <input type="text" name="businessCity" id="" className='textbox' value={formData.businessCity==='NA'?"":formData.businessCity} disabled={sameAddress?true:false}/>
                </div>
            </div>
            <div className='form_holder'>
                <div className='form_group'>
                    <p>State/Province</p>
                    <input type="text" name="businessState" id="" className='textbox' value={formData.businessState==='NA'?"":formData.businessState} disabled={sameAddress?true:false}/>
                </div>
                <div className='form_group'>
                    <p>Postal/Zip Code</p>
                    <input type="text" name="businessPostal" id="" className='textbox' value={formData.businessPostal==='NA'?"":formData.businessPostal} disabled={sameAddress?true:false}/>
                </div>
                <div className='form_group'>
                    <p>County of Origin</p>
                    <select className='dropdown' onChange={handleDropdown} defaultValue={formData.countryOrigin?formData.countryOrigin:null}>
                        <option disabled selected>---Select Answer---</option>
                        {
                            countries?.map(country => (<option value={country}>{country}</option>))
                        }
                        {/* <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="China">China</option> */}
                    </select>
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

export default Section2