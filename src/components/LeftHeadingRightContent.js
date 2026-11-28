import React, {useContext,useEffect, useRef} from 'react'
import { MOBILE_BREAKPOINT,TABLET_BREAKPOINT,} from '../config'
import Animate from './animate';

export default function LeftHeadingRightContent(props) {
    const shortHeadingRef = useRef();
    const mainHeadingRef = useRef();
    const descRef = useRef();

    return (
        <>
            <div className="leftHeadingRightContent flexItems lesserAdditionalPadding">
                <div className="left">
                    <Animate><h1 className="headingMarginBottomWhenItalicTextBelow heading smallHeading black richText">{props.mainHeading}</h1></Animate>
                    <Animate><h2 className="mbHeading shortHeading  mainShortHeading grey richText">{props.shortHeading}</h2></Animate>
                </div>
                <div className="right"> 
                    {props.cmsRichContent ? <Animate><div className="content" dangerouslySetInnerHTML={{__html:props.content}}></div></Animate>
                    :
                    <Animate><div  className="content">{props.content}</div></Animate>
                    }
                </div>
            </div>   
            <style jsx>{`
                .content p{
                    margin:0;
                }
                .left,.right{
                    width:46%;
                }
                .right{
                    width:54%;
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                  .leftHeadingRightContent{
                      display:block;
                      text-align:center;
                  }
                  .left,.right{
                      width:100%;
                  }
                }
            `}</style>
        </>
    )
}
