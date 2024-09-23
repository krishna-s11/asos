import React from 'react'
import { IoCloseCircle } from "react-icons/io5";


const VendorCOC = ({name,close}) => {
  return (
    <div className='declarations'>
        <div className='declaration_card'>
            <div className='declaration_card_top'>
                <h2>Vendor Code of Conduct</h2>
                <IoCloseCircle style={{fontSize: "24px", cursor: "pointer"}} onClick={close}/>

            </div>
            <div className='declaration_holder'>
                {/* <p>I,<b>{name}</b>, confirm that the information provided in this application is true, accurate, and complete to the best of my knowledge and belief. I understand that my declaration will be recorded and will be used for verification purposes. I also agree to be bound by the terms and conditions of the application form and the rules and regulations specified in the form.</p> */}
                <p>Our business success andd relationships are built upon a culture of excellence and commitment, which in turn rest on the foundations of integrity, trust and respect for the individual and adherence wiht the law. The principles of conduct which we expect of our Vendor are further are further explained below:</p>
                <ol>
                    <li><b>{"(i)"} COMPLIANCE WITH LAWS</b></li>   
                    <p>All Vendors shall conduct their business activites in full compliance with the applicable laws, international conventions and / or regulations of their repsective countries and operating locations.</p>
                    <li><b>{"(ii)"} ANTI-CORRUPTION, ANTI BRIBERY</b></li>
                    <p>Vendor shall coply with all applicable international anti-corruption and anti-bribery laws. Vendors must not give or offer to give, anything of value or make any improper payments, directly or indirectly, to any government official, employee of a government controlled company, or political party, customer or private third pary, in order to obtain any improper benefit or advantage.</p>
                    <li><b>{"(iii)"} GIFTS & ENTERTAINMENT</b></li>
                    <p>Vendor acknowledge that AMBER ENTERPRISES's emplyees are prohibited from accepting anything more than occasional and modest gifts from Vendors, including meals and entertainment. Vendor are not authorized to give or receive gifts, hopitality or entertainment on AMMBER ENTERPRISES's behalf</p>
                    <li><b>{"(iv)"} DATA PRTECTION</b></li>
                    <p>Vendors shall comply with all applicable data privacy laws and regulations. Vendors who are engaged in collecting, processing or controlling personal data on behalf of AMBER ENTERPRISES must comply with AMBER ENTERPRISES's orporate rules and policies relating to such services and shall prevent the improper and unauthoried use or dissemination of such data.</p>
                    <li><b>BUSINESS PRACTICE</b></li>
                    <p>Vendors must be committed to the highest standards of legal and business conduct when dealing with their employees, Vendors, and customers, including AMBER ENTERPRISES.</p>
                    <li><b>{"(i)"} ACCURATE BUSINESS RECORDS</b></li>
                    <p>Vendors shall maintain accurate and timely financial and accounting records of all transactions related to their business with AMBER ENTERPRISES and retain them as required by applicable law, but in no case less than 3 years. No accounting or financial entry shall be made that conceals or disguises the true nature of any transaction or record</p>
                    <li><b>{"(ii)"} CONFIDENTIAL INFORMATION</b></li>
                    <p>Vendors shall protect AMBER ENTERPRISES' confidential information and shall not share them with any third party unless authorized to do so in writing by AMBER ENTERPRISES</p>
                    <li><b>{"(iii)"} HONEST AND LEGAL CONDUCT </b></li>
                    <p>Vendors undertake not to engage in any conduct which would, under any applicable law, constitute wilful misconduct, a criminal offence and/or tortious deceit.</p>
                    <p><b>ETHICAL PRINCIPLES AND CONFLICT OF INTEREST</b></p>
                    <p>Vendors shall conduct their business in a manner to conform to the highest level of ethical business behaviour. Vendors should avoid unfair practices and any conflict of interest or appearance of conflict of interest in all their dealings.</p>
                    <p><b>ENVIRONMENTAL COMPLIANCE</b></p>
                    <p>Vendors shall operate in an environmentally responsible and efficient manner to minimize adverse impacts on the environment and shall comply with all applicable environmental regulations.</p>
                    <p>Vendors shall be required to acknowledge in writing that they understand and will comply with this Vendor code of conduct. Amber Enterprises shall have the right to audit Vendors' compliance at a mutually agreed time and place, and Vendors shall extend full cooperation to AMBER ENTERPRISES in such event.</p>
                    <p style={{marginTop: "20px"}}><b>Managing Director ({name})</b></p>
                    <p>Digitally Signed</p>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default VendorCOC