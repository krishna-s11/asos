// import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
// import { saveAs } from 'file-saver';
// import { useContext } from 'react';
// import { DataContext } from '../../Context/DataContext';

// export async function vcc(name,add,city,state,postal,currDate,owner,currDateTime) {
//     const {setVCC} = useContext(DataContext);
//     try {
//       const doc = (
//         <Document>
//           <Page style={{backgroundColor:"#fff", padding:"30px"}}>
//             <View style={{width: "100%", padding:"20px", backgroundColor:"#0f4761"}}>
//             <Text style={{textAlign: "center", fontSize:"24px", color:"#fff", textTransform:"uppercase"}}>{name}</Text>
//             <Text style={{textAlign: "center", fontSize:"12px", color:"#fff", marginTop:"10px"}}>{add}, {city}, {state} - {postal}</Text>
//             </View>
//             <Text style={{textAlign: "center",marginTop:"20px"}}>VENDOR CODE OF CONDUCT</Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>Our business success and relationships are built upon a culture of excellence and commitment, which in turn rest on the foundations of integrity, trust and respect for the individual and adherence with the law. The principles of conduct which we expect of our Vendor are further explained below:</Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(i)   COMPLIANCE WITH LAWS`}</Text>
//             <Text style={{fontSize:"12px"}}>All Vendors shall conduct their business activities in full compliance with the applicable laws, international conventions and / or regulations of their respective countries and operating locations. </Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(ii)  ANTI-CORRUPTION , ANTI BRIBERY`}</Text>
//             <Text style={{fontSize:"12px"}}>Vendor shall comply with all applicable international anti-corruption and anti-bribery laws. Vendors must not give or offer to give, anything of value or make any improper payments, directly or indirectly, to any government official, employee of a government controlled company, or political party, customer or private third party, in order to obtain any improper benefit or advantage.</Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(iii) GIFTS & ENTERTAINMENT `}</Text>
//             <Text style={{fontSize:"12px"}}>Vendor acknowledge that AMBER ENTERPRISES’s employees are prohibited from accepting anything more than occasional and modest gifts from Vendors, including meals and entertainment. Vendor are not authorized to give or receive gifts, hospitality or entertainment on AMBER ENTERPRISES’s behalf. </Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(iv)  DATA PROTECTION `}</Text>
//             <Text style={{fontSize:"12px"}}>Vendors shall comply with all applicable data privacy laws and regulations. Vendors who are engaged in collecting, processing or controlling personal data on behalf of AMBER ENTERPRISES must comply with AMBER ENTERPRISES’s corporate rules and policies relating to such services and shall prevent the improper and unauthorized use or dissemination of such data. </Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>BUSINESS PRACTICE</Text>
//             <Text style={{fontSize:"12px"}}>Vendors must be committed to the highest standards of legal and business conduct when dealing with their employees, Vendors, and customers, including AMBER ENTERPRISES.</Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(i)   ACCURATE BUSINESS RECORDS`}</Text>
//             <Text style={{fontSize:"12px"}}>Vendors shall maintain accurate and timely financial and accounting records of all transactions related to their business with AMBER ENTERPRISES and retain them as required by applicable law, but in no case less than 3 years. No accounting or financial entry shall be made that conceals or disguises the true nature of any transaction or record. </Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(ii)  CONFIDENTIAL INFORMATION `}</Text>
//             <Text style={{fontSize:"12px"}}>Vendors shall protect AMBER ENTERPRISES’s confidential information and shall not share them with any third party unless authorized to do so in writing by AMBER ENTERPRISES. </Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>{`(iii) HONEST AND LEGAL CONDUCT  `}</Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>Vendors undertake not to engage in any conduct which would, under any applicable law, constitute wilful misconduct, a criminal offence and/or tortious deceit </Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>{`ETHICAL PRINCIPLES AND CONFLICT OF INTEREST`}</Text>
//             <Text style={{fontSize:"12px"}}>Vendors shall conduct their business in a manner to conform to the highest level of ethical business behaviour. Vendors should avoid unfair practices and any conflict of interest or appearance of conflict of interest in all their dealings. </Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>ENVIRONMENTAL COMPLIANCE</Text>
//             <Text style={{fontSize:"12px"}}>Vendors shall operate in an environmentally responsible and efficient manner to minimize adverse impacts on the environment and shall comply with all applicable environmental regulations. </Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>Vendors shall be required to acknowledge in writing that they understand and will comply with this Vendor code of conduct. Amber Enterprises shall have the right to audit Vendors’ compliance at a mutually agreed time and place, and Vendors shall extend full cooperation to AMBER ENTERPRISES in such event.</Text>
//             <Text style={{fontSize:"12px", marginTop:"30px"}}>Managing Director ({owner})</Text>
//             <Text style={{fontSize:"12px"}}>Name : {name}</Text>
//             <Text style={{fontSize:"12px"}}>Signature : (Digitally Signed)</Text>
//             <Text style={{fontSize:"12px"}}>Date : {currDate}</Text>
            

//             <Text style={{marginTop:"20px",fontSize:"12px"}}>For</Text>
//             <Text style={{fontSize:"12px"}}>{name}</Text>
//             <Text style={{fontSize:"12px", fontWeight:"600"}}>{"(Digitally Signed)"}</Text>
//             <View style={{width:"100%",position:"absolute", bottom:"10", left:"10%"}} fixed>
//                 <Text style={{textAlign:"center", fontSize:"10px"}}>Document has been digitally signed with acceptance on ASOS at {currDateTime}</Text>
//             </View>
//           </Page>
//         </Document>
//       );

//       const asPdf = pdf([]);
//       asPdf.updateContainer(doc);
      
//       const pdfBlob = await asPdf.toBlob(); 
//       setVCC(pdfBlob);
//     } catch (error) {
//       console.error(error);
//       alert('Error generating PDF');
//     }
//   }