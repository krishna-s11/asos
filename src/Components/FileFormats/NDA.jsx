// import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
// import { saveAs } from 'file-saver';
// import { useContext } from 'react';
// import { DataContext } from '../../Context/DataContext';

// export function ndaForm(name,regAdd,regCity,regState,regPostal,add,city,state,postal,country,owner,currDate,currDateTime) {
//     const generatePdf = async () => { 
//       try {
//       const doc = (
//         <Document>
//           <Page style={{backgroundColor:"#fff", padding:"30px"}}>
//             <View style={{width: "100%", padding:"20px", backgroundColor:"#0f4761"}}>
//             <Text style={{textAlign: "center", fontSize:"24px", color:"#fff", textTransform:"uppercase"}}>{name}</Text>
//             <Text style={{textAlign: "center", fontSize:"12px", color:"#fff", marginTop:"10px"}}>{add}, {city}, {state} - {postal}</Text>
//             </View>
//             <Text style={{textAlign: "center",marginTop:"20px"}}>NON-DISCLOSURE AGREEMENT</Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>This Non Disclosure Agreement (the “Agreement”) is made and executed on this {currDate}(the “Effective Date”), on ASOS, by and between</Text>
//             <Text style={{fontSize:"12px", marginTop:"10px"}}>{`${name}, a Company incorporated under the Indian Companies Act,  1913 and having its registered office at  ${regAdd}, ${regCity}, ${regState} - ${regPostal} and inter alia one of its branch office at ${add}, ${city}, ${state} - ${postal} (${country}) (hereinafter referred to as “the Discloser”) which expression shall, unless it be repugnant or inconsistent with the context or meaning hereof, be deemed to mean and include its successors and assigns) of the One Part;`} </Text>
//             <Text style={{marginTop:"10px",fontSize:"12px"}}>And</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>{`AMBER ENTERPRISES INDIA LIMITED, a Company incorporated under the Companies Act, 1956 and having its registered office at C-1, Phase –II, Focal Point, Rajpura Town – 140 401, Punjab and Corporate Office at Universal Trade Tower, 1st Floor, Sector 49, Sohna Road, Gurgaon - 122 101 and inter alias its place of business at Dehradun (Uttarakhand) (hereinafter referred to as “the Recipient”) which expression shall, unless it be repugnant or inconsistent with the context hereof, mean and include its successors and assigns) of the Other Part;`}</Text>
//             <Text style={{marginTop:"10px",fontSize:"12px"}}>The Discloser and the Recipient are hereinafter individually known as the “Party” and collectively known as the “Parties”. </Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>WHEREAS</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>a. {`The Parties are in the process of evaluating potential business relationship for developing the industrial designs created by the Discloser in the Air Conditioner category, the Recipient will conduct the entire exercise of engineering design, mould & tooling design, tool development & eventual pilot & commercial production of new  AC parts designs ( “Purpose”) created by the Discloser and in connection with the Purpose, the Discloser will disclose/exchange information or furnish data which is private, Confidential and Proprietary Information (collectively referred to as “Confidential and Proprietary Information”);`}</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>b. {`The mutual objective under this Agreement is to provide protection for such Confidential and Proprietary Information while maintaining each Party’s independence and ability to conduct their individual business activities without let or hindrance;`}</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>c. {`The Parties have mutually agreed that the provisions of this Agreement shall govern the use and revelation of all Confidential and Proprietary Information disclosed on all matters either arising out of, under, or in relation to, the discussions between the Parties in relation to the Purpose of this Agreement, regardless of the date on which such Confidential and Proprietary Information was actually disclosed;`}</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>d. {`The Recipient shall not use the industrial designs for any other Purpose other than the Purpose specified in this Agreement;`}</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>e. {`These Industrial designs are property of the Discloser and the same can be supplied to the Discloser or used in the Products of the Discloser only upon establishment of tools and moulds design by the Recipient for the Discloser;`}</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>f. {`The Parties wish to maintain the Confidential and Proprietary Information at the stage of negotiation and thereafter; `}</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>NOW, THEREFORE, in consideration of the Discloser disclosing its Confidential and Proprietary Information to the Recipient, the receipt and sufficiency of which is hereby acknowledged by the Parties, the Parties agree to as follows:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>1. Confidential and Proprietary Information: </Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>“Confidential and Proprietary Information” shall mean any and all information and data in any form (including, without limitation, all digital, electronic, and provided in written (Oral word is removed) information instructions or comments and the like) either tangible or intangible, disclosed to the Recipient by or on behalf of the Discloser, or otherwise obtained by the Recipient about, pertaining to or regarding the Discloser in connection with the Purpose.  This shall include, without limitation, this Agreement all previous drafts thereof as well as all previous correspondence between the Parties, irrespective of the medium in which such information has been disclosed by the Discloser to the Recipient, whether before or after the Effective date, either directly or indirectly, and shall include without limitation, business and, financial information about costs, profits, markets, sales, customers and bids, business plans, marketing, future developments, product developments and new products concepts and technical information, Schematics, techniques, suggestions, development tools and processes, computer programs, designs, drawings, manuals, electronic codes, formulas and improvements, software demonstration programs, routines, algorithms, computer systems, documentation, procedures, ideas, know-how, inventions (whether patentable or not), improvements, concepts, records, files, memoranda, reports, plans, price lists, customer lists, forecasts, strategies, any apparatus, modules samples, prototypes or parts thereof or any, distributor(s) and representative(s) list, employee(s) list and all document, books papers, model, sketches and other data of any kind and descriptions, including electronic data recorded or retrieved by any means, that have been or will be given to the Recipient by the Discloser, as well as written or verbal. Information shall be deemed confidential even if it is not specifically marked or designated as being confidential at the time of disclosure.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>Intellectual property: “Intellectual Property” includes but is not restricted to patents, patent applications, inventions and discoveries (whether patentable or otherwise), copyrights, designs, trademarks, methods or know-how, designs, trade secrets, derivatives of the innovation of the Discloser, copyrights, prototypes, models, source codes, object codes, formulae, compilations, devices, drawings, geographical indication of goods and any other proprietary information </Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>It is clarified that the Confidential and Proprietary Information of the Discloser will not include the information listed below: </Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>{`a) Information which is in public domain or subsequently becomes public knowledge without any fault of the Recipient; `}</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>{`b) Information or any part of it which was rightfully in the Recipient’s possession prior to its association with the Discloser; `}</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>{`c) Information which is rightfully received by the Recipient from a third party without a duty of confidentiality on the third party; `}</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>{`d) Information which is independently developed by the Recipient without reference to any information of the Discloser; or `}</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>{`e) Information disclosed with the Discloser’s prior written approval.`}</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>However the Recipient will have the burden of proving that any given exception applies in a particular case. </Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>2. Undertaking by the Recipient: </Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>The Recipient shall use the Confidential and Proprietary Information solely in connection with the Purpose and not for any other purposes.  The Recipient will use its best endeavors to ensure that Confidential and Proprietary Information is protected against theft or unauthorized access. The Recipient will ensure that the Confidential and Proprietary Information of the Discloser is not disclosed to any third party or disseminated or published without the express written consent of the Discloser. The Recipient shall not at any time use any of the Confidential and Proprietary Information (or permit or assist a third party to use the Confidential and Proprietary Information) for or in connection with any litigation of any nature. The Recipient agrees and undertakes that within its respective organization, the Confidential and Proprietary Information of the Discloser will be shared with its Directors and employees strictly on a “need-to-know” basis. The Recipient further affirms that its respective employees, with whom the Confidential and Proprietary Information of the Discloser is shared, have entered into and are bound by an appropriate Confidentiality Agreement. The Recipient undertakes that it or its representatives shall not copy, reduce to writing or otherwise record the Confidential and Proprietary Information, except as strictly necessary for the Purpose and subject to the terms of this Agreement (and any such copies, reductions to writing and records shall be the property of the Discloser). The Recipient further undertakes that it shall not use the Confidential and Proprietary Information for any purpose which might be directly or indirectly detrimental to the Discloser or any of its affiliates, subsidiaries, successors or assigns and that it shall save, indemnify and hold the Discloser harmless from any damage, loss or other detrimental consequences which may directly or indirectly flow from such act or omission of the Recipient. The Recipient further undertakes that it shall: (a) protect the Discloser’s Confidential and Proprietary Information using the same degree of care, but not less than reasonable care, as it uses to protect its own Confidential and Proprietary Information; and (b) not decompile, disassemble, decode, reproduce, redesign, or otherwise attempt to harness for their own use or profit, any Confidential and Proprietary Information or any part thereof; and (c) not remove the restrictive legends of the originals on any copies it makes, but will reproduce them in their entirety; and (d) not export any information in violation of any law or rules that may be applicable.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>3. Forced Disclosure:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>Subject to section 2, the Recipient may disclose the Confidential and Proprietary Information, to the minimum extent required by the order of any court of competent jurisdiction or any competent judicial, governmental or regulatory body pursuant to a legal, governmental or regulatory requirement.  Before the Recipient discloses any information, the Recipient shall (to the extent permitted by law) use all reasonable endeavors to inform the Discloser of the full circumstances and the information that will be disclosed, consult the Discloser as to possible steps to avoid or limit disclosure and gain assurances as to confidentiality from the body to whom the Confidential and Proprietary Information is to be disclosed.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>4. Term: </Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>This Agreement will be in force for a period of (2) two years from the Effective Date unless earlier terminated by either Party by giving a prior written notice of thirty (30) days to the other Party. Termination of this Agreement shall not affect any accrued rights or remedies to which the Discloser is entitled. The restrictions of confidentiality shall survive for a period of (3) three years from date of expiry/termination of this Agreement, subject to that all molds and dies for which the investment has been done by the recipient, have been used for their designed life. Upon the Discloser’s request or upon the termination of this Agreement, the Recipient will promptly deliver to the Discloser any of the Discloser’s Confidential and Proprietary Information (and all copies thereof) obtained or possessed by the Recipient.  With respect to the Confidential and Proprietary Information stored in electronic form, the Recipient shall delete all confidential information from its systems and the authorized representative of the Recipient shall confirm in writing that all Confidential and Proprietary Information has been deleted or destroyed.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>5. Obligation To Maintain Confidentiality: </Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>Neither Party will be under any obligation to negotiate or enter into an agreement with the other Party as a consequence of this Agreement. Each Party reserves the right, in its sole discretion, to terminate discussions with the other Party at any time. Further, neither Party has an obligation to provide the Confidential and Proprietary Information to the other Party as a result of entering into this Agreement. Nothing in this Agreement shall be construed as a representation that either Party will not independently pursue similar opportunities, provided that the obligations of this Agreement are not breached.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>6. No License:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>By making the Confidential and Proprietary Information or other information available to the Recipient, the Discloser is not and shall  not be deemed to be, granting (expressly or by implication) any license or other right under or with respect to any patent, trade, secret, copyright, trademark or other proprietary or intellectual property right.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>7. Assignment:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>The rights and obligations of either Party under this Agreement may not be assigned, transferred or delegated (by operation of law or otherwise) by either Party without the prior written consent of the other Party, which consent shall not be unreasonably withheld.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>8. Warranty:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>The Discloser warrants that it has the right to disclose the Confidential and Proprietary information to the Recipient. All information is provided “AS IS” and without any warranty, implied, statutory or otherwise regarding its accuracy or the use thereof. No Confidential and Proprietary Information received by the Recipient from the Discloser shall constitute representations, warranties guarantees upon which the Recipient may rely and the Discloser shall assume no responsibility, obligation nor liability in this regard to the Recipient.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>9. Non-Solicitation:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>The Recipient and discloser shall not, without  the consent of either, employ or offer to employ (whether under a contract of service  or under a contract for services)  any person engaged or previously  engaged in the preceding 12 months  in a technical or managerial capacity  during the currency of the negotiations between the parties and for the period of 12 months  after the conclusion of  the negotiations and/or  during  the currency  of any Agreement that may be entered  into between the Parties and/or  for a period of twenty four months after the expiry/termination of the Agreement.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>10. Waiver:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>Failure with or without intent by the Discloser to insist upon the performance by the other of any terms or provision of this Agreement in strict conformity with the literal requirements shall not be treated as a modification of the relevant provision, nor shall such failure or election be treated as a waiver of the right of the Discloser at any later time to insist on strict performance by other of such provision.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>11. Remedy:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>The Recipient recognize and acknowledge that the Confidential and Proprietary Information is of a special, unique and extraordinary character to the Discloser and that disclosure, misappropriation or unauthorized use of the such Confidential and Proprietary Information by the Recipient cannot be fully compensated and that, further any such disclosure, misappropriation or unauthorized use of the Confidential and Proprietary Information shall cause irreparable injury to the Discloser. The Recipient expressly agrees that in the event of any unauthorized disclosure by the Recipient, the Discloser, in addition to injunctive relief shall be entitled to seek other rights and remedies available under law or in equity. The Recipient shall be liable to the Discloser for any indirect, consequential or punitive damages of the Discloser in connection with the provision or use of information hereunder. In addition to the above remedy the Discloser shall have right to seek to recover the damages that may be incurred by reason of such breach, including, without limitation, its attorneys fees and costs of Suit.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>12. Severability:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>If any term, condition, section or provision of this Agreement becomes invalid or be so judged, the remaining terms, conditions, clauses and provisions shall be deemed severable and shall remain in full force.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>13. Notices:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>All notices and other communication hereunder shall be in writing and shall be deemed given if delivered personally or mailed by registered or certified mail (return receipt requested) to the Parties at their addresses specified in the introductory portion of this Agreement or at any other address which a Party might specify in writing.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>14. Relationship between the Parties:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>This Agreement shall not be construed as a partnership, joint venture or other such arrangement, rather the Parties expressly agree that this Agreement is for the Purpose only of protecting the Disclosing Party's Confidential and Proprietary Information.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>15. Entire Agreement and Modifications:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>This Agreement constitutes the entire agreement between the Parties on its subject and this supersedes all other prior agreements, arrangements or understandings, whether verbal, written, or implied. Any amendment hereto will be in writing and signed by the authorized representatives of both the Parties.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>16. Jurisdiction; Relief:</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>This Agreement shall in all respects, be governed by and construed in accordance with laws of the Republic of India without regard to conflicts of law principles. All dispute or differences arising between the Parties as to the effect, validity or interpretation of this Agreement or as to their rights, duties or liabilities hereunder (Disputes) shall be resolved by mutual discussion. The Parties hereby agrees to submit to the exclusive jurisdiction of the courts in Gurgaon (Haryana), India, for initiating any legal action for injunction or enforcing any terms and conditions of rights and obligations under this Agreement.</Text>
//             <Text style={{marginTop:"10px", fontSize:"12px"}}>Agreed to:</Text>
//             <div style={{display:"flex", width:"100%", flexDirection:"row", justifyContent:"space-between", marginTop:"20px"}}>
//                 <View>
//                     <Text style={{fontSize:"12px"}}>{name}</Text>
//                     <Text style={{fontSize:"12px"}}>By</Text>
//                     <Text style={{fontSize:"12px"}}>Mr. {owner} {"(MD)"}</Text>
//                     <Text style={{fontSize:"12px"}}>Authorized Signatory (Digitally Signed)</Text>
//                     <Text style={{fontSize:"12px", marginTop:"20px"}}>Name: {owner} </Text>
//                     <Text style={{fontSize:"12px"}}>Title: MD/CEO/Director/Chairman</Text>
//                     <Text style={{fontSize:"12px"}}>Date: {currDate}</Text>
                    
//                 </View>
//                 <View>
//                 <Text style={{fontSize:"12px"}}>AMBER ENTERPRISES INDIA LIMITED</Text>
//                     <Text style={{fontSize:"12px"}}>By</Text>
//                     <Text style={{fontSize:"12px"}}>Mr.</Text>
//                     <Text style={{fontSize:"12px"}}>Authorized Signatory (Digitally Signed)</Text>
//                     <Text style={{fontSize:"12px",marginTop:"20px"}}>Name: </Text>
//                     <Text style={{fontSize:"12px"}}>Title: </Text>
//                     <Text style={{fontSize:"12px"}}>Date: </Text>
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
//       // setNDA(pdfBlob);
//     } catch (error) {
//       console.error(error);
//       alert('Error generating PDF');
//     }
//   }
//   generatePdf();
//   }