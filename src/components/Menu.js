import React, {useEffect, useState} from 'react'
import { connect } from "react-redux";
import { setDefaultPanelData, setMenuBarShow, setPanelOneData, setPanelThreeData, setPanelTwoData } from "../redux/actions";
import PanelOneItems from './PanelOneItems';
import {menuItems} from "../staticData/menuData"
import { MOBILE_BREAKPOINT, MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import NewsLetterSignUp from './NewsLetterSignUp';

function Menu(props) {
    return (
        <>
            <div className={`menuContent positionRelative height-100 ${props.common.menuShow?"hideMenuBar":""} ${!!props.common.panelTwoData?"secondPanelDataActive":""} ${!!props.common.panelThreeData?"thirdPanelDataActive":""}`}>
                <div onClick={()=>props.setMenuBarShow(false)} className="hideMenuIcon cursorPointer positionAbsolute">
                    <div className="lineOne"></div>
                    <div className="lineTwo"></div>
                </div>
                <div className="allPanelsContainer flexItems height-100 blueBg">
                    <div className="panelOneWrapper blackBg">
                        <div className="positionRelative height-100">
                            <div className="panelOneContent"><PanelOneItems menuItems={menuItems}/></div>
                        </div>
                    </div>
                    <div className="default positionRelative"><NewsLetterSignUp defaultActive={true}/></div>
                </div>
            </div>  
            <style jsx>{`
                .default{
                    width: 61.4%;
                }
                .panelOneContent,.panelTwoContent,.panelThreeContent{
                    height:100%;
                    overflow-y:scroll;
                    // -ms-overflow-style: none; 
                    // scrollbar-width: none;  
                }
                .backButton{
                    display:none;
                }
                .panelTwoContent{
                    border-right:2px solid transparent;
                }
                .thirdPanelDataActive .panelTwoContent{
                    transition:all 0.3s ease-out;
                    border-right:${!!props.common.defaultData?"none":"2px solid #6D6E71"};
                }
                .allPanelsContainer > div > div{
                    padding:14rem 0 0rem 0;
                }
                .allPanelsContainer > div:first-child > div{
                    padding: 9rem 0 4rem 20%;
                }
                .allPanelsContainer div::-webkit-scrollbar {
                    display: none;
                }
                .panelOneWrapper{
                    width:38.6%;
                }
                .panelTwoWrapper{
                    width:30.7%;
                }
                .panelThreeWrapper{
                    width:30.7%;
                }
                .hideMenuIcon{
                    padding: 2rem;
                    top: 1rem;
                    left: 1rem;
                    z-index:2;
                }
                .hideMenuIcon div{
                    width:21px;
                    height:2px;
                    background:#ecebea;
                }
                .lineOne{
                    margin-bottom:0.7rem;
                }
                .hideMenuBar .lineOne{
                    animation:menuBarLineOneAnimation 0s ease-out forwards;
                }
                .hideMenuBar .lineTwo{
                    animation:menuBarLineTwoAnimation 0s ease-out forwards;
                }
                @keyframes menuBarLineOneAnimation{
                    0%{
                        transform: translateY(0);
                    }
                    60%{
                        transform: translateY(4.5px);
                    }
                    100%{
                        transform: translateY(4.5px) rotate(45deg);
                    }
                }
                @keyframes menuBarLineTwoAnimation{
                    0%{
                        transform: translateY(0);
                    }
                    60%{
                        transform: translateY(-4.5px);
                    }
                    100%{
                        transform: translateY(-4.5px) rotate(-45deg);
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .allPanelsContainer > div > div{
                        padding:11rem 0 8rem 0;
                        text-align:center;
                    }
                    .allPanelsContainer > div:first-child > div{
                        padding: 10rem 0 5rem 0%;
                    }
                    .hideMenuIcon div{
                        width:21px;
                        height:2px;
                        background:#ffffff;
                    }
                    .hideMenuIcon{
                        top: 1rem;
                        left: 1rem;
                    }
                    .panelOneWrapper{
                        width:100%;
                    }
                    .default{
                        display:none;
                    }
                }
            `}</style> 
        </>
    )
}
function mapStateToProps({ common }) {
    return { common };
}
export default connect(mapStateToProps, { setDefaultPanelData, setMenuBarShow,setPanelOneData, setPanelThreeData, setPanelTwoData })(Menu);