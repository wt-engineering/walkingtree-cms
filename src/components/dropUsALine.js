import { useRef, useState,useContext,useEffect } from 'react'
import {connect} from 'react-redux'
import LongArrow from './longArrow'
import { MOBILE_BREAKPOINT,lineAnimationTiming,TABLET_BREAKPOINT } from "../config";
import { SmoothScrollContext } from "../function";
import { gsap } from "gsap/dist/gsap";

const contactPoints = [
    {
        _key:"123",
        category:"Customer Care",
        points:[
            {
                _key:"adfdf",
                heading:"",
                text:"Our dedicated customer care team is available Monday-Friday from <strong>09.00 - 06.00 IST</strong>",
                phone:{number:"00912212345678",display:"00 91 22 1234 5678"},
                email:"care@walkingtree.co"
            }
        ]
    },
    {
        _key:"1234",
        category:"Brand Representative",
        points:[
            {
                _key:"adfdsfgfsf",
                heading:"India",
                phone:{number:"00912212345678",display:"00 91 22 1234 5678"},
                email:"business.india@walkingtree.co"
            },
            {
                _key:"adf34t65gdf",
                heading:"China",
                phone:{number:"00912212345678",display:"00 91 22 1234 5678"},
                email:"business.china@walkingtree.co"
            },
            {
                _key:"adffjy6896df",
                heading:"Global",
                phone:{number:"00912212345678",display:"00 91 22 1234 5678"},
                email:"business.worldwide@walkingtree.co"
            }
        ]
    },
    {
        _key:"12345",
        category:"Business Development",
        points:[
            {
                _key:"adf786496df",
                heading:"India",
                phone:{number:"00912212345678",display:"00 91 22 1234 5678"},
                email:"business.india@walkingtree.co"
            },
            {
                _key:"adffjy6896dkdsjbf",
                heading:"China",
                phone:{number:"00912212345678",display:"00 91 22 1234 5678"},
                email:"business.china@walkingtree.co"
            },
            {
                _key:"adffj2345y6896df",
                heading:"Global",
                phone:{number:"00912212345678",display:"00 91 22 1234 5678"},
                email:"business.worldwide@walkingtree.co"
            }
        ]
    },
    {
        _key:"123456",
        category:"Juhu Design Studio",
        points:[
            {
                _key:"adfkj34bf",
                text:"Available by appointment only. To book an appointment go <a href="/">here</a>",
                phone:{number:"00912212345678",display:"00 91 22 1234 5678"},
                email:"juhu@walkingtree.co"
            }
        ]
    },
    {
        _key:"12345789",
        category:"Walking Tree Head Office",
        points:[
            {
                _key:"nsvb894",
                phone:{number:"00912212345678",display:"00 91 22 1234 5678"},
                email:"headoffice@walkingtree.co"
            }
        ]
    },
    {
        _key:"123454t546",
        category:"Press",
        points:[
            {
                _key:"097fgsdfgh",
                phone:{number:"00912212345678",display:"00 91 22 1234 5678"},
                email:"press@walkingtree.co"
            }
        ]
    }
]
function ContactPoint(props){
    return (
        <>
            <div className="contactPoint">
                <div className="category mainShortHeading black cursorPointer" onClick={()=>props.onClick(props.contactPoint._key)}>
                    <div className="categoryName">{props.contactPoint.category}</div>
                    <div className="categoryExpandArrow">
                        {props.showContent?
                            <span className="inlineBlock collapseLine"></span>
                            :
                            <LongArrow 
                                arrowLength="5px" 
                                arrowWidth="1px" 
                                color="black" 
                                direction="bottom-left"
                                lineLength="10px"
                                marginTop="6px"
                                transformX="3.3px"
                                transformY="1px"
                            />
                        }
                    </div>
                </div>
                <div className={`content contactPointContent description ${props.showContent?"show":""}`}>
                    {props.contactPoint.points.map(point=>{
                        return (
                            <div className="point" key={point._key}>
                                {!!point.heading &&
                                    <div className="heading">{point.heading}</div>
                                }
                                {!!point.text &&
                                    <div className="text" dangerouslySetInnerHTML={{__html:point.text}}></div>
                                }
                                {!!point.phone &&
                                    <div className="phone">Call us at <strong><a href={`tel:${point.phone.number}`}>{point.phone.display}
                                        <span className="inlineBlock arrow">
                                            <LongArrow 
                                                arrowLength="5px" 
                                                arrowWidth="1px" 
                                                color="black" 
                                                direction="top-right"
                                                lineLength="10px"
                                                marginTop="6px"
                                                transformX="3.3px"
                                                transformY="1px"
                                            />
                                        </span></a></strong>
                                    </div>
                                }
                                {!!point.email &&
                                    <div className="email">Write to us at <strong><a href={`mailto:${point.email}`}>{point.email} 
                                            <span className="inlineBlock arrow">
                                                <LongArrow 
                                                    arrowLength="5px" 
                                                    arrowWidth="1px" 
                                                    color="black" 
                                                    direction="top-right"
                                                    lineLength="10px"
                                                    marginTop="6px"
                                                    transformX="3.3px"
                                                    transformY="1px"
                                                />
                                            </span>
                                        </a></strong>
                                    </div>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
            <style jsx>{`
                .collapseLine{
                    border-bottom:1px solid #000000;
                    width:1.5rem;
                }
                .text,.phone,.email{
                    margin-top:1rem;
                }
                .arrow{
                    transform: translateY(-0.4rem);
                    margin-left:1.2rem;
                }
                .category{
                    padding-top:3rem;
                    padding-bottom:3rem;
                    display:flex;
                }
                .categoryName{
                    flex:1 0 auto;
                }
                .categoryExpandArrow{
                    flex:0 1 auto;
                    margin-right:1rem;
                    margin-top:0.5rem;
                }
                .content{
                    height:0;
                    overflow:hidden;
                    width: 45%;
                    margin-left: 45%;
                    transform: translateY(-4.5rem);
                    opacity:0;
                    transition: transform 0.5s ease-out,opacity 0.5s ease-out;
                }
                .content.show{
                    height:auto;
                    opacity:1;
                    transform: translateY(-6rem);
                    margin-bottom:-2.5rem;
                }
                a{
                    text-decoration:none;
                    color:inherit;
                    font-weight:bold;
                }
            `}</style>
        </>
    )
}
function DropUsALine(props){
    const shortHeadingRef = useRef();
    const headingRef = useRef();
    const itemsRef = useRef([]);
    const [expandedContactPoint,setExpandedContactPoint] = useState(null)
    const { scroll, ScrollTrigger } = useContext(SmoothScrollContext);

    useEffect(() => {
        itemsRef.current = itemsRef.current.slice(0, contactPoints.length);
    }, [contactPoints]);
    useEffect(()=>{
        if(!!scroll && !!ScrollTrigger){
            for (let i = 0; i < contactPoints.length; i++) {
                const animationT1 = gsap.timeline();
                ScrollTrigger.create({
                    trigger: itemsRef.current[i],
                    animation: animationT1,
                });
                animationT1.from(itemsRef.current[i], {
                    opacity:0,
                    y:30,
                });
                animationT1.to(itemsRef.current[i], {
                    opacity:1,
                    y:0,
                });
            }
            
            const animationT16 = gsap.timeline();
            ScrollTrigger.create({
                trigger: shortHeadingRef.current,
                animation: animationT16,
            });
            animationT16.from(shortHeadingRef.current, {
                opacity:0,
                y:30,
            });
            animationT16.to(shortHeadingRef.current, {
                opacity:1,
                y:0,
            });
        
            const animationT17 = gsap.timeline();
            ScrollTrigger.create({
                trigger: headingRef.current,
                animation: animationT17,
            });
            animationT17.from(headingRef.current, {
                opacity:0,
                y:30,
            });
            animationT17.to(headingRef.current, {
                opacity:1,
                y:0,
            });
        }
    
    },[scroll,ScrollTrigger])

    return (
        <>
            <div className="wrapper lesserAdditionalPadding">
                <div ref={shortHeadingRef} className="mainShortHeading">Global Presence</div>
                <div ref={headingRef} className="smallHeading line1">Drop us a line</div> 
                <div className="contactPoints">
                    {contactPoints.map((contactPoint,id)=>{
                        return (
                            <div ref={el => itemsRef.current[id] = el} className="contactPoint" key={contactPoint._key}>
                                <ContactPoint contactPoint={contactPoint} showContent={expandedContactPoint==contactPoint._key} onClick={(key)=>key==expandedContactPoint?setExpandedContactPoint(null):setExpandedContactPoint(key)}/>
                            </div>
                        )
                    })}
                </div>
            </div>
            <style jsx>{`
                .wrapper{
                    //background: #E7E8EA;
                    //padding-top:11.2rem;
                    //padding-bottom:9.8rem;
                }
                .line1{
                    margin-top:2.8rem;
                }
                .description{
                    margin-top:5.2rem;
                }
                .contactPoints{
                    margin-top:12rem;
                }
                .contactPoint{
                    border-bottom:1px solid #000000;
                }
                .contactPoints .contactPoint:first-child{
                    border-top:1px solid #000000;
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .contactPoints{
                        margin-top:8rem;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .contactPoints{
                        margin-top:3.5rem;
                    }
                    .line1{
                        margin-top:1.5rem;
                    }
                }
            `}</style>
        </>
    )
}
function mapStateToProps({}){
    return {}
}
export default connect(mapStateToProps,{})(DropUsALine)