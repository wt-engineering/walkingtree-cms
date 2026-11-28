import React,{ useEffect, useRef, useState,useContext} from 'react'
import Input from '../components/input'
import Button from './button'
import {TABLET_BREAKPOINT, MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT,lineAnimationTiming} from "../config"
import Image from './Image';
import DropDownOption from './dropDownOption';
// import { API_URI } from '../config';
export default function ContactForm(props) {
    const [firstName, setFirstName] = useState(""); 
    const [firstNameTouched,setFirstNameTouched] = useState(false)
    const [firstNameError,setFirstNameError] = useState(true)
    const [email,setEmail] = useState("")
    const [emailTouched, setEmailTouched] = useState(false)
    const [emailError, setEmailError] = useState(true)
    const [number,setNumber] = useState("")
    const [numberError,setNumberError] = useState(null)
    const [numberTouched,setNumberTouched] = useState(false)
    const [enquiryType, setEnquiryType] = useState(true)
    const [organizationType, setOrganizationType] = useState("")
    const [organizationTypeTouched, setOrganizationTouched] = useState(false)
    const [message,setMessage] = useState("")
    const [messageError,setMessageError] = useState(true)
    const [messageTouched,setMessageTouched] = useState(false)
    const [formValid, setFormValid] = useState(false)
    const [success, setSuccess] = useState(false)

    function validateFirstName(val){
      if(val.length <= 1)
        setFirstNameError("min")
      else if(val.length > 100)
        setFirstNameError("max")
      else
        setFirstNameError(false)
    }
     function onFirstNameChange(val){
      setFirstNameTouched(true)
      validateFirstName(val)
      setFirstName(val)
    }
    function onChangeEmail(value){
      setEmail(value)
      // validateEmail(value)
      setEmailTouched(true)
    }
    // function validateEmail(val) {
    //   var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //   if(val.match(mailFormat)){
    //     setEmailError(false)
    //   }else {
    //     setEmailError(true)
    //   }
    // }
    function validateNumber(val){ 
     if(val<0){
         setNumberError(true)
     }else{
         setNumberError(false)
     } 
  }
  function onNumberChange(val){
      console.log(val)
      setNumberTouched(true)
      validateNumber(val)
      setNumber(val)
  }
    function onChangeOrganization(val) {
       setOrganizationTouched(true)
       setOrganizationType(val)
    }
    function validateMessage(val){
      if(val.length < 5)
          setMessageError("min")
      else if(val.length > 1000)
          setMessageError("max")
      else
          setMessageError(false)
  }
  function onMessageChange(val){
      setMessageTouched(true)
      validateMessage(val)
      setMessage(val)
  }
  let validationError = firstNameError && emailError && numberError && messageError && enquiryType
  async function handleEnquiryRequest(){
   
    if(!validationError){
      // console.log("inside validationError");
      scroll
      let reqBody={
        "email":email,
        "firstName":firstName,
        "enquiryType":enquiryType,
        "phoneNumber":number,
        "message":message,
      }
      if(!!organizationType){
        reqBody.organizational=organizationType
      }
      let response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/wt/contact-form`,{
        method: "POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(reqBody)
      })
      // console.log(response.status)
      let body=await response.json();
      // console.log(response.status)
      if(response.status==200){
        // console.log("success",body)
        setSuccess(true)
      }else if(response.status==411){
        // console.log("body",body)
        let error=body.errors;
        if(error.email){
          setEmailError(error.email)
          setEmailTouched(true)
        }
      } else{
        // console.log(response.status)
      }
    }else{
      setSuccess(false);
    }
  }

    return (
        <>
        {!!success?
                <div className="success alignCenter standardPaddingBottom">
                    Thank you for reaching out to us. We will be in touch shortly.
                </div>
          :
          <div className="container lesserAdditionalPadding">
              <div className="space90 topSection">
                <div className="mbHeading heading black bigHeading">{props.heading}</div>
                <div className="shortDesc ">{props.shortDesc}</div>
              </div>
              <div className="space40 contactFormContainer flexItems">
                <div className="rightImageMobile showForMobile">
                <div className="imageRight"><Image height={315} width={430} originalSrc={props.img} alt="img"/></div>
              </div>
                  <div className="contactForm">
                        <div><DropDownOption mapItems={props.mapItems} setEnquiryType={setEnquiryType}  enquiryType={enquiryType} /></div>
                      <div className="fname"><Input placeholder="First Name *" type="text"  onChange={(e) =>onFirstNameChange(e.target.value) } value={firstName} error={firstNameTouched && !!firstNameError} errMsg={!!firstNameTouched && firstNameError=="min"?"Please Enter a valid first name":""}/></div>
                      {/* {notification && <p className="errorMsg description">{notification}</p>}  */}
                      
                      <div className="email"><Input placeholder="Email Address*" type="text" onChange={(e) => onChangeEmail(e.target.value)} value={email}/></div>
                    <div className="inputField"><Input type="tel" onChange={(e)=>onNumberChange(e.target.value)} value={number} error={numberTouched && !!numberError} errorMsg={numberError && "Please enter a valid telephone number"} placeholder="Phone No"/></div>
                      <div className="org"><Input placeholder="Organisation(Optional)" type="text" onChange={(e) => onChangeOrganization(e.target.value)} value={!!organizationTypeTouched?organizationType:null}/></div>
                      <div className="msg"><Input placeholder="Message *" type="text" onChange={(e)=>onMessageChange(e.target.value)} value={message} error={messageTouched && !!messageError} errMsg={!!messageTouched && messageError=="min"?"Message Should minimun be 5 characters":""}/></div>
                    </div>
                  <div className="rightImage hideForMobile">
                  <div className="imageRight"><Image height={684} width={500} originalSrc={props.img} alt="img" className="width-100"/></div>
                  </div>
              </div>
                <div className="buttonWrapper alignCenter"> 
                  <Button  buttonText="Submit" buttonType="rectangleActiveClassButton" class={true} textOnHover="Submit"  onClick={()=>handleEnquiryRequest()}/>
                </div>
           </div>  
          } 
          <style jsx>{`
              .contactFormContainer {
                  margin-right: -10.7%;
              }
              .contactForm,.rightImage {
                  width: 50%;
                  padding-right: 10.7%;
              }
              .contactForm {
                  margin-top: 5.5rem;
              }
              .success{
                  opacity:1;
              }              
              @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                .contactForm {
                  margin-top: 5rem;
                }
              }
              @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                .contactForm {
                  margin-top: 3rem;
                }
              }
              @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                .contactForm {
                  margin-top: 0rem;
                }
              }
              @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                .container {
                   padding: 8%;
                }  
                .contactFormContainer {
                   display: block;
                   margin-right: 0;
                }
                .contactForm,.rightImage {
                   width: 100%;
                   padding-right: 0;
                }
                .contactForm {
                    margin-top: 0rem;
                }
                .rightImageMobile {
                    margin-bottom: 6.8rem
                }
                .topSection {
                    text-align: center;
                }
              }
          `}</style>
        </>
    )
}
