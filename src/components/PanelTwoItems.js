import React,{useState} from 'react'
import { connect } from "react-redux";
import { setPanelThreeData,setMenuCursorOpacity,setMenuCursorImage,setMenuBarShow,setHeroImageLoaded } from "../redux/actions";
import PanelThreeItems from './PanelThreeItems';
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Link from "next/link";
import Loader from './loader';

function PanelTwoItems(props) {
    const [panelTwoActiveItem, setPanelTwoActiveItem] = useState(null)
    function itemHover(id, item){
        if(window.innerWidth > TABLET_LANDSCAPE_BREAKPOINT){
            setPanelTwoActiveItem(id)
            props.setPanelThreeData(null)
            setTimeout(() => {
                !!item.panelThreeItems && props.setPanelThreeData(<PanelThreeItems panelThreeItems={item.panelThreeItems}/>)    
            }, 100);
        }
    }
    
    return (
        <>
            <div className="panelTwoItems">
                <ul className="listStyleNone">
                    {!!props.panelTwoItems && props.panelTwoItems.map((item,index)=>{
                        let delay = (index+1)*0.1
                        return(
                            <li key={index} style={{animationDelay:`${delay}s`}}  onMouseEnter={()=>itemHover(index,item)} className={`bigDescription listItem fadeLeftToRight cursorPointer ${panelTwoActiveItem==index?"black":"grey"}`}>
                                <Link legacyBehavior href={item.link}><a onClick={()=>{props.setMenuBarShow(false)}} className="black textDecoration"><span onMouseLeave={()=>props.setMenuCursorOpacity(false)} onMouseEnter={()=>{props.setMenuCursorOpacity(true),props.setMenuCursorImage(!!item.image ? item.image : "/images/transparent.png")}}>{item.heading}</span></a></Link>
                            </li>
                        )
                    })}
                </ul>
                
            </div>   
            <style jsx>{`
                .textDecoration{
                    text-decoration: none;
                }
                .panelTwoItems{
                    padding-top: 96px;
                }
                .black,.grey{
                    transition:all 0.3s ease-out;
                }
                .panelTwoItems ul li{
                    margin-bottom:4.5rem;
                    padding-left: 20%;
                    padding-right: 5%;
                }
                .panelTwoItems ul li:last-child{
                    margin-bottom:0rem;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                   
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .panelTwoItems ul li{
                        padding-left: 10%;
                    }
                    .panelTwoItems{
                        padding-top: 0px;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .panelTwoItems ul li{
                        margin-bottom:4rem;
                        padding-left: 0%;
                        padding-right: 0%;
                    }
                }  
            `}</style>
        </>
    )
}
function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps, { setMenuBarShow,setPanelThreeData , setMenuCursorOpacity, setMenuCursorImage,setHeroImageLoaded})(PanelTwoItems);