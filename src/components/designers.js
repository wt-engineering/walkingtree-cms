import React, { useRef } from 'react'
import LongArrow from './longArrow'
import {MOBILE_BREAKPOINT,MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from '../config'
import Image from './Image';
import Animate from "./animate"
export default function Designers(props) {
    const shortHeading=useRef(null);
    const leftContainerRef=useRef(null);
    const rightImage=useRef(null);
    const rightImageMobile=useRef(null);
    const desc=useRef(null)
    const paraOne=useRef(null)
    const paraTwo=useRef(null);
    
    return (
        <>
          <div className="designersSection">
          <Animate><h2 className="shortHeading alignCenter mainShortHeading mbBelowShortHeading" ref={shortHeading}>{props.shortHeading}</h2></Animate>
          <Animate><p className="desc mbHeading bigDescription alignCenter black" ref={desc}>{props.desc}</p></Animate>
            <div className="imageAndTextSection">
              <div className="left">
                  <div className="leftContainer" ref={leftContainerRef}>
                  <Animate>
                      <div className="leftImage hideForTablet"><Image alt={"Image"} originalSrc={props.leftImage} width={365} height={486} /></div>
                        <div className="textAndArrow flexItems marginBottom10 ">
                          <div className="arrow">
                              <LongArrow
                                  arrowLength="5px"
                                  lineLength="10px"
                                  transformX="3.3px"
                                  transformY="1px"
                                  arrowWidth="1px"
                                  color="black"
                                  direction="up"
                                  marginTop="5px"
                                  marginTopMobile="3px"
                              />
                          </div>
                          {props.cmsRichContent == true && <div className="text greyCaption" dangerouslySetInnerHTML={{__html:props.caption}}></div>}
                          {!props.cmsRichContent && <div className="text greyCaption" >{props.caption}</div>}
                      </div> 
                      <div>
                      <div className="textAndArrow flexItems hideForTab">
                          <div className="arrow">
                              <LongArrow
                                  arrowLength="5px"
                                  lineLength="10px"
                                  transformX="3.3px"
                                  transformY="1px"
                                  arrowWidth="1px"
                                  color="black"
                                  direction="right"
                                  marginTop="5px"
                                  // marginTopMobile="1px"

                              />
                          </div>
                          {props.cmsRichContent == true && <div className="text greyCaption" dangerouslySetInnerHTML={{__html:props.caption2}}></div>}
                          {!props.cmsRichContent && <div className="text greyCaption" >{props.caption2}</div>}

                      </div>
                      </div> 
                      </Animate>
                  </div>
         
              </div>
              <div className="right" >
              <Animate><div ref={rightImage} className="rightImage"><Image alt={"Image"} originalSrc={props.rightImage} width={670} height={365} /></div></Animate>
              <div className="showForTab">
              <div className="textAndArrow flexItems">
                          <div className="arrow1 ">
                              <LongArrow
                                  arrowLength="5px"
                                  lineLength="10px"
                                  transformX="3.3px"
                                  transformY="1px"
                                  arrowWidth="1px"
                                  color="black"
                                  direction="up"
                                  marginTop="10px"
                                  marginTopMobile="5px"

                              />
                          </div>
                          {props.cmsRichContent == true && <div className="text greyCaption" dangerouslySetInnerHTML={{__html:props.caption2}}></div>}
                          {!props.cmsRichContent && <div className="text greyCaption" >{props.caption2}</div>}

                </div>
                </div>  
              <Animate> <p className="paraOne description grey" ref={paraOne}>{props.text1}</p></Animate>
              <Animate> <p className="paraTwo description grey" ref={paraTwo}>{props.text2}</p></Animate>
              <Animate> <p className="paraTwo description grey" ref={paraTwo}>{props.text3}</p></Animate>
              </div>
            </div>
          </div>   
          <style jsx>{`
              .designersSection{
                padding:0 10.34% 0 12.29%;
              }
              .rightImage{
                margin-bottom:2.6rem;
              }
              .left{
                width:40%;
              }
              .leftContainer{
                padding-right:9rem;
              }
              .right{
                width:60%;
              }
              .desc{
                padding:0 12%;
              }
              .imageAndTextSection{
                display:flex;
              }
              .leftImage{
                margin-bottom:1.5rem;
              }
              .textAndArrow .arrow{
                margin:2px 6px 0 0.2rem;
              }
              .arrow{
                margin-right:1rem;
              }
              .showForTab{
                display:none;
              }
              @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                .designersSection{
                  padding:0 9.7% 0;
                }
                .leftContainer{
                  padding-right:15%;
                }
              }
              @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                .hideForTab{
                  display: none;
                }
                .designersSection{
                  padding:0 8.1rem 0;
                }
                .showForTab{
                  display:block;
                }
                .leftContainer{
                  padding:8.8rem 19% 0;
                }
                .imageAndTextSection{
                  flex-direction:column-reverse;
                }
                .paraTwo{
                  margin:0;
                }
                .right{
                  width:100%;
                }
                .left{
                  width:100%;
                }
                .desc {
                  padding: 0 0;
                }
                .textAndArrow .arrow{
                  margin:0px 9px 0 0.1rem;
                }
              }
              @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                  .designersSection{
                    padding:0 2.1rem;
                  }
                  .imageAndTextSection{
                    flex-direction: column-reverse;
                  }
                  .rightImage{
                    margin-bottom:3rem;
                  }
                  .desc{
                    padding:0 1%;
                  }
                  .left,.right{
                    width:100%;
                  }
                  .leftContainer{
                    padding:3rem 0 0 0;
                    margin-bottom:0rem;
                  }
                  .leftImage{
                    margin-bottom:0.7rem;
                  }
                  .paraOne{
                    text-align: left;
                    padding: 0;
                  }
                  .paraTwo{
                    text-align: left;
                  }
                  .textAndArrow .arrow1{
                    margin:-6px 8px 0 0.1rem;
                  }
                  .textAndArrow .arrow1{
                    margin:-1px 8px 0 0.1rem;
                  }
              }
          `}</style>
        </>
    )
}
