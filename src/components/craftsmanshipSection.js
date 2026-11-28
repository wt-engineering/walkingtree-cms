import React, { useContext, useEffect ,useRef} from 'react'
import LongArrow from './longArrow'
import {MOBILE_BREAKPOINT,lineAnimationTiming, TABLET_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from '../config'
import Image from './Image';
import Animate from './animate';

export default function CraftsmanshipSection(props) {

    const leftTopImage1Ref = useRef();
    const leftTopImage2TabRef = useRef();
    const serialNumRef = useRef();
    const tabletMiddleImagesRef = useRef();
    const shortHeadingRef = useRef();
    const middleRowRightRef = useRef();
    const bottomSectionRef = useRef();
    const mobileShortHeading = useRef();
    const mobileMiddleLayerRight = useRef();
    const mobileTopImg = useRef();
    const mobileMiddleLayerLeft = useRef();

    const centerTextForTabletRef = useRef();
    const mainHeadingRef = useRef();
    const greyDescRef = useRef();
    const paraOneRef = useRef();
    const paraTwoRef = useRef();
    const mobileMainHeading = useRef();
    const mobileGreyText = useRef();
    const mobileParaOne = useRef();
    const mobileParaTwo = useRef();
    const mobileBottomSectionFlex = useRef();
    const mobileTextSection = useRef();
    // const {scroll,ScrollTrigger}=useContext(SmoothScrollContext)
  
    return (
        <>
            <div className="craftsSection hideForMobile lesserAdditionalPadding">
                <div className="topSection">
                    <div className="topLeft">
                        <Animate>
                          <div className="topImg">
                            <div ref={leftTopImage1Ref}><Image alt={"Image"} originalSrc={props.leftImage1} width={513} height={324} /></div>
                            {/* <div ref={leftTopImage2TabRef} className="middleLayerLeft Tab forTabletImage richText">
                                  <Image alt={"Image"} originalSrc={props.leftImage2} width={228} height={275} />
                                  <div className="textAndArrow flexItems tabs">
                                    <div className="arrow">
                                        <LongArrow
                                            arrowLength="5px"
                                            lineLength="10px"
                                            transformX="3.3px"
                                            transformY="1px"
                                            arrowWidth="1px"
                                            color="black"
                                            direction="up"
                                            marginTopMobile="4px"
                                            marginTop='9px'
                                        />
                                    </div>
                                    {props.cmsRichContent == true && <div className="text greyCaption " dangerouslySetInnerHTML={{__html: props.leftCaption}}></div> }
                                    {!props.cmsRichContent  && <div className="text greyCaption" >{props.leftCaption}</div> }
                                  </div> 
                                <div><Image alt={"Image"} originalSrc={props.leftImage3} width={228} height={275} /></div>
                            </div> */}
                          </div>
                        </Animate>
                    </div>
                    <div className="topRight">
                        <Animate>
                          <div className="topRightText">
                              <h2 ref={shortHeadingRef} className="shortHeading mainShortHeading mbBelowShortHeading richText">{props.shortHeading}</h2>
                              {props.cmsRichContent ? <h1 ref={mainHeadingRef} className="mainHeading bigHeading mbHeading black richText" dangerouslySetInnerHTML={{__html:mainHeadingSub1}}></h1> :
                              <h1 ref={mainHeadingRef} className="mainHeading bigHeading mbHeading  richText black">{props.mainHeadingSub1}</h1>
                              }
                              <p ref={greyDescRef} className="greyText bigDescription grey">{props.greyDescription}</p>
                              <p ref={paraOneRef} className="paraOne description  grey">{props.text1}</p>
                              <p ref={paraTwoRef} className="paraTwo description forTabletTex  grey">{props.text2}</p>
                          </div>
                        </Animate>
                    </div>
                </div>
                <Animate>
                  <div className="middleRowNewWrapper">
                    <div ref={tabletMiddleImagesRef} className="middleRowLeft">
                      <div className="middleLayerLeft tab">
                          <div><Image alt={"Image"} originalSrc={props.leftImage2} width={228} height={275} /></div>
                          <div><Image alt={"Image"} originalSrc={props.leftImage3} width={228} height={275} /></div>
                      </div>
                      <div className="textAndArrow flexItems prLeftCaptions">
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
                            />
                        </div>
                        {props.cmsRichContent == true && <div className="text greyCaption" dangerouslySetInnerHTML={{__html: props.leftCaption}}></div> }
                        {!props.cmsRichContent  && <div className="text greyCaption" >{props.leftCaption}</div> }
                      </div>
                      {!props.leftCaption2 ?
                      <div className="textAndArrow flexItems prLeftCaptions">
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
                                // reqMargin={props.reqMargin}
                            />
                        </div>
                        {props.cmsRichContent == true && <div className="text greyCaption" dangerouslySetInnerHTML={{__html: props.leftCaption2}}></div> }
                        {!props.cmsRichContent  && <div className="text greyCaption" >{props.leftCaption2}</div> }
                      </div>:<></>}
                    </div>
                    <div ref={middleRowRightRef} className="middleLayerRight">
                      <div className="middleLayerRightImg"><Image alt={"Image"} originalSrc={props.rightImage} width={420} height={527} /></div>
                      <div className="textAndArrow flexItems">
                          <div className="arrow">
                              <LongArrow
                                  arrowLength="5px"
                                  lineLength="10px"
                                  transformX="3.3px"
                                  transformY="1px"
                                  arrowWidth="1px"
                                  color="black"
                                  direction="up"
                                  marginTop="7px"
                                  marginTopMobile="4px"
                              />
                          </div>
                          {props.cmsRichContent == true && <div className="text greyCaption" dangerouslySetInnerHTML={{__html:props.rightCaption}}></div>}
                          {!props.cmsRichContent && <div className="text greyCaption">{props.rightCaption}</div>}
                      </div> 
                    </div>
                  </div>
                </Animate>
                {/* <div className="tabletMiddleRow flexItems">
                  <div className="tabletMiddleRowLeft">
                    <div ref={serialNumRef} className="smallNumber mainShortHeading black richText">{props.slNo}</div>
                    <div ref={centerTextForTabletRef} className="textSection centerTextForTablet">
                        <div className="bottomText description grey richText">{props.bottomTextTablet}</div>
                    </div>
                  </div>
                  <div ref={middleRowRightRef} className="middleLayerRight">
                    <div className="middleLayerRightImg"><Image alt={"Image"} originalSrc={props.rightImage} width={420} height={527} /></div>
                    <div className="textAndArrow flexItems">
                        <div className="arrow">
                            <LongArrow
                                arrowLength="5px"
                                lineLength="10px"
                                transformX="3.3px"
                                transformY="1px"
                                arrowWidth="1px"
                                color="black"
                                direction="up"
                                marginTopMobile="5px"
                                marginTop="9px"
                            />
                        </div>
                        {props.cmsRichContent == true && <div className="text greyCaption richText" dangerouslySetInnerHTML={{__html:props.rightCaption}}></div>}
                        {!props.cmsRichContent && <div className="text greyCaption richText">{props.rightCaption}</div>}
                    </div> 
                  </div>
                </div> */}
                <Animate>
                  <div className="bottomSection">
                      <div ref={bottomSectionRef} className="bottomSectionFlex">
                          <div className="bottomImg1"><Image alt={"Image"} originalSrc={props.leftImage4} width={289} height={289} /></div>
                          <div className="bottomImg2"><Image alt={"Image"} originalSrc={props.leftImage5} width={289} height={289} /></div>
                          <div className="textSection forTablet">
                              {/* <p className="number font16 moderatmedium grey">01.</p> */}
                              <div className="bottomText richText">{props.bottomText}</div>
                          </div>
                      </div>
                  </div>
                </Animate>
            </div>  

            <div className='craftsSectionMobile showForMobile'>
                <div className="mobileLayout paddedContent">
                    <Animate>
                      <h2 ref={mobileShortHeading} className="shortHeading mainShortHeading marginBottom26 richText">{props.shortHeading}</h2>
                      {props.cmsRichContent ?<h1 ref={mobileMainHeading} className="mainHeading bigHeading marginBottom55 black richText" dangerouslySetInnerHTML={{__html:props.mainHeadingSub1}}></h1>:<h1 ref={mobileMainHeading} className="mainHeading bigHeading marginBottom55 black">{props.mainHeadingSub1}</h1>}
                      <p ref={mobileGreyText} className="greyText bigDescription grey marginBottom30 richText">{props.greyDescription}</p>
                    </Animate>
                    <div ref={mobileMiddleLayerRight} className="middleLayerRight">
                        <div className="middleLayerRightImg"><Image alt={"Image"} originalSrc={props.rightImage} width={420} height={527} /></div>
                        <div className="textAndArrow flexItems">
                            <div className="arrow">
                                <LongArrow
                                    arrowLength="5px"
                                    lineLength="7px"
                                    transformX="2.1px"
                                    transformY="0px"
                                    arrowWidth="1px"
                                    color="black"
                                    direction="up"
                                    marginTop="5px"
                                />
                            </div>
                            {props.cmsRichContent == true && <div className="text greyCaption richText" dangerouslySetInnerHTML={{__html:props.rightCaption}}></div>}
                            {!props.cmsRichContent && <div className="text greyCaption richText">{props.rightCaption}</div>}
                        </div> 
                        
                    </div>
                    <Animate><div ref={mobileTopImg} className="topImg"><Image alt={"Image"} originalSrc={props.leftImage1} width={513} height={324} /></div></Animate>
                    <Animate>
                      <div ref={mobileMiddleLayerLeft} className="middleLayerLeft">
                          <div><Image alt={"Image"} originalSrc={props.leftImage2} width={228} height={275} /></div>
                          <div><Image alt={"Image"} originalSrc={props.leftImage3} width={228} height={275} /></div>
                      </div>
                    </Animate>
                    <Animate><p ref={mobileParaOne} className="paraOne description mbHeading grey">{props.text1}</p></Animate>
                    <Animate><p ref={mobileParaTwo} className="paraTwo description mbHeading grey">{props.text2}</p></Animate>
                    <Animate>
                      <div className="bottomSection">
                          <div ref={mobileBottomSectionFlex}  className="bottomSectionFlex">
                              <div className="bottomImg1"><Image alt={"Image"} originalSrc={props.leftImage4} width={289} height={289} /></div>
                              <div className="bottomImg2"><Image alt={"Image"} originalSrc={props.leftImage5} width={289} height={289} /></div>
                          </div>
                          <div ref={mobileTextSection} className="textSection">
                              {/* <p className="number font16 moderatmedium grey">01.</p> */}
                              <div className="bottomText grey description richText">{props.bottomText}</div>
                          </div>
                      </div>
                    </Animate>
                </div>
            </div> 
            
            <style jsx>{`
                .topSection{
                  display:flex;
                  margin-bottom:6.5rem;
                }
                .prLeftCaptions{
                  padding-right:17%;
                }
                .bottomImg1,.bottomImg2{
                  width: 27%;
                  padding-right:2%;
                }
                .textSection{
                  width: 46%;
                  padding-left: 6%;
                }
                .middleRowLeft, .middleLayerRight{
                  width:50%;
                }
                .middleRowNewWrapper{
                  display:flex;
                  margin-bottom:6.5rem;
                }
                .tabletMiddleRow{
                  display:none;
                }
                .number{
                    margin-bottom:1.6rem;
                }
                .bottomSectionFlex{
                    display:flex;
                    // align-items: center;
                }
                .middleLayerRightImg{
                    margin-bottom:1.5rem;
                }
                .middleLayerRight{
                  padding-left: 21%;
                }
                .middleLayerLeft{
                    padding-right: 2.9rem;
                    display:flex;
                    margin-bottom:1.5rem;
                    margin-right:-1.5rem;
                }
                .middleLayerLeft > div:nth-child(1){
                    padding-right:2.1rem;
                    width:50%;
                }
                .middleLayerLeft > div:nth-child(2){
                    padding-right:2.1rem;
                    width:50%;
                }
                .topLeft,.topRight{
                    width:50%;
                }
                .topLeft{
                    padding-right:2.9rem;
                }
                .topRight{
                    padding-left:2.9rem;
                }
                .mainHeading{
                    padding-right: 0%;
                }
                .textAndArrow{
                    align-items: flex-start;
                    margin-left: 4px;
                }
                .textAndArrow .arrow{
                    margin-right:1.3rem;
                }
                .forTabletImage {
                  display: none;
                }
                .tabs, .centerTextForTablet {
                  display: none;
                }
                .smallNumber {
                  display: none;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                  .middleLayerLeft{
                    padding-right: 0%;
                  }
                  .middleLayerLeft.Tab > div:first-child > div:last-child{
                    margin-top:1.5rem;
                  }
                  .tabletMiddleRowLeft,.middleLayerRight{
                    width:50%;
                  }
                  .tabletMiddleRowLeft{
                    padding-right: 13%;
                  }
                  .topRightText{
                    margin-bottom:0rem;
                  }
                  .topImg{
                    margin-bottom:0rem;
                  }
                  .smallNumber {
                    display: block;
                    margin-bottom:1.4rem;
                    margin-top:0rem;
                  }
                  .tabs {
                    display: flex;;
                  }
                  .centerTextForTablet {
                    display: flex;
                    width: 100%;
                    padding-left: 0%;
                  }
                  .forTabletImage {
                    display: flex;
                    margin-top:2.1rem; 
                  }
                  .mainHeading{
                    padding-right: 0%;
                  }
                  .textAndArrow .arrow{
                    margin-right:1rem;
                  }
                  .greyText{
                    margin-right: 7%;
                  }
                  .bottomText{
                    padding-right: 0px;
                  }
                  .tabletMiddleRow{
                    display:flex;
                    padding:0 4rem;
                    margin-bottom:12rem;
                  }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px){
                  .tabletMiddleRowLeft{
                    padding-right: 0%;
                  }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .textAndArrow .arrow{
                      margin-right:0.8rem;
                      margin-top:0px;;
                    }
                    .paraOne{
                      margin-right: 0%;
                    }
                    .middleLayerRight{
                      width:100%;
                    }
                    .greyText{
                      margin-right: 0%;
                    }
                    .forTabletImage, .tab {
                      display: none;
                    }
                    .smallNumber {
                      display: none;
                    }
                    .mainHeading{
                      margin-bottom:3.2rem;
                      padding-right: 0%;
                    }
                    .greyText{
                      padding-right:5%;
                    }
                    .middleLayerRight{
                      padding-left:0rem;
                      margin-bottom:2.6rem;
                    }
                    .middleLayerRightImg{
                      margin-bottom:1.5rem;
                    }
                    .topImg{
                      margin-bottom:1rem;
                      padding:0rem;
                    }
                    .middleLayerLeft{
                        margin-bottom:2.6rem;
                        padding:0 0rem;
                        margin-right:-1.1rem;
                    }
                    .middleLayerLeft > div:nth-child(1){
                        padding-right:1.1rem;
                    }
                    .middleLayerLeft > div:nth-child(2){
                        padding-right:1.1rem;
                    }
                    .paraOne,.paraTwo{
                        padding:0;
                    }
                    .forTabletText, .forTablet {
                      display: block;
                    }
                    .bottomSection{
                      padding:0 0rem;
                      margin-right:0rem;
                    }
                    .bottomImg1{
                        margin-right:0rem;
                    }
                    .bottomImg2{
                        margin-right:0rem;
                    }
                    .bottomSectionFlex{
                        margin-right:-1.2rem;
                        margin: 3.5rem 0;
                    }
                    .bottomSectionFlex div{
                        width:50%;
                        padding-right:1.2rem;
                        
                    }
                    .textSection{
                        width:auto;
                        display:block;
                        padding:0;
                    }
                    .bottomText{
                        padding-right: 0px;
                    }
                }
            `}</style>
        </>
    )
}