import Button from '../components/button'
import { MOBILE_BREAKPOINT} from '../config'
import React from 'react';
import Image from './Image';
import Animate from './animate';
import {useRouter} from "next/router"
export default function BannerCta(props){
    return (
        <>
            <Animate>
                <div className="wrapper lesserAdditionalPadding">
                    <div className="banner positionRelative">
                        <Image height={402} width={1086} alt="Image" originalSrc={props.img} className="width-100"/>
                        <div className="bannerContent">
                        {props.cmsRichContent==true &&  <div className="smallHeading white alignCenter richText" dangerouslySetInnerHTML={{__html: props.text}}></div>}
                        {props.cmsRichContent==false &&  <div className="smallHeading white alignCenter richText">{props.text}</div>}
                           {!!props.link  && !!props.buttonText && !!props.buttonTextOnHover &&
                            <div className="cta cursorPointer alignCenter ctaAbove">
                                <Button buttonText={props.buttonText} buttonType="rectangle" textOnHover={props.buttonTextOnHover} href={props.link}/>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </Animate>
            <style jsx>{`
                .bannerContent{
                    position:absolute;
                    width: 100%;
                    left:50%;
                    top:50%;
                    transform:translate(-50%,-50%)
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .wrapper{
                        padding:0;
                    }
                    .banner,.banner img{
                        // object-fit: cover;
                        height:25vh;
                    }
                }
            `}</style>
        </>
    )
}