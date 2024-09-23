import React from 'react'
import "./declaration.css";
import { IoCloseCircle } from "react-icons/io5";


const Declarations = ({name,close}) => {
  return (
    <div className='declarations'>
        <div className='declaration_card'>
            <div className='declaration_card_top'>
                <h2>Declaration</h2>
                <IoCloseCircle style={{fontSize: "24px", cursor: "pointer"}} onClick={close}/>

            </div>
            <div className='declaration_holder'>
                <p>I,<b>{name}</b>, confirm that the information provided in this application is true, accurate, and complete to the best of my knowledge and belief. I understand that my declaration will be recorded and will be used for verification purposes. I also agree to be bound by the terms and conditions of the application form and the rules and regulations specified in the form.</p>
            </div>
        </div>
    </div>
  )
}

export default Declarations