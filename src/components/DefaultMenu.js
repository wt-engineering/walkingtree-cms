import React, { useState } from 'react'
import NewsLetterSignUp from './NewsLetterSignUp'

export default function DefaultMenu(props) {
    const [imageHover, setImagehover] = useState(false);
    const [imageHoverId, setImagehoverId] = useState(false);
    return (
        <>
            {/* <div className={`defaultMenu ${props.right?"signUpActive":""} ${imageHover?"imageHover":""}`}>
               <NewsLetterSignUp image="/images/overlay.png"/>
                <div className="imagesCol">
                    {props.images?.map((image,index)=>{
                        return(
                            <div key={index} className="singleImageWrapper">
                                <div onMouseLeave={()=>setImagehover(false)} onMouseEnter={()=>{setImagehover(false),setImagehoverId(index)}} className="singleImage positionRelative">
                                    <img src={image.img} alt="Image" className="width-100 invisibleImage"/>
                                    {props.right && <div className="newsLetterWrapper positionAbsolute height-100 width-100"><NewsLetterSignUp/></div>}
                                    <img src={image.img} alt="Image" className={`${index==imageHoverId && "imageHovered"} width-100 visibleImage positionAbsolute height-100 width-100`}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>    */}
            <style jsx>{`
                .singleImageWrapper{
                    padding:1.5rem 2.5rem;
                }
                .singleImage{
                    overflow:hidden;
                }
                .signUpActive.imageHover .imageHovered{
                    z-index:8;
                    opacity:0.1;
                    transition:all 0.3s ease-out;
                }
                .imageHover .imageHovered{
                    transform:scale(1.02);
                    transition:all 0.3s ease-out;
                }
                .visibleImage{
                    transform:scale(1);
                    opacity:1;
                    z-index:9;
                    top:0;
                    left:0;
                    transition:all 0.3s ease-out;
                }
                .invisibleImage{
                    opacity:0;
                }
                .newsLetterWrapper{
                    z-index:9;
                    top:0;
                    left:0;
                }
                .signUpActive.defaultMenu{
                    transform: translateY(-50%);
                }
                .imagesCol {
                    animation:slide 16s infinite linear;
                }
                .imageHover .imagesCol{
                    animation-play-state: paused;
                }
                @keyframes slide {
                    to {
                        -webkit-transform: translateY(${props.right?"50%":"-50%"});
                        transform: translateY(${props.right?"50%":"-50%"});
                    }
                }
            `}</style>
        </>
    )
}
