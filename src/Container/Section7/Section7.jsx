import React, { useContext, useState } from 'react'
import Declarations from '../Declarations/Declarations'
import { DataContext } from '../../Context/DataContext';

const Section7 = ({next,back,address,name}) => {
    const [display,setDisplay] = useState(false);
    const {formData,nda,setNDA,sqaContext,setSQA,fourM,setFourM} = useContext(DataContext);

    const handleCheckboxChange = (e,doc) => {
        if (e.target.checked) {
            setNDA("creating");
        } else {
            setNDA("NA"); // Handle the unchecked case if needed
        }
    };

    const handleSQACheck = e => {
        if (e.target.checked) {
            setSQA("creating");
        } else {
            setSQA("NA"); // Handle the unchecked case if needed
        }
    }

    const handleFourCheck = e => {
        if (e.target.checked) {
            setFourM("creating");
        } else {
            setFourM("NA"); // Handle the unchecked case if needed
        }
    }


  return (
    <div className='section1'>
        {
            display?<Declarations name={name} close={() => {setDisplay(false)}}/>:null
        }
        <div className='form'>
            <div className='form_holder'>
                {
                    formData.supplierType !== 'ODM' ?
                    <div className='form_group'>
                        <p>NDA {"(Non Disclosure Agreement)"}</p>
                        <a style={{marginLeft: "18px", color: "blue", cursor: "pointer"}} href='https://designxpvt-my.sharepoint.com/:w:/g/personal/krishna_saxena_designx_in/EZ9f0STzhJtOnQFfzSHNsaQB3WWnf3sbgo1F0C5pR3TqFg?e=HkclgU' target='_blank'>View agreement</a>
                        <div style={{display: "flex", alignItems: "center"}}>
                            <input onChange={handleCheckboxChange} type="checkbox" name="" id="" style={{marginLeft: "18px", marginRight: "10px"}}/>
                            <label>Yes, I digitally sign the Agreement</label>
                        </div>
                    </div>
                    :null
                }
                {
                    formData.typeOfSupplier !== 'Foreign' ?
                        <div className='form_group'>
                            <p>SQA</p>
                            <a style={{marginLeft: "18px", color: "blue", cursor: "pointer"}} href='https://designxpvt-my.sharepoint.com/:w:/g/personal/krishna_saxena_designx_in/EXCKWpNZ75lMn3-M3bdjCF8BB-9gm7jVKPVTgA4a4rNicA?e=gV2dWE' target='_blank'>View agreement</a>
                            <div style={{display: "flex", alignItems: "center"}}>
                                <input onChange={handleSQACheck} type="checkbox" name="" id="" style={{marginLeft: "18px", marginRight: "10px"}}/>
                                <label>Yes, I digitally sign the Agreement</label>
                            </div>
                        </div>
                    : null
                }
                <div className='form_group'>
                    <p>4M</p>
                    <a style={{marginLeft: "18px", color: "blue", cursor: "pointer"}} href='https://designxpvt-my.sharepoint.com/:w:/g/personal/krishna_saxena_designx_in/ETESTJWCAoJOuQFbfrm4fn8B37Uj_7Jq6U_igNBVsnkFwg?e=nxI5S9' target='_blank'>View agreement</a>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <input onChange={handleFourCheck} type="checkbox" name="" id="" style={{marginLeft: "18px", marginRight: "10px"}}/>
                        <label>Yes, I digitally sign the Agreement</label>
                    </div>
                </div>
            </div>
            <div className='form_holder'>
                
            </div>
        </div>
        <div className='action_box'>
            <button className='' onClick={back}>Back</button>
            <button className='btn_next' onClick={() => {next()}}>Next</button>
        </div>
    </div>
  )
}

export default Section7