import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT } from "../config"
import { useRef } from "react";
import Image from "./Image";
import Animate from "./animate";

export default function ShortHeadingAndDescription(props){
    const shortHeadingRef = useRef();
    const descRef = useRef();
    const optionalImageRef = useRef();
 
    return (
        <>
            <div className="textSection alignCenter">
                <div className="additionalPadding textContainer">
                    <Animate><div ref={shortHeadingRef} className="shortText mbHeading richText mainShortHeading">{props.shortHeading}</div></Animate>
                    <Animate><div ref={descRef} className="desc richText">{props.desc}</div></Animate>
                </div>
                {!!props.img &&
                   <Animate>
                      <div ref={optionalImageRef} className="img lesserAdditionalPadding">
                          <Image loading='eager' height={539} width={1035} alt="img" originalSrc={props.img} className="width-100" />
                      </div>
                   </Animate>
                }
            </div>
            <style jsx>{`
                .img{
                    margin-top:9rem;
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .textContainer{
                        padding:0 9.7%;
                    }
                    .img{
                      margin-top:6rem;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px){
                    .textContainer{
                        padding:0 2.1rem;
                    }
                    .img{
                        margin-top:3rem;
                        padding:0;
                    }
                    .desc{
                        font-size:1.6rem;
                        line-height:2.2rem;
                        letter-spacing:0.18px;
                    }
                }
            `}</style>
        </>
    )
}