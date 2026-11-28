import React from "react";
import { MOBILE_BREAKPOINT } from "../config"
import Animate from './animate'
import Image from "./Image";

export default function FullImage(props){
    return (
        <>
            <Animate>
                <div className={`fullImageContainer ${props.objectFitInMobile?"objectFitInMobile":""}`}>
                    <Image height={450} width={1440} alt="Image" originalSrc={props.img} className="width-100" />
                </div>
            </Animate>
            <style jsx>{`
                .fullImageContainer{
                    opacity: 0.84;
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .objectFitInMobile.fullImageContainer{
                        //height:60vh;
                    }
                    .objectFitInMobile.fullImageContainer img{
                        height:100%;
                        object-fit: cover;
                    }
                }
            `}</style>
        </>
    )
}