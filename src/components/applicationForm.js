import React,{ useEffect, useRef, useState} from 'react'
import Input from '../components/input'
import Button from './button'
import {TABLET_BREAKPOINT, MOBILE_BREAKPOINT} from "../config"
import Animate from "./animate";

function ApplicationForm(props) {
    const leftContent = useRef();
    const containerFormRef = useRef();
    const [formValid, setFormValid] = useState(false)
    const [firstName, setFirstName] = useState(null)
    const [firstNameError, setFirstNameError] = useState(true)
    const [firstNameTouched, setFirstNameTouched] = useState(false)
    const [lastName, setLastName] = useState(null)
    const [lastNameError, setLastNameError] = useState(true)
    const [lastNameTouched, setLastNameTouched] = useState(false)
    const [email,setEmail] = useState(null)
    const [emailTouched, setEmailTouched] = useState(false)
    const [emailError, setEmailError] = useState(true)
    const [phoneNumber, setPhoneNumber] = useState(null)
    const [phoneNumberError, setPhoneNumberError] = useState(true)
    const [phoneNumberTouched, setPhoneNumberTouched] = useState(false)
    const [url, setUrl] = useState(null)
    const [urlError, setUrlError] = useState(false)
    const [urlTouched, setUrlTouched] = useState(false)
    const [resumeFile, setResumeFile] = useState(null)
    const [ResumeFileUploadError, setResumeFileUploadError] = useState(true)
    const [coverLetter, setCoverLetter] = useState(null)
    const [coverLetterError, setCoverLetterError] = useState(null)
    const [portfolio, setPortfolio] = useState(null)
    const [portfolioError, setPortfolioError] = useState(null)
    const [message, setMessage] = useState(null)
    const [buttonLabel, setButtonLabel] = useState("SUBMIT")
    const [success, setSuccess] = useState(false)
    const [formErrorMsg, setFormErrorMsg] = useState(null)
    
    function onFirstNameChange (val) {
      setFirstNameTouched (true)
      validateFirstName(val)
      setFirstName(val)
    }
    function validateFirstName(val){
      if(val.length < 1) setFirstNameError('Please enter first name')
      else if(val.length > 25) setFirstNameError('First name should not exceed 25 characters')
      else setFirstNameError(null)
    }

    function onLastNameChange(val) {
      setLastNameTouched(true)
      validateLastName(val)
      setLastName(val)
    }
    function validateLastName (val) {
      if(val.length < 1) setLastNameError('Please enter last name.')
      else if(val.length > 25) setLastNameError('last name should not exceed 25 characters.')
      else setLastNameError(null)
    }

    function onChangeEmail(value){
      setEmail(value)
      validateEmail(value)
      setEmailTouched(true)
    }
    function validateEmail(val) {
      var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(val.match(mailFormat)){
        setEmailError(false)
      }else {
        setEmailError("Please enter a valid email address.")
      }
    }

    function onChangeNumber(val) {
      setPhoneNumberTouched(true)
      validatePhoneNumber(val)
      setPhoneNumber(val)
    }
    function validatePhoneNumber(val) {
      if(val.length < 10) setPhoneNumberError('Please enter a valid phone number')
      else if(val.length > 25) setPhoneNumberError('Please enter a valid phone number')
      else setPhoneNumberError(null)
    }  

    function onChangeUrl(str) {
      setUrlTouched(true)
      setUrl(str)
    } 

    //  function validURL(str) {
    //   var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    //     '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    //     '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    //     '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    //     '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    //     '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    //     if(val.match(pattern) ){
    //       setUrlError(false)
    //     }else{
    //       setUrlError(true)
    //     }
    // }
   
    // useEffect(() => {
    //   if(!!firstNameError || !!lastNameError || !!emailError || !!phoneNumberError){
    //     setFormValid(true) 
    //   }
    // },[formValid,firstNameError,lastNameError,emailError,phoneNumberError])

    useEffect(()=>{
      console.log(ResumeFileUploadError);
      if(!!ResumeFileUploadError){
        setResumeFile(null)
      }
    },[ResumeFileUploadError])

    useEffect(()=>{
      if(!!coverLetterError){
        setCoverLetter(null)
      }
    },[coverLetterError])

    useEffect(()=>{
      if(!!portfolioError){
        setPortfolio(null)
      }
    },[portfolioError])

    async function submitApplication(){
      setButtonLabel("SUBMITTING")
      let formValid = !!firstNameError || !!lastNameError || !!emailError || !!phoneNumberError || !!ResumeFileUploadError || !resumeFile || !!coverLetterError || !!portfolioError
      if(!formValid){
        setFormErrorMsg(null)
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('resume', resumeFile);
        formData.append('coverLetter', coverLetter);
        formData.append('portfolio', portfolio);
        if(!!url){
          formData.append('linkedIn', url);
        }
        if(!!message){
          formData.append('message', message);
        }

        let response = await fetch(`${process.env.NEXT_PUBLIC_API_URI}/api/wt/job-application`,{
          method: 'POST',
          // headers:{"Content-Type": "multipart/form-data"},
          body: formData
        })
        let body=await response.json();
        console.log("body",body)
        if(response.status==200){
          console.log("success",body)
          setButtonLabel("SUCCESS")
          setSuccess(true)
        }else{
          setButtonLabel("PLEASE FILL THE FORM")
          let error = body.errors;
          if(!!body.status && body.status=="error"){
            setResumeFileUploadError("Please upload a file.")
          }
          if(!!error?.firstName){
            setFirstNameError('Please enter first name.')
            setFirstNameTouched(true)
          }
          if(!!error?.lastName){
            setLastNameError('Please enter last name.')
            setLastNameTouched(true)
          }
          if(!!error?.email){
            setEmailTouched(true)
            setEmailError("Please enter a valid email address.")
          }
          if(!!error?.phoneNumber){
            setPhoneNumberTouched(true)
            setPhoneNumberError('Please enter a valid phone number.')
          }
          // if(!!error.email){
          //   setEmailError("Please enter a valid email address.")
          // }
        }
      }else{
        setFormErrorMsg("Please enter required fields.")
        setButtonLabel("SUBMIT")
      }
    }
    useEffect(()=>{
      if(success){
        containerFormRef.current?.scrollIntoView({block: "center"});
      }
    },[success])
    function submitWhenEnter(e){
      setFormErrorMsg(null)
      if (e.keyCode == 13) {
        submitApplication();
      }
    }
    return (
        <>
            <div ref={containerFormRef} className="container">
                {success ?
                  <div className="alignCenter msgSuccess">Your application has been submitted successfully. We will be in touch shortly.</div>
                  :
                  <div>
                  <div className="topSection">
                    <div className="heading black bigHeading mbHeading">{props.mainHeading}</div>
                     <div className="desc">{props.description}</div> 
                  </div>
                  <div className="detailsSection">
                      <div className="shortline black lpItalic personalInfo">{props.personalInformation}</div>
                      <div className="firstAndLastName flexItems">
                          <div className="firstName"><Input onKeyDown={e=>submitWhenEnter(e)} name="firstName" type="text" placeholder="First Name *" onChange={(e) => onFirstNameChange(e.target.value)} value={firstName} errMsg={firstNameTouched && !!firstNameError ? firstNameError:false}/></div>
                          <div className="lastName"><Input onKeyDown={e=>submitWhenEnter(e)} type="text" placeholder="Last Name *" onChange={(e) => onLastNameChange(e.target.value)} value={lastName} error={lastNameTouched && !!lastNameError} errMsg={lastNameTouched && !!lastNameError ? lastNameError:false}/> </div>
                      </div>
                      <div className="information flexItems">
                      <div ref={leftContent} className="leftContent">
                            <div className="email"><Input onKeyDown={e=>submitWhenEnter(e)} type="email" placeholder="Email Address *" onChange={(e) => onChangeEmail(e.target.value)} value={email} errMsg={emailTouched && !!emailError ? emailError:false}/></div>
                            <div className="linkedIn"><Input onKeyDown={e=>submitWhenEnter(e)} type="text" placeholder="LinkedIn Profile link" onChange={(e) => onChangeUrl(e.target.value)} value={url}/></div>
                      </div>
                        <div className="rightContent">
                            <div className="phoneNumber"><Input onKeyDown={e=>submitWhenEnter(e)} type="number" placeholder="Phone Number *" onChange={(e) => onChangeNumber(e.target.value)} value={phoneNumber} errMsg={phoneNumberTouched && !!phoneNumberError ? phoneNumberError:false}/></div>
                        </div>
                      </div>
                  </div>
                  <div className="documentsSection">
                    <div  className="shortline black lpItalic ">{props.smallHeading}</div>
                    <div className="resume">
                    <div className="inputWrapper1">
                        <Input id="resumeUpload" name="resume" type="file" placeholder="Resume *" maxFileSize={2e6} fileType={true} errMsg={!!ResumeFileUploadError ? ResumeFileUploadError:false} setFileError={(state)=>state?setResumeFileUploadError("Maximum file size should be 2MB."):setResumeFileUploadError(null)} onChange={(e)=>setResumeFile(e?.target?.files[0])}/>
                    </div>
                    </div>
                    <div className="twoContent">
                        <div className="content1">
                            <div className="inputWrapper">
                              <Input id="coverLetter" name="coverLetter" type="file" placeholder="Cover Letter" maxFileSize={2e6} fileType={true} errMsg={!!coverLetterError ? coverLetterError:false} setFileError={(state)=>state?setCoverLetterError("Maximum file size should be 2MB."):setCoverLetterError(null)} onChange={(e)=>setCoverLetter(e?.target?.files[0])}/>
                            </div>
                        </div>
                        <div className="content2">
                            <Input id="Portfolio" name="Portfolio" type="file" placeholder="Portfolio" maxFileSize={2e6} fileType={true} errMsg={!!portfolioError ? portfolioError:false} setFileError={(state)=>state?setPortfolioError("Maximum file size should be 2MB."):setPortfolioError(null)} onChange={(e)=>setPortfolio(e?.target?.files[0])}/>
                        </div>
                    </div>
                    <div className="message">
                        <Input onKeyDown={e=>submitWhenEnter(e)} type="text" placeholder="Message" onChange={(e) => setMessage(e.target.value)} value={message}/>
                    </div>
                  </div>
                  <div className="buttonWrapper alignCenter positionRelative">
                    <div onClick={()=>submitApplication()}><Button buttonType="rectangleActiveClassButton" buttonText={buttonLabel} href="#" textOnHover={buttonLabel} /></div>
                    {!!formErrorMsg && <p className="formErrorMsg blackCaption positionAbsolute">{formErrorMsg}</p>}
                  </div>
                </div>
                }
            </div>
            <style jsx>{`
                .buttonWrapper > button{
                  display: inline-block;
                  border: none;
                  padding: 0;
                }
                .formErrorMsg{
                    color: #ff0000;
                    left: 50%;
                    bottom: -50px;
                    transform: translateX(-50%);
                }
                .msgSuccess{
                  padding: 0 10%;
                }
                .topSection {
                    margin-bottom: 9rem;
                    padding:0 12.29%;
                }
                .information,.documentsSection,.firstAndLastName {
                    padding: 0 17.56%;
                    margin-right: -9.2%;
                }
                .personalInfo {
                    padding: 0 17.56%;
                }
                .leftContent,.rightContent ,.firstName,.lastName  {
                    width: 50%;
                    padding-right: 9.2%;
                }
                .resume,.message,.twoContent {
                    padding-right: 9.2%;
                }
                .shortline {
                    margin-bottom: 3.5rem;
                    font-size: 2.6rem;
                    line-height: 3.1rem;
                }
                .content1,.resume {
                  flex-direction: row-reverse;
                }

                // .inputWrapper {
                //   width:50%;
                // }
                // .buttonWrapper2 {
                //    width: 50%;
                //   margin-top: -5%;
                // }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .heading {
                        // margin-bottom: 4.5rem;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .formErrorMsg{
                      bottom: -35px;
                    }
                    .topSection {
                      padding: 0 0%;
                      text-align: center;
                    }
                    .information {
                      display: block;
                      // flex-direction: row-reverse;
                      padding: 0 8%;
                      margin-right:0;
                    }
                    .documentsSection {
                      padding: 0 8%;
                      margin-right: 0;
                    }
                    .twoContent {
                      display: block;
                      padding-left : 0;
                      padding-right: 0%;
                    }
                    .firstAndLastName {
                      display: block;
                      padding:0 8%;
                      margin-right:0;
                    }
                    .leftContent,.rightContent ,.content1,.content2,.firstName,.lastName {
                      width: 100%;
                      padding-right: 0%;
                    }
                    .resume,.message,twoContent {
                       padding-right: 0;
                    }

                }

            `}</style>
        </>
    )
}

export default ApplicationForm