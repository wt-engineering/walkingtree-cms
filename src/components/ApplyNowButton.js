import React,{useRef,useContext,useEffect} from 'react'
import LongArrow from './longArrow'
import {MOBILE_BREAKPOINT,lineAnimationTiming} from '../config'
import { SmoothScrollContext } from "../function";
import { gsap } from "gsap/dist/gsap";
import Animate from "./animate";

export default function ApplyNowButton(props) {
    const applyNowButtonRef = useRef();
    // useEffect(()=>{
    // if(!!scroll && !!ScrollTrigger){
        
    //     const animationT16 = gsap.timeline();
    //     ScrollTrigger.create({
    //     trigger: applyNowButtonRef.current,
    //     animation: animationT16,
    //     });
    //     animationT16.from(applyNowButtonRef.current, {
    //     opacity:0,
    //     y:30,
    //     });
    //     animationT16.to(applyNowButtonRef.current, {
    //     opacity:1,
    //     y:0,
    //     });
    // }

    // },[scroll,ScrollTrigger])
    return (
        <>
            <Animate><div onClick={()=>props.onClick()} ref={applyNowButtonRef} className="applyNowButton flexItems cursorPointer">
                <span className="bigHeading buttonText black">{props.text}</span>
                <span className="arrow">
                    <LongArrow
                        arrowLength="10px"
                        lineLength="37px"
                        transformX="12.2px"
                        transformY="4px"
                        arrowWidth="2px"
                        color="black"
                        direction="up"
                        marginTop="-18px"
                    />
                </span>
             </div> 
            </Animate>  
            <style jsx>{`
                .applyNowButton{
                    align-items: center;
                }
                .buttonText{
                    margin-right:2rem;
                }
                .arrow{
                    transform:rotate(45deg);
                }
            `}</style>
        </>
    )
}
