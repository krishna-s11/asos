import React, { useContext, useState } from 'react'
import Declarations from '../Declarations/Declarations';
import { DataContext } from '../../Context/DataContext';
import VendorCOC from '../VendorCOC/VendorCOC';
import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
import { saveAs } from 'file-saver';
import { useNavigate } from 'react-router-dom';


const Section8 = ({next,back,name}) => {
    const [display,setDisplay] = useState(false);
    const {auth,formData,nonMsme,setNonMSME,fourM,setFourM,nda,setNDA,sqaContext,setSQA,vccContext,setVCC,bankFile,udyam,companyIncorp,panFile,gstFile} = useContext(DataContext);
    const navigate = useNavigate();
    const [loading,setLoading]= useState(false);
  
   const calcDate = (type) => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // January is 0!
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    if(type==='datetime'){
      return `${day}-${month}-${year} | ${hours}:${minutes}`;
    }
    if(type==='date'){
      return `${day}-${month}-${year}`;
    }

   }

   const handleCheckboxChange = e => {
     if (e.target.checked) {
      setVCC("creating");
    } else {
      setVCC("NA")
    }
   }

  const generate4m = async (name, add, city, state, postal, owner, currDate, currDateTime) => {
    try {
      const doc = (
        <Document>
          <Page style={{ backgroundColor: "#fff", padding: "30px" }}>
            <View style={{ width: "100%", padding: "20px", backgroundColor: "#0f4761" }}>
              <Text style={{ textAlign: "center", fontSize: "24px", color: "#fff", textTransform: "uppercase" }}>{name}</Text>
              <Text style={{ textAlign: "center", fontSize: "12px", color: "#fff", marginTop: "10px" }}>{add}, {city}, {state} - {postal}</Text>
            </View>
            <Text style={{ textAlign: "center", marginTop: "20px" }}>DECLARATION LETTER</Text>
            <View style={{ marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <View>
                <Text style={{ fontSize: "12px" }}>To,</Text>
                <Text style={{ fontSize: "12px" }}>Amber Enterprises India Ltd.</Text>
                <Text style={{ fontSize: "12px" }}>Selaqui - Dehradun</Text>
              </View>
              <View>
                <Text style={{ fontSize: "12px" }}>Date: {currDate}</Text>
              </View>
            </View>
            <Text style={{ fontSize: "12px", marginTop: "20px", fontWeight: "bold" }}>Subject: 4M Change Intimation to Amber Enterprises before change</Text>
            <Text style={{ fontSize: "12px", marginTop: "20px" }}>Dear sir,</Text>
            <Text style={{ fontSize: "12px", marginTop: "20px" }}>We {name} located at {add}, {city}, {state} - {postal}, commits you that if we will make any changes in our existing process regarding to 4M  (Man, Method, Machine, material) then we will inform you with 4M change note before starting new production.</Text>
            <Text style={{ fontSize: "12px", marginTop: "10px" }}>If we will not share 4M change information with you and due to this if any 4M accident occurs, than we will agree to bear accident cost.</Text>
            <Text style={{ fontSize: "12px", marginTop: "10px" }}>Thank you</Text>
            <Text style={{ fontSize: "12px", marginTop: "10px" }}>{name}</Text>
            <Text style={{ fontSize: "12px" }}>{add}, {city}</Text>
            <Text style={{ fontSize: "12px" }}>{state} - {postal}</Text>
            <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: "20px" }}>
              <View>
                <Text style={{ fontSize: "12px" }}>Plant Head Managing</Text>
                <Text style={{ fontSize: "12px" }}>Name: {owner}</Text>
                <Text style={{ fontSize: "12px" }}>Signature: (Digitally Signed)</Text>
                <Text style={{ fontSize: "12px" }}>Date: {currDate}</Text>
              </View>
              <View>
                <Text style={{ fontSize: "12px", marginRight: "100px" }}>Director</Text>
                <Text style={{ fontSize: "12px", marginRight: "100px" }}>Name:</Text>
                <Text style={{ fontSize: "12px", marginRight: "100px" }}>Signature:</Text>
                <Text style={{ fontSize: "12px", marginRight: "100px" }}>Date:</Text>
              </View>
            </View>
            <View style={{ width: "100%", position: "absolute", bottom: 10, left: "10%" }}>
              <Text style={{ textAlign: "center", fontSize: "10px" }}>Document has been digitally signed with acceptance on ASOS at {currDateTime}</Text>
            </View>
          </Page>
        </Document>
      );

      const asPdf = pdf([]);
      asPdf.updateContainer(doc);

      const pdfBlob = await asPdf.toBlob();
      const file = new File([pdfBlob],"fourM.pdf", {type: "application/pdf"});
      return file;
    } catch (error) {
      console.error(error);
      alert('Error generating PDF');
    }
  };

  const generateNDA = async (name,regAdd,regCity,regState,regPostal,add,city,state,postal,country,owner,currDate,currDateTime) => {
    try {
      const doc = (
        <Document>
          <Page style={{backgroundColor:"#fff", padding:"30px"}}>
            <View style={{width: "100%", padding:"20px", backgroundColor:"#0f4761"}}>
            <Text style={{textAlign: "center", fontSize:"24px", color:"#fff", textTransform:"uppercase"}}>{name}</Text>
            <Text style={{textAlign: "center", fontSize:"12px", color:"#fff", marginTop:"10px"}}>{add}, {city}, {state} - {postal}</Text>
            </View>
            <Text style={{textAlign: "center",marginTop:"20px"}}>NON-DISCLOSURE AGREEMENT</Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>This Non Disclosure Agreement (the “Agreement”) is made and executed on this {currDate}(the “Effective Date”), on ASOS, by and between</Text>
            <Text style={{fontSize:"12px", marginTop:"10px"}}>{`${name}, a Company incorporated under the Indian Companies Act,  1913 and having its registered office at  ${regAdd}, ${regCity}, ${regState} - ${regPostal} and inter alia one of its branch office at ${add}, ${city}, ${state} - ${postal} (${country}) (hereinafter referred to as “the Discloser”) which expression shall, unless it be repugnant or inconsistent with the context or meaning hereof, be deemed to mean and include its successors and assigns) of the One Part;`} </Text>
            <Text style={{marginTop:"10px",fontSize:"12px"}}>And</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>{`AMBER ENTERPRISES INDIA LIMITED, a Company incorporated under the Companies Act, 1956 and having its registered office at C-1, Phase –II, Focal Point, Rajpura Town – 140 401, Punjab and Corporate Office at Universal Trade Tower, 1st Floor, Sector 49, Sohna Road, Gurgaon - 122 101 and inter alias its place of business at Dehradun (Uttarakhand) (hereinafter referred to as “the Recipient”) which expression shall, unless it be repugnant or inconsistent with the context hereof, mean and include its successors and assigns) of the Other Part;`}</Text>
            <Text style={{marginTop:"10px",fontSize:"12px"}}>The Discloser and the Recipient are hereinafter individually known as the “Party” and collectively known as the “Parties”. </Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>WHEREAS</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>a. {`The Parties are in the process of evaluating potential business relationship for developing the industrial designs created by the Discloser in the Air Conditioner category, the Recipient will conduct the entire exercise of engineering design, mould & tooling design, tool development & eventual pilot & commercial production of new  AC parts designs ( “Purpose”) created by the Discloser and in connection with the Purpose, the Discloser will disclose/exchange information or furnish data which is private, Confidential and Proprietary Information (collectively referred to as “Confidential and Proprietary Information”);`}</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>b. {`The mutual objective under this Agreement is to provide protection for such Confidential and Proprietary Information while maintaining each Party’s independence and ability to conduct their individual business activities without let or hindrance;`}</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>c. {`The Parties have mutually agreed that the provisions of this Agreement shall govern the use and revelation of all Confidential and Proprietary Information disclosed on all matters either arising out of, under, or in relation to, the discussions between the Parties in relation to the Purpose of this Agreement, regardless of the date on which such Confidential and Proprietary Information was actually disclosed;`}</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>d. {`The Recipient shall not use the industrial designs for any other Purpose other than the Purpose specified in this Agreement;`}</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>e. {`These Industrial designs are property of the Discloser and the same can be supplied to the Discloser or used in the Products of the Discloser only upon establishment of tools and moulds design by the Recipient for the Discloser;`}</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>f. {`The Parties wish to maintain the Confidential and Proprietary Information at the stage of negotiation and thereafter; `}</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>NOW, THEREFORE, in consideration of the Discloser disclosing its Confidential and Proprietary Information to the Recipient, the receipt and sufficiency of which is hereby acknowledged by the Parties, the Parties agree to as follows:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>1. Confidential and Proprietary Information: </Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>“Confidential and Proprietary Information” shall mean any and all information and data in any form (including, without limitation, all digital, electronic, and provided in written (Oral word is removed) information instructions or comments and the like) either tangible or intangible, disclosed to the Recipient by or on behalf of the Discloser, or otherwise obtained by the Recipient about, pertaining to or regarding the Discloser in connection with the Purpose.  This shall include, without limitation, this Agreement all previous drafts thereof as well as all previous correspondence between the Parties, irrespective of the medium in which such information has been disclosed by the Discloser to the Recipient, whether before or after the Effective date, either directly or indirectly, and shall include without limitation, business and, financial information about costs, profits, markets, sales, customers and bids, business plans, marketing, future developments, product developments and new products concepts and technical information, Schematics, techniques, suggestions, development tools and processes, computer programs, designs, drawings, manuals, electronic codes, formulas and improvements, software demonstration programs, routines, algorithms, computer systems, documentation, procedures, ideas, know-how, inventions (whether patentable or not), improvements, concepts, records, files, memoranda, reports, plans, price lists, customer lists, forecasts, strategies, any apparatus, modules samples, prototypes or parts thereof or any, distributor(s) and representative(s) list, employee(s) list and all document, books papers, model, sketches and other data of any kind and descriptions, including electronic data recorded or retrieved by any means, that have been or will be given to the Recipient by the Discloser, as well as written or verbal. Information shall be deemed confidential even if it is not specifically marked or designated as being confidential at the time of disclosure.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>Intellectual property: “Intellectual Property” includes but is not restricted to patents, patent applications, inventions and discoveries (whether patentable or otherwise), copyrights, designs, trademarks, methods or know-how, designs, trade secrets, derivatives of the innovation of the Discloser, copyrights, prototypes, models, source codes, object codes, formulae, compilations, devices, drawings, geographical indication of goods and any other proprietary information </Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>It is clarified that the Confidential and Proprietary Information of the Discloser will not include the information listed below: </Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>{`a) Information which is in public domain or subsequently becomes public knowledge without any fault of the Recipient; `}</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>{`b) Information or any part of it which was rightfully in the Recipient’s possession prior to its association with the Discloser; `}</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>{`c) Information which is rightfully received by the Recipient from a third party without a duty of confidentiality on the third party; `}</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>{`d) Information which is independently developed by the Recipient without reference to any information of the Discloser; or `}</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>{`e) Information disclosed with the Discloser’s prior written approval.`}</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>However the Recipient will have the burden of proving that any given exception applies in a particular case. </Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>2. Undertaking by the Recipient: </Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>The Recipient shall use the Confidential and Proprietary Information solely in connection with the Purpose and not for any other purposes.  The Recipient will use its best endeavors to ensure that Confidential and Proprietary Information is protected against theft or unauthorized access. The Recipient will ensure that the Confidential and Proprietary Information of the Discloser is not disclosed to any third party or disseminated or published without the express written consent of the Discloser. The Recipient shall not at any time use any of the Confidential and Proprietary Information (or permit or assist a third party to use the Confidential and Proprietary Information) for or in connection with any litigation of any nature. The Recipient agrees and undertakes that within its respective organization, the Confidential and Proprietary Information of the Discloser will be shared with its Directors and employees strictly on a “need-to-know” basis. The Recipient further affirms that its respective employees, with whom the Confidential and Proprietary Information of the Discloser is shared, have entered into and are bound by an appropriate Confidentiality Agreement. The Recipient undertakes that it or its representatives shall not copy, reduce to writing or otherwise record the Confidential and Proprietary Information, except as strictly necessary for the Purpose and subject to the terms of this Agreement (and any such copies, reductions to writing and records shall be the property of the Discloser). The Recipient further undertakes that it shall not use the Confidential and Proprietary Information for any purpose which might be directly or indirectly detrimental to the Discloser or any of its affiliates, subsidiaries, successors or assigns and that it shall save, indemnify and hold the Discloser harmless from any damage, loss or other detrimental consequences which may directly or indirectly flow from such act or omission of the Recipient. The Recipient further undertakes that it shall: (a) protect the Discloser’s Confidential and Proprietary Information using the same degree of care, but not less than reasonable care, as it uses to protect its own Confidential and Proprietary Information; and (b) not decompile, disassemble, decode, reproduce, redesign, or otherwise attempt to harness for their own use or profit, any Confidential and Proprietary Information or any part thereof; and (c) not remove the restrictive legends of the originals on any copies it makes, but will reproduce them in their entirety; and (d) not export any information in violation of any law or rules that may be applicable.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>3. Forced Disclosure:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>Subject to section 2, the Recipient may disclose the Confidential and Proprietary Information, to the minimum extent required by the order of any court of competent jurisdiction or any competent judicial, governmental or regulatory body pursuant to a legal, governmental or regulatory requirement.  Before the Recipient discloses any information, the Recipient shall (to the extent permitted by law) use all reasonable endeavors to inform the Discloser of the full circumstances and the information that will be disclosed, consult the Discloser as to possible steps to avoid or limit disclosure and gain assurances as to confidentiality from the body to whom the Confidential and Proprietary Information is to be disclosed.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>4. Term: </Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>This Agreement will be in force for a period of (2) two years from the Effective Date unless earlier terminated by either Party by giving a prior written notice of thirty (30) days to the other Party. Termination of this Agreement shall not affect any accrued rights or remedies to which the Discloser is entitled. The restrictions of confidentiality shall survive for a period of (3) three years from date of expiry/termination of this Agreement, subject to that all molds and dies for which the investment has been done by the recipient, have been used for their designed life. Upon the Discloser’s request or upon the termination of this Agreement, the Recipient will promptly deliver to the Discloser any of the Discloser’s Confidential and Proprietary Information (and all copies thereof) obtained or possessed by the Recipient.  With respect to the Confidential and Proprietary Information stored in electronic form, the Recipient shall delete all confidential information from its systems and the authorized representative of the Recipient shall confirm in writing that all Confidential and Proprietary Information has been deleted or destroyed.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>5. Obligation To Maintain Confidentiality: </Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>Neither Party will be under any obligation to negotiate or enter into an agreement with the other Party as a consequence of this Agreement. Each Party reserves the right, in its sole discretion, to terminate discussions with the other Party at any time. Further, neither Party has an obligation to provide the Confidential and Proprietary Information to the other Party as a result of entering into this Agreement. Nothing in this Agreement shall be construed as a representation that either Party will not independently pursue similar opportunities, provided that the obligations of this Agreement are not breached.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>6. No License:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>By making the Confidential and Proprietary Information or other information available to the Recipient, the Discloser is not and shall  not be deemed to be, granting (expressly or by implication) any license or other right under or with respect to any patent, trade, secret, copyright, trademark or other proprietary or intellectual property right.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>7. Assignment:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>The rights and obligations of either Party under this Agreement may not be assigned, transferred or delegated (by operation of law or otherwise) by either Party without the prior written consent of the other Party, which consent shall not be unreasonably withheld.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>8. Warranty:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>The Discloser warrants that it has the right to disclose the Confidential and Proprietary information to the Recipient. All information is provided “AS IS” and without any warranty, implied, statutory or otherwise regarding its accuracy or the use thereof. No Confidential and Proprietary Information received by the Recipient from the Discloser shall constitute representations, warranties guarantees upon which the Recipient may rely and the Discloser shall assume no responsibility, obligation nor liability in this regard to the Recipient.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>9. Non-Solicitation:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>The Recipient and discloser shall not, without  the consent of either, employ or offer to employ (whether under a contract of service  or under a contract for services)  any person engaged or previously  engaged in the preceding 12 months  in a technical or managerial capacity  during the currency of the negotiations between the parties and for the period of 12 months  after the conclusion of  the negotiations and/or  during  the currency  of any Agreement that may be entered  into between the Parties and/or  for a period of twenty four months after the expiry/termination of the Agreement.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>10. Waiver:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>Failure with or without intent by the Discloser to insist upon the performance by the other of any terms or provision of this Agreement in strict conformity with the literal requirements shall not be treated as a modification of the relevant provision, nor shall such failure or election be treated as a waiver of the right of the Discloser at any later time to insist on strict performance by other of such provision.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>11. Remedy:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>The Recipient recognize and acknowledge that the Confidential and Proprietary Information is of a special, unique and extraordinary character to the Discloser and that disclosure, misappropriation or unauthorized use of the such Confidential and Proprietary Information by the Recipient cannot be fully compensated and that, further any such disclosure, misappropriation or unauthorized use of the Confidential and Proprietary Information shall cause irreparable injury to the Discloser. The Recipient expressly agrees that in the event of any unauthorized disclosure by the Recipient, the Discloser, in addition to injunctive relief shall be entitled to seek other rights and remedies available under law or in equity. The Recipient shall be liable to the Discloser for any indirect, consequential or punitive damages of the Discloser in connection with the provision or use of information hereunder. In addition to the above remedy the Discloser shall have right to seek to recover the damages that may be incurred by reason of such breach, including, without limitation, its attorneys fees and costs of Suit.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>12. Severability:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>If any term, condition, section or provision of this Agreement becomes invalid or be so judged, the remaining terms, conditions, clauses and provisions shall be deemed severable and shall remain in full force.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>13. Notices:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>All notices and other communication hereunder shall be in writing and shall be deemed given if delivered personally or mailed by registered or certified mail (return receipt requested) to the Parties at their addresses specified in the introductory portion of this Agreement or at any other address which a Party might specify in writing.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>14. Relationship between the Parties:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>This Agreement shall not be construed as a partnership, joint venture or other such arrangement, rather the Parties expressly agree that this Agreement is for the Purpose only of protecting the Disclosing Party's Confidential and Proprietary Information.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>15. Entire Agreement and Modifications:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>This Agreement constitutes the entire agreement between the Parties on its subject and this supersedes all other prior agreements, arrangements or understandings, whether verbal, written, or implied. Any amendment hereto will be in writing and signed by the authorized representatives of both the Parties.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>16. Jurisdiction; Relief:</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>This Agreement shall in all respects, be governed by and construed in accordance with laws of the Republic of India without regard to conflicts of law principles. All dispute or differences arising between the Parties as to the effect, validity or interpretation of this Agreement or as to their rights, duties or liabilities hereunder (Disputes) shall be resolved by mutual discussion. The Parties hereby agrees to submit to the exclusive jurisdiction of the courts in Gurgaon (Haryana), India, for initiating any legal action for injunction or enforcing any terms and conditions of rights and obligations under this Agreement.</Text>
            <Text style={{marginTop:"10px", fontSize:"12px"}}>Agreed to:</Text>
            <div style={{display:"flex", width:"100%", flexDirection:"row", justifyContent:"space-between", marginTop:"20px"}}>
                <View>
                    <Text style={{fontSize:"12px"}}>{name}</Text>
                    <Text style={{fontSize:"12px"}}>By</Text>
                    <Text style={{fontSize:"12px"}}>Mr. {owner} {"(MD)"}</Text>
                    <Text style={{fontSize:"12px"}}>Authorized Signatory (Digitally Signed)</Text>
                    <Text style={{fontSize:"12px", marginTop:"20px"}}>Name: {owner} </Text>
                    <Text style={{fontSize:"12px"}}>Title: MD/CEO/Director/Chairman</Text>
                    <Text style={{fontSize:"12px"}}>Date: {currDate}</Text>
                    
                </View>
                <View>
                <Text style={{fontSize:"12px"}}>AMBER ENTERPRISES INDIA LIMITED</Text>
                    <Text style={{fontSize:"12px"}}>By</Text>
                    <Text style={{fontSize:"12px"}}>Mr.</Text>
                    <Text style={{fontSize:"12px"}}>Authorized Signatory (Digitally Signed)</Text>
                    <Text style={{fontSize:"12px",marginTop:"20px"}}>Name: </Text>
                    <Text style={{fontSize:"12px"}}>Title: </Text>
                    <Text style={{fontSize:"12px"}}>Date: </Text>
                </View>
            </div>



            <View style={{width:"100%",position:"absolute", bottom:"10", left:"10%"}} fixed>
                <Text style={{textAlign:"center", fontSize:"10px"}}>Document has been digitally signed with acceptance on ASOS at {currDateTime}</Text>
            </View>
          </Page>
        </Document>
      );

      const asPdf = pdf([]);
      asPdf.updateContainer(doc);
      
      const pdfBlob = await asPdf.toBlob(); 
      const file = new File([pdfBlob],"nda.pdf", {type: "application/pdf"});
      return file;
    } catch (error) {
      console.error(error);
      alert('Error generating PDF');
    }
  }

  const generateSQA = async (name,regAdd,regCity,regState,regPostal,add,city,state,postal,country,owner,currDate,currDateTime) => {
    try {
      const doc = (
        <Document>
          <Page style={{backgroundColor:"#fff", padding:"30px"}}>
            <Text style={{textAlign: "center",marginTop:"20px", marginBottom:"200px"}}>On 100/- Stamp paper</Text>
            <Text style={{fontSize:"14px", marginTop:"20px", textAlign:"center"}}>SUPPLIER QUALITY AGREEMENT</Text>
            <Text style={{fontSize:"12px", marginTop:"20px", marginBottom:"20px"}}>This Supplier Quality Agreement (“Quality Agreement” or “Agreement”) is entered into by and between {name} having a principal place of business at {regAdd}, {regCity}, {regState} - {regPostal} & Production Unit at {add}, {city}, {state} - {postal} hereafter referred to as (“Supplier”) and Amber Enterprises India Limited having a principal place of business at Universal Trade Tower, 1st Floor, Sector – 49, Sohna Road, Gurugram – 122 018, hereafter referred to as (“Amber”). The "Quality Agreement is effective as of the date of last signature by the parties below: </Text>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>1. Purpose/Scope</Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>To establish the basic principle governing development quality, manufacture, delivery, quality, warranty etc. of the various Bought out items to all Amber units. (Like Compressor Under the name of GMCC and Motor Under the name of Welling) </Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>2. Products/Services </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>The Product covers supplies under the Midea India Pvt Ltd for the compressor and motors by the brand name GMCC compressor and welling motor.</Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>3. Validity  </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>This Agreement shall be valid for an initial period of 24 months from the date of execution. The Agreement shall get renewed automatically for a further period of 24 months from the date of expiry of initial period, unless otherwise refused either by AMBER or SUPPLIER. Such refusal shall be communicated in writing at least 30 days before expiry of the Agreement.</Text>
                    <Text style={{fontSize:"12px"}}>This Quality Agreement, including any Appendices and other attachments, is the complete, final and exclusive statement of the terms of Agreement between the SUPPLIER and AMBER relating to the subject hereof and merges and supersedes all prior and contemporaneous understandings and representations, written and oral.</Text>
                    <Text style={{fontSize:"12px"}}>No amendment to this Quality Agreement is effective between the SUPPLIER and AMBER unless mutually agreed, in writing and signed by authorized representatives of SUPPLIER and AMBER. </Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>3. Order of Precedence (with respect to Quality Requirements only)  </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>1. Purchase Order</Text>
                    <Text style={{fontSize:"12px"}}>2. Engineering drawings</Text>
                    <Text style={{fontSize:"12px"}}>3. Engineering and material specifications</Text>
                    <Text style={{fontSize:"12px"}}>4. QAF-0069-C “Acknowledgement of Supplementary Supplier Quality Requirements for Purchased Materials or Services"</Text>
                    <Text style={{fontSize:"12px"}}>5. Amber Master Supply Agreement (if any) - Note: the terms of the Master Supply Agreement will take precedence over only the pre-printed terms contained on each Purchase Order.</Text>
                    <Text style={{fontSize:"12px"}}>6. QAF-0082-C “Supplier Quality Agreement for Purchased Materials or Services”</Text>
                    <Text style={{fontSize:"12px"}}>7. QAR-0001-C “Supplier Quality Requirements for Purchased Materials or Services” </Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>3. General Quality Requirement</Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>a. The supplier confirms to ISO 9001:2015 as of basic Quality Management System requirement or else Specific suppliers will agree to initiate ISO certification process followed by certification within 1 year of signing this Agreement. Upon request, Supplier shall provide all appropriate product certifications including all applicable safety, regulatory, and operating systems certifications at Supplier’s sole cost and expense.  </Text>
                    <Text style={{fontSize:"12px"}}>Evidence of certification to the applied Quality Management System and successful completion of surveillance audits shall be supplied to Amber upon request. </Text>
                    <Text style={{fontSize:"12px"}}>b. The material shall be as per AMBER specification, to be understood by the supplier clearly at the time of development. Any non-conforming material shall not be supplied unless otherwise agreed in writing by AMBER in advance. All the parts have to be ROHS compliance.  ROHS certificate to be submitted annually to AMBER quality department in case if any part not meeting the compliance liability stands at supplier end as per warranty policy</Text>
                    <Text style={{fontSize:"12px"}}>c. Suppliers shall own full responsibility for the quality of the supplied part. It is intention of AMBER that supplier should develop himself to deliver 100% parts direct On Line (DOL)</Text>
                    <Text style={{fontSize:"12px"}}>d. AMBER will inspect the parts on a sampling basis received from the supplier till the supplier achieves DOL status. Thereafter inspection will be purely on an audit basis.</Text>
                    <Text style={{fontSize:"12px"}}>e. The supplier must send the Pre Dispatch Inspection Report (PDIR / JIR), Test certificate or other as per AMBER Inspection requirement</Text>
                    <Text style={{fontSize:"12px"}}>f. AMBER shall not allow any type of segregation or rework at their end. Any type of segregation due to bad Quality of the supplied parts shall be done by the SUPPLIER only but in case of emergency, segregation/ rework will be done by AMBER and the segregation cost will be recovered from the SUPPLIER.</Text>
                    <Text style={{fontSize:"12px"}}>AMBER reserves the right to scrap the bad Quality material at Amber premises on case-to-case basis to avoid any kind of mixing at their or SUPPLIER end. </Text>
                    <Text style={{fontSize:"12px"}}>g. Response to all Quality problems shall be entertained as per defined way. i.e. containment action in 24hrs, CAPA submission by supplier to AMBER within 7 days.</Text>
                    <Text style={{fontSize:"12px"}}>h. SUPPLIER shall upfront inform AMBER about any changes in 4M (Man, Machine, Material, and Method) which can affect AMBER production. In case, any quality issue due to 4M change without information to Amber shall be treated seriously and penalty shall be applicable. Seller shall be liable for any loss, damage, claims cost and expense arise out due to 4M violation. </Text>


                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>4. Delivery </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>a. AMBER will issue indicative & firm delivery schedule & supplier has to deliver the goods on time as per AMBER schedule.</Text>
                    <Text style={{fontSize:"12px"}}>b. SUPPLIER shall ensure that packaging of the parts are in standard packaging only or subject to AMBER requirement. Material packaging shall not negatively influence Material quality or include any impurities.</Text>
                    <Text style={{fontSize:"12px"}}>c. AMBER has the discretion to make alternate arrangement for purchase of material in the event of Supplier’s inability to supply the same as per schedule given by AMBER. Extra cost, if any, incurred by AMBER for such purchase shall be debited to SUPPLIER.</Text>
                    <Text style={{fontSize:"12px"}}>d. AMBER shall reserve the rights to take the following actions in case of shortage of supplies from the SUPPLIER: </Text>
                    <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"i)"}   1st time short supply received in 6 months – Debit note to be raised by AMBER. </Text>
                    <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"ii)"}  2nd time short supply received in 6 months – 100% additional amount to be charged along with amount of short material received. </Text>
                    <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"iii)"} 3rd time short supply received in 6 months – 200% additional amount to be charged along with amount of short material received. </Text>
                    <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"iv)"}  4th time short supply received in 6 months – 300% additional amount to be charged along with amount of short material received. </Text>
                    <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"v)"}   5th time short supply received in 6 months – Meeting with MD of the SUPPLIER for reduction in share of business. </Text>
                    <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"vi)"}  6th time short supply received in 6 months – SUPPLIER will be blacklisted. </Text>
                    <Text style={{fontSize:"12px"}}>e. SUPPLIER & AMBER shall have monthly RECO and shall settle all discrepancies related to rejections, segregation, short supplies found by AMBER in the supplies as per the Agreement. </Text>
                    <Text style={{fontSize:"12px"}}>f. Delivery problems shall be entertained as per defined way. i.e. containment action in 24hrs, CAPA submission by supplier to AMBER within 7 days.  </Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>5. Development  </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>a. Supplier shall ensure development of parts on time as per agreed time plan.</Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>6. Warranty </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>a. SUPPLIER shall ensure that supplied material meets AMBER specifications & is manufactured as per agreed manufacturing processes & standards. To cover up warranty related to any functional components specific design of the supplier (Which is merely not the direct commodity) SUPPLIER shall give the warranty of 18 months from the date of invoice of all the parts supplied to AMBER.</Text>
                    <Text style={{fontSize:"12px"}}>b. Any warranty failure owing to supplied part manufacturing defect will be supplier’s responsibility. AMBER has the right to recover the warranty cost incurred on such failures from the suppliers through raising the warranty claim or against the payment. The incurred warranty cost can be in either of the forms as i) Part cost ii) FG repair or replacement cost iii) Service cost iv) Reputation loss cost</Text>
                    <Text style={{fontSize:"12px"}}>c. So if any such claim is raised by AMBER’s customer then same cost will be claimed from the SUPPLIER for the recovery if proven that it is the part failure supplied by supplier</Text>
                    <Text style={{fontSize:"12px"}}>d. Failure under warranty shall be categorized as: </Text>
                    <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"i)"}  Single part failure ≤ 0.8% within warranty period (Normal): shall be covered thru FOC parts from the supplier </Text>
                    <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"ii)   Single part failure > 0.8% ≤ 2% within warranty period (Abnormal): shall be covered thru FOC parts and any kind of cost which AMBER has to incur to resolve the issue with the customer."} </Text>
                    <Text style={{fontSize:"12px", marginLeft:"10px"}}>{"iii)  Single part failure > 2% within warranty period (Epidemic) : FOC spares by supplier + Other charges including the replacement cost of part or machine, service cost, reputation loss cost "} </Text>

                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>7. Product Quality Notification </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>Where Supplier suspects that non-conforming Product may have been shipped to Amber, Supplier shall immediately provide written notification to the Amber. </Text>
                    <Text style={{fontSize:"12px"}}>When Supplier identifies non-conforming Product prior to shipment and wishes to obtain concession or deviation permission for its use, release or acceptance, Supplier shall immediately provide written request to the Amber and obtain disposition of the non-conforming product.</Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>8. Others </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>{"a)"} SUPPLIER shall submit to AMBER, on demand, any relevant information regarding management, manufacture, and quality assurance report within the stipulated time. </Text>
                    <Text style={{fontSize:"12px"}}>SUPPLIER shall allow AMBER to audit its premises concerning the manufacture and Quality assurance of said material.</Text>
                    <Text style={{fontSize:"12px"}}>{"b)"} SUPPLIER in consultation with AMBER may sub-contract the processing of material. The responsibility of quality and delivery shall remain with SUPPLIER in such case. Supplier will ensure that Amber has the same rights of access to any subcontractors of Supplier who are involved in the supply of the products for the purpose of carrying out an audit. </Text>
                    <Text style={{fontSize:"12px"}}>{"c)"} All the parts & components supplied by the supplier to AMBER shall be RoHS compliant. </Text>
                    <Text style={{fontSize:"12px"}}>Material manufactured date codes of supplied Material shall not exceed 24 months at the time of Material receipt by Amber unless agreed upon in writing prior to purchase order release. In some cases, commodities will have shorter shelf-life requirements and should be specified per the industry standard guidance for that commodity. Material shall have a minimum of 6 months remaining on material before date code expiration. Amber requirements may also dictate shorter shelf-life requirements and will be communicated to Supplier at the time of PO release of those exceptions </Text>
                    <Text style={{fontSize:"12px"}}>{"d)"} Supplier shall maintain a first in, first out (“FIFO”) inventory control system to ensure that nonconforming Material or prior Product versions or down-rev Product is not inadvertently shipped to Amber. </Text>
                    <Text style={{fontSize:"12px"}}>{"e)"} SUPPLIER shall not engage in giving any kind of gifts / money to AMBER personnel either directly or Indirectly. </Text>
                    <Text style={{fontSize:"12px"}}>{"f)"} AMBER shall provide the data on product’s failure in the field or line from time to time during the term of this Agreement </Text>
                    <Text style={{fontSize:"12px"}}>{"g)"} Supplier shall provide written responses and summaries of actions as a result of audits, corrective action requests, or escalations raised by Amber.  </Text>
                    <Text style={{fontSize:"12px"}}>{"h)"} It is Supplier’s responsibility to install any additional processes, tests, or methods in order to fulfill customer requirements.   </Text>
                    <Text style={{fontSize:"12px"}}>{"i)"} Supplier shall maintain and execute internal audits of its operation to insure compliance with written processes, procedures, standards, and Agreements. </Text>
                    <Text style={{fontSize:"12px"}}>{"j)"} Supplier Certification:   </Text>
                    <Text style={{fontSize:"12px"}}>Supplier acknowledges that certification may require an audit by Amber to assess Supplier’s capability to provide Material(s) or Service(s). Certification audits may be conducted without Amber visiting Supplier’s site; however, Amber reserves the right to require an onsite audit before providing a certification. </Text>
                    <Text style={{fontSize:"12px"}}>Certification is contingent upon Supplier performance and Amber reserves the right to change the certification at any time. </Text>
                    <Text style={{fontSize:"12px"}}>{"k)"} Changes to Supplier’s quality management system or any significant organizational changes shall be communicated to Amber immediately :   </Text>
                    

                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>9. Confidentiality  </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>{"a)"} All information transmitted between SUPPLIER & AMBER in connection with this Agreement or the performance hereunder shall be treated as secret or confidential by both parties and shall not divulge or disclose the same to any third party.</Text>
                    <Text style={{fontSize:"12px", marginRight: "10px"}}>Information shall include all non-public information furnished, disclosed or transmitted regardless of form.  </Text>
                    <Text style={{fontSize:"12px", marginRight: "10px"}}>Receiving Party will use the Confidential Information solely in furtherance of the actual or potential business relationship between the Parties. </Text>
                    <Text style={{fontSize:"12px", marginRight: "10px"}}>Receiving Party and its Representatives will take all reasonable measures to maintain the confidentiality of the l Information, but in no event less than the measures it uses for its own information of similar type.  </Text>

                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>10. Product Change and Discontinuance Notification </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>Supplier shall notify Amber of all proposed changes that impact the form, fit, function, quality, reliability or status of the Material with regard to environmental legislation. </Text>
                    <Text style={{fontSize:"12px"}}>Notification shall be provided via an engineering and/or process change request. Changes affecting a significant amount of parts defined as greater than fifteen part numbers shall be accompanied with an Excel file listing those affected part numbers. </Text>
                    <Text style={{fontSize:"12px"}}>All Supplier notifications shall be sent to Amber via email to the following Amber address: __________. The types of changes, as an example, requiring notification include, but are not limited to:</Text>
                    <Text style={{fontSize:"12px", marginTop:"10px"}}>1. Changes in components (die shrink, etc.)</Text>
                    <Text style={{fontSize:"12px"}}>2. Reduced inspection and/or testing</Text>
                    <Text style={{fontSize:"12px"}}>3. Manufacture site changes</Text>
                    <Text style={{fontSize:"12px"}}>4. Deviations from the MT&Q plan  </Text>
                    <Text style={{fontSize:"12px"}}>5. Changes in packing, shipping and labeling of Product or containers  </Text>
                    <Text style={{fontSize:"12px"}}>6. Product discontinuance</Text>
                    <Text style={{fontSize:"12px"}}>7. Changes in Supplier or Manufacturer part number or name</Text>
                    <Text style={{fontSize:"12px", marginTop: "10px"}}>Supplier, at a minimum, will provide ninety days prior written notice before any change implementation to afford Amber the means of determining approval for such changes that ultimately affect Amber’s end customer.</Text>
                    <Text style={{fontSize:"12px", marginTop: "10px"}}>Supplier shall provide written notice of planned product discontinuation applicable standard and specifically in accordance with the following timeframes:  </Text>
                    <Text style={{fontSize:"12px", marginTop: "10px"}}>1. 6 months minimum from the notice for last order dates.</Text>
                    <Text style={{fontSize:"12px"}}>2. 12 months minimum from any discontinuation to manufacture material or from final shipments whichever is a greater period of time.</Text>
                    <Text style={{fontSize:"12px", marginTop:"10px"}}>Where applicable, Supplier shall provide Product revisions in support of subsequent standards revisions, operating system updates, and versions including support packs, service releases, and full releases of operating systems in the same family of operating systems as previously supported. This shall include (by way of example and not limitation) all required Product modifications of hardware, BIOS, firmware, programmable devices, drivers, utilities, and applications. </Text>
                    <Text style={{fontSize:"12px", marginTop:"10px"}}>Amber has the right to reject any and all intended changes required by Supplier. </Text>
                    <Text style={{fontSize:"12px", marginTop:"10px"}}>Supplier shall maintain procedures for change notification to Amber which are in accordance with this Agreement </Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>11. Disaster Recovery/Business contingency plan</Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>Supplier shall have a disaster recovery and business contingency plan in place that minimizes the risk to Amber in the event of a natural disaster, labor dispute, or other disturbances in the supply chain. Evidence of the process shall be made available for review upon request. </Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>12. Force Majeure </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>Neither party shall be liable for any failure of or delay in the performance of this Agreement for the period that such failure or delay is  beyond the reasonable control of a party, materially affects the performance of any of its obligations under this Agreement, and  could not reasonably have been foreseen or provided against, but will not be excused for failure or delay resulting from only general economic conditions or other general market effects. </Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>13. Product Records </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>Supplier shall retain (and if applicable shall cause its affiliates and subcontractors to retain) detailed written records of all Supplier activities relating to the Product (collectively referred to as the “Product Records”). Information included or referenced in the records includes finished Product and package labels and labeling, label accounting information (labels/labeling produced or issued, used, sampled, rejected/destroyed), information regarding any environmental monitoring that takes place during manufacturing and, if required, testing, copies of release testing, if any, performed by Supplier, process deviations and approved process change if any. </Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>14. Records Retention  </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>Supplier shall retain (and shall require any affiliates and subcontractors to retain) all Product Records for a period of time equivalent to one year past the design and expected life of the Product following Product manufacture. Supplier shall not alter, destroy or otherwise dispose of any Product Records without Amber’s prior written authorization.</Text>
                    <Text style={{fontSize:"12px"}}>Supplier shall provide copies of any or all Product Records to Amber within three (3) business days from the date of Amber’s written request for any Product Records.</Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>15. Regulatory Compliance  </Text>
                </View>
                <View style={{width: "100%"}}>
                    <Text style={{fontSize:"12px"}}>Supplier shall promptly inform Amber of the existence and substance of any inquiry or investigation related to the Products initiated by any government authority or certification agency. </Text>
                    <Text style={{fontSize:"12px"}}>Supplier will notify Amber Quality Assurance within five (5) business days of the notification or first day (whichever is earlier) of a regulatory inspection or audit, announced or unannounced, where such inspection or audit applies to a Supplier facility where the Products are manufactured) or is an inspection or audit of Amber places of manufacture and the scope of such inspection or audit includes the third party facilities where Amber products are manufactured. Supplier shall provide Amber the opportunity to be present at such inspections or audits. Supplier shall cooperate fully with any such inspections or audits. Supplier shall provide to Amber, within five (5) days of its submission or receipt by Supplier, copies of the inspection or audit observations and copies of responses to regulatory observations pertaining to Amber product. Supplier shall immediately correct any deficiencies identified in the regulatory inspection   </Text>
                    <Text style={{fontSize:"12px"}}>Supplier shall promptly provide to Amber any information received by Supplier regarding real or potential deficiencies or defects in the Products and any information that might otherwise constitute a complaint about the Products or would reasonably be considered material to the safety of the Products and/or the Product’s intended use. Each party shall reasonably cooperate with the other in sharing any information that may constitute a complaint related to the Products or services. Supplier shall at all times reasonably cooperate with any requests arising from a Amber investigation, inspection or inquiry regarding the Products.</Text>
                    <Text style={{fontSize:"12px"}}>Amber shall have the sole authority to declare a recall of any Products if Amber believes there is or may be a potential significant health hazard or non-compliance with applicable government regulations.</Text>
                </View>
            </div>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginBottom: "10px"}}>
                <View style={{width:" 200px", marginRight: "10px"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600"}}>16. Termination  </Text>
                </View>
                <View style={{width: "100%", marginBottom:"300px"}}>
                    <Text style={{fontSize:"12px"}}>This Agreement may be terminated by either party for any reason or for no reason upon 1 month written notice of termination to the other party. </Text>
                </View>
            </div>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>This Purchase Agreement is executed on Date {currDate} between AMBER ENTERPRISES INDIA LIMITED and {name} </Text>
            <div style={{display:"flex", flexDirection:"row", justifyContent: "space-between", marginTop:"30px"}}>
                <View style={{width:"40%"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600", width: "200px"}}>FOR & ON BEHALF OF AMBER ENTERPRISES INDIA LTD.</Text>
                    <Text style={{fontSize:"12px", marginTop:"10px"}}>Name: SACHIN GUPTA</Text>
                    <Text style={{fontSize:"12px"}}>Title: CEO-RAC</Text>
                    <Text style={{fontSize:"12px"}}>Signature: </Text>
                    <Text style={{fontSize:"12px"}}>Date: </Text>
                </View>
                <View style={{width:"40%"}}>
                    <Text style={{fontSize:"12px", fontWeight:"600", width: "200px"}}>FOR & ON BEHALF OF {name}</Text>
                    <Text style={{fontSize:"12px", marginTop:"10px"}}>Name: {owner}</Text>
                    <Text style={{fontSize:"12px"}}>Title: </Text>
                    <Text style={{fontSize:"12px"}}>Signature: {"(Digitally Signed)"} </Text>
                    <Text style={{fontSize:"12px"}}>Date: {currDate} </Text>
                </View>
            </div>

            <View style={{width:"100%",position:"absolute", bottom:"10", left:"10%"}} fixed>
                <Text style={{textAlign:"center", fontSize:"10px"}}>Document has been digitally signed with acceptance on ASOS at {currDateTime}</Text>
            </View>
          </Page>
        </Document>
      );

      const asPdf = pdf([]);
      asPdf.updateContainer(doc);
      
      const pdfBlob = await asPdf.toBlob(); 
      const file = new File([pdfBlob],"sqa.pdf", {type: "application/pdf"});
      return file;
    } catch (error) {
      console.error(error);
      alert('Error generating PDF');
    }
  }

  const generateNonMSME = async (name,add,city,state,postal,currDateTime) => {
    try {
      const doc = (
        <Document>
          <Page style={{backgroundColor:"#fff", padding:"30px"}}>
            <View style={{width: "100%", padding:"20px", backgroundColor:"#0f4761"}}>
            <Text style={{textAlign: "center", fontSize:"24px", color:"#fff", textTransform:"uppercase"}}>{name}</Text>
            <Text style={{textAlign: "center", fontSize:"12px", color:"#fff", marginTop:"10px"}}>{add}, {city}, {state} - {postal}</Text>
            </View>
            <Text style={{textAlign: "center",marginTop:"20px"}}>DECLARATION OF REGISTRATION IN NON MSME</Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>This is to certify that our company {name} located at ({`${add}, ${city}, ${state} - ${postal}`}) has not registered under Micro,Small, Medium enterprises (MSME) development Act 2006 as on date of declaration. </Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>We also assure that as and when the provisions are applicable to us, We shall get registered under the said Act and registration certificate shall be provide to you accordingly.</Text>
            <Text style={{marginTop:"20px",fontSize:"12px"}}>For</Text>
            <Text style={{fontSize:"12px"}}>{name}</Text>
            <Text style={{fontSize:"12px", fontWeight:"600"}}>{"(Digitally Signed)"}</Text>
            <View style={{width:"100%",position:"absolute", bottom:"10", left:"10%"}} fixed>
                <Text style={{textAlign:"center", fontSize:"10px"}}>Document has been digitally signed with acceptance on ASOS at {currDateTime}</Text>
            </View>
          </Page>
        </Document>
      );

      const asPdf = pdf([]);
      asPdf.updateContainer(doc);
      
      const pdfBlob = await asPdf.toBlob(); 
      const file = new File([pdfBlob],"nonMSME.pdf", {type: "application/pdf"});
      return file;
    } catch (error) {
      console.error(error);
      alert('Error generating PDF');
    }
  }

  const generateVCC = async (name,add,city,state,postal,currDate,owner,currDateTime) => {
    try {
      const doc = (
        <Document>
          <Page style={{backgroundColor:"#fff", padding:"30px"}}>
            <View style={{width: "100%", padding:"20px", backgroundColor:"#0f4761"}}>
            <Text style={{textAlign: "center", fontSize:"24px", color:"#fff", textTransform:"uppercase"}}>{name}</Text>
            <Text style={{textAlign: "center", fontSize:"12px", color:"#fff", marginTop:"10px"}}>{add}, {city}, {state} - {postal}</Text>
            </View>
            <Text style={{textAlign: "center",marginTop:"20px"}}>VENDOR CODE OF CONDUCT</Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>Our business success and relationships are built upon a culture of excellence and commitment, which in turn rest on the foundations of integrity, trust and respect for the individual and adherence with the law. The principles of conduct which we expect of our Vendor are further explained below:</Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(i)   COMPLIANCE WITH LAWS`}</Text>
            <Text style={{fontSize:"12px"}}>All Vendors shall conduct their business activities in full compliance with the applicable laws, international conventions and / or regulations of their respective countries and operating locations. </Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(ii)  ANTI-CORRUPTION , ANTI BRIBERY`}</Text>
            <Text style={{fontSize:"12px"}}>Vendor shall comply with all applicable international anti-corruption and anti-bribery laws. Vendors must not give or offer to give, anything of value or make any improper payments, directly or indirectly, to any government official, employee of a government controlled company, or political party, customer or private third party, in order to obtain any improper benefit or advantage.</Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(iii) GIFTS & ENTERTAINMENT `}</Text>
            <Text style={{fontSize:"12px"}}>Vendor acknowledge that AMBER ENTERPRISES’s employees are prohibited from accepting anything more than occasional and modest gifts from Vendors, including meals and entertainment. Vendor are not authorized to give or receive gifts, hospitality or entertainment on AMBER ENTERPRISES’s behalf. </Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(iv)  DATA PROTECTION `}</Text>
            <Text style={{fontSize:"12px"}}>Vendors shall comply with all applicable data privacy laws and regulations. Vendors who are engaged in collecting, processing or controlling personal data on behalf of AMBER ENTERPRISES must comply with AMBER ENTERPRISES’s corporate rules and policies relating to such services and shall prevent the improper and unauthorized use or dissemination of such data. </Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>BUSINESS PRACTICE</Text>
            <Text style={{fontSize:"12px"}}>Vendors must be committed to the highest standards of legal and business conduct when dealing with their employees, Vendors, and customers, including AMBER ENTERPRISES.</Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(i)   ACCURATE BUSINESS RECORDS`}</Text>
            <Text style={{fontSize:"12px"}}>Vendors shall maintain accurate and timely financial and accounting records of all transactions related to their business with AMBER ENTERPRISES and retain them as required by applicable law, but in no case less than 3 years. No accounting or financial entry shall be made that conceals or disguises the true nature of any transaction or record. </Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(ii)  CONFIDENTIAL INFORMATION `}</Text>
            <Text style={{fontSize:"12px"}}>Vendors shall protect AMBER ENTERPRISES’s confidential information and shall not share them with any third party unless authorized to do so in writing by AMBER ENTERPRISES. </Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(iii) HONEST AND LEGAL CONDUCT  `}</Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>Vendors undertake not to engage in any conduct which would, under any applicable law, constitute wilful misconduct, a criminal offence and/or tortious deceit </Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>{`ETHICAL PRINCIPLES AND CONFLICT OF INTEREST`}</Text>
            <Text style={{fontSize:"12px"}}>Vendors shall conduct their business in a manner to conform to the highest level of ethical business behaviour. Vendors should avoid unfair practices and any conflict of interest or appearance of conflict of interest in all their dealings. </Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>ENVIRONMENTAL COMPLIANCE</Text>
            <Text style={{fontSize:"12px"}}>Vendors shall operate in an environmentally responsible and efficient manner to minimize adverse impacts on the environment and shall comply with all applicable environmental regulations. </Text>
            <Text style={{fontSize:"12px", marginTop:"20px"}}>Vendors shall be required to acknowledge in writing that they understand and will comply with this Vendor code of conduct. Amber Enterprises shall have the right to audit Vendors’ compliance at a mutually agreed time and place, and Vendors shall extend full cooperation to AMBER ENTERPRISES in such event.</Text>
            <Text style={{fontSize:"12px", marginTop:"30px"}}>Managing Director ({owner})</Text>
            <Text style={{fontSize:"12px"}}>Name : {name}</Text>
            <Text style={{fontSize:"12px"}}>Signature : (Digitally Signed)</Text>
            <Text style={{fontSize:"12px"}}>Date : {currDate}</Text>
            

            <Text style={{marginTop:"20px",fontSize:"12px"}}>For</Text>
            <Text style={{fontSize:"12px"}}>{name}</Text>
            <Text style={{fontSize:"12px", fontWeight:"600"}}>{"(Digitally Signed)"}</Text>
            <View style={{width:"100%",position:"absolute", bottom:"10", left:"10%"}} fixed>
                <Text style={{textAlign:"center", fontSize:"10px"}}>Document has been digitally signed with acceptance on ASOS at {currDateTime}</Text>
            </View>
          </Page>
        </Document>
      );

      const asPdf = pdf([]);
      asPdf.updateContainer(doc);
      
      const pdfBlob = await asPdf.toBlob(); 
      const file = new File([pdfBlob],"vcc.pdf", {type: "application/pdf"});
      return file;
    } catch (error) {
      console.error(error);
      alert('Error generating PDF');
    }
  }
  
    const handleSubmit = async() => {
        const currDateTime = calcDate("datetime");
        const currDate = calcDate("date");
        setLoading(true);
        
        let nonMsmeFile;
        let ndaFile;
        let fourMFile;
        let vccFile;
        let sqaFile;

        if(nonMsme!=='NA'){
          nonMsmeFile = await generateNonMSME(formData.supplierName,formData.supplierAddress,formData.supplierCity,formData.supplierState,formData.supplierPostal,currDateTime);
        }
        if(nda!=='NA'){
          ndaFile = await generateNDA(formData.supplierName,formData.businessAddress,formData.businessCity,formData.businessState,formData.businessPostal,formData.supplierAddress,formData.supplierCity,formData.supplierState,formData.supplierPostal,formData.countryOrigin,formData.owner,currDate,currDateTime)
        }
        if(fourM!=='NA'){
          fourMFile = await generate4m(formData.supplierName,formData.supplierAddress,formData.supplierCity,formData.supplierState,formData.supplierPostal,formData.owner,currDate,currDateTime);
        }
        if(vccContext!=='NA'){
         vccFile = await generateVCC(formData.supplierName,formData.supplierAddress,formData.supplierCity,formData.supplierState,formData.supplierPostal,currDate,formData.owner,currDateTime)
        }
        if(sqaContext!=='NA'){
          sqaFile = await generateSQA(formData.supplierName,formData.businessAddress,formData.businessCity,formData.businessState,formData.businessPostal,formData.supplierAddress,formData.supplierCity,formData.supplierState,formData.supplierPostal,formData.countryOrigin,formData.owner,currDate,currDateTime)
        }

      //Non Msme
      if (nonMsmeFile && nonMsme !== 'NA') {
        const formdata = new FormData();
        formdata.append("file", ndaFile);  // Append file
        formdata.append("filename", "nonMsme");

        try {
          console.log(ndaFile)
          const res = await fetch(`https://asos-ser.onrender.com/api/upload_file`, {
            method: 'POST',
            body: formdata
          });
            const contentType = res.headers.get('content-type');
            let result;

            if (contentType && contentType.includes('application/json')) {
              result = await res.json();
            } else {
              result = await res.text();
            }
        } catch (error) {
          console.error(error);
        }
      }

      // NDA Document
      if (ndaFile && nda !== 'NA') {
        const formdata = new FormData();
        formdata.append("file", ndaFile);  // Append file
        formdata.append("filename", "nda");

        try {
          console.log(ndaFile)
          const res = await fetch(`https://asos-ser.onrender.com/api/upload_file`, {
            method: 'POST',
            body: formdata
          });
            const contentType = res.headers.get('content-type');
            let result;

            if (contentType && contentType.includes('application/json')) {
              result = await res.json();
            } else {
              result = await res.text();
            }
        } catch (error) {
          console.error(error);
        }
      }
         
          // 4M Document  
          if (fourMFile && fourM !== 'NA') {
            const formdata = new FormData();
            formdata.append("file", fourMFile);  // Append file
            formdata.append("filename", "FourM");
    
            try {
              const res = await fetch(`https://asos-ser.onrender.com/api/upload_file`, {
                method: 'POST',
                body: formdata
              });
                const contentType = res.headers.get('content-type');
                let result;
    
                if (contentType && contentType.includes('application/json')) {
                  result = await res.json();
                } else {
                  result = await res.text();
                }
            } catch (error) {
              console.error(error);
            }
          }

          // VCC Document
          if (vccFile && vccContext !== 'NA') {
            const formdata = new FormData();
            formdata.append("file", vccFile);  // Append file
            formdata.append("filename", "VCC");
    
            try {
              console.log(ndaFile)
              const res = await fetch(`https://asos-ser.onrender.com/api/upload_file`, {
                method: 'POST',
                body: formdata
              });
                const contentType = res.headers.get('content-type');
                let result;
    
                if (contentType && contentType.includes('application/json')) {
                  result = await res.json();
                } else {
                  result = await res.text();
                }
            } catch (error) {
              console.error(error);
            }
          }
        
          // SQA Docuemnt
          if (sqaFile && sqaContext !== 'NA') {
            const formdata = new FormData();
            formdata.append("file", sqaFile);  // Append file
            formdata.append("filename", "SQA");
    
            try {
              console.log(ndaFile)
              const res = await fetch(`https://asos-ser.onrender.com/api/upload_file`, {
                method: 'POST',
                body: formdata
              });
                const contentType = res.headers.get('content-type');
                let result;
    
                if (contentType && contentType.includes('application/json')) {
                  result = await res.json();
                } else {
                  result = await res.text();
                }
            } catch (error) {
              console.error(error);
            }
          }

          if(bankFile !== 'NA'){
            const formdata = new FormData();
            formdata.append("file", bankFile);  // Append file
            formdata.append("filename", "BankFile");

            try {
              console.log(ndaFile)
              const res = await fetch(`https://asos-ser.onrender.com/api/upload_file`, {
                method: 'POST',
                body: formdata
              });
                const contentType = res.headers.get('content-type');
                let result;

                if (contentType && contentType.includes('application/json')) {
                  result = await res.json();
                } else {
                  result = await res.text();
                }
            } catch (error) {
              console.error(error);
            }
          }

          // Udyam Document
            if(udyam !== 'NA'){
              const formdata = new FormData();
              formdata.append("file", udyam);  // Append file
              formdata.append("filename", "Udyam");

              try {
                console.log(ndaFile)
                const res = await fetch(`https://asos-ser.onrender.com/api/upload_file`, {
                  method: 'POST',
                  body: formdata
                });
                  const contentType = res.headers.get('content-type');
                  let result;

                  if (contentType && contentType.includes('application/json')) {
                    result = await res.json();
                  } else {
                    result = await res.text();
                  }
              } catch (error) {
                console.error(error);
              }
            }

          // Company Incorporation Document
          if(companyIncorp !== 'NA'){
            const formdata = new FormData();
            formdata.append("file", companyIncorp);  // Append file
            formdata.append("filename", "CompanyIncorp");

            try {
              console.log(ndaFile)
              const res = await fetch(`https://asos-ser.onrender.com/api/upload_file`, {
                method: 'POST',
                body: formdata
              });
                const contentType = res.headers.get('content-type');
                let result;

                if (contentType && contentType.includes('application/json')) {
                  result = await res.json();
                } else {
                  result = await res.text();
                }
            } catch (error) {
              console.error(error);
            }
          }
          // Pan file
          if(panFile !== 'NA'){
            const formdata = new FormData();
            formdata.append("file", panFile);  // Append file
            formdata.append("filename", "Pancard");

            try {
              console.log(ndaFile)
              const res = await fetch(`https://asos-ser.onrender.com/api/upload_file`, {
                method: 'POST',
                body: formdata
              });
                const contentType = res.headers.get('content-type');
                let result;

                if (contentType && contentType.includes('application/json')) {
                  result = await res.json();
                } else {
                  result = await res.text();
                }
            } catch (error) {
              console.error(error);
            }
          }

          // Gst File
          if(gstFile !== 'NA'){
            const formdata = new FormData();
            formdata.append("file", gstFile); 
            formdata.append("filename", "GST");

            try {
              console.log(ndaFile)
              const res = await fetch(`https://asos-ser.onrender.com/api/upload_file`, {
                method: 'POST',
                body: formdata
              });
                const contentType = res.headers.get('content-type');
                let result;

                if (contentType && contentType.includes('application/json')) {
                  result = await res.json();
                  console.log(result);
                } else {
                  result = await res.text();
                }
            } catch (error) {
              console.error(error);
            }
          }

          try {
            const vendorID = `${Date.now()}`      
            const formDataWithID = {
              ...formData,
              vendorID: vendorID
            };
            const res = await fetch(`https://asos-ser.onrender.com/api/main_form`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataWithID),
            });
            let result = await res.json();
            console.log(result);  
            navigate("/thankyou")
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className='section1'>
        {
            display?<VendorCOC name={formData.supplierName} close={() => {setDisplay(false)}}/>:null
        }
        <div className='form'>
            <div className='form_holder'>
                <div className='form_group'>
                    <p>Supplier Code of Conduct</p>
                    <a style={{marginLeft: "18px", color: "blue", cursor: "pointer"}} href='https://designxpvt-my.sharepoint.com/:w:/g/personal/krishna_saxena_designx_in/EQSqlmwkO5RFklr6maIJoycBSDPoZPtrXIHS_FyPXq6voA?e=Tnv187' target='_blank' >View agreement</a>
                    <div style={{display: "flex", alignItems: "center"}}>
                        <input onChange={handleCheckboxChange} type="checkbox" name="" id="" style={{marginLeft: "18px", marginRight: "10px"}}/>
                        <label>Yes, I digitally sign the Agreement</label>
                    </div>
                </div>
            </div>
            <div className='form_holder'>
                
            </div>
        </div>  
        {
          loading?
          <div className='action_box'>
            <button className='btn_next'>Loading...</button>
        </div>
        :
        <div className='action_box'>
            <button className='' onClick={back}>Back</button>
            <button className='btn_next' onClick={() => {handleSubmit()}}>Submit</button>
        </div>
        }
    </div>
  )
}

export default Section8