import React, { useState } from 'react'
import amber from "../../Assets/download.jpeg"
import { useNavigate, useParams } from 'react-router-dom'

const FinalForm = () => {
    const {type} = useParams();
    const {id} = useParams();
    const {audit_id} = useParams();
    const navigate = useNavigate();

    const [data,setData] = useState({
        termOfPayment: "",
        paymentMethod: "",
        deliveryTerms: "",
        modeOfDelivery: "",
        supplierGroup: "",
        commodityCode: "",
    })

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value })
    }

    console.log(data);

    const handleSubmit = async (e,typeRes) => {
        e.preventDefault();

        try {        
            const res = await fetch(`https://asos-ser.onrender.com/api/final_form/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    deliveryMode: data.modeOfDelivery,
                    deliveryTerms: data.deliveryTerms,
                    termOfPayment: data.termOfPayment,
                    vendorGroup: data.supplierGroup,
                    paymentMethod: data.paymentMethod,
                    commodityCode: data.commodityCode,
                }),
            });
            let result = await res.json();
            console.log(result);   
            navigate("/result")
        } catch (error) {
            console.log("Encountered error: " + error);
        }

    }

  return (
    <div className='main_form'>
        <div className='form_card'>
            <div className='form_card_header'>
                <img src={amber} alt="" />
                <h2 style={{fontSize: "24px", fontWeight: "600"}}>Amber Supplier Onboarding</h2>
            </div>
            <div className='section1'>
        <div className='form'>
            <div className='form_holder'>
                <div className='form_group'>
                    <p>1. Supplier Term of Payment</p>
                    <select className='dropdown' name="termOfPayment"  onChange={handleChange}>
                        <option selected disabled>---Select Answer---</option>
                        <option value="100ADVAOA">100ADVAOA - 100% Advance</option>
                        <option value="100AFDEL">100AFDEL - 100% afer delivery</option>
                        <option value="105DAYSI">105DAYSI - 105 DAYS FROM INV DATE</option>
                        <option value="10AD80AD10">10AD80AD10 - 10% Adv 80% against despatch & 10% balance after installation</option>
                        <option value="10AD90LC45DAYS">10AD90LC45DAYS - 10% Advance & 90% through LC for 45 Days after delivery</option>
                        <option value="10AD90TT45Days">10AD90TT45Days - 10% Advance & 90% through T/T within 45 Days after delivery</option>
                        <option value="10ADB360DLC">10ADB360DLC - 10% advance balance 90% by 360 days LC</option>
                        <option value="10ADB60DLC">10ADB60DLC - 10% advance balance 60 days LC</option>
                        <option value="10ADBBS">10ADBBS - 10% Advance Balance Before Shipment</option>
                        <option value="10ADTLC40T">10ADTLC40T - 10% Adv Through LC , 40% on Trial zero Through LC , Balance</option>
                        <option value="10DAYS">10DAYS - 10 Days</option>
                        <option value="12ADWG8A1YB2Y">12ADWG8A1YB2Y - 12% advance with GST, 8% after 1st  year and Balance 80% after 2nd year</option>
                        <option value="15DAYSI">15DAYSI - 15 DAYS from Invoice</option>
                        <option value="180DAYSI">180DAYSI - 180 Days</option>
                        <option value="20AD30BS25BL">20AD30BS25BL - 20% TT Advance, 30% TT Before Shipment, 25% TT Paid within 90 Days of BL, 25% TT Paid Within 180 Days of BL</option>
                        <option value="20AD30R50A24">20AD30R50A24 - 20% TT ADVANCE  30% TT ON READINESS 50% TT to be PAID IN APR.2024 YEAR</option>
                        <option value="20AD50Trial">20AD50Trial zero30 - 20% Advance, 50% on Trial zero, Balance before dispatch</option>
                        <option value="20AD70AD10">20AD70AD10 - 20% Adv 70% against despatch & 10% balance after installati</option>
                        <option value="20ADBBD">20ADBBD - 20% Advance, Balance before dispatch</option>
                        <option value="20ADTLC30T">20ADTLC30T - 20% Adv Through LC , 30% on Trial zero Through LC , Balance</option>
                        <option value="20ADV80SD">20ADV80SD - 20% Advance and 80% against shipping documents</option>
                        <option value="20ADVBOD">20ADVBOD - 20% Advance and Balance On Delivery</option>
                        <option value="25ADB45PDC">25ADB45PDC - 25% Advance Balance 45Days PDC Before Dispatch</option>
                        <option value="25ADB60D">25ADB60D - 25% ADVANCE BALANCE AFTER 60DAYS</option>
                        <option value="30AD60A80W">30AD60A80W - 30 % Adv, 60% after 80% work Done & 10% balance after Sucuss</option>
                        <option value="30AD60API10AI">30AD60API10AI - 30% Advance along with PO, 60% against PI .incl. GST, balance 10% immediate after successful installation</option>
                        <option value="30AD60Trial zero10">30AD60Trial zero10 - 30% Advance, 60% on Trial zero and 10% After delivery within</option>
                        <option value="30ADVBBD">30ADVBBD - 30% Advance Balance Before Dispatch</option>
                        <option value="35AD55BD10">35AD55BD10 - 35% Advance , 55% before Dispatch , 10% After delivery in 30</option>
                        <option value="35DAYS">35DAYS - 35 Days</option>
                        <option value="40A20T020T120GMA">40A20T020T120GMA - 40% in advanced, 20% on first T0 samples, 20% on T1 Sample and 20%+ GST after mould approval</option>
                        <option value="40AD20BD35AS">40AD20BD35AS - 40% Advance With Work Order, 20% Before Dispatch of Material, 35% After Material Supply at Site, 5% After 6 Month of Material Supply</option>
                        <option value="40AD40A80W">40AD40A80W - 40% Adv, 40% after 80% work Done & 20% balance after Sucuss</option>
                        <option value="40AD40AD20">40AD40AD20 - 40% Adv 40% against despatch  & 20% balance after installat</option>
                        <option value="40AD60BD">40AD60BD - 40% Advance 60% Before delivery</option>
                        <option value="40ADVB15D">40ADVB15D - 40%Advance & balance within 15 days</option>
                        <option value="50AD40Trial zero10 -">50AD40Trial zero10 - 50% Advance, 40% on Trial zero and 10% After delivery within</option>
                        <option value="50ADVB30D">50ADVB30D - 50% adv and balance 30 Days</option>
                        <option value="50ADVB45DP">50ADVB45DP - 50% ADV And Balance PDC of 45 DAYS</option>
                        <option value="5AD85AD10">5AD85AD10 - 5% Adv 85% against despatch & 10% balance after installatio</option>
                        <option value="5ADTLC45Trial">5ADTLC45Trial zero - 5% Adv Through LC , 45% on Trial zero Through LC , Balance 5</option>
                        <option value="60AD30BD10AD">60AD30BD10AD - 60% Advance, 30% Before Dispatch and 10% after delivery</option>
                        <option value="7DAYS">7DAYS - 7 Days</option>
                        <option value="80AD20ACW">80AD20ACW - 80% Advance, 20% After Complition of Work</option>
                        <option value="ADV20501515">ADV20501515 - Adv ,20% + 50%+ 15% + complete the work 15%</option>
                        <option value="AGSTDEL">AGSTDEL - Against Delivery</option>
                        <option value="APA">APA - As Per Annexure</option>
                        <option value="IMMEDIATE">IMMEDIATE - Immediate</option>
                        <option value="LC120DAYBL">LC120DAYBL - LC 120 Days from date of BL</option>
                        <option value="LC150DAYBL">LC150DAYBL - LC 150 Days from date of BL</option>
                        <option value="LC180DAYBL">LC180DAYBL - LC 180 Days from date of BL</option>
                        <option value="LC30DAYSBL">LC30DAYSBL - 30 Days LC</option>
                        <option value="LC360DAYS">LC360DAYS - LC 360 Days</option>
                        <option value="LC45DAYSBL">LC45DAYSBL - 45 Days LC From Bill of Lading</option>
                        <option value="LC45DAYSI">LC45DAYSI - LC 45 Days from date of Invoice</option>
                        <option value="LC60DAYSBL">LC60DAYSBL - LC 60 Days from date of BL</option>
                        <option value="LC60DAYSI">LC60DAYSI - LC 60 Days from date of Invoice</option>
                        <option value="LC75DAYSI">LC75DAYSI - LC 75 Days from date of Invoice</option>
                        <option value="LC90DAYSBL">LC90DAYSBL - LC 90 Days from date of BL</option>
                        <option value="LC90DAYSI">LC90DAYSI - LC 90 Days from date of Invoice</option>
                        <option value="LCATSIGHT">LCATSIGHT - LC AT SITE</option>
                        <option value="OA120DASBL">OA120DASBL - OA-120 Days from date of BL</option>
                        <option value="OA120DAYSI">OA120DAYSI - OA-120 Days from date of Invoice</option>
                        <option value="OA150DASBL">OA150DASBL - OA-150 Days from date of BL</option>
                        <option value="OA180DAYBL">OA180DAYBL - OA-180 Days from date of BL</option>
                        <option value="OA20ADVAN">OA20ADVAN - 20% Advance, Balance under satisfactory completeion of work</option>
                        <option value="OA30ADVAN">OA30ADVAN - 30% Advance, Balance under satisfactory completeion of work</option>
                        <option value="OA30DAYSI">OA30DAYSI - OA 30 Days from date of Invoice</option>
                        <option value="OA45DAYSBL">OA45DAYSBL - OA- 45 Days from date of BL</option>
                        <option value="OA45DAYSI">OA45DAYSI - OA- 45 Days from date of Invocie</option>
                        <option value="OA50ADVAN">OA50ADVAN - 50% Advance, Balance under satisfactory completeion of work</option>
                        <option value="OA60DAYSBL">OA60DAYSBL - OA-60 Days from date of BL</option>
                        <option value="OA60DAYSI">OA60DAYSI - OA-60 Days from date of Invoice</option>
                        <option value="OA75ADVAN">OA75ADVAN - 75% Advance, Balance under satisfactory completeion of work</option>
                        <option value="OA75DAYSBL">OA75DAYSBL - OA-75 Days from date of BL</option>
                        <option value="OA75DAYSI">OA75DAYSI - OA-75 Days from date of Invoice</option>
                        <option value="OA7DAYSI">OA7DAYSI - OA 7 Days from date of Invoice</option>
                        <option value="OA90DAYSBL">OA90DAYSBL - OA- 90 Days from date of BL</option>
                        <option value="OA90DAYSI">OA90DAYSI - OA- 90 Days from date of Invoice</option>
                        <option value="PDC25DAYS">PDC25DAYS - PDC 25 DAYS</option>
                        <option value="PDC30DAYS">PDC30DAYS - PDC 30 Days</option>
                        <option value="PDC45DAYS">PDC45DAYS - PDC 45 Days</option>
                        <option value="PDC60DAYS">PDC60DAYS - PDC 60 Days</option>
                        <option value="PDC75DAYS">PDC75DAYS - PDC 75 Days</option>
                        <option value="TT105DBL">TT105DBL - TT 105 days from Date of Bill of Lading</option>
                        <option value="TTAdvance">TTAdvance - TT Advance</option>
                        <option value="TTAGTBL">TTAGTBL - 100% TT Against BL Copy</option>
                    </select>
                </div>
                <div className='form_group'>
                    <p>2. Supplier Payment Method</p>
                    <select className='dropdown' name="paymentMethod"  onChange={handleChange}>
                        <option selected disabled>---Select Answer---</option>
                        <option value="By Cheque">By Cheque</option>
                        <option value="LC">LC</option>
                        <option value="NEFT/RTGS">NEFT/RTGS</option>
                        <option value="PDC">PDC</option>
                        <option value="TT">TT</option>
                    </select>
                </div>
                <div className='form_group'>
                  <p>3. Supplier Delivery Terms</p>
                  <select className='dropdown' name="deliveryTerms" onChange={handleChange}>
                        <option selected disabled>---Select Answer---</option>
                        <option value="As Per Sch">As Per Sch</option>
                        <option value="CIF">CIF</option>
                        <option value="EXTRA">EXTRA</option>
                        <option value="EXW">EXW</option>
                        <option value="EXWDDN">EXWDDN</option>
                        <option value="FOB">FOB</option>
                        <option value="FOR">FOR</option>
                        <option value="IN">IN</option>
                        <option value="TBB">TBB</option>
                        <option value="To PAID">TO PAID</option>
                        <option value="TO PAY">TO PAY</option>
                  </select>
              </div>
            </div>
            <div className='form_holder'>
              <div className='form_group'>
                  <p>4. Supplier Mode of Delivery</p>
                  <select className='dropdown' name="modeOfDelivery" onChange={handleChange}>
                        <option selected disabled>---Select Answer---</option>
                        <option value="By Air">By Air</option>
                        <option value="By Courier">By Courier</option>
                        <option value="By Hand">By Hand</option>
                        <option value="By Road">By Road</option>
                        <option value="By Sea">By Sea</option>
                    </select>
              </div>
              <div className='form_group'>
                  <p>5. Supplier Group</p>
                  {/* <select className='dropdown'>
                        <option selected disabled>---Select Answer---</option>
                        <option value="Amber Enterprises India Limited">HUF</option>
                        <option value="Amber Enterprises India Limited">Firm</option>
                        <option value="Amber Enterprises India Limited">Individual</option>
                        <option value="Amber Enterprises India Limited">AOP</option>
                        <option value="Amber Enterprises India Limited">BOI</option>
                        <option value="Amber Enterprises India Limited">Local Authority</option>
                        <option value="Amber Enterprises India Limited">Others</option>
                    </select> */}
                    {
                        type==='foreign'?
                        <select className='dropdown' name="supplierGroup" onChange={handleChange}>
                            <option disabled selected>---Select Answer---</option>
                            <option value="CR-IMP">CR-IMP | Creditors Imports Raw Material</option>
                            <option value="CR-IMP-CAP">CR-IMP-CAP | Creditors Import Capex</option>
                            <option value="CR-IMP-EXP">CR-IMP-EXP | Creditors Import Expense</option>
                            <option value="CR-IMP-SER">CR-IMP-SER | Creditors Import Service</option>
                        </select>
                        :
                        <select className='dropdown' name="supplierGroup" onChange={handleChange}>
                            <option disabled selected>---Select Answer---</option>
                            <option value="CR-AGT">CR-AGT | Creditors Agents</option>
                            <option value="CR-BANK">CR-BANK | Creditors Bank</option>
                            <option value="CR-CAP">CR-CAP | Creditors Capex</option>
                            <option value="CR-CO">CR-CO | Creditors Consumable</option>
                            <option value="CR-EX">CR-EX | Creditors Expense</option>
                            <option value="CR-INT">CR-INT | Creditors  Inter Unit</option>
                            <option value="CR-JW">CR-JW | Creditors Job work</option>
                            <option value="CR-KMP">CR-KMP | Creditors Key Management Persons</option>
                            <option value="CR-PK">CR-PK | Creditors Packing Material</option>
                            <option value="CR-RM">CR-RM | Creditors Raw Material</option>
                            <option value="CR-RPT">CR-RPT | Creditors Related Parties</option>
                            <option value="CR-SC">CR-SC | Creditors Sister Concern</option>
                            <option value="CR-STAT">CR-STAT | Creditors Staturoty</option>
                            <option value="CR-TPT">CR-TPT | Creditors Transporter</option>
                        </select>
                    }
              </div>
              <div className='form_group'>
                      <p>6. Commodity Code</p>
                      <select className='dropdown' name="commodityCode" onChange={handleChange}>
                        <option disabled selected>---Select Answer---</option>
                        <option value="AA">AA - Aluminium</option>
                        <option value="AB">AB - FG-Extruded Sheet</option>
                        <option value="AC">AC - FG-HE Coil</option>
                        <option value="AD">AD - FG-IDU </option>
                        <option value="AE">AE - FG-Inner Case</option>
                        <option value="AF">AF - FG-MFC</option>
                        <option value="AG">AG - FG-ODU</option>
                        <option value="AH">AH - FG-PLC</option>
                        <option value="AI">AI - FG-SMC</option>
                        <option value="AJ">AJ - Steel</option>
                        <option value="AK">AK - FG-WAC</option>
                        <option value="AL">AL - FG-ODU Kit</option>
                        <option value="AM">AM - FG-SAC</option>
                        <option value="AN">AN - ODU-Accessories</option>
                        <option value="AO">AO - Compressor</option>
                        <option value="AP">AP - Motor</option>
                        <option value="AQ">AQ - RM-IDU</option>
                        <option value="AR">AR - RM-HE Coil</option>
                        <option value="AS">AS - Sticker & Label</option>
                        <option value="AT">AT - Remote</option>
                        <option value="AU">AU - Foam</option>
                        <option value="AV">AV - EPS</option>
                        <option value="AX">AX - Brass Parts</option>
                        <option value="AY">AY - Capacitor</option>
                        <option value="AZ">AZ - Cross Flow Fan</option>
                        <option value="BA">BA - FG-Portable AC</option>
                        <option value="BB">BB - Fan</option>
                        <option value="BC">BC - Gas</option>
                        <option value="BD">BD - Hardware</option>
                        <option value="BE">BE - Ink</option>
                        <option value="BF">BF - Poly Bag</option>
                        <option value="BG">BG - Rear Grill</option>
                        <option value="BH">BH - Hardware Other</option>
                        <option value="BI">BI - Rubber Parts</option>
                        <option value="BJ">BJ - Service Valve</option>
                        <option value="BK">BK - Tape</option>
                        <option value="BL">BL - Wire</option>
                        <option value="BM">BM - FG-PP Roll</option>
                        <option value="BN">BN - Bolt</option>
                        <option value="BO">BO - Brazing Rod</option>
                        <option value="BP">BP - Carton Box</option>
                        <option value="BQ">BQ - Chemical</option>
                        <option value="BR">BR - FG-Copper Tubing</option>
                        <option value="BS">BS - Powder</option>
                        <option value="BT">BT - Terminal Block</option>
                        <option value="BU">BU - Packing Material</option>
                        <option value="BV">BV - Copper Tube</option>
                        <option value="BW">BW - Plastic Granules</option>
                        <option value="BX">BX - General</option>
                        <option value="BY">BY - Printing & Stationery</option>
                        <option value="BZ">BZ - Electrical & Electronics Store & Spares</option>
                        <option value="CA">CA - Mechanical</option>
                        <option value="CB">CB - Plastic Grinding</option>
                        <option value="CM">CM - Oil & Lubricants</option>
                        <option value="CO">CO - Tools & Die</option>
                        <option value="CP">CP - SKD Assembly</option>
                        <option value="CT">CT - EPS Assembly</option>
                        <option value="CU">CU - FG-WAC Kit</option>
                        <option value="CV">CV - Controller</option>
                        <option value="CW">CW - Display PCB</option>
                        <option value="CX">CX - Blower</option>
                        <option value="CZ">CZ - Lab Equipments</option>
                        <option value="DA">DA - FG-IDU Dummy</option>
                        <option value="DB">DB - Brazing Ring-Imp</option>
                        <option value="DC">DC - SCRAP</option>
                        <option value="DG">DG - RM-Aluminium</option>
                        <option value="DH">DH - RM-ODU</option>
                        <option value="DI">DI - RM-WAC</option>
                        <option value="DJ">DJ - FG-Aluminium Components</option>
                        <option value="DK">DK - RM-MFC</option>
                        <option value="DN">DN - FG-ODU Dummy</option>
                        <option value="DO">DO - FG-SAC Dummy</option>
                        <option value="DP">DP - Capillary Tube</option>
                        <option value="DR">DR - Louver/Stepping Motor</option>
                        <option value="DS">DS - FG-IDU Kit</option>
                        <option value="DT">DT - Main PCB</option>
                        <option value="DU">DU - FG-CAC</option>
                        <option value="DV">DV - Master Batch</option>
                        <option value="DW">DW - Glass</option>
                        <option value="DX">DX - PCB</option>
                        <option value="DY">DY - Gas AC</option>
                        <option value="DZ">DZ - Compressor-Cust</option>
                        <option value="EA">EA - Compressor-Imp</option>
                        <option value="EB">EB - Controller IDU-Cust</option>
                        <option value="EC">EC - Controller ODU-Cust</option>
                        <option value="ED">ED - Controller WAC-Cust</option>
                        <option value="EF">EF - Controller IDU</option>
                        <option value="EG">EG - Controller IDU-Imp</option>
                        <option value="EH">EH - Controller ODU-Imp</option>
                        <option value="EI">EI - Controller WAC-Imp</option>
                        <option value="EJ">EJ - Controller WAC</option>
                        <option value="EK">EK - Copper Part RM-Cust</option>
                        <option value="EL">EL - FG-Electrical And Electronics Parts</option>
                        <option value="EM">EM - Copper Tube-Imp</option>
                        <option value="EN">EN - Copper Capillary Tube RM</option>
                        <option value="EO">EO - Copper Capillary Tube BOP</option>
                        <option value="EQ">EQ - Display PCB IDU-Cust</option>
                        <option value="ER">ER - Electrical And Electronics Parts RM</option>
                        <option value="ES">ES - Display PCB IDU</option>
                        <option value="ET">ET - Display PCB IDU-Imp</option>
                        <option value="EU">EU - Display PCB WAC-Imp</option>
                        <option value="EV">EV - Display PCB WAC</option>
                        <option value="EW">EW - Electrical And Electronics Parts RM-Cust</option>
                        <option value="EX">EX - Electrical And Electronics Parts RM-Imp</option>
                        <option value="EY">EY - Remote-Cust</option>
                        <option value="EZ">EZ - Remote-Imp</option>
                        <option value="FA">FA - Sleeve</option>
                        <option value="FB">FB - Insulation Tube</option>
                        <option value="FC">FC - Jacket</option>
                        <option value="FE">FE - Rubber Part RM</option>
                        <option value="FF">FF - Aluminium Parts RM</option>
                        <option value="FG">FG - Copper Part RM</option>
                        <option value="FI">FI - Plastic Part RM</option>
                        <option value="FJ">FJ - Sheet Metal Part RM</option>
                        <option value="FK">FK - Motor-Cust</option>
                        <option value="FL">FL - Filter</option>
                        <option value="FM">FM - Wire-Cust</option>
                        <option value="FO">FQ - Aluminium Strip-Imp</option>
                        <option value="FP">FP - Aluminium Brazing Filler-Imp</option>
                        <option value="FQ">FQ - Aluminium Pipe-Imp</option>
                        <option value="FR">FR - Aluminium Foil-Imp</option>
                        <option value="FS">FS - Brass Part-Imp</option>
                        <option value="FT">FT - Brazing Rod-Imp</option>
                        <option value="FU">FU - Cross Flow Fan-Imp</option>
                        <option value="FV">FV - Moulding RM</option>
                        <option value="FW">FW - Louver/Stepping Motor-Imp</option>
                        <option value="FX">FX - Motor-Imp</option>
                        <option value="FY">FY - Plastic Part RM-Imp</option>
                        <option value="FZ">FZ - Service Valve-Imp</option>
                        <option value="GA">GA - Battery</option>
                        <option value="GB">GB - Putty</option>
                        <option value="GD">GD - Edge Angle</option>
                        <option value="GE">GE - Corrugated Separator</option>
                        <option value="GF">GF - P.P Band</option>
                        <option value="GG">GG - Staple Pin</option>
                        <option value="GH">GH - Wiring Diagram Sticker</option>
                        <option value="GI">GI - Strip Sticker</option>
                        <option value="GJ">GJ - SOWM Label</option>
                        <option value="GK">GK - Ribbon</option>
                        <option value="GL">GL - Rating Label Sticker</option>
                        <option value="GM">GM - Manual</option>
                        <option value="GN">GN - Logo Sticker</option>
                        <option value="GO">GO - Escutcheon Sticker</option>
                        <option value="GP">GP - BEE Label Sticker</option>
                        <option value="GR">GR - IDU Front Grill</option>
                        <option value="GS">GS - ODU Fan Guard</option>
                        <option value="GT">GT - IDU Drain Hose</option>
                        <option value="GU">GU - WAC Front Grill</option>
                        <option value="GV">GV - Master Batch-Cust</option>
                        <option value="GW">GW - Plastic Granules-Cust</option>
                        <option value="GY">GY - Aluminium Foil-Local</option>
                        <option value="HA">HA - Copper Tube Plain Domestic</option>
                        <option value="HB">HB - Copper Tube IGT Domestic</option>
                        <option value="HC">HC - Copper Tube Plain-Imp</option>
                        <option value="HD">HD - Copper Tube IGT-Imp</option>
                        <option value="HE">HE - Copper Capillary Tube</option>
                        <option value="HF">HF - Tool & Die Parts</option>
                        <option value="HG">HG - Robotic System</option>
                        <option value="HI">HI - Iljin Parts</option>
                        <option value="HJ">HJ - QMD IDU Kit</option>
                        <option value="HK">HK - QMD ODU Kit</option>
                        <option value="NA">NA - NA for Other vendors</option>
                        <option value="HL">HL - Fixed Asset</option>
                        <option value="SV">SV - Service</option>
                        <option value="HM">HM Job Work</option>
                    </select>
                </div>
            </div>
        </div>
        <div className='action_box'>
            {/* <button className=''>Back</button> */}
            <button className='btn_next' onClick={handleSubmit}>Approve</button>
            <button className='btn_next' onClick={() => {navigate("/reject")}} style={{backgroundColor:"#FA5252"}}>Reject</button>
        </div>
    </div>
            <div style={{position: "absolute", bottom: "10px", left:"50%", transform: "translateX(-50%)", color: "#fff", fontWeight:"600", display:"flex", alignItems:"center"}}>
            <p style={{marginRight: "10px"}}>Powered by</p><img style={{width: "30px"}} src='https://qa.dfos.co/app/assets/image_used/logo_login.png'/>
            </div>
        </div>
    </div>
  )
}

export default FinalForm