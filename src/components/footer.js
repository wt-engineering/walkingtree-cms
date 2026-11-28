import React, { useState,useRef,useEffect } from "react";
import LongArrow from "./longArrow";
import {TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT,MOBILE_BREAKPOINT,API_URL} from "../config"
import Link from "next/link"
import { connect } from "react-redux";
import { setFooterHeight , setHeroImageLoaded} from "../redux/actions";
import Animate from "./animate";
import Loader from '../components/loader';
import { useSite } from "../lib/siteContext";

function Footer(props) {
  const { footer: f } = useSite();
  const footerRef = useRef();
  const [animationClass, setAnimationClass] = useState("none");
  const [addressId, setAddressId] = useState(0);
  const [dropDownId, setDropDownId] = useState(null);
  const [emailTouched, setEmailTouched] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [formValid, setFormValid] = useState(false)
  const [emailErrorMsg,setEmailErrorMsg]=useState(null)
  const [notification,setNotification] = useState("")
  const [success, setSuccess] = useState(false)
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  let officeAddresses = f.offices;

  const subscribe = async (email) => {
    setState("LOADING");
    setErrorMessage(null);
    const response = await fetch(`/wt/api/form/newsletter`,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email":email,
      })

    })
    let data = await response.json();
    if(response.status===200){
      setErrorMessage("Thank you for subscribing to our newsletter")
      // setState("SUCCESS");
    }else{
      setErrorMessage("Please enter a valid email address")
      // setError("ERROR")
    }
  };
  
  function changeAddress(id){
    setAddressId(id)
    setAnimationClass("opacityNone");
    setTimeout(() => {
      setAnimationClass("fadeUpAnimation");
    }, 100);
  }
  function dropDownClicked(id){
    if(dropDownId==id)
      setDropDownId(null)
    else
      setDropDownId(id)
    
    // props.setFooterHeight(footerRef.current?.getBoundingClientRect().height);
  }

  function validateEmail(val) {
       var mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(val.match(mailFormat)){
        setEmailError(false)
      }else {
        setEmailError(true)
        setEmailErrorMsg("Please enter a valid email address")
      }
    }
    function onChangeEmail(value){
      setEmailTouched(true)
      validateEmail(value)
      setEmail(value)
    }
    useEffect(() => {
      if(!emailError){
      setFormValid(true)
      }
    },[emailError])
    let year = new Date().getFullYear();

    function loaderAbsentAfterHeroModuleIsLoaded(){
      props.setHeroImageLoaded(false,<Loader/>)
    }
  return (
    <>
      <div className="footerContainer ">
      
          <div ref={footerRef} className="footerHeightCal paddedContent">
          {/* <Animate> */}
            <div className="footer">
              <div className="footerCols flexItems">
                <div className="col1">
                    <h1 className="sectionHeading description marginBottom23 black">Stay in Touch</h1>
                    <div className="signUpText greyCaption">Sign Up for email updates on the latest Walking Tree news, collections, campaigns and videos.</div>
                    <div className="emailForm positionRelative">
                      <input className="grey font12 moderatLight" type="email" placeholder="Email Address" onChange={(e) => onChangeEmail(e.target.value)}/>
                      <div className={`emailSubmitButton positionAbsolute grey moderatMedium font12 ${!!formValid  && !emailError ?"cursorPointer":""}`} onClick={()=>subscribe(email)}>Submit</div>
                    </div>
                  {!!errorMessage && 
                    <p>{errorMessage}</p>}
                </div>
                <div className={`col2 ${dropDownId==1?"expand":""}`}>
                  <h1 onClick={()=>dropDownClicked(1)} className="sectionHeading description marginBottom23 positionRelative black">{f.columns[0]?.title} <span className="dropDownIcon">{!!dropDownId && dropDownId==1?<div className="dropDownInactiveLine"></div>:<LongArrow arrowLength="8px" arrowWidth="1px" color="black" direction="bottom-left" lineLength="15px" marginTop="6px" transformX="5px" transformY="1px" />}</span></h1>
                  <ul className="footerLinks listStyleNone">
                    {(f.columns[0]?.links||[]).map((l)=>(<li key={l.href}><Link legacyBehavior href={l.href}><a onClick={() => loaderAbsentAfterHeroModuleIsLoaded()} className="bannerDescription richText">{l.label}</a></Link></li>))}
                  </ul>
                </div>
                <div className={`col3 ${dropDownId==2?"expand":""}`}>
                  <h1 onClick={()=>dropDownClicked(2)} className="sectionHeading description marginBottom23 positionRelative black">{f.columns[1]?.title} <span className="dropDownIcon">{!!dropDownId && dropDownId==2?<div className="dropDownInactiveLine"></div>:<LongArrow arrowLength="8px" arrowWidth="1px" color="black" direction="bottom-left" lineLength="15px" marginTop="6px" transformX="5px" transformY="1px" />}</span></h1>
                  <ul className="footerLinks listStyleNone">
                    {(f.columns[1]?.links||[]).map((l)=>(<li key={l.href}><Link legacyBehavior href={l.href}><a onClick={() => loaderAbsentAfterHeroModuleIsLoaded()} className="bannerDescription richText">{l.label}</a></Link></li>))}
                  </ul>
                </div>
                <div className={`col4 ${dropDownId==3?"expand":""}`}>
                  <h1 onClick={()=>dropDownClicked(3)} className="sectionHeading description marginBottom23 positionRelative black">{f.columns[2]?.title} <span className="dropDownIcon">{!!dropDownId && dropDownId==3?<div className="dropDownInactiveLine"></div>:<LongArrow arrowLength="8px" arrowWidth="1px" color="black" direction="bottom-left" lineLength="15px" marginTop="6px" transformX="5px" transformY="1px" />}</span></h1>
                  <ul className="footerLinks listStyleNone">
                    {(f.columns[2]?.links||[]).map((l)=>(<li key={l.href}><Link legacyBehavior href={l.href}><a onClick={() => loaderAbsentAfterHeroModuleIsLoaded()} className="bannerDescription richText">{l.label}</a></Link></li>))}
                  </ul> 
                </div>
                <div className="col5">
                  <div>
                    <h1 className="sectionHeading description marginBottom23 black">Offices</h1>
                    <ul className="addressNav listStyleNone flexItems">
                      {officeAddresses.map((item,id)=>{
                        return(
                          <li onClick={()=>changeAddress(id)} key={id}><a className={`bannerDescription underlineLR black ${id==addressId?"active":""}`}>{item.country}</a></li>
                        )
                      })}
                    </ul>
                    <div className={`address bannerDescription ${animationClass}`} dangerouslySetInnerHTML={{ __html: officeAddresses[addressId].address}}></div>
                  </div>
                  <div className="followUsTablet">
                  <h1 className="sectionHeading description black marginBottom15">Reach Us</h1>
                  <a href={`tel:${f.phone.replace(/[^+\d]/g,"")}`} className="phNo  greyCaption marginBottom7">{f.phone}</a>
                  <a href={`mailto:${f.email}`} className="email greyCaption">{f.email}</a>
                </div>
                </div>
              </div>
            </div>
            <div className="copyright DesktopAndMobile hideForMobile">
              <div className="rights  flexItems black">
                <div className="year moderatLight font12 ">© {year} Walking Tree Ventures. All rights reserved</div>
                <div className="socialIcons flexItems">
                  <div className="followUs">
                    <div><a href={`tel:${f.phone.replace(/[^+\d]/g,"")}`} className="phNo  moderatLight font12 marginBottom7 black">{f.phone}</a>
                    <span><a href={`mailto:${f.email}`} className="email moderatLight font12 black">{f.email}</a></span>
                    <span className="borderRight"></span></div>
                  </div>
                    {/* <div className="socialIcon one cursorPointer"><img src="/images/twitterBlack.png" alt="Icon" className="width-100"/></div> */}
                    <div className="socialIcon one cursorPointer"><img src="/images/linkedinBlack.png" alt="Icon" className="width-100"/></div>
                    {/* <div className="socialIcon three cursorPointer"><img src="/images/fbIconBlack.png" alt="Icon" className="width-100"/></div> */}
                  </div>
              </div>
            </div>
            <div className="copyright showForMobile alignCenter">
              <div className="rights black">
                <div className="year moderatLight font10 ">© {year} Walking Tree Ventures. All rights reserved</div>
                <div className="socialIcons flexItems">
                  <div className="followUs">
                    <div><a href={`tel:${f.phone.replace(/[^+\d]/g,"")}`} className="phNo  moderatLight font10 marginBottom7 black">{f.phone}</a>
                    <span><a href={`mailto:${f.email}`} className="email moderatLight font10 black">{f.email}</a></span>
                    </div>
                  </div>
                    {/* <div className="socialIcon one cursorPointer"><img src="/images/twitterBlack.png" alt="Icon" className="width-100"/></div> */}
                    <div className="socialIcon two cursorPointer"><img src="/images/linkedinBlack.png" alt="Icon" className="width-100"/></div>
                    {/* <div className="socialIcon three cursorPointer"><img src="/images/fbIconBlack.png" alt="Icon" className="width-100"/></div> */}
                  </div>
              </div>
            </div>
            {/* </Animate> */}
          </div>
        
        
        <div className="copyright onlyForIpad alignCenter">
        <Animate> 
        <div className="rightsIpad  flexItems black ">
            <div className="yearIpad moderatLight font12 ">© {year} Walking Tree Ventures. All rights reserved</div>
            <div className="socialIcons flexItems">
              <div className="followUs">
                <div><a href={`tel:${f.phone.replace(/[^+\d]/g,"")}`} className="phNo  moderatLight font12 marginBottom7 black">{f.phone}</a>
                 <span><a href={`mailto:${f.email}`} className="email moderatLight font12 black">{f.email}</a></span>
                 <span className="borderRight"></span></div>
              </div>
                {/* <div className="socialIcon one cursorPointer"><img src="/images/twitterBlack.png" alt="Icon" className="width-100"/></div> */}
                <div className="socialIcon two cursorPointer"><img src="/images/linkedinBlack.png" alt="Icon" className="width-100"/></div>
                {/* <div className="socialIcon three cursorPointer"><img src="/images/fbIconBlack.png" alt="Icon" className="width-100"/></div> */}
              </div>
          </div>
          </Animate>
        </div>
       
      </div>

      <style jsx>{`
        .onlyForIpad{
          display:none;
        }
        .borderRight{
          border-right: 1px solid #000000;
          padding-bottom: 5px;
        }
        .phNo,.email{
          margin-right: 1.5rem;
          text-decoration: none;
        }
        .errMSg {
          margin-top:1rem;
        }
        .inactive{
          cursor:default;
        }
        .active{
          cursor:pointer;
        }
        .footer {
          padding-bottom: 6.4rem;
        }
        .socialIcons{
          align-items:center;
          justify-content: center;
        }
        .socialIcons .socialIcon{
          margin-right:2rem;
          // height:1.8rem;
          margin-left: 1rem
        }
        .socialIcons .socialIcon:last-child{
          margin-right:0rem;
        }
        .socialIcon.one,.socialIcon.two{
          width:1.8rem;
        }
        .socialIcon.three{
          width:0.9rem;
        }
        .footerCols{
          margin-bottom:4rem;
        }
        .addressNav{
          margin-bottom:1rem;
        }
        .opacityNone{
          opacity:0;
        }
        .addressNav a{
          text-decoration:none;
          color:#000000;
        }
        .addressNav li{
          margin-right:1.7rem;
          cursor:pointer;
        }
        .addressNav li:last-child{
          margin-right:0rem;
        }
        .address{
          color:#6d6e71b0;
        }
        .footerLinks a{
          text-decoration:none;
          color:#6d6e71b0;
        }
        .footerLinks li{
          margin-bottom:0.6rem;
        }
        .footerLinks li:last-child{
          margin-bottom:0rem;
        }
        .footerLinks a:hover{
          color:#414042;
        }
        .footerContainer {
          background: #d5e4ee;
        }
        .footerHeightCal{
          padding-top: 14rem;
          padding-bottom: 2.5rem;
        }
        .rights {
          padding-top: 1.3rem;
          color: #313133;
          border-top: 0.7px solid #535353;
          justify-content: space-between;
        }
        .emailSubmitButton {
          right: 0;
          bottom: 9px;
          padding-left:19%;
        }
        .signUpText {
          margin-bottom: 3rem;
          color:#6d6e71b0;
        }
        .emailForm {
          border-bottom: 1px solid #000000;
          padding-bottom: 9px;
        }
        .emailForm input {
          width: 80%;
          background: #abd7ef00;
          line-height: 16px;
        }
        .col1 {
          width: 29.1%;
          padding-right: 7.2%;
        }
        .col2 {
          width: 17.5%;
          padding-right:1.5%;
        }
        .col3 {
          width: 15.7%;
          padding-right:1.5%;
        }
        .col4 {
          width: 19.1%;
          padding-right:1.5%;
        }
        .col5 {
          width: 18.6%;
          // padding-right:1.5%;
        }
        .dropDownIcon{
          display:none;
        }
        .followUsTablet{
          display:none;
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          .footerCols,.followUsTablet{
            display:block;
          }
          .followUsTablet{
             display:none;
          }
          .DesktopAndMobile{
            display:none;
          }
          .onlyForIpad{
            display:block;
            padding-bottom: 1rem;
            padding-left: 2rem;
            padding-right: 2rem;
          }
          .socialIcons .socialIcon{
            margin-right:1rem;
            height:1.8rem;
            margin-left: 1.5rem
          }
          .socialIcons .socialIcon:last-child{
            margin-right:0rem;
          }
          .rightsIpad {
            padding-top: 1.3rem;
            color: #313133;
            border-top: 0.7px solid #535353;
            justify-content: space-between;
            margin-bottom: 2rem;
          }
          .dropDownIcon{
            display:block;
            position: absolute;
            right: 8px;
            transform: translateY(-50%);
            top: 50%;
          }
          .col1,.col2,.col3,.col4,.col5{
            width:100%;
            padding-right:0;
          }
          .footerHeightCal{
            padding:14rem 6% 2.5rem;
          }
          .col1{
            padding-right: 25%;
            margin-bottom:6.2rem;
          }
          .col2 .sectionHeading,.col3 .sectionHeading,.col4 .sectionHeading{
            margin-bottom:0;
            padding:2.3rem 1.8rem 2.3rem 0;
          }
          .col2,.col3,.col4{
            border-bottom:1px solid #000000;
            padding-left:1.8rem;
            padding-bottom:0rem;
            transition:all 0.3s ease-out;
          }
          .expand.col2,.expand.col3,.expand.col4{
            padding-bottom:2.3rem;
            transition:all 0.3s ease-out;
          }
          .footerLinks,.footerLinks > *{
            height:0;
            overflow:hidden;
          }
          .expand .footerLinks,.expand .footerLinks > *{
            height:auto;
          }
          .footerLinks li{
            margin-bottom:0rem;
          }
          .expand .footerLinks li{
            margin-bottom:1rem;
          }
          .expand .footerLinks li:last-child{
            margin-bottom:0rem;
          }
          .dropDownInactiveLine{
            width:2rem;
            height:1px;
            background:#000000;
          }
          .col4{
            margin-bottom:10rem;
          }
          .col5{
            display:flex;
            padding-right:0;
            justify-content: space-between;
            align-items: flex-end;
          }
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .footerHeightCal {
            padding:4rem 5% 2.5rem;
          }

        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .footerHeightCal {
            padding:8rem 3.1rem 2.5rem;
          }
          .forIpadLastLine{
            display:none;
          }
          .onlyForIpad{
            display:none;
          }
          .socialIcons .socialIcon{
            margin-right:2rem;
            height:1.8rem;
            margin-left: 0rem
          }
          .socialIcons .socialIcon:last-child{
            margin-right:0rem;
          }
          .col1{
            padding-right: 0%;
            margin-bottom:2.2rem;
          }
          .col2 .sectionHeading,.col3 .sectionHeading,.col4 .sectionHeading{
            padding:1.7rem 1.8rem 1.7rem 0;
          }
          .col4{
            margin-bottom:4.8rem;
          }
          .footerCols{
            margin-bottom:0rem;
          }
          .rights {
            padding-top: 1.8rem;
            justify-content: space-between;
            flex-direction: column;
            align-items: center;
          }
          .rights > div:first-child{
            margin-bottom:1.5rem;
          }
        }
      `}</style>
    </>
  );
}
function mapStateToProps({ common }) {
  return { common };
}
export default connect(mapStateToProps, { setFooterHeight, setHeroImageLoaded })(Footer);