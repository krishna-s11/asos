// import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
// import { saveAs } from 'file-saver';
// import { useContext } from 'react';
// import { DataContext } from '../../Context/DataContext';

// export async function sqa(name,regAdd,regCity,regState,regPostal,add,city,state,postal,country,owner,currDate,currDateTime) {
//     const {setSQA} = useContext(DataContext);
//     try {
//       const doc = (
//         <Document>
//           <Page style={{backgroundColor:"#fff", padding:"30px"}}>
//             <Text style={{textAlign: "center",marginTop:"20px", marginBottom:"200px"}}>On 100/- Stamp paper</Text>
//             <Text style={{fontSize:"14px", marginTop:"20px", textAlign:"center"}}>SUPPLIER QUALITY AGREEMENT</Text>
//             <Text style={{fontSize:"12px", marginTop:"20px", marginBottom:"20px"}}>This Supplier Quality Agreement (“Quality Agreement” or “Agreement”) is entered into by and between {name} having a principal place of business at {regAdd}, {regCity}, {regState} - {regPostal} & Production Unit at {add}, {city}, {state} - {postal} hereafter referred to as (“Supplier”) and Amber Enterprises India Limited having a principal place of business at Universal Trade Tower, 1st Floor, Sector – 49, Sohna Road, Gurugram – 122 018, hereafter referred to as (“Amber”). The "Quality Agreement is effective as of the date of last signature by the parties below: </Text>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>1. Purpose/Scope</Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>To establish the basic principle governing development quality, manufacture, delivery, quality, warranty etc. of the various Bought out items to all Amber units. (Like Compressor Under the name of GMCC and Motor Under the name of Welling) </Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>2. Products/Services </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>The Product covers supplies under the Midea India Pvt Ltd for the compressor and motors by the brand name GMCC compressor and welling motor.</Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>3. Validity  </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>This Agreement shall be valid for an initial period of 24 months from the date of execution. The Agreement shall get renewed automatically for a further period of 24 months from the date of expiry of initial period, unless otherwise refused either by AMBER or SUPPLIER. Such refusal shall be communicated in writing at least 30 days before expiry of the Agreement.</Text>
//                     <Text style={{fontSize:"12px"}}>This Quality Agreement, including any Appendices and other attachments, is the complete, final and exclusive statement of the terms of Agreement between the SUPPLIER and AMBER relating to the subject hereof and merges and supersedes all prior and contemporaneous understandings and representations, written and oral.</Text>
//                     <Text style={{fontSize:"12px"}}>No amendment to this Quality Agreement is effective between the SUPPLIER and AMBER unless mutually agreed, in writing and signed by authorized representatives of SUPPLIER and AMBER. </Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>3. Order of Precedence (with respect to Quality Requirements only)  </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>1. Purchase Order</Text>
//                     <Text style={{fontSize:"12px"}}>2. Engineering drawings</Text>
//                     <Text style={{fontSize:"12px"}}>3. Engineering and material specifications</Text>
//                     <Text style={{fontSize:"12px"}}>4. QAF-0069-C “Acknowledgement of Supplementary Supplier Quality Requirements for Purchased Materials or Services"</Text>
//                     <Text style={{fontSize:"12px"}}>5. Amber Master Supply Agreement (if any) - Note: the terms of the Master Supply Agreement will take precedence over only the pre-printed terms contained on each Purchase Order.</Text>
//                     <Text style={{fontSize:"12px"}}>6. QAF-0082-C “Supplier Quality Agreement for Purchased Materials or Services”</Text>
//                     <Text style={{fontSize:"12px"}}>7. QAR-0001-C “Supplier Quality Requirements for Purchased Materials or Services” </Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>3. General Quality Requirement</Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>a. The supplier confirms to ISO 9001:2015 as of basic Quality Management System requirement or else Specific suppliers will agree to initiate ISO certification process followed by certification within 1 year of signing this Agreement. Upon request, Supplier shall provide all appropriate product certifications including all applicable safety, regulatory, and operating systems certifications at Supplier’s sole cost and expense.  </Text>
//                     <Text style={{fontSize:"12px"}}>Evidence of certification to the applied Quality Management System and successful completion of surveillance audits shall be supplied to Amber upon request. </Text>
//                     <Text style={{fontSize:"12px"}}>b. The material shall be as per AMBER specification, to be understood by the supplier clearly at the time of development. Any non-conforming material shall not be supplied unless otherwise agreed in writing by AMBER in advance. All the parts have to be ROHS compliance.  ROHS certificate to be submitted annually to AMBER quality department in case if any part not meeting the compliance liability stands at supplier end as per warranty policy</Text>
//                     <Text style={{fontSize:"12px"}}>c. Suppliers shall own full responsibility for the quality of the supplied part. It is intention of AMBER that supplier should develop himself to deliver 100% parts direct On Line (DOL)</Text>
//                     <Text style={{fontSize:"12px"}}>d. AMBER will inspect the parts on a sampling basis received from the supplier till the supplier achieves DOL status. Thereafter inspection will be purely on an audit basis.</Text>
//                     <Text style={{fontSize:"12px"}}>e. The supplier must send the Pre Dispatch Inspection Report (PDIR / JIR), Test certificate or other as per AMBER Inspection requirement</Text>
//                     <Text style={{fontSize:"12px"}}>f. AMBER shall not allow any type of segregation or rework at their end. Any type of segregation due to bad Quality of the supplied parts shall be done by the SUPPLIER only but in case of emergency, segregation/ rework will be done by AMBER and the segregation cost will be recovered from the SUPPLIER.</Text>
//                     <Text style={{fontSize:"12px"}}>AMBER reserves the right to scrap the bad Quality material at Amber premises on case-to-case basis to avoid any kind of mixing at their or SUPPLIER end. </Text>
//                     <Text style={{fontSize:"12px"}}>g. Response to all Quality problems shall be entertained as per defined way. i.e. containment action in 24hrs, CAPA submission by supplier to AMBER within 7 days.</Text>
//                     <Text style={{fontSize:"12px"}}>h. SUPPLIER shall upfront inform AMBER about any changes in 4M (Man, Machine, Material, and Method) which can affect AMBER production. In case, any quality issue due to 4M change without information to Amber shall be treated seriously and penalty shall be applicable. Seller shall be liable for any loss, damage, claims cost and expense arise out due to 4M violation. </Text>


//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>4. Delivery </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>a. AMBER will issue indicative & firm delivery schedule & supplier has to deliver the goods on time as per AMBER schedule.</Text>
//                     <Text style={{fontSize:"12px"}}>b. SUPPLIER shall ensure that packaging of the parts are in standard packaging only or subject to AMBER requirement. Material packaging shall not negatively influence Material quality or include any impurities.</Text>
//                     <Text style={{fontSize:"12px"}}>c. AMBER has the discretion to make alternate arrangement for purchase of material in the event of Supplier’s inability to supply the same as per schedule given by AMBER. Extra cost, if any, incurred by AMBER for such purchase shall be debited to SUPPLIER.</Text>
//                     <Text style={{fontSize:"12px"}}>d. AMBER shall reserve the rights to take the following actions in case of shortage of supplies from the SUPPLIER: </Text>
//                     <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"i)"}   1st time short supply received in 6 months – Debit note to be raised by AMBER. </Text>
//                     <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"ii)"}  2nd time short supply received in 6 months – 100% additional amount to be charged along with amount of short material received. </Text>
//                     <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"iii)"} 3rd time short supply received in 6 months – 200% additional amount to be charged along with amount of short material received. </Text>
//                     <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"iv)"}  4th time short supply received in 6 months – 300% additional amount to be charged along with amount of short material received. </Text>
//                     <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"v)"}   5th time short supply received in 6 months – Meeting with MD of the SUPPLIER for reduction in share of business. </Text>
//                     <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"vi)"}  6th time short supply received in 6 months – SUPPLIER will be blacklisted. </Text>
//                     <Text style={{fontSize:"12px"}}>e. SUPPLIER & AMBER shall have monthly RECO and shall settle all discrepancies related to rejections, segregation, short supplies found by AMBER in the supplies as per the Agreement. </Text>
//                     <Text style={{fontSize:"12px"}}>f. Delivery problems shall be entertained as per defined way. i.e. containment action in 24hrs, CAPA submission by supplier to AMBER within 7 days.  </Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>5. Development  </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>a. Supplier shall ensure development of parts on time as per agreed time plan.</Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>6. Warranty </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>a. SUPPLIER shall ensure that supplied material meets AMBER specifications & is manufactured as per agreed manufacturing processes & standards. To cover up warranty related to any functional components specific design of the supplier (Which is merely not the direct commodity) SUPPLIER shall give the warranty of 18 months from the date of invoice of all the parts supplied to AMBER.</Text>
//                     <Text style={{fontSize:"12px"}}>b. Any warranty failure owing to supplied part manufacturing defect will be supplier’s responsibility. AMBER has the right to recover the warranty cost incurred on such failures from the suppliers through raising the warranty claim or against the payment. The incurred warranty cost can be in either of the forms as i) Part cost ii) FG repair or replacement cost iii) Service cost iv) Reputation loss cost</Text>
//                     <Text style={{fontSize:"12px"}}>c. So if any such claim is raised by AMBER’s customer then same cost will be claimed from the SUPPLIER for the recovery if proven that it is the part failure supplied by supplier</Text>
//                     <Text style={{fontSize:"12px"}}>d. Failure under warranty shall be categorized as: </Text>
//                     <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"i)"}  Single part failure ≤ 0.8% within warranty period (Normal): shall be covered thru FOC parts from the supplier </Text>
//                     <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"ii)   Single part failure > 0.8% ≤ 2% within warranty period (Abnormal): shall be covered thru FOC parts and any kind of cost which AMBER has to incur to resolve the issue with the customer."} </Text>
//                     <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"iii)  Single part failure > 2% within warranty period (Epidemic) : FOC spares by supplier + Other charges including the replacement cost of part or machine, service cost, reputation loss cost "} </Text>

//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>7. Product Quality Notification </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>Where Supplier suspects that non-conforming Product may have been shipped to Amber, Supplier shall immediately provide written notification to the Amber. </Text>
//                     <Text style={{fontSize:"12px"}}>When Supplier identifies non-conforming Product prior to shipment and wishes to obtain concession or deviation permission for its use, release or acceptance, Supplier shall immediately provide written request to the Amber and obtain disposition of the non-conforming product.</Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>8. Others </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>{"a)"} SUPPLIER shall submit to AMBER, on demand, any relevant information regarding management, manufacture, and quality assurance report within the stipulated time. </Text>
//                     <Text style={{fontSize:"12px"}}>SUPPLIER shall allow AMBER to audit its premises concerning the manufacture and Quality assurance of said material.</Text>
//                     <Text style={{fontSize:"12px"}}>{"b)"} SUPPLIER in consultation with AMBER may sub-contract the processing of material. The responsibility of quality and delivery shall remain with SUPPLIER in such case. Supplier will ensure that Amber has the same rights of access to any subcontractors of Supplier who are involved in the supply of the products for the purpose of carrying out an audit. </Text>
//                     <Text style={{fontSize:"12px"}}>{"c)"} All the parts & components supplied by the supplier to AMBER shall be RoHS compliant. </Text>
//                     <Text style={{fontSize:"12px"}}>Material manufactured date codes of supplied Material shall not exceed 24 months at the time of Material receipt by Amber unless agreed upon in writing prior to purchase order release. In some cases, commodities will have shorter shelf-life requirements and should be specified per the industry standard guidance for that commodity. Material shall have a minimum of 6 months remaining on material before date code expiration. Amber requirements may also dictate shorter shelf-life requirements and will be communicated to Supplier at the time of PO release of those exceptions </Text>
//                     <Text style={{fontSize:"12px"}}>{"d)"} Supplier shall maintain a first in, first out (“FIFO”) inventory control system to ensure that nonconforming Material or prior Product versions or down-rev Product is not inadvertently shipped to Amber. </Text>
//                     <Text style={{fontSize:"12px"}}>{"e)"} SUPPLIER shall not engage in giving any kind of gifts / money to AMBER personnel either directly or Indirectly. </Text>
//                     <Text style={{fontSize:"12px"}}>{"f)"} AMBER shall provide the data on product’s failure in the field or line from time to time during the term of this Agreement </Text>
//                     <Text style={{fontSize:"12px"}}>{"g)"} Supplier shall provide written responses and summaries of actions as a result of audits, corrective action requests, or escalations raised by Amber.  </Text>
//                     <Text style={{fontSize:"12px"}}>{"h)"} It is Supplier’s responsibility to install any additional processes, tests, or methods in order to fulfill customer requirements.   </Text>
//                     <Text style={{fontSize:"12px"}}>{"i)"} Supplier shall maintain and execute internal audits of its operation to insure compliance with written processes, procedures, standards, and Agreements. </Text>
//                     <Text style={{fontSize:"12px"}}>{"j)"} Supplier Certification:   </Text>
//                     <Text style={{fontSize:"12px"}}>Supplier acknowledges that certification may require an audit by Amber to assess Supplier’s capability to provide Material(s) or Service(s). Certification audits may be conducted without Amber visiting Supplier’s site; however, Amber reserves the right to require an onsite audit before providing a certification. </Text>
//                     <Text style={{fontSize:"12px"}}>Certification is contingent upon Supplier performance and Amber reserves the right to change the certification at any time. </Text>
//                     <Text style={{fontSize:"12px"}}>{"k)"} Changes to Supplier’s quality management system or any significant organizational changes shall be communicated to Amber immediately :   </Text>
                    

//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>9. Confidentiality  </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>{"a)"} All information transmitted between SUPPLIER & AMBER in connection with this Agreement or the performance hereunder shall be treated as secret or confidential by both parties and shall not divulge or disclose the same to any third party.</Text>
//                     <Text style={{fontSize:"12px", marginRight: "10px"}}>Information shall include all non-public information furnished, disclosed or transmitted regardless of form.  </Text>
//                     <Text style={{fontSize:"12px", marginRight: "10px"}}>Receiving Party will use the Confidential Information solely in furtherance of the actual or potential business relationship between the Parties. </Text>
//                     <Text style={{fontSize:"12px", marginRight: "10px"}}>Receiving Party and its Representatives will take all reasonable measures to maintain the confidentiality of the l Information, but in no event less than the measures it uses for its own information of similar type.  </Text>

//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>10. Product Change and Discontinuance Notification </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>Supplier shall notify Amber of all proposed changes that impact the form, fit, function, quality, reliability or status of the Material with regard to environmental legislation. </Text>
//                     <Text style={{fontSize:"12px"}}>Notification shall be provided via an engineering and/or process change request. Changes affecting a significant amount of parts defined as greater than fifteen part numbers shall be accompanied with an Excel file listing those affected part numbers. </Text>
//                     <Text style={{fontSize:"12px"}}>All Supplier notifications shall be sent to Amber via email to the following Amber address: __________. The types of changes, as an example, requiring notification include, but are not limited to:</Text>
//                     <Text style={{fontSize:"12px", marginTop:"10px"}}>1. Changes in components (die shrink, etc.)</Text>
//                     <Text style={{fontSize:"12px"}}>2. Reduced inspection and/or testing</Text>
//                     <Text style={{fontSize:"12px"}}>3. Manufacture site changes</Text>
//                     <Text style={{fontSize:"12px"}}>4. Deviations from the MT&Q plan  </Text>
//                     <Text style={{fontSize:"12px"}}>5. Changes in packing, shipping and labeling of Product or containers  </Text>
//                     <Text style={{fontSize:"12px"}}>6. Product discontinuance</Text>
//                     <Text style={{fontSize:"12px"}}>7. Changes in Supplier or Manufacturer part number or name</Text>
//                     <Text style={{fontSize:"12px", marginTop: "10px"}}>Supplier, at a minimum, will provide ninety days prior written notice before any change implementation to afford Amber the means of determining approval for such changes that ultimately affect Amber’s end customer.</Text>
//                     <Text style={{fontSize:"12px", marginTop: "10px"}}>Supplier shall provide written notice of planned product discontinuation applicable standard and specifically in accordance with the following timeframes:  </Text>
//                     <Text style={{fontSize:"12px", marginTop: "10px"}}>1. 6 months minimum from the notice for last order dates.</Text>
//                     <Text style={{fontSize:"12px"}}>2. 12 months minimum from any discontinuation to manufacture material or from final shipments whichever is a greater period of time.</Text>
//                     <Text style={{fontSize:"12px", marginTop:"10px"}}>Where applicable, Supplier shall provide Product revisions in support of subsequent standards revisions, operating system updates, and versions including support packs, service releases, and full releases of operating systems in the same family of operating systems as previously supported. This shall include (by way of example and not limitation) all required Product modifications of hardware, BIOS, firmware, programmable devices, drivers, utilities, and applications. </Text>
//                     <Text style={{fontSize:"12px", marginTop:"10px"}}>Amber has the right to reject any and all intended changes required by Supplier. </Text>
//                     <Text style={{fontSize:"12px", marginTop:"10px"}}>Supplier shall maintain procedures for change notification to Amber which are in accordance with this Agreement </Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>11. Disaster Recovery/Business contingency plan</Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>Supplier shall have a disaster recovery and business contingency plan in place that minimizes the risk to Amber in the event of a natural disaster, labor dispute, or other disturbances in the supply chain. Evidence of the process shall be made available for review upon request. </Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>12. Force Majeure </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>Neither party shall be liable for any failure of or delay in the performance of this Agreement for the period that such failure or delay is  beyond the reasonable control of a party, materially affects the performance of any of its obligations under this Agreement, and  could not reasonably have been foreseen or provided against, but will not be excused for failure or delay resulting from only general economic conditions or other general market effects. </Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>13. Product Records </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>Supplier shall retain (and if applicable shall cause its affiliates and subcontractors to retain) detailed written records of all Supplier activities relating to the Product (collectively referred to as the “Product Records”). Information included or referenced in the records includes finished Product and package labels and labeling, label accounting information (labels/labeling produced or issued, used, sampled, rejected/destroyed), information regarding any environmental monitoring that takes place during manufacturing and, if required, testing, copies of release testing, if any, performed by Supplier, process deviations and approved process change if any. </Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>14. Records Retention  </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>Supplier shall retain (and shall require any affiliates and subcontractors to retain) all Product Records for a period of time equivalent to one year past the design and expected life of the Product following Product manufacture. Supplier shall not alter, destroy or otherwise dispose of any Product Records without Amber’s prior written authorization.</Text>
//                     <Text style={{fontSize:"12px"}}>Supplier shall provide copies of any or all Product Records to Amber within three (3) business days from the date of Amber’s written request for any Product Records.</Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>15. Regulatory Compliance  </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>Supplier shall promptly inform Amber of the existence and substance of any inquiry or investigation related to the Products initiated by any government authority or certification agency. </Text>
//                     <Text style={{fontSize:"12px"}}>Supplier will notify Amber Quality Assurance within five (5) business days of the notification or first day (whichever is earlier) of a regulatory inspection or audit, announced or unannounced, where such inspection or audit applies to a Supplier facility where the Products are manufactured) or is an inspection or audit of Amber places of manufacture and the scope of such inspection or audit includes the third party facilities where Amber products are manufactured. Supplier shall provide Amber the opportunity to be present at such inspections or audits. Supplier shall cooperate fully with any such inspections or audits. Supplier shall provide to Amber, within five (5) days of its submission or receipt by Supplier, copies of the inspection or audit observations and copies of responses to regulatory observations pertaining to Amber product. Supplier shall immediately correct any deficiencies identified in the regulatory inspection   </Text>
//                     <Text style={{fontSize:"12px"}}>Supplier shall promptly provide to Amber any information received by Supplier regarding real or potential deficiencies or defects in the Products and any information that might otherwise constitute a complaint about the Products or would reasonably be considered material to the safety of the Products and/or the Product’s intended use. Each party shall reasonably cooperate with the other in sharing any information that may constitute a complaint related to the Products or services. Supplier shall at all times reasonably cooperate with any requests arising from a Amber investigation, inspection or inquiry regarding the Products.</Text>
//                     <Text style={{fontSize:"12px"}}>Amber shall have the sole authority to declare a recall of any Products if Amber believes there is or may be a potential significant health hazard or non-compliance with applicable government regulations.</Text>
//                 </View>
//             </div>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
//                 <View style={{width:" 200px", marginRight: "10px"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600"}}>16. Termination  </Text>
//                 </View>
//                 <View style={{width: "100%"}}>
//                     <Text style={{fontSize:"12px"}}>This Agreement may be terminated by either party for any reason or for no reason upon 1 month written notice of termination to the other party. </Text>
//                 </View>
//             </div>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>This Purchase Agreement is executed on Date {currDate} between AMBER ENTERPRISES INDIA LIMITED and {name} </Text>
//             <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginTop:"30px"}}>
//                 <View style={{width:"40%"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600", width: "200px"}}>FOR & ON BEHALF OF AMBER ENTERPRISES INDIA LTD.</Text>
//                     <Text style={{fontSize:"12px", marginTop:"10px"}}>Name: SACHIN GUPTA</Text>
//                     <Text style={{fontSize:"12px"}}>Title: CEO-RAC</Text>
//                     <Text style={{fontSize:"12px"}}>Signature: </Text>
//                     <Text style={{fontSize:"12px"}}>Date: </Text>
//                 </View>
//                 <View style={{width:"40%"}}>
//                     <Text style={{fontSize:"12px", fontWeight:"600", width: "200px"}}>FOR & ON BEHALF OF {name}</Text>
//                     <Text style={{fontSize:"12px", marginTop:"10px"}}>Name: {owner}</Text>
//                     <Text style={{fontSize:"12px"}}>Title: </Text>
//                     <Text style={{fontSize:"12px"}}>Signature: {"(Digitally Signed)"} </Text>
//                     <Text style={{fontSize:"12px"}}>Date: {currDate} </Text>
//                 </View>
//             </div>

//             <View style={{width:"100%",position:"absolute", bottom:"10", left:"10%"}} fixed>
//                 <Text style={{textAlign:"center", fontSize:"10px"}}>Document has been digitally signed with acceptance on ASOS at {currDateTime}</Text>
//             </View>
//           </Page>
//         </Document>
//       );

//       const asPdf = pdf([]);
//       asPdf.updateContainer(doc);
      
//       const pdfBlob = await asPdf.toBlob(); 
//       setSQA(pdfBlob);
//     } catch (error) {
//       console.error(error);
//       alert('Error generating PDF');
//     }
//   }