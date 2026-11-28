import React, { useRef } from 'react'
import Button from './button'
import Space from './space';
import ThreeColArticles from './threeColArticles';
import Animate from './animate';

export default function ArticleSection(props){
    const scrollWrapper = useRef();
    const buttonForAllArticlesRef = useRef();
    const underlineArticleSectionRef = useRef();
    return (
        <>
        <div className="paddedContent articles">
            <ThreeColArticles
                title={props.title}
                articleCol={props.articleCol}
            />
           {!!props.buttonText && !!props.textOnHover  &&<Animate> <div ref={buttonForAllArticlesRef} className="moreArticlesButton alignCenter">
                <Button buttonText={props.buttonText} buttonType="rectangle" textOnHover={props.textOnHover} />
            </div></Animate>}
            <Space desktopHeight="9rem" tabletLandscapeHeight="6rem" mobileHeight="3rem"/>
            <div ref={underlineArticleSectionRef} className="borderBottom"></div>
        </div>
        <style>{`
          .borderBottom{
            border-bottom:1px solid #707070;
            height:1px;
            width:auto;
          }
        `}</style>
        </>
    )
}