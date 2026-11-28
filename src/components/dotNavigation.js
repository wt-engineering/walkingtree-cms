import React,{useEffect,useRef,useState} from 'react'
import {MOBILE_BREAKPOINT} from '../config'

export default function DotNavigation(props) {
    const [dotsWidth, setDotsWidth] = useState(0);
    
    const dotsLengthRef=useRef();

    let dotsLeftValue =  (dotsWidth/(props.sliderData.length-1));
    
    let finalDotLeftValue = (dotsLeftValue * props.indexValue)-  (2 * (props.indexValue+1));
    useEffect(()=>{
        function getHeight(){
            setDotsWidth(dotsLengthRef.current.getBoundingClientRect().width);
        }
        getHeight();
    },[])
    return (
        <>
            {/* <div className="sliderDots">
                <div ref={dotsLengthRef} className="positionRelative flexItems">
                    {props.sliderData.map((dot,id)=>{
                        return(
                            <div key={id} onClick={()=>props.onClick(id)} className={`dot ${id===props.indexValue?"active":""} ${(id+1)===props.sliderData.length?"lastChild":""}`}></div>
                        )
                    })}
                    <div className={`activeDot positionAbsolute`}></div>
                </div>
            </div>  */}
            <div className="sliderDots">
                <div ref={dotsLengthRef} className="positionRelative flexItems ">
                    {props.sliderData.map((dot,id)=>{
                        return(
                            <div key={id} onClick={()=>props.onClick(id)} className={`dot positionRelative ${(id+1)===props.sliderData.length?"lastChild":""}`}>
                                {id===props.indexValue && <div className="activeDot positionAbsolute"></div>}
                            </div>
                        )
                    })}
                </div>
            </div> 
            <style jsx>{`
                .sliderDots > div{
                    align-items: center;
                    height:12px;
                }
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
                .activeDot{
                    border-radius:50%;
                    width:12px;
                    height:12px;
                    background:${props.activeDotColor};
                    cursor:pointer;
                    z-index: 9;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
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
                        width:5px;
                        height:5px;
                        background:${props.dotColor};
                        margin-right:1.1rem;
                        border-radius:50%;
                    }
                    .activeDot{
                        width:5px;
                        height:5px;
                    }
                    .sliderDots > div{
                        height:5px;
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
