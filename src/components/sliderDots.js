import React,{useEffect,useRef,useState} from 'react'
import {MOBILE_BREAKPOINT} from '../config'

export default function DotNavigation(props) {
    const [dotsWidth, setDotsWidth] = useState(0);
    
    const dotsLengthRef=useRef();

    let dotsLeftValue =  (dotsWidth/(props.length-1));
    
    let finalDotLeftValue = (dotsLeftValue * props.indexValue)-  (2 * (props.indexValue+1));
    useEffect(()=>{
        function getHeight(){
            setDotsWidth(dotsLengthRef.current.getBoundingClientRect().width);
        }
        getHeight();
    },[])
    let jsx = []
    for(let i=0;i<props.length;i++){
        jsx.push(
            <>
                <div key={`dot_${i}`} onClick={()=>props.onClick(i)} className={`dot ${i===props.indexValue?"active":""} ${(i+1)===props.length?"lastChild":""}`}></div>
                <style jsx>{`
                    .dot{
                        width:7px;
                        height:7px;
                        background:${props.dotColor};
                        margin-right:3.2rem;
                        border-radius:50%;
                        cursor:pointer;
                        opacity:1;
                        transition:opacity 0s ease 0s;
                    }
                    .dot.lastChild{
                        margin-right:0rem;
                    }
                    .dot.active{
                        opacity:0;
                        transition:opacity 0s ease 0.5s;
                    }
                    @keyframes dotsAnimation{
                        0%{
                            width:12px;
                            height:12px; 
                        }
                        10%{
                            width:15px;
                            height:10px; 
                        }
                        50%{
                            width:18px;
                            height:10px;
                        }
                        100%{
                            width:12px;
                            height:12px;
                        }
                    }
                    @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                        .dot{
                            width:3px;
                            height:3px;
                            background:${props.dotColor};
                            margin-right:1.1rem;
                            border-radius:50%;
                        }
                        @keyframes dotsAnimation{
                            0%{
                                width:5px;
                                height:5px; 
                            }
                            10%{
                                width:7px;
                                height:5px; 
                            }
                            50%{
                                width:9px;
                                height:5px;
                            }
                            100%{
                                width:5px;
                                height:5px;
                            }
                        }
                    }
                `}</style> 
            </>
        )
    }
    return (
        <>
            <div className="sliderDots">
                <div ref={dotsLengthRef} className="positionRelative flexItems">
                    {jsx.map(el=>el)}
                    <div className={`activeDot positionAbsolute`}></div>
                </div>
            </div>  
            <style jsx>{`
                .sliderDots{
                    display:inline-block;
                }
                .activeDot{
                    top:50%;
                    transform:translateY(-50%);
                    left:${finalDotLeftValue}px;
                    width:12px;
                    height:12px;
                    background:${props.activeDotColor};
                    border-radius:50%;
                    cursor:pointer;
                    z-index: 9;
                    transition:all 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
                    animation:dotsAnimation 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) forwards;
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .activeDot{
                        width:5px;
                        height:5px;
                        left:${finalDotLeftValue + 4}px;
                    }
                }
            `}</style>
        </>
    )
}
