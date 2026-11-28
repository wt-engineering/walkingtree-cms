import React, {useState} from 'react'
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Link from "next/link";
import { setMenuBarShow,setHeroImageLoaded } from "../redux/actions";
import { connect } from 'react-redux';
import Loader from './loader';

 function PanelThreeItems(props) {
    const [panelThreeActiveItem, setPanelThreeActiveItem] = useState(null)
    
    function itemHover(id, item){
        setPanelThreeActiveItem(id)
    }
    return (
        <>
            <div className="panelThreeItems">
                <ul className="listStyleNone">
                    {!!props.panelThreeItems && props.panelThreeItems.map((item,index)=>{
                        let delay = (index+1)*0.1
                        return (
                            <li key={index} style={{animationDelay:`${delay}s`}} onMouseEnter={()=>itemHover(index,item)} className={`bigDescription listItem fadeLeftToRight cursorPointer ${panelThreeActiveItem==index?"black":"grey"}`}>
                                <Link
                                    href={item.link}
                                    onClick={()=>{props.setMenuBarShow(false)}}
                                    className="textDecoration black">{item.heading}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <style jsx>{`
                .textDecoration{
                    text-decoration: none;
                }
                .panelThreeItems{
                    padding-top: 96px;
                }
                .black,.grey{
                    transition:all 0.3s ease-out;
                }
                .panelThreeItems ul li{
                    margin-bottom:4.5rem;
                    padding-left: 20%;
                    padding-right: 5%;
                }
                .panelThreeItems ul li:last-child{
                    margin-bottom:0rem;
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .panelThreeItems{
                        padding-top: 0px;
                    }
                    .panelThreeItems ul li{
                        padding-left: 10%;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .panelThreeItems ul li{
                        margin-bottom:4rem;
                        padding-left: 0%;
                        padding-right: 0%;
                    }
                }
            `}</style>
        </>
    );
}
function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps,{setMenuBarShow,setHeroImageLoaded})(PanelThreeItems);