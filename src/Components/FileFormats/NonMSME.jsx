// import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
// import { saveAs } from 'file-saver';
// import { useContext } from 'react';
// import { DataContext } from '../../Context/DataContext';

// export async function nonMSMSE(name,add,city,state,postal,currDateTime) {
//     const {setNonMSME} = useContext(DataContext);
//     try {
//       const doc = (
//         <Document>
//           <Page style={{backgroundColor:"#fff", padding:"30px"}}>
//             <View style={{width: "100%", padding:"20px", backgroundColor:"#0f4761"}}>
//             <Text style={{textAlign: "center", fontSize:"24px", color:"#fff", textTransform:"uppercase"}}>{name}</Text>
//             <Text style={{textAlign: "center", fontSize:"12px", color:"#fff", marginTop:"10px"}}>{add}, {city}, {state} - {postal}</Text>
//             </View>
//             <Text style={{textAlign: "center",marginTop:"20px"}}>DECLARATION OF REGISTRATION IN NON MSME</Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>This is to certify that our company {name} located at ({`${add}, ${city}, ${state} - ${postal}`}) has not registered under Micro,Small, Medium enterprises (MSME) development Act 2006 as on date of declaration. </Text>
//             <Text style={{fontSize:"12px", marginTop:"20px"}}>We also assure that as and when the provisions are applicable to us, We shall get registered under the said Act and registration certificate shall be provide to you accordingly.</Text>
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
//       setNonMSME(pdfBlob);
//     } catch (error) {
//       console.error(error);
//       alert('Error generating PDF');
//     }
//   }