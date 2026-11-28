import React, { useRef } from 'react'
import Button from './button'
import {MOBILE_BREAKPOINT} from '../config'
import Animate from './animate'

export default function VideoSection(props) {
    const shortHeadingRef=useRef(null)
    const mainHeadingRef=useRef(null)
    const buttonWrapperRef=useRef(null)
    const bottomTextRef=useRef(null)
    const btnOne=useRef(null)
    const playButton=useRef(null)

    return (
        <>
            <div className="videoSection gsap positionRelative">
                <Animate><div className="hideForMobile width-100 height-100"><img alt="video placeholder" className="width-100 height-100" src={props.mainImg}/></div></Animate>
                <Animate><div className="showForMobile width-100 height-100"><img alt="video placeholder" className="width-100 height-100" src={props.mainImgMobile}/></div></Animate>
                <div className="buttonOne positionAbsolute alignCenter" ref={btnOne}>
                    <Animate><h2 className="shortHeading mainShortHeading" ref={shortHeadingRef}>{props.shortHeading}</h2></Animate>
                    <Animate><h1 className="mainHeading bigHeading white" ref={mainHeadingRef}>{props.mainHeading}</h1></Animate>
                    <Animate>
                      <div className="buttonWrapper hideForMobile" ref={buttonWrapperRef}> 
                          <Button 
                              buttonText={props?.buttonText} 
                              textOnHover={props?.buttonTextOnHover} 
                              buttonType="rectangle"
                          />
                      </div>
                    </Animate>
                </div>
                <div className="buttonTwo positionAbsolute">
                    <Animate>
                      <div className="playButton desktop" ref={playButton}> 
                          <Button 
                              buttonType="playButton"
                          />
                      </div>
                    </Animate>
                    <Animate><p className="bottomText lineByLineText bannerDescription white alignCenter" ref={bottomTextRef}>{props.bottomText}</p></Animate>
                </div>
                <div className="playButton mobile "> 
                    <Button 
                        buttonType="playButton"
                    />
                </div>
            </div>   
            <style jsx>{`
                .videoSection{
                    height:100vh;
                }
                .playButton{
                    display: flex;
                    justify-content: center;
                    margin-bottom:2.7rem;
                    opacity:0;
                    transform:translateY(25px);
                }
                .shortHeading{
                    margin-bottom:2.1rem;
                    opacity:0;
                    transform:translateY(10px);
                }
                .buttonWrapper{
                  opacity:0;
                  transform:translateY(10px);
                }
                .mainHeading{
                    margin-bottom:5.2rem;
                    opacity:0;
                    transform:translateY(10px);
                }
                .buttonOne, .buttonTwo{
                    width:100%;
                }
                .buttonOne{
                    top:31.17%;
                }
                .buttonTwo{
                    bottom:15.86%;
                }
                .bottomText{
                    padding: 0 36%;
                    opacity:1;
                }
                .playButton.mobile{
                    display:none;
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .bottomText{
                        padding: 0 11%;
                    }
                    .playButton.desktop{
                        display:none;
                    }
                    .playButton.mobile{
                        display:block;
                        position:absolute;
                        top:50%;
                        left:50%;
                        transform:translate(-50%,-50%);
                    }
                }
            `}</style>
        </>
    )
}
