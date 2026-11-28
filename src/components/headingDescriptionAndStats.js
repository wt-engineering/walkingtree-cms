
import Stats from './stats'
import HeadingAndDescriptionLeftImageRight from './headingAndDescriptionLeftImageRight'
export default function HeadingDescriptionAndStats(props){
    return (
        <>  
            <div className="alignCenter additionalPadding">
                <div className="smallHeading">{props.smallHeading}</div> 
                <div className="bigDescription grey">{props.bigDescription}</div>
            </div>
            <div className="lesserAdditionalPadding stats">
                <Stats />
            </div>
            <div className="lesserAdditionalPaddingLeft info">
                <HeadingAndDescriptionLeftImageRight />
            </div>
            {/* <div className="lesserAdditionalPadding">
                <div className="line"></div>
            </div> */}
            <style jsx>{`
                .info{
                    margin-top:21.45rem;
                }
                .stats{
                    margin-top:12.1rem;
                }
                .bigDescription{
                    margin-top:4.3rem;
                }
                .line{
                    margin-top:15rem;
                    border-bottom:1px solid #000000;
                }
            `}</style>
        </>
    )
}