import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [formData,setFormData] = useState({
        businessVertical: "Amber Enterprise India Limited",
        supplierName: "NA",
        supplierAddress: "NA",
        supplierCity: "NA",
        supplierState: "NA",
        supplierPostal: "NA",
        businessAddress: "NA",
        businessCity: "NA",
        businessState: "NA",
        businessPostal: "NA",
        countryOrigin: "NA",
        typeOfSupplier: "Indian",
        bankAccNumber: "NA",
        bankName: "NA",
        bankIFSC: "NA",
        bankSwift: "NA",
        iban: "NA",
        bankAccType: "NA",
        email: "NA",
        contact: "NA",
        personInCharge: "NA",
        owner: "NA",
        supplierType: "NA",
        supplierGroup: "NA",
        supplierCategory: "MSME",
        supplierSubcategory: "Small",
        pancard: "NA",
        gst: "NA",
        currency: "NA",
        nameOfAssessee: "NA",
    });
    const [bankFile,setBankFile] = useState(null);
    const [sameAddress,setSameAddress] = useState(false);
    
    const [nonMsme,setNonMSME] = useState("NA");
    const [fourM,setFourM] = useState("NA");
    const [nda,setNDA] = useState("NA");
    const [sqaContext,setSQA] = useState("NA");
    const [vccContext,setVCC] = useState("NA");
    const [companyIncorp,setCompanyIncorp] = useState("NA");
    const [udyam,setUdyam] = useState("NA");
    const [panFile,setPanFile] = useState("NA");
    const [gstFile,setGstFile] = useState("NA");
    const [auth,setAuth] = useState("");

    return (
        <DataContext.Provider value={{auth,setAuth,panFile,setPanFile,gstFile,setGstFile,udyam,setUdyam,companyIncorp,setCompanyIncorp,formData, setFormData,sameAddress,setSameAddress, bankFile, setBankFile, nonMsme, setNonMSME, fourM, setFourM, nda, setNDA, sqaContext, setSQA, vccContext, setVCC}}>
            {children}
        </DataContext.Provider>
    )
}