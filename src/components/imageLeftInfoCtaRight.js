import {connect} from 'react-redux'
import Button from './button'
import {MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT} from '../config'
import Animate from './animate'
import Image from './Image'
// import router from 'next/router'
function ImageLeftInfoCtaRight(props){
    return (
        <>
            <div className="wrapper paddedContent flexItems">
                <div className="left"><Animate><Image height={541} width={753} alt="Image" originalSrc={props.img} className="width-100"/></Animate></div>
                <div className="right">
                    <Animate><div className="mbBelowShortHeading mainShortHeading richText">{props.shortHeading}</div></Animate>
                    {props.cmsRichContent ? <Animate><div className="mbHeading bigHeading richText line1 black" dangerouslySetInnerHTML={{__html:props.heading}}></div> </Animate> :
                    <Animate><div className="mbHeading richText bigHeading line1 black" >{props.heading} </div> </Animate>
                    }
                    {props.cmsRichContent ? <Animate><div className="richText descTop " dangerouslySetInnerHTML={{__html: props.description}}></div></Animate>
                    :
                    <Animate><div className="richText descTop">{props.description}</div></Animate>
                }
                  {props.link && props.buttonText && props.buttonTextOnHover &&   <Animate><div className="cta ctaAbove"><Button buttonText={props.buttonText} buttonType="rectangle" textOnHover={props.buttonTextOnHover} href={props.link}/></div></Animate>}
                </div>
            </div>
            <style jsx>{`
                .left{
                    flex:1 0 auto;
                    width:60%;
                }
                .right{
                    padding-top:1rem;
                    padding-left:3.19%;
                    flex:1 0 auto;
                    width:40%;
                }
                .line{
                    width:5rem;
                    flex:0 0 auto;
                    transform: translateY(-0.7rem);
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px){
                    .wrapper{
                        display:block;
                    }
                    .left,.right{
                        width:100%;
                    }
                    .left {
                      margin-bottom: 2rem;
                    }
                    .right{
                        text-align:center;
                        padding-left:0rem;
                    }
                    .line1 > span{
                        display:none;
                    }
                    .descTop{
                        padding: 0 10%;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .wrapper{
                        display:block;
                    }
                    .left,.right{
                        width:100%;
                    }
                    .left {
                      margin-bottom: 3.5rem;
                    }
                    .right{
                        padding-top:0;
                        text-align:center;
                        padding-left:0rem;
                    }
                    .line1 > span{
                        display:none;
                    }
                    .descTop{
                        padding: 0;
                    }
                }
            `}</style>
        </>
    )
}
function mapStateToProps({}){
    return {}
}
export default connect(mapStateToProps,{})(ImageLeftInfoCtaRight)