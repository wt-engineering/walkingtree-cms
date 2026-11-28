import React, {useState,useEffect} from 'react'
import { connect } from "react-redux";
import {setDefaultPanelData, setPanelTwoData,setPanelThreeData, setMenuCursorImage, setMenuCursorOpacity,setMenuBarShow } from "../redux/actions";
import PanelTwoItems from './PanelTwoItems';
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import NewsLetterSignUp from './NewsLetterSignUp';
import Link from 'next/link';
import Caret from './caret'
function PanelOneItems(props) {
    const [openDropdownId,setOpenDropdownId] = useState(null)
    return (
        <>
            <div className="panelOneItems">
                <ul className="listStyleNone">
                    {props.menuItems?.map((item,index)=>{
                        let delay=((index+1)*0.01)+0.2
                        return(
                            <li key={index} style={{animationDelay:`${delay}s`}} className={`listItem white cursorPointer ${props.common.menuShow?"fadeUpAnimation":""} menuFont`}>
                                {!!item.dropdownItems?
                                    <div onClick={()=>setOpenDropdownId(openDropdownId==item.id?null:item.id)}>
                                        <span className="inlineBlock" onMouseLeave={()=>props.setMenuCursorOpacity(false)} onMouseEnter={()=>{props.setMenuCursorOpacity(true),props.setMenuCursorImage(!!item.image ? item.image : "/images/transparent.png")}}>
                                            {item.panelOneHeading}
                                        </span>
                                        <span className="inlineBlock caret">
                                            <Caret color="white" direction="down" width="0.1rem" length="0.8rem" />
                                        </span>
                                        <div className={`dropdownItems ${openDropdownId==item.id?"show":""}`}>
                                            <ul className="listStyleNone">
                                                {item.dropdownItems.map((dropdownItem,index)=>{
                                                    if(dropdownItem.download){
                                                        return <li key={`dropdownItem_${index}`}><a href={encodeURI(dropdownItem.link)} download className="white textDecoration" onClick={()=>{props.setMenuBarShow(false)}}>{dropdownItem.label}</a></li>
                                                    }
                                                    return <li key={`dropdownItem_${index}`}><Link legacyBehavior href={dropdownItem.link}><a className="white textDecoration" onClick={()=>{props.setMenuBarShow(false)}}>{dropdownItem.label}</a></Link></li>
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                :
                                    <Link legacyBehavior href={item.link}><a onClick={()=>{props.setMenuBarShow(false)}} className= "white textDecoration"><span onMouseLeave={()=>props.setMenuCursorOpacity(false)} onMouseEnter={()=>{props.setMenuCursorOpacity(true),props.setMenuCursorImage(!!item.image ? item.image : "/images/transparent.png")}}>{item.panelOneHeading}</span></a></Link>
                                }
                            </li>   
                        )
                    })}
                </ul>
            </div>   
            <style jsx>{`
                .dropdownItems{
                    font-size: 2.1rem;
                    height:0;
                    overflow:hidden;
                    opacity:0;
                    transition:opacity 0.3s ease;
                }
                .dropdownItems.show{
                    margin-left: 1rem;
                    margin-top: 1.5rem;
                    height:auto;
                    opacity:1;
                }
                .dropdownItems ul li{
                    margin-bottom:1rem;
                }
                .caret{
                    transform: translate(1.2rem, -0.4rem);
                }
                .panelOneItems > ul > li{
                    margin-bottom: 2.5rem;
                }
                .panelOneItems > ul > li:last-child{
                    margin-bottom:0rem;
                }
                .textDecoration{
                    text-decoration: none;
                }
                .bigHeading,.smallHeading{
                    transition:all 0.3s ease-out;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                  
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    
                }
            `}</style>
        </>
    )
}
function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps, {setMenuBarShow,setDefaultPanelData,setPanelTwoData,setPanelThreeData,setMenuCursorImage ,setMenuCursorOpacity})(PanelOneItems);