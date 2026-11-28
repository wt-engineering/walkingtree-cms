import React, { useRef, useContext, useEffect, useState } from 'react'
import { MOBILE_BREAKPOINT,lineAnimationTiming, MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT,scrollTriggeStartValue } from "../config";
import Animate from './animate';

export default function Counts(props) {
    const [countCol1, setCountCol1] = useState(0);
    const [countCol2, setCountCol2] = useState(0);
    const [countCol3, setCountCol3] = useState(0);
    const [countCol4, setCountCol4] = useState(0);
    const [countCol5, setCountCol5] = useState(0);
    const [reached, setReached] = useState(false);
    const countsHeadingRef = useRef();
    const countsDescRef = useRef();
    const countsBorderRef = useRef();
    const elementRef = useRef();

    function startTimer(){
        console.log("entering");
        var inValue1 = 0, x1 = setInterval(function () {
            inValue1 = inValue1+1
            setCountCol1(inValue1)
            if (inValue1 === props.countItem1.count) {
                clearInterval(x1);
            }
        }, 200);
        var inValue2 = 0, x2 = setInterval(function () {
            inValue2 = inValue2+1
            setCountCol2(inValue2)
            if (inValue2 === props.countItem2.count) {
                clearInterval(x2);
            }
        }, 200);
        var inValue3 = 0, x3 = setInterval(function () {
            inValue3 = inValue3+10
            setCountCol3(inValue3)
            if (inValue3 === props.countItem3.count) {
                clearInterval(x3);
            }
        }, 1);
        // var inValue4 = 0, x4 = setInterval(function () {
        //     inValue4 = inValue4+1
        //     setCountCol4(inValue4)
        //     if (inValue4 === props.countItem4.count) {
        //         clearInterval(x4);
        //     }
        // }, 20);
        var inValue5 = 0, x5 = setInterval(function () {
            inValue5 = inValue5+1
            setCountCol5(inValue5)
            if (inValue5 === props.countItem5.count) {
                clearInterval(x5);
            }
        }, 10);
    }
    
    function scrollListener(){
        let animationTriggerValue = window.innerHeight - 10;
        let sectionTopPosition = elementRef.current?.getBoundingClientRect().top;
        if(sectionTopPosition < animationTriggerValue ) {
            if(!reached){
              setReached(true)
              startTimer();
            }
        }
    }
    useEffect(() => {
      window.addEventListener("scroll", scrollListener, {passive: true});
      return () => {
        window.removeEventListener("scroll", scrollListener, {passive: true});
      };
    });
    return (
        <>
            <div className="counts">
                <div className="countsWrapper alignCenter">
                <Animate><h1 ref={countsHeadingRef} className="mbSmallheading heading smallHeading black">{props.heading}</h1> </Animate>
                <Animate><p ref={countsDescRef} className="marginBottom90 desc">{props.description}</p> </Animate>
                <Animate log={true} callback={()=>startTimer()}>
                    <div ref={elementRef} className="countingLine flexItems">
                        <div className="field alignCenter">
                            <div className="marginBottom16 number smallHeading black">{countCol1}</div>
                            <div className="name  black">{props.countItem1.name}</div>
                        </div>
                        <div className="field alignCenter">
                            <div className="marginBottom16 number smallHeading black">{countCol2}</div>
                            <div className="name  black">{props.countItem2.name}</div>
                        </div>
                        <div className="field alignCenter">
                            <div className="marginBottom16 number smallHeading black">{countCol3} +</div>
                            <div className="name  black">{props.countItem3.name}</div>
                        </div>
                        {/* <div className="field alignCenter">
                            <div className="marginBottom16 number smallHeading black">{countCol4} +</div>
                            <div className="name  black">{props.countItem4.name}</div>
                        </div> */}
                        <div className="field alignCenter">
                            <div className="marginBottom16 number smallHeading black">{countCol5} +</div>
                            <div className="name  black">{props.countItem5.name}</div>
                        </div>
                    </div>
                    </Animate> 
                </div> 
                <Animate> <div ref={countsBorderRef} className="borderBottom paddedContent"></div></Animate>
            </div>  
            <style jsx>{`
                .countsWrapper{
                    padding:0 17.29% 9rem;
                }
                .borderBottom{
                    width: auto;
                    height: 1px;
                    border-bottom: 1px solid #707070;;
                    margin-left: 6.6rem;
                    margin-right: 6.6rem;
                }
                .countingLine{
                    justify-content: space-between;
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .countsWrapper{
                        padding:0 9.7% 6rem;
                    }
                    .borderBottom{
                        margin-left: 3.8rem;
                        margin-right: 3.8rem;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .countsWrapper{
                        padding:0 2.1rem 3rem;
                    }
                    .desc{
                        // font-size:1.6rem;
                        // line-height:2.2rem;
                        padding:0 5%;
                    }
                    .number{
                        font-size:1.6rem;
                    }
                    .name{
                        font-size:1rem;
                    }
                    .countingLine{
                        justify-content: space-around;
                    }
                    .borderBottom{
                        margin-left: 2.1rem;
                        margin-right: 2.1rem;
                    }
                }
            `}</style>
        </>
    )
}
