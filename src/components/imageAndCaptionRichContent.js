import LongArrow from "./longArrow"
import Image from  "./Image"

export default function ImageAndCaption(props){
    return (
        <>
            <div className="wrapper">
            <Image height={props.height} width={props.width} alt="Image" originalSrc={props.img} className="width-100"/>
                <div>
                    {!!props?.caption?.text &&
                        <div className="captionWrapper">
                            {props.caption.showArrow &&
                                <div className="arrow">
                                    <LongArrow
                                        arrowLength="5px"
                                        arrowWidth="1px"
                                        color="black"
                                        direction="up"
                                        lineLength="10px"
                                        marginTop="6px"
                                        transformX="3.3px"
                                        transformY="1px"
                                    />
                                </div>
                            }
                            <div className="caption richText">{props.caption.text}</div>
                        </div>
                    }
                    {!!props?.caption2?.text &&
                        <div className="captionWrapper two">
                            {props.caption2.showArrow &&
                                <div className="arrow">
                                    <LongArrow
                                      arrowLength="5px"
                                      arrowWidth="1px"
                                      color="black"
                                      direction="right"
                                      lineLength="10px"
                                      marginTop="6px"
                                      transformX="3.3px"
                                      transformY="1px"
                                    />
                                </div>
                            }
                            <div className="caption richText">{props.caption2.text}</div>
                        </div>
                    }
                </div>
            </div>
            <style jsx>{`
                .captionWrapper{
                    display: flex;
                    align-items: baseline;
                    margin-top:1rem;
                    padding-left: 2px;
                }
                .captionWrapper.two{
                    padding-left: 6px;
                }
                .caption{
                    display:inline-block;
                    font-size: 1.5rem;
                    font-family: moderatLight, sans-serif;
                    line-height: 2.2rem;
                    letter-spacing: initial;
                    color:#313133;
                }
                .caption strong{
                    font-family: moderatMedium, sans-serif;
                }
                .caption p,.arrow{
                    display:inline-block;
                }
                .arrow{
                    transform: translateY(-0.4rem);
                    margin-right: 1.6rem;
                }
            `}</style>
        </>
    )
}
