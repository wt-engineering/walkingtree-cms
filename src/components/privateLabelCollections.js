import React ,{useRef}from 'react'
import LongArrow from './longArrow'
import {MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from '../config'
import Button from "../components/button"
import Image from './Image';
import Animate from './animate';

export default function PrivateLabelCollections(props) {
    const col1SmallImgRef = useRef();
    const col1BigImgRef = useRef();
    const mobileImgCol3Ref = useRef();
    const buttonRef = useRef();
    const mobileSmallImagesRef = useRef();
    const col3ImagesRef = useRef();
    const tabletTwoColImageRef = useRef();
    const col1BigImgMobileRef = useRef();
    const shortHeading1Ref = useRef();
    const mainHeading1Ref = useRef();
    const shortHeading2Ref = useRef();
    const mainHeading2Ref = useRef();
    const paraOneRef = useRef();

    return (
        <>
            <div className="cultureSection">
                <div className="sectionWrapper flexItems">
                    <div className="col1 hideForMobile">
                        <Animate>
                          <div ref={col1SmallImgRef} className="col1Small">
                              <div className="mbBelowShortHeading"><Image width={198} height={158} alt="Image" className="width-100" originalSrc={props.img1}/></div>
                              { <div className="textAndArrow flexItems">
                                  <div className="arrow">
                                      <LongArrow
                                          arrowLength="5px"
                                          lineLength="10px"
                                          transformX="3.3px"
                                          transformY="1px"
                                          arrowWidth="1px"
                                          color="black"
                                          direction="up"
                                          marginTop="6px"
                                      />
                                  </div>
                                {!!props.cmsRichContent &&  <div className="text greyCaption" dangerouslySetInnerHTML={{__html:props.caption}}></div>}
                                {!props.cmsRichContent &&  <div className="text greyCaption">{props.caption}</div>}
                              </div>}
                          </div>
                        </Animate>
                        <div className="col1Big" ref={col1BigImgRef}>
                            <Animate><div className="mbBelowShortHeadingBelow"><Image height={360} width={270}alt="Image" className="width-100" originalSrc={props.img2}/></div></Animate>
                        </div>
                    </div>
                    <div className="col2">
                        <div className="middleText">
                            <Animate><div className="shortHeading mbBelowShortHeading mainShortHeading hideForMobile fontWeight " ref={shortHeading1Ref}>{props.shortHeading}</div></Animate>
                            <Animate><div className= "mainHeading mbHeading smallHeading hideForMobile fontWeight black" ref={mainHeading1Ref}>{props.heading1}</div></Animate>
                            <div className="showForMobile">
                                <Animate><div className="col3-img1"><Image height={554} width={315} alt="Image" className="width-100" ref={mobileImgCol3Ref} originalSrc={props.img3}/></div></Animate>
                                <Animate><div className="shortHeading mbBelowShortHeading mainShortHeading fontWeight" ref={shortHeading2Ref}>{props.shortHeading}</div></Animate>
                                <Animate><div className= "mainHeading mbHeading smallHeading fontWeight black" ref={mainHeading2Ref}>{props.heading1}</div></Animate>
                            </div>
                            <Animate><div className="paraOne space40 " ref={paraOneRef}>{props.desc1}</div></Animate>
                            {!!props.buttonText && !!props.buttonTextOnHover && 
                              <Animate>
                                <div ref={buttonRef} className="button hideForMobile">
                                    <Button
                                        buttonText={props.buttonText}
                                        textOnHover={props.buttonTextOnHover}
                                        buttonType="rectangle"
                                      />
                                </div>
                              </Animate>
                            }
                            <Animate>
                                <div className="showForMobile mobileSmallImagesWrapper" ref={mobileSmallImagesRef}>
                                    <div className="mobileSmallImages">
                                        <div className="mobileSmallImage1 marginBottom16">
                                            <div className="height-100"><Image height={174} width={198}  alt="Image" className="width-100" originalSrc={props.img4}/></div>
                                        </div>
                                        <div className="mobileSmallImage2 marginBottom16">
                                            <div className="col3-img2"><Image width={198} height={158} alt="Image" className="width-100" originalSrc={props.img1}/></div> 
                                        </div>
                                    </div>
                                    <div className="textAndArrow flexItems mobileSmallImageLeftCaption">
                                        {!!props.cmsRichContent && 
                                        <div className="arrow">
                                            <LongArrow
                                                arrowLength="3px"
                                                lineLength="6px"
                                                transformX="1.8px"
                                                transformY="0px"
                                                arrowWidth="1px"
                                                color="black"
                                                direction="up"
                                                marginTop="5px"
                                            />
                                        </div>}
                                        {!!props.cmsRichContent && <div className="text greyCaption" dangerouslySetInnerHTML={{__html:props.captionMobile}}></div>}
                                        {!props.cmsRichContent && <div className="text greyCaption">{props.captionMobile}</div>}
                                    </div>
                                </div>
                            </Animate>
                            <div className="showForMobile">
                                <div ref={col1BigImgMobileRef} className="col1Big mobile">
                                    <Animate><div><Image width={270} height={360}  alt="Imagebig" className="width-100" originalSrc={props.img2}/></div></Animate>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={col3ImagesRef} className="col3 hideForMobile hideForIpad">
                        <div className="col3-img1"><Animate><Image height={551} width={314} alt="Image" className="width-100" originalSrc={props.img3}/></Animate></div>
                        <div className="col3-img2"><Animate><Image height={174} width={198}  alt="Image" className="width-100" originalSrc={props.img4}/></Animate></div>
                    </div>
                </div>
            </div>   
            <div ref={tabletTwoColImageRef} className="col3Tab flexItems hideForMobile">
                <div className="col3-img1Tab"><Animate><Image height={429} width={318} alt="Image" className="width-100 hideForDesktopAndMobile" originalSrc={props.img3ForTablet}/></Animate></div>
                <div className="col3-img2Tab"><Animate><Image height={429} width={318} alt="Image" className="width-100 hideForDesktopAndMobile" originalSrc={props.img4ForTablet}/></Animate></div>
            </div>
            <style jsx>{`
                .hideForDesktopAndMobile {
                    display: none;
                }
                .cultureSection{
                    padding-left:11.25%;
                    padding-right: 8.2%;
                }
                .col3-img1{
                    margin-bottom:62.3px;
                }
                .col3-img2{
                    padding-right:11rem;
                }
                .col2{
                    width: 49.8%;
                    padding-left: 4%;
                    padding-right: 8%;
                }
                .col3{
                    width:27%;
                }
                .col3Tab {
                    display: none;
                }
                .textAndArrow{
                    align-items: flex-start;
                }
                .textAndArrow .arrow{
                    margin-right:1.3rem;
                    margin-bottom: 4px;
                }
                .col1Small div img, .col1Big div img{
                    margin-bottom:1.6rem;
                }
                .col1Small{
                    margin-bottom:3rem;
                }
                .col1{
                    width:23.2%;
                }
                .paraOne{
                    margin-bottom:5.5rem;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .hideForIpad{
                        display: none;
                    }
                    .hideForDesktopAndMobile {
                        display: flex;
                    }
                    .col1Small{
                        padding-right:0rem;
                    }
                    .forTablet {
                        display: none;
                    }
                    .col1{
                        padding-right:6%;
                        width: 35%;
                    }
                    .col2 {
                        width: 65%;
                        padding-right:0;
                        padding-left: 0%;
                    }
                    .col3-img1{
                        margin-bottom:0px;
                        padding-right: 0rem;
                        flex-wrap: nowrap;
                    }
                    .col3-img2{
                        padding-right:0rem;
                    }
                    .col3Tab {
                        display: flex;
                        margin-top: 5rem;
                        padding: 0 11.6%;
                        margin-right:-1.5rem;
                    }
                    .col3Tab > div{
                        width:50%;
                        padding-right:1.5rem;
                    }
                    .paraOne{
                        margin-bottom:2.7rem;
                        margin-right: 0;
                    }
                    .sectionWrapper {
                        flex-wrap: wrap;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .sectionWrapper{
                        display:block;
                    }
                    .cultureSection{
                        padding-left:2.1rem;
                        padding-right: 2.1rem;
                    }
                    .col2 {
                        width: 100%;
                    }
                    .col3-img1{
                        margin-bottom:3.8rem;
                    }
                    .middleText{
                        padding-right:0rem;
                    }
                    .col3-img2{
                        padding-right:0rem;
                    }
                    .col3Tab {
                        display: none;
                    }
                    .mobileSmallImages{
                        margin-right:-1.1rem;
                    }
                    .mobileSmallImage2,.mobileSmallImage1{
                        width:100%;
                        height:100%;
                        padding-right:1.1rem;
                    }
                    .mobileSmallImage1 img{
                        margin-bottom: 7rem
                    }
                    .mobileSmallImageLeftCaption{
                        padding-left:1.2rem;
                        margin-bottom: 7rem;
                    }
                    .paraThree{
                        padding-right: 0px;
                        margin-bottom:0rem;
                    }
                    .shortHeading{
                        padding: 0 3rem 0 1.2rem;
                    }
                    .mainHeading{
                        margin-bottom:1.8rem;
                        padding-right:6%;
                        padding: 0 3rem 0 1.2rem;
                    }
                    .paraOne{
                        margin-bottom:6.8rem;
                        padding: 0 3rem 0 1.2rem;
                    }
                    .paraTwo{
                        margin-bottom:3.4rem;
                    }
                    .col1Big.mobile .textAndArrow{
                        padding-left:2%;
                    }
                    .col1Big.mobile .arrow{
                        margin-right:0.8rem;
                    }
                    .hideForDesktopAndMobile {
                        display: none;
                    }
                }
            `}</style>
        </>
    )
}
