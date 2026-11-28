import React,{useRef} from "react";
import { MOBILE_BREAKPOINT, TABLET_BREAKPOINT} from "../config";
import Link from "next/link";
import Image from "./Image";
import Animate from "./animate";

function ArticleListItem(props) {
  const imageContainerRef = useRef();
  const shortHeading1Ref = useRef();
  const shortHeading2Ref = useRef();
  const shortHeading3Ref = useRef();
  const headingRef = useRef();
  const desc1Ref = useRef();
  const desc2Ref = useRef();
  const desc3Ref = useRef();
  const descInsideImageRef = useRef();
  const readMoreLinkRef = useRef();
  
  return (
    <>
      <div className="articleListItem">
        <Animate>
          <div ref={imageContainerRef} className="imageContainer">
            <div className="featuredImage">
              {props?.article?.titles && (<h1 className="title smallHeading">{props.article.titles}</h1>)}
              {props?.article?.imageType == "featuredImageLandscape" && (<div className="featuredImageLandscape marginBottom55"><Link
                href={!!props.article.slug ? `/article/${props.article.slug}` : "#"}
                className="black"><img alt="Image" className="featuredImageLandscape width-100" src={props.article.featuredImageLandscape}/></Link></div>)}
              {props?.article?.imageType == "featuredImageSquare" && ( <div className="featuredImageSquare marginBottom55"><Link
                href={!!props.article.slug.current ? `/article/${props.article.slug}` : "#"}
                className="black"><img alt="Image" className="featuredImageSquare width-100" src={props.article.featuredImageSquare}/></Link></div>)} 
            </div>
            {props?.article?.imageType == "portrait" && (<div className="marginBottom55 portrait"> <Link
              href={!!props.article.slug ? `/article/${props.article.slug}` : "#"}
              className="black marginBottom55 portrait"><Image height={562} width={420} alt="Image portrait" originalSrc={props.article.portrait}/></Link> </div>)}
            {props?.article?.imageType == "square" && (<div className="marginBottom55 square"> <Link
              href={!!props.article.slug ? `/article/${props.article.slug}` : "#"}
              className="black marginBottom55 square"><Image height={354} width={420} alt="Image squre" originalSrc={props.article.square}/></Link></div>)}
          </div>
        </Animate>
          <Link href={!!props?.article?.categorySlug ? `/library/${props.article.categorySlug}` : "#"}>  
            <Animate><h2 ref={shortHeading1Ref} className="marginBottom26 shortHeading mainShortHeading category">{props.article.category}</h2></Animate> 
          </Link>
          {!!props.article.excerpt && <Link
            href={!!props?.article?.slug ? `/article/${props.article.slug}` : "#"}
            className="black">
            <Animate><div ref={headingRef} className="marginBottom26 heading smallHeading">{props.article.excerpt}</div></Animate>
          </Link>}
          <Link
            href={!!props?.article?.slug ? `/article/${props.article.slug}` : "#"}
            className={`black` }>
            <Animate><div ref={desc3Ref} className={`marginBottom16 description desc`}>{props.article.description}</div></Animate> 
          </Link>
          <Link href={!!props?.article?.slug ? `/article/${props.article.slug}` : "#"}>
            <Animate><div ref={shortHeading3Ref} className="marginBottom26 shortHeading2 mainShortHeading">{props.article.author}</div></Animate>
          </Link>
          <Link href={!!props?.article?.slug ? `/article/${props.article.slug}` : "#"}>
          <Animate><a ref={readMoreLinkRef} className="shortHeadingReadOn readMoreButton blackCaption grey cursorPointer">{props?.article?.label}</a></Animate>
          </Link>
      </div>
      <style jsx>{`
        .imageWithText {
          margin-bottom: 5rem;
        }
       .shortHeadingReadOn {
          text-decoration: none;
        }
        .shortHeadingReadOn:hover {
          font-weight: bold;
          color:#000000;
        }
        .category{
          text-decoration: none;
        }
        .category:hover{
          font-weight: bold;
          color:#000000;
        }
        .descTop {
          margin-bottom: 1.2rem;
          margin-right: 13rem;
        }
        .descTop2 {
          margin-bottom: 1.2rem;
          margin-right: 6rem;
        }
        .centerText {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%);
          overflow: hidden;
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .heading {
            margin-right: 0rem;
            margin-bottom: 3.5rem;
          }
          .descTop {
            margin-right: 0rem;
            margin-bottom: 2.5rem;
          }
          .descTop2 {
            margin-bottom: 2.5rem;
            margin-right: 0rem;
            font-size: 1.7rem;
          }
          .desc {
            font-size: 1.7rem;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .heading {
            margin-right: 1rem;
            margin-bottom: 0;
          }
          .descTop {
            margin-right: 1rem;
          }
          .featuredImageLandscape,
          .featuredImageSquare {
            width: 100%;
          }
          .featuredImageSquare {
            margin-top: 5.2rem;
          }
        }
      `}</style>
      <style jsx global>{`
      a{
        text-decoration: none;
      }
      `}

      </style>
    </>
  );
}

export default ArticleListItem;
