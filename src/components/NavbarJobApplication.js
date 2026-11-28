import React from 'react'
import {MEDIUM_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from '../config'
function NavbarJobApplication(props) {
    const [indexSlider, setIndexSlider] = useState(0);

    function sliderUpdate(id) {
        slider.current.slickGoTo(id);
        setIndexSlider(id);
      }
      var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        autoplay: true,
        beforeChange: (current, next) => setIndexSlider(next),
      };

    return (
        <>
            <div className="bottomTextSection flexItems">
                        <div className="leftText">
                            <div onClick={() => slider.current.slickNext()}  className="greyCaption cursorPointer">{props.greyCaption}</div>    
                       </div>    
                        <div className="rightText">
                            <div onClick={() => slider.current.slickPrev()} className="greyCaption cursorPointer">{props.blackCaption}</div>                        
                        </div>             
                </div> 
                <style jsx>{`
                    .bottomTextSection {
                        justify-content: center;
                        border-bottom: 4px solid #00000029;
                    }
                    .leftText {
                        margin-right: 18.8%;
                    }
                    @media screen and (max-width: ${MEDIUM_BREAKPOINT}px) {
                        .leftText {
                            margin-right: 18%;
                        }  
                    }
                    @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                        .leftText {
                            margin-right: 17%;
                        } 
                    }
                `}</style>
        </>
    )
}

export default NavbarJobApplication
