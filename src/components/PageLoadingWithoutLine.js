import React, { useEffect, useState } from 'react'

export default function PageLoading(props) {
    const [firstCircleRemove,setFirstCircleRemove] = useState(false);
    const [fullTextAppear,setFullTextAppear] = useState(false);
    const [moveWT,setMoveWT] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{ 
            setFirstCircleRemove(true)
         }, 3000);
         setTimeout(()=>{ 
            setFullTextAppear(true)
            setMoveWT(true)
         }, 5000);
    },[])

    return (
        <>
            <div className={`pageLoading ${moveWT?"moveWT":""} ${firstCircleRemove?"firstCircleRemove":""} ${fullTextAppear?"fullTextAppear":""}`}>
                <div className="circleWrapper positionRelative">
                    <div className="circleWrapper2 width-100 height-100">
                        <svg className="circleSvg positionAbsolute" width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path  d="M78 40C78 61.551 60.7511 79 39.5 79C18.2489 79 1 61.551 1 40C1 18.449 18.2489 1 39.5 1C60.7511 1 78 18.449 78 40Z" stroke="white" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round"/>
                        </svg>
                        <div className="circleOne positionAbsolute"></div>
                        <div className="circleTwo positionAbsolute"></div>
                    </div>
                    <div className="white positionAbsolute wtText font31 moderatMedium">
                        <div className="textLineContainer positionRelative">
                            <span style={{animationDelay:"0.05s"}} className="singleChar">W</span>
                            <span style={{animationDelay:"0.15s"}} className="singleChar staticChar">A</span>
                            <span style={{animationDelay:"0.2s"}} className="singleChar staticChar">L</span>
                            <span style={{animationDelay:"0.25s"}} className="singleChar staticChar">K</span>
                            <span style={{animationDelay:"0.3s"}} className="singleChar staticChar">I</span>
                            <span style={{animationDelay:"0.35s"}} className="singleChar staticChar">N</span>
                            <span style={{animationDelay:"0.4s"}} className="singleChar staticChar">G</span>
                            <span style={{animationDelay:"0.45s"}} className="singleChar staticChar"> </span>
                            <span style={{animationDelay:"0.5s"}} className="singleChar">T</span>
                            <span style={{animationDelay:"0.55s"}} className="singleChar staticChar">R</span>
                            <span style={{animationDelay:"0.6s"}} className="singleChar staticChar">E</span>
                            <span style={{animationDelay:"0.65s"}} className="singleChar staticChar">E</span>
                            <span className="positionAbsolute w_text">W</span>
                            <span className="positionAbsolute t_text">T</span>
                        </div>
                    </div>
                    {/* <div className="lineSvg positionAbsolute">
                        <svg width="296" height="47" viewBox="0 0 296 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path className="whiteLine" ref={getLength} d="M2 1C21.6469 38.4737 42.1448 44.1223 85 44H259H296" stroke="white" strokeWidth="2"/>
                            <path className="blackLine" d="M2 1C21.6469 38.4737 42.1448 44.1223 85 44H259H296" stroke="black" strokeWidth="4"/>
                        </svg>
                    </div> */}
                </div>
            </div>   
            <style jsx>{`
                .wtText .singleChar{
                    display:none;
                    opacity:0;
                    transform:translateY(50px);
                }
                .moveWT .w_text,.moveWT .t_text{
                    opacity:1;
                }
                .moveWT .w_text{
                    left:0;
                    transition:all 0.4s ease-out;
                }
                .moveWT .t_text{
                    left: 150px;
                    transition:all 0.6s ease-out;
                }
                .w_text{
                    left:89px;
                    opacity:0;
                }
                .t_text{
                    left: 117px;
                    opacity:0;
                }
                .textLineContainer{
                    width: 224.17px;
                    text-align:center;
                }
                .wtText .singleChar:first-child,.wtText .singleChar:nth-child(9){
                    display:inline-block;
                    opacity:1;
                    transform:translateY(0px);
                }
                .moveWT .wtText .singleChar:first-child,.moveWT .wtText .singleChar:nth-child(9){
                    opacity:0 !important;
                }
                .fullTextAppear .wtText{
                    white-space: pre;
                }
                .fullTextAppear .wtText .staticChar{
                    display:inline-block;
                    animation: textAppear 0.5s cubic-bezier(.25,.75,.5,1.25) forwards; 
                }
                .lineSvg{
                    left: -170%;
                    top: 18px;
                }
                .lineSvg .whiteLine,.lineSvg .blackLine{
                    stroke-dasharray: 311.46820068359375;
                    stroke-dashoffset: 311.46820068359375;
                }
                .fullTextAppear .lineSvg .whiteLine{
                    animation:svgLineAnimate 1s ease forwards;
                }
                .fullTextAppear .lineSvg .blackLine{
                    animation:svgLineAnimate 1s ease forwards 0.4s;
                }
                @keyframes textAppear{
                    to{
                        transform:translateY(0px);
                        opacity:1;
                    }
                }


                .pageLoading{
                    display:flex;
                    justify-content:center;
                    align-items:center;
                    height:100vh;
                    width:100%;
                    background:#000000;
                }
                .wtText{
                    white-space: nowrap;
                    top:50%;
                    left:50%;
                    transform:translate(-50%,-50%);
                    overflow:hidden;
                }
                .circleWrapper{
                    height:8rem;
                    width:8rem;
                }
                .circleWrapper2{
                    animation: rotate 4s ease forwards; 
                }
                .circleOne,.circleTwo{
                    height:80px;
                    width:80px;
                    border:2px solid #ffffff;
                    border-left-color: transparent;
                    border-right-color: transparent;
                    border-radius:50%;
                    background:transparent;
                    opacity:1;
                }
                .firstCircleRemove .circleOne,.firstCircleRemove .circleTwo{
                    opacity:0;
                    transition:opacity 0.3s ease-out;
                }
                .circleTwo{
                    animation: fill 3s ease forwards; 
                }
                .pageLoading .circleSvg path{
                    stroke-dasharray: 243.5100555419922;
                    stroke-dashoffset: 0;
                    animation:svgAnimate 1s ease forwards 3.2s;
                }
                .circleSvg{
                    transform: rotate(180deg);
                    top:0;
                    left:0;
                    opacity:0;
                }
                .firstCircleRemove.pageLoading .circleSvg{
                    opacity:1;
                    transition:opacity 0s ease-out;
                }
                @keyframes fill{
                    to{
                        transform: rotate(90deg);
                    }
                }
                @keyframes rotate{
                    to{
                        transform: rotate(360deg);
                    }
                }
                @keyframes svgAnimate {
                    to {
                        stroke-dashoffset: 243.5100555419922;
                    }
                }
                @keyframes svgLineAnimate {
                    to {
                        stroke-dashoffset: 0;
                    }
                }
            `}</style>
        </>
    )
}
