import {connect} from 'react-redux'
import Button from './button'
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Image from './Image';

function InfoCtaLeftImageRight(props){
    return (
        <>
            <div className="wrapper lesserAdditionalPadding flexItems">
                <div className="left">
                    <div  className="bigDescription descTop grey marginBottom55" dangerouslySetInnerHTML={{__html:props.text}}></div>
                    <div ref={buttonRef} className="cta">
                        <Button buttonText={props.buttonText} buttonType="rectangle" textOnHover={props.buttonTextOnHover} />
                    </div>
                </div>
                <div className="right">
                    <Image height={524} width={420} alt="Image" originalSrc={props.img} className="width-100" />
                </div>
            </div>
            <style jsx>{`
                .smallHeading{
                    margin-top:2.8rem;
                }
                .left{
                    padding-top:4rem;
                    padding-right:5rem;
                    flex:1 0 auto;
                    width:60%;
                }
                .right{
                    flex:1 0 auto;
                    width:40%;
                }
                .line{
                    width:5rem;
                    border-bottom:1px solid #000000;
                    flex:0 0 auto;
                    transform: translateY(-0.7rem);
                }
                @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
                    .left{
                        width:50%;
                    }
                    .right{
                        width:50%;
                    }
                }
                @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
                    .left{
                        padding-top:0rem;
                    }   
                    .wrapper{
                        align-items: flex-start;
                    }
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .wrapper{
                        flex-direction: column-reverse;
                    }
                    .left{
                        width:100%;
                        padding: 0 4%;
                    }
                    .right{
                        width:100%;
                        margin-bottom:3rem;
                    }
                    .descTop{
                        font-size:1.6rem;
                        line-height:2.2rem;
                        letter-spacing:0.18px;
                    }
                }
            `}</style>
        </>
    )
}
function mapStateToProps({}){
    return {}
}
export default connect(mapStateToProps,{})(InfoCtaLeftImageRight)