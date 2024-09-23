import React, { useContext, useEffect, useState } from 'react'
import "./section5.css"
import Declarations from '../Declarations/Declarations'
import { DataContext } from '../../Context/DataContext'

const Section5 = ({next,back,name}) => {
    const [supplier,setSupplier] = useState()
    const [category,setCategory] = useState(false)
    const [declaration,setDeclaration] = useState(false)
    const [audit,setAudit] = useState(false)
    const [display,setDisplay] = useState(false);
    const {formData,setFormData,setUdyam,setCompanyIncorp,setNonMSME,nonMsme,companyIncorp,udyam} = useContext(DataContext);
    const [currency,setCurrency] = useState([]);

    const handleSupplierChange = (e) => {
        console.log(e.target.value)
        setSupplier(e.target.value)
        if(e.target.value === 'MSME'){
            setFormData({...formData, supplierCategory: e.target.value});
            setCategory(true)
            setDeclaration(false)
        }
        if(e.target.value === 'Non-MSME'){
            setFormData({...formData, supplierCategory: e.target.value});
            setDeclaration(true)
            setCategory(false)
            setAudit(false)
            console.log(e.target.value);
        }
    }

    const handleCheckboxChange = e => {
        if(e.target.checked){
            setNonMSME("creating");
        }
        else{
            setNonMSME("NA");
        }
    }

    const handleNext = e => {
        e.preventDefault();
       if(formData.typeOfSupplier === 'Foreign'){
        if((companyIncorp !== '' && companyIncorp !== 'NA') && (formData.currency !== 'NA' && formData.currency !== '')){
            next();
        }
        else{
            alert("All fields are required");
        }
       }
       else{
        if (
            (formData.supplierCategory !== '' && formData.supplierCategory !== 'NA') &&
            (formData.currency !== '' && formData.currency !== 'NA')
        ) {
            if (formData.supplierCategory === 'Non-MSME' && nonMsme === 'creating') {
                next();
            } else if (formData.supplierCategory === 'MSME' && (udyam !== '' && udyam !== 'NA') && (formData.supplierSubcategory !== 'NA' && formData.supplierSubcategory !== '')) {
                next();
            } else {
                alert('Please fill all required fields');
            }
        } else {
            alert('Please fill all required fields');
        }
       }
    }

    console.log(formData);

    const fetchCountries = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const data = await response.json();
            // const currencyKeys = data.map(country => {
            //     if (country.currencies) {
            //         const currencyKey = Object.keys(country.currencies)[0];
            //         return currencyKey;
            //     }
            //     return null;
            // }).filter(key => key !== null).sort();
            const uniqueCurrencyKeys = [...new Set(data.map(country => {
                if (country.currencies) {
                  return Object.keys(country.currencies)[0];
                }
                return null;
              })
              .filter(key => key !== null))].sort();
            setCurrency(uniqueCurrencyKeys);
        } catch (error) {
            console.error('Error fetching countries:', error);
        }
    };

    const udyamChange = e => {
        setUdyam(e.target.files[0]);
    }
    
    useEffect(() => {
        fetchCountries();
    },[])


    const handleCategoryChange = (e) => {
        if(e.target.value === 'small' || e.target.value === 'micro'){
            setFormData({...formData, supplierSubcategory: e.target.value});
            setAudit(true);
        }
        if(e.target.value === 'medium'){
            setFormData({...formData, supplierSubcategory: e.target.value});
            setAudit(true);
        }
    }

    console.log(formData)

    return (
      <div className='section1'>
        {
            display?<Declarations name={name} close={() => {setDisplay(false)}}/>:null
        }
          <div className='form'>
            {
                formData.typeOfSupplier!=="Foreign"?
                <div className='form_holder'>
                    <div className='form_group'>
                        <p>Supplier Category</p>
                            <select className='dropdown' defaultValue={formData.supplierCategory?formData.supplierCategory:null} onChange={handleSupplierChange}>
                                <option disabled selected>---Select Answer---</option>
                                <option value="MSME">MSME</option>
                                <option value="Non-MSME">Non-MSME</option>
                            </select>
                    </div>
                    {
                        formData.supplierCategory === 'MSME' && <div className='form_group'>
                                <p>Category</p>
                                <select className='dropdown' defaultValue={formData.supplierSubcategory?formData.supplierSubcategory:null} onChange={handleCategoryChange}>
                                        <option disabled selected>---Select Answer---</option>
                                        <option value="small">Small</option>
                                        <option value="micro">Micro</option>
                                        <option value="medium">Medium</option>
                                    </select>
                            </div>
                    }
                    {
                        formData.supplierCategory === 'MSME' && <div className='form_group'>
                                <p>Audited Balance sheet for last financial year or current financial year's Udyam certificate</p>
                                <input type="file" name="" onChange={udyamChange} id="" className='textbox' />
                            </div>
                    }
                    {
                        formData.supplierCategory === 'Non-MSME' && <div className='form_group'>
                                <p>Declaration </p>
                                <a style={{marginLeft: "18px", color: "blue", cursor: "pointer"}} href='https://designxpvt-my.sharepoint.com/:w:/g/personal/krishna_saxena_designx_in/EVVB13n3aGBNudFxX-Vdj38BHly0Ff8l0cB4qaSrM-gcdA?e=kZe9u2' target='_blank'>View agreement</a>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <input onChange={handleCheckboxChange} type="checkbox" name="" id="" style={{marginLeft: "18px", marginRight: "10px"}}/>
                                    <label>Yes, I digitally sign the declaration</label>
                                </div>
                            </div>
                    }
                </div>
                :null
            }
              <div className='form_holder'>
                {
                    formData.typeOfSupplier==='Foreign'?
                        <div className='form_group'>
                            <p>Company Incorporation Certificate</p>
                            <input type="file" name="" onChange={e => {setCompanyIncorp(e.target.files[0])}} id="" className='textbox' />
                        </div>
                    :null
                }
                <div className='form_group'>
                      <p>Currency Code</p>
                      <select className='dropdown' name="supplierType" onChange={(e) => {setFormData({...formData,currency: e.target.value})}}>
                        <option disabled selected>---Select Answer---</option>
                        {
                            currency?.map(currency => (<option value={currency}>{currency}</option>))
                        }
                    </select>
                </div>
              </div>
          </div>
          <div className='action_box' style={{marginTop: "25px"}}>
              <button className='' onClick={back}>Back</button>
              <button className='btn_next' onClick={handleNext}>Next</button>
          </div>
      </div>
    )
  }
  
  export default Section5