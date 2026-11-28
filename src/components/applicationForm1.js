import React,{ useEffect, useRef, useState} from 'react'
import Input from '../components/input'
import Button from './button'
import {TABLET_BREAKPOINT, MOBILE_BREAKPOINT} from "../config"
import Animate from "./animate";

function ApplicationForm(props) {

    const mainHeading = useRef();
    const description = useRef(); 
    const info = useRef();
    const leftContent = useRef();
    const rightContent = useRef();
    const documentsSection = useRef();
    const buttonWrapper = useRef();
    const firstAndLastName = useRef();
    const [formValid, setFormValid] = useState(false)
    const [firstName, setFirstName] = useState(null)
    const [firstNameError, setFirstNameError] = useState(false)
    const [firstNameTouched, setFirstNameTouched] = useState(false)
    const [lastName, setLastName] = useState(null)
    const [lastNameError, setLastNameError] = useState(false)
    const [lastNameTouched, setLastNameTouched] = useState(false)
    const [pronoun, setPronoun] = useState(null)
    const [pronounTouched, setPronounTouched] = useState(false)
    const [email,setEmail] = useState(true)
    const [emailTouched, setEmailTouched] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState(true)
    const [phoneNumberError, setPhoneNumberError] = useState(false)
    const [phoneNumberTouched, setPhoneNumberTouched] = useState(false)
    const [url, setUrl] = useState(null)
    const [urlError, setUrlError] = useState(false)
    const [urlTouched, setUrlTouched] = useState(false)
    const [ResumeFileUploadError, setResumeFileUploadError] = useState(false)
    

    function validateFirstName(val){
      if(val.length < 1)
      setFirstNameError('min')
      else if(val.length > 25)
      setFirstNameError('max')
      else 
      setFirstNameError(false)
    }
    function onFirstNameChange (val) {
      setFirstNameTouched (true)
      validateFirstName(val)
      setFirstName(val)
    }

    function validateLastName (val) {
      if(val.length <1)
      setLastNameError('min')
      else if(val.length>25)
      setLastNameError('max')
      else
      setLastNameError(false) 
    }
    function onLastNameChange (val) {
        setLastNameTouched(true)
        validateLastName(val)
        setLastName(val)
    }

    function onPronounTouchChange (val) {
      setPronounTouched(true)
      setPronoun(val)
    }

    function validateEmail(val) {
      var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(val.match(mailFormat)){
        setEmailError(false)
      }else {
        setEmailError(true)
      }
    }
    function onChangeEmail(value){
      setEmail(value)
      validateEmail(value)
      setEmailTouched(true)
    }

    function validatePhoneNumber(val) {
      if (val< 0){
       setPhoneNumberError(false)
      }else{
          if(val.length <10) {
            setPhoneNumberError(true)
          }else if(val.length >15){
            setPhoneNumberError(true)
          }else{
            setPhoneNumberError(true)
          }
        } 
     }  
     function onChangeNumber(val) {
      setPhoneNumberTouched(true)
      validatePhoneNumber(val)
      setPhoneNumber(val)
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
    function onChangeUrl(str) {
      setUrlTouched(true)
      // validURL(str)
      setUrl(str)
    } 
    function onResumeFileUpload(e) {
      if(e.target.files[0].size>2){
        setResumeFileUploadError(true)
      }else{
        setResumeFileUploadError(false)
      }
    }
    useEffect(() => {
      if(!!firstNameError || !!lastNameError || !!emailError || !!phoneNumberError){
        setFormValid(true) 
      }
    },[formValid,firstNameError,lastNameError,emailError,phoneNumberError])
    return (
        <>
            <div className="container">
                <div className="topSection">
                    <div className="heading black bigHeading mbHeading">{props.mainHeading}</div>
                     <div className="desc">{props.description}</div> 
                </div>
                <div className="detailsSection">
                    <div className="shortline lpItalic personalInfo">{props.personalInformation}</div>
                    <div className="firstAndLastName flexItems">
                        <div className="firstName"><Input type="first name" placeholder="First Name*" onChange={(e) => onFirstNameChange(e.target.value)} value={firstName} error={firstNameTouched && !!firstNameError} errMsg={!!firstNameError=='min'? "Please Enter a valid first name":"first name should not exceed 25 characters" }/></div>
                        <div className="lastName"><Input type="text" placeholder="Last Name*" onChange={(e) => onLastNameChange(e.target.value)} value={lastName} error={lastNameTouched && !!lastNameError} errMsg={!!lastNameError =='min' ? "Please Enter a valid last name": 'first name should not exceed 25 characters'}/> </div>
                    </div>
                    <div className="information flexItems">
                    <div ref={leftContent} className="leftContent">
                          <div className="email"><Input type="email address" placeholder="Email Address*" onChange={(e) => onChangeEmail(e.target.value)} value={email} error={emailTouched && !!emailError} errMsg={!!emailError? 'Please Enter a valid email address' : ''}/> </div>
                          <div className="linkedIn"><Input type="text" placeholder="LinkedIn Profile link" onChange={(e) => onChangeUrl(e.target.value)} value={!!urlTouched?url:null}/></div>
                    </div>
                      <div className="rightContent">
                          <div className="phoneNumber"><Input type="text" placeholder="Phone Number*" onChange={(e) => onChangeNumber(e.target.value)} value={phoneNumber} error={phoneNumberTouched && !!phoneNumberError} errMsg={!!phoneNumberError?'Please enter a valid phone number' : ''}/></div>
                      </div>
                    </div>
                </div>
                  <div className="documentsSection">
                    <div  className="shortline lpItalic ">{props.smallHeading}</div>
                    <div className="resume">
                    <div className="inputWrapper1">
                        <Input id="resumeUpload" type="file" placeholder="Resume *" fileType={true} onChange={(e)=>(e)}/>
                    </div>
                    </div>
                    <div className="twoContent">
                        <div className="content1">
                            <div className="inputWrapper">
                              <Input onChange={(e)=>(e.target.value)}  type="file" placeholder="Cover Letter" fileType={true}/>
                            </div>
                        </div>
                        <div className="content2">
                            <Input onChange={(e)=>(e.target.value)} type="file" placeholder="Portfolio" fileType={true}/>
                        </div>
                    </div>
                    <div className="message">
                        <Input type="text" placeholder="Message"/>
                    </div>
                </div>
                  <div className="buttonWrapper alignCenter">
                   <Button  buttonType="rectangleActiveClassButton" buttonText="Submit" href="#" textOnHover="Submit" />
                </div>
            </div>
            <style jsx>{`
                .heading {
                    // margin-bottom: 5.5rem;
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