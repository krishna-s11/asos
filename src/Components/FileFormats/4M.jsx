// import { Page, Text, View, Document, StyleSheet, pdf } from '@react-pdf/renderer';
// import { saveAs } from 'file-saver';
// import { useContext, useEffect } from 'react';
// import { DataContext } from '../../Context/DataContext';

// function FourM({ name, add, city, state, postal, owner, currDate, currDateTime }) {
//   const { setFourM } = useContext(DataContext);

//   useEffect(() => {
//     const generatePdf = async () => {
//       try {
//         const doc = (
//           <Document>
//             <Page style={{ backgroundColor: "#fff", padding: "30px" }}>
//               <View style={{ width: "100%", padding: "20px", backgroundColor: "#0f4761" }}>
//                 <Text style={{ textAlign: "center", fontSize: "24px", color: "#fff", textTransform: "uppercase" }}>{name}</Text>
//                 <Text style={{ textAlign: "center", fontSize: "12px", color: "#fff", marginTop: "10px" }}>{add}, {city}, {state} - {postal}</Text>
//               </View>
//               <Text style={{ textAlign: "center", marginTop: "20px" }}>DECLARATION LETTER</Text>
//               <View style={{ marginTop: "20px", display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
//                 <View>
//                   <Text style={{ fontSize: "12px" }}>To,</Text>
//                   <Text style={{ fontSize: "12px" }}>Amber Enterprises India Ltd.</Text>
//                   <Text style={{ fontSize: "12px" }}>Selaqui - Dehradun</Text>
//                 </View>
//                 <View>
//                   <Text style={{ fontSize: "12px" }}>Date: {currDate}</Text>
//                 </View>
//               </View>
//               <Text style={{ fontSize: "12px", marginTop: "20px", fontWeight: "bold" }}>Subject: 4M Change Intimation to Amber Enterprises before change</Text>
//               <Text style={{ fontSize: "12px", marginTop: "20px" }}>Dear sir,</Text>
//               <Text style={{ fontSize: "12px", marginTop: "20px" }}>We {name} located at {add}, {city}, {state} - {postal}, commits you that if we will make any changes in our existing process regarding to 4M  (Man, Method, Machine, material) then we will inform you with 4M change note before starting new production.</Text>
//               <Text style={{ fontSize: "12px", marginTop: "10px" }}>If we will not share 4M change information with you and due to this if any 4M accident occurs, than we will agree to bear accident cost.</Text>
//               <Text style={{ fontSize: "12px", marginTop: "10px" }}>Thank you</Text>
//               <Text style={{ fontSize: "12px", marginTop: "10px" }}>{name}</Text>
//               <Text style={{ fontSize: "12px" }}>{add}, {city}</Text>
//               <Text style={{ fontSize: "12px" }}>{state} - {postal}</Text>
//               <View style={{ display: "flex", width: "100%", flexDirection: "row", justifyContent: "space-between", marginTop: "20px" }}>
//                 <View>
//                   <Text style={{ fontSize: "12px" }}>Plant Head Managing</Text>
//                   <Text style={{ fontSize: "12px" }}>Name: {owner}</Text>
//                   <Text style={{ fontSize: "12px" }}>Signature: (Digitally Signed)</Text>
//                   <Text style={{ fontSize: "12px" }}>Date: {currDate}</Text>
//                 </View>
//                 <View>
//                   <Text style={{ fontSize: "12px", marginRight: "100px" }}>Director</Text>
//                   <Text style={{ fontSize: "12px", marginRight: "100px" }}>Name:</Text>
//                   <Text style={{ fontSize: "12px", marginRight: "100px" }}>Signature:</Text>
//                   <Text style={{ fontSize: "12px", marginRight: "100px" }}>Date:</Text>
//                 </View>
//               </View>
//               <View style={{ width: "100%", position: "absolute", bottom: 10, left: "10%" }}>
//                 <Text style={{ textAlign: "center", fontSize: "10px" }}>Document has been digitally signed with acceptance on ASOS at {currDateTime}</Text>
//               </View>
//             </Page>
//           </Document>
//         );

//         const asPdf = pdf([]);
//         asPdf.updateContainer(doc);

//         const pdfBlob = await asPdf.toBlob();
//         setFourM(pdfBlob);
//         // saveAs(pdfBlob, 'document.pdf');
//       } catch (error) {
//         console.error(error);
//         alert('Error generating PDF');
//       }
//     };

//     generatePdf();
//   }, [name, add, city, state, postal, owner, currDate, currDateTime, setFourM]);

//   return null; // Since this component doesn't render anything
// }

// export default FourM;
