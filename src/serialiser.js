import TextImageSection from "./components/textImageSection";
import TwoImgCol from "./components/twoImgCol";
import SliderSection from "./components/sliderSection";
import CultureImages from "./components/cultureImages";
import Trends from "./components/trends";
import CraftsmanshipSection from "./components/craftsmanshipSection";
import HorizontalSection from "./components/horizontalSection";
import Designers from "./components/designers";
import Sanity from "./sanity";
import TextAndTwoColumnImage from "./components/textAndTwoColumnImage";
import VideoSection from "./components/videoSection";
import CollectionsCarousel from "./components/collectionsCarousel";
import RandomImages from "./components/randomImages";
import BlockContent from "@sanity/block-content-to-react"
const imageBuilder = imageUrlBuilder(Sanity);
const urlFor = (source) => imageBuilder.image(source);
import imageUrlBuilder from "@sanity/image-url";
import TwoImageSlider from "./components/twoImageSlider";
import ChangeContentOnScroll from "./components/changeContentOnScroll";
import TwoImagetxt from "./components/twoImagetxt";
import ThreeImageslider from "./components/threeImageslider";
import ProductCatalog from "./components/productCatalog";
import Gifts from "./components/giftStory";
import MeetTheTeam from "./components/meetTheTeam";
import OneImage from "./components/oneImage";
import SliderThree from "./components/exploreMoreSlider";
import FooterHero from "./components/footerHero";
import Space from "./components/space";
import ProductCatalouge from "./components/productCatalouge1"
import {buildFileUrl, parseAssetId} from '@sanity/asset-utils'
import ShowsAndEvents from "./components/showsAndEvents";
import ThreeStepText from "./components/threeStepTextRichContent";
import ImageTextButton from "./components/ImageTextButton";
import Services from "./components/services";
import PrivateLabelCollections from "./components/privateLabelCollections";
import BrandManufacturing from "./components/brandManufacturing";
import NewBrandIncubation from "./components/newBrandIncubation";
import LeftHeadingRightContent from "./components/LeftHeadingRightContent";
import TwoImageTwoText from "./components/TwoImageTwoText";
import LeftContentRightImages from "./components/LeftContentRightImages";
import HorizontalSlider from "./components/horizontalSlider";
import Counts from "./components/Counts";
import GloriousThought from "./components/GloriousThought";
import ImageLeftInfoCtaRight from "./components/imageLeftInfoCtaRight"
import Conversation from "./components/Conversation";
import CircleImages from "./components/CircleImages";
import ArticleSection from "./components/articleSection";
import {TABLET_BREAKPOINT,MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,MEDIUM_BREAKPOINT,lineAnimationTiming} from './config'
import ThreeStepTextCarousel from './components/threeStepTextCarousel'
import History from './components/history'
import TextSurroundedByImagesAndCta from './components/textSurroundedByImagesAndCta'
import ShortHeadingAndDescriptionWithOptionalImage from "./components/shortHeadingAndDescriptionWithOptionalImage"
import HeadingAndDescriptionLeftImageRight from './components/headingAndDescriptionLeftImageRight'
import InfoAndPointsWithLines from './components/infoAndPointsWithLines'
import OurTeam from "./components/OurTeam";
import BannerCta from './components/bannerCta'
import OurResponse from "./components/ourResponse";
import Products from "./components/products";
import FullImage from "./components/fullImage";
import LivingWage from "./components/livingWage";
import ChampioningWomen from "./components/championingWomen";
import TwoStepAndImage from "./components/twoStepAndImage";
import ContentWithColorBackground from "./components/contentWithColorBackground";
import ThreeIcons from "./components/threeIcons";
import TwoRandomImagesAndOneTextSection from "./components/twoRandomImagesAndOneTextSection";
import CraftingWithIntegrity from "./components/craftingWithIntegrity";
import TwoImageSlideCenter from "./components/twoImageSlideCenter";
import Intepret from "./components/intepret";
import HeroModulePeople from "./components/heroModulePeople";
import ThreeStepTextWithUpAndDownImages from './components/threeStepTextWithUpAndDownImages'
import OurCulture from './components/ourCulture'
import ThreeStepTextOnTheRightSurroundedByImages from './components/threeStepTextOnTheRightSurroundedByImages'
import InfoCtaLeftImageRight from "./components/infoCtaLeftImageRight";
import Openings from "./components/openings"
import ImageText from "./components/imageText"
import OneImageslider from "./components/oneImageslider";
import ThreeImagesText from "./components/threeImagesText";
import BigImageAndText from "./components/bigImageAndText";
import TwoImagesAndNextPreviousButtons from "./components/twoImagesAndNextPreviousButtons";
import TwoQuestionAnswers from "./components/twoQuestionAnswers";
import ThreeImagesWithText from "./components/threeImagesWithText";
import TwoTextAndOneImg from "./components/twoTextAndOneImg";
import SliderThreeImages from "./components/sliderThreeImages";
import SectionVideo from "./components/sectionVideo";
import ThreeStepTextAndSingleImageCarousel from "./components/threeStepTextAndSingleImageCarousel";
import ImageSliderDescription from "./components/imageSliderDescription";
import RegalTraditions from "./components/regalTraditions";
import ClientsAndBrandPartners from "./components/ClientsAndBrandPartners";
import ThreeStepTextWithLandscapeImage from "./components/ThreeStepTextWithLandscapeImage";
import BrandLogoSlider from "./components/brandLogoSlider"
import VideoWithTwoStepText from "./components/videoWithTwoStepText";
import TwoStepTextAndImageOrVideo from "./components/twoStepTextAndImageOrVideo"
import Link from "next/link"
import LandscapeFullScreenVideo from "./components/landscapeFullScreenVideo";
import HeroModuleInternship from "./components/heroModuleInternship";
import CertificateAndBrandLogoSlider from "./components/certificateAndBrandLogoSlider";
import Maps from "./components/mapDynamic"
import ThreeColNewArticle from "./components/threeColNewArticle";
import NoJobOpenings from "./components/NoJobOpenings"
import TestomonialSlider from "./components/testomonialSlider"
import LongArrow from "./components/longArrow"
import ImageSliderWIthTwoStepText from "./components/imageSliderWithTwoStepText"
import ThreeImagesSliderWIthTwoStepText from "./components/threeImagesSliderWIthTwoStepText"
import TextAndGridImages from "./components/textAndGridImages";
import BigSliderwithContent from "./components/bigSliderwithContent";

export const serialiser = {
  marks: {
    customLink: (p)=>{
      //  console.log("mark",p.mark.externalUrl)
      return (
        <>
        {p.mark.type=="internal" ?  
         <Link href={p.mark.internalPath} className="white">

           {p.children}

         </Link>:
          <>
          <a href={p.mark.externalUrl} target="_blank" className="white underline">
              {p.children}
            </a>
            <div className="long">
            <LongArrow
                    arrowLength="5px"
                    lineLength="9px"
                    transformX="2.8px"
                    transformY="1px"
                    arrowWidth="1px"
                    color="#ffffff"
                    direction="top-right"
                    marginTop="0px"
                  />
              </div>
              <style jsx>{`
                .long{
                  display:inline-block;
                  margin-left:9px;
                  margin-bottom:3px;
                }
              `}
              </style>
            
            </>}
        </>
      );
    } 
  },
  types: {
    // customLink: (p)=>{
    //   console.log("link",p.node)
    //   return <span>test</span>
    // },

    // space:(p)=>{
    //   // console.log("space",p.node)
    //   return(
    //     <Space desktopHeight={p.node.desktopHeight} mediumHeight={p.node.mediumHeight} tabletLandscapeHeight={p.node.tabletLandscapeHeight} mobileHeight={p.node.mobileHeight} tabletHeight={p.node.tabletHeight}/>
    //   )
    // },
    
    threeTextsAndImageSection: (p) => {
      return (
        <div className="standardPaddingBottom">
          <TextImageSection
            text1={p.node?.text1}
            text2={p.node?.text2}
            text3={p.node?.text3}
            buttonText={p.node?.cta?.buttonText}
            buttonTextOnHover={p.node?.cta?.buttonTextOnHover}
            img={urlFor(p.node?.img).quality(100).url()}
            caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p className="rightText"></p>}
            imgCaptionBlack={p.node?.img1BlackCaption}
            imgCaptionGrey={p.node?.img1GreyCaption}
          />
         </div>
      );
    },
    twoColumnImageAndText: (p) => {
      return (
        <div className="standardPaddingBottom">
          <TwoImgCol
            img1={urlFor(p.node?.img1).quality(100).url()}
            img2={urlFor(p.node?.img2).quality(100).url()}
            shortHeading={p.node?.shortHeading}
            desc={p.node?.desc}
          />
         </div>
      );
    },
    sliderSection: (p) => {
      // console.log(p.node.sliderSection)
      let sliderContent=[]
      for(let i=0;i<p.node.sliderSection.length;i++){
        let obj={}
        obj.text1=p.node.sliderSection[i].text1
        obj.text2=p.node.sliderSection[i].text2
        obj.img=urlFor(p.node.sliderSection[i].img).quality(100).url()
        obj.type=parseInt(p.node.sliderSection[i].type)
        sliderContent.push(obj)
      }
      return (
        <div className="standardPaddingBottom">
          <SliderSection sliderData={sliderContent} />
        </div>
      );
    },
    cultureSection: (p) => {
      //  console.log("culture section ",p.node)
      return (
        <div className="standardPaddingBottom">
          <CultureImages
            img1={urlFor(p.node.img1).quality(100).url()}
            caption1={!!p.node.caption1? <BlockContent blocks={p.node.caption1} serializers={serialiser}/> :<p className="rightText"></p>}
            img2={urlFor(p.node.img2).quality(100).url()}
            caption2={!!p.node.caption2? <BlockContent blocks={p.node.caption2} serializers={serialiser}/> :<p className="rightText"></p>}
            img3={urlFor(p.node?.img3).quality(100).url()}
            img3ForTablet={urlFor(p.node?.img3ForTablet).url()}
            img4={urlFor(p.node?.img4).quality(100).url()}
            shortHeading={p.node?.shortHeading}
            heading={!!p.node.heading? <BlockContent blocks={p.node.heading} serializers={serialiser}/> :<p className="rightText"></p>}
            desc1={p.node?.desc1}
            desc2={p.node?.desc2}
            desc3={p.node?.desc3}
          />
         </div>
      );
    },
    trendsSection: (p) => {
      // console.log(p.node.trendsCollection)
      // let trends=[]
      // for(let i=0;i<p.node.trendsCollection.trendsCarousel.length;i++){
      //   let obj={}
      //   obj.img=urlFor(p.node.trendsCollection.trendsCarousel[i].img).quality(100).url()
      //   obj.width=(p.node.trendsCollection.trendsCarousel[i].width)
      //   obj.height=(p.node.trendsCollection.trendsCarousel[i].height)
      //   trends.push(obj)
      // }
      return (
        <div className="standardPaddingBottom">
          <Trends
            // trendCarouselData={trends}
            shortHeading={p.node?.shortHeading}
            topText1={!!p.node.topText1? <BlockContent blocks={p.node.topText1} serializers={serialiser}/>:<p></p>}
            topText2={!!p.node.topText2? <BlockContent blocks={p.node.topText2} serializers={serialiser}/>:<p></p>}
            caption1={!!p.node.caption1?<BlockContent blocks={p.node.caption1} serializers={serialiser}/>:<p className="rightText"></p>}
            caption2={!!p.node.caption2?<BlockContent blocks={p.node.caption2} serializers={serialiser}/>:<p className="rightText"></p>}
            bottomRightText1={p.node?.bottomRightText1}
            changeTextInTrendsSection={false}
            caption3={!!p.node.caption3? <BlockContent blocks={p.node.caption3}  serializers={serialiser}/>:<p className="rightText"></p>}
            caption4={!!p.node.caption4? <BlockContent blocks={p.node.caption4}  serializers={serialiser}/>:<p className="rightText"></p>}
            img1={urlFor(p.node?.img1).quality(100).url()}
            img2={urlFor(p.node?.img2).quality(100).url()}
            img3={urlFor(p.node?.img3).quality(100).url()}
            img4={urlFor(p.node?.img4).quality(100).url()}


          />
        </div>
      );
    },
    craftmanshipSection: (p) => {
      // console.log("serial",p.node)
      return (
        <div className="standardPaddingBottom">
          <CraftsmanshipSection
            leftImage1={urlFor(p.node?.leftImage1).quality(100).url()}
            leftImage2={urlFor(p.node?.leftImage2).quality(100).url()}
            leftImage3={urlFor(p.node?.leftImage3).quality(100).url()}
            leftImage4={urlFor(p.node?.leftImage4).quality(100).url()}
            leftImage5={urlFor(p.node?.leftImage5).quality(100).url()}
            rightImage={urlFor(p.node?.rightImage1).quality(100).url()}
            shortHeading={p.node.shortHeading}
            mainHeadingSub1={!!p.node?.mainHeadingSub1?<BlockContent blocks={p.node.mainHeadingSub1} serializers={serialiser}/>:<p></p>}
            mainHeadingSub2={p.node?.mainHeadingSub2}
            greyDescription={p.node?.greyDescription}
            text1={p.node?.text1}
            text2={p.node?.text2}
            leftCaption={!!p.node.leftCaption? <BlockContent blocks={p.node.leftCaption} serializers={serialiser}/> :<p className="richText classNme"></p>}
            leftCaption2={!!p.node.leftCaption2? <BlockContent blocks={p.node.leftCaption2} serializers={serialiser}/> :<p></p>}
            rightCaption={!!p.node.rightCaption? <BlockContent blocks={p.node.rightCaption} serializers={serialiser}/> :<p className="richText classNme"></p>}
            bottomText={p.node?.bottomText}
            bottomTextTablet={p.node.bottomTextTablet}
            slNo={p.node.slNo}
          />
        </div>
      );
    },
    horizontalSection: (p) => {
      // console.log("serial",p.node)
      return (
        <div className="standardPaddingBottom">
          <HorizontalSection
            defaultImage={urlFor(p.node?.defaultImage).quality(100).url()}
            hoverImage={urlFor(p.node?.hoverImage).quality(100).url()}
            defaultText={p.node?.defaultText}
            hoverText={p.node?.hoverText}
            caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p className="richText classNme"></p>}
          />
        </div>
      );
    },
    designers: (p) => {
      // console.log("serial",p.node)
      return (
        <div className="standardPaddingBottom">
          <Designers
            shortHeading={p.node?.shortHeading}
            desc={p.node?.desc}
            leftImage={urlFor(p.node?.leftImage).quality(100).url()}
            rightImage={urlFor(p.node?.rightImage).quality(100).url()}
            text1={p.node?.text1}
            text2={p.node?.text2}
            text3={p.node?.text3}
            caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p className="richText classNme"></p>}
            caption2={!!p.node.caption? <BlockContent blocks={p.node.caption2} serializers={serialiser}/> :<p className="richText classNme"></p>}

          />
         </div>
      );
    },
    //design studio asia --> design studio
    textAndTwoColumnImages: (p) => {
      // console.log(p.node.topText1)
      return (
        <div className="standardPaddingBottom">
          <TextAndTwoColumnImage
            shortHeading={p.node?.shortHeading}
            topText1={!!p.node.topText1? <BlockContent blocks={p.node.topText1} serializers={serialiser}/>:<p className="richText classNme"></p>}
            topText2={p.node?.topText2}
            img1={urlFor(p.node?.img1).quality(100).url()}
            img2={urlFor(p.node?.img2).quality(100).url()}
            bottomText={p.node.bottomText}
            
          />
         </div>
      );
    },
    videoSection: (p) => {
      // console.log("serial9i9u8ohbhbh",p.node)
      let mainImg =p.node?.mainImg?urlFor(p.node?.mainImg).quality(100).url():null;
      let mainImgMobile =p.node?.mainImgMobile?urlFor(p.node?.mainImgMobile).quality(100).url():null;
      let videoUrl= p.node?.video?.videoDesktop?.asset?._ref?buildFileUrl(parseAssetId(p.node?.video?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
      let videoUrlMobile=p.node?.video?.videoMobile?.asset?._ref?buildFileUrl(parseAssetId(p.node?.video?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
      return (
        <div className="standardPaddingBottom">
        <VideoSection
          mainImg={mainImg}
          mainImgMobile={mainImgMobile}
          shortHeading={p.node.shortHeading}
          mainHeading={!!p.node.mainHeading? <BlockContent blocks={p.node.mainHeading} serializers={serialiser}/> :<p className="richText classNme"></p>}
          buttonText={p.node?.callToAction?.buttonText}
          enableTextColor={!!p.node.enableTextColor?p.node.enableTextColor:false}
          buttonTextOnHover={p.node?.callToAction?.buttonTextOnHover}
          videoUrl={videoUrl}
          videoUrlMobile={videoUrlMobile}
          video={p.node?.video}
        />
        </div>
      );
    },
    collectionCarousel: (p) => {
      // console.log("collection carousel",p.node.collection)
      let collections=[]
      for(let i=0;i<p.node.collection.length;i++){
        let obj={}
        obj.desc=p.node.collection[i].desc
        obj.buttonText=p.node?.collection[i]?.callToAction?.buttonText
        obj.buttonTextOnHover=p.node.collection[i]?.callToAction?.buttonTextOnHover
        obj.sectionName=p.node.collection[i].sectionName
        obj.mainHeading=p.node.collection[i].mainHeading
        obj.mainImage=urlFor(p.node.collection[i].mainImage).quality(100).url()
        obj.shortHeading=p.node.collection[i].shortHeading
        obj.smallMsg=p.node.collection[i].smallMsg
        obj.subImage1=urlFor(p.node.collection[i].subImage1).quality(100).url()
        obj.subImage2=urlFor(p.node.collection[i].subImage2).quality(100).url()
        obj.subImage3=urlFor(p.node.collection[i].subImage3).quality(100).url()
        collections.push(obj)
      }
      return (
        <div className="standardPaddingBottom ">
          <CollectionsCarousel
            carouselData={collections}
            // animationDone={collectionCarouselAnimationDone}
          />
         </div>
      );
    },
    twoImageSliderSection: (p) => {
      // console.log("2 image slider",p.node.sliderItems)
      let sliderItems=[]
      for(let i=0;i<p.node.sliderItems.length;i++){
        let obj={}
        obj.img1=urlFor(p.node.sliderItems[i].img1).quality(100).url()
        obj.img2=urlFor(p.node.sliderItems[i].img2).quality(100).url()
        // obj.desc=p.node.sliderItems[i].desc
        obj.buttonText=p.node.sliderItems[i]?.cta?.buttonText
        obj.buttonTextOnHover=p.node.sliderItems[i]?.cta?.buttonTextOnHover
        sliderItems.push(obj)
      }
      // console.log(sliderItems)
      return (
        <div className="standardPaddingBottom ">
          <TwoImageSlider
            twoImageSliderData={sliderItems}
            shortHeading={p.node?.shortHeading}
            mainHeading={p.node?.mainHeading}
            desc={p.node?.desc}
          />
         </div>
      );
    },
    textAndImageSlider: (p) => {
      // console.log("serial",p.node)
      let randomImages=[]
      for(let i=0;i<p.node.items.length;i++){
        let obj={}
        obj.bigImage=urlFor(p.node.items[i].bigImage).quality(100).url()
        obj.content1=p.node.items[i].content1
        obj.content2=p.node.items[i].content2
        obj.smallMsg=p.node.items[i].smallMsg
        obj.smallImg1=urlFor(p.node.items[i].smallImg1).quality(100).url()
        obj.smallImg2=buildFileUrl(parseAssetId(p.node.items[i]?.smallImg2?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"})
        randomImages.push(obj)
      }
      // console.log(randomImages)
      return (
        <div className="standardPaddingBottom ">
        <RandomImages
        randomImagesSlider={randomImages}
        shortHeading={p.node.shortHeading}
        desc={p.node.desc}
        />
      </div>
      );
    },
    scrollSlider: (p) => {
      // console.log("serial",p.node.items)
      let scrollCards=[]
      for(let i=0;i<p.node.items.length;i++){
        let obj={}
        obj.about=p.node.items[i].about
        obj.artist=p.node.items[i].artist
        obj.desc=p.node.items[i].desc
        obj.sn=p.node.items[i].sn
        obj.img=urlFor(p.node.items[i].img).quality(100).url()
        scrollCards.push(obj)
      }
      return (
        <div className="standardPaddingBottom ">
        <ChangeContentOnScroll
          shortHeading={p.node.shortHeading}
          mainHeading={p.node.mainHeading}
          colText1={p.node.colText1}
          colText2={p.node.colText2}
          imageCards={scrollCards}
          cardIndex={0}
          cardIndexReduce={0}
        />
      </div> 
      );
    },
    showsAndEventsSection:(p)=>{
      // console.log(p.node)
      return (
        <div className="standardPaddingBottom ">
        <ShowsAndEvents
          mainHeading={p.node.mainHeading}
          desc={p.node.desc}
          sNum={p.node.sNum}
          sNum2={p.node.sNum2}
          shortHeading={p.node.shortHeading}
          shortHeading2={p.node.shortHeading2}
          content={p.node.content}
          content2={p.node.content2}
          buttonText={p.node.cta.buttonText}
          buttonTextOnHover={p.node.cta.buttonTextOnHover}
          eventImage={urlFor(p.node.eventImage).quality(100).url()}
          caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p className="richText classNme"></p>}
          />
        </div>  
      )
    },

    //unsaid****************
    threeTextAndImageSlider: (p) => {
      // console.log("serial91",p.node)

      let sliderDots=[]
      for(let i=0;i<p.node?.imageCollection?.trendsCarousel?.length;i++){
        let obj={}
        obj.img=urlFor(p.node?.imageCollection?.trendsCarousel[i]?.img).quality(100).url()
        obj.width=1086
        obj.height=539
        sliderDots.push(obj)
      }
      // console.log("sliderdots",sliderdots)
      return (
        // <>
        //  </>
        <div className="standardPaddingBottom "> 
        <ThreeStepTextAndSingleImageCarousel
          shortHeading={p.node?.shortHeading}
          topText1_2={p.node?.topTextPart2}
          topText1_3={p.node?.topTextPart3}
          sliderDots={sliderDots}
          topText2={p.node?.topText2}
        />
        </div>
      )
    },
    twoImagesAndText: (p) => {
      return (
        <div className="standardPaddingBottom ">
          <TwoImagetxt
            img1={urlFor(p.node?.img1).quality(100).url()}
            img2={urlFor(p.node?.img2).quality(100).url()}
            caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p className="richText"></p>}
            description={p.node?.description}
            blackCaption={p.node?.blackCaption}
            desc={p.node?.desc}
          />
        </div>
      );
    },
    featuredSection: (p) => {
      // console.log("serial 123",p.node.sliderImages)
      let sliderImages=[]
      for(let i=0;i<p.node?.sliderImages?.trendsCarousel?.length;i++){
        let obj={}
        obj.img=urlFor(p.node?.sliderImages?.trendsCarousel[i]?.img).quality(100).url()
        obj.height=388
        obj.width=309
        sliderImages.push(obj)
      }
      return (
        <>
           <div className="standardPaddingBottom ">
            <ThreeImageslider
              shortHeading={p.node?.shortHeading}
              mainHeading={p.node?.mainHeading}
              sliderPage={sliderImages}
              text1={p.node?.text1}
              text2Mobile={!!p.node.text2Mobile?<BlockContent blocks={p.node.text2Mobile} serializers={serialiser}/> :<p className="richText "></p>}
              text2Desktop={!!p.node.text2Desktop?<BlockContent blocks={p.node.text2Desktop} serializers={serialiser}/> :<p className="rightText"></p>}
            />
          </div>
        </>
      );
    },
    productCatalogue:(p)=>{

      // console.log("product catalogue",p.node)
      let catalogItems=[]
      for(let i=0;i<p.node?.catalog?.length;i++){
        let obj={}
        obj.img=urlFor(p.node?.catalog[i]?.img).quality(100).url()
        obj.imageType=p.node?.catalog[i]?.imageType
        if(p.node.catalog[i].imageType=="smallPortrait"){
          obj.height=275
          obj.width=229
        }else if(p.node.catalog[i].imageType=="landscape"){
          obj.height=229
          obj.width=275
        }else if (p.node.catalog[i].imageType=="portrait"){
          obj.height=330
          obj.width=275
        }else{
          obj.width=null
          obj.height=null
        }
        obj.caption1=p.node.catalog[i].caption1?<BlockContent blocks={p.node.catalog[i].caption1} serializers={serialiser}/>:<p className="richText"></p>
        obj.caption2=p.node.catalog[i].caption2
        obj._key=(p.node.catalog[i]._key)
        catalogItems.push(obj)
      }
      // console.log("catalog items",catalogItems)
        let catalogItemsMobile =[]
        for(let i=0;i<p.node.catalogMobileImages.length;i++) {
          let obj={}
          obj.img=urlFor(p.node.catalogMobileImages[i].img).quality(100).url()
          obj.height=p.node.catalogMobileImages[i].height
          obj.width=p.node.catalogMobileImages[i].width
          obj.caption1=!!p.node.catalogMobileImages[i].caption1?<BlockContent blocks={p.node.catalogMobileImages[i].caption1} serializers={serialiser}/>:<p className="richText"></p>
          obj.cmsRichContent=false
          catalogItemsMobile.push(obj)
        }
        return (
          <div className="standardPaddingBottom ">
           <ProductCatalouge
              shortHeading={p.node?.shortHeading}
              topText1={!!p.node?.topText1?<BlockContent blocks={p.node.topText1} serializers={serialiser}/>:<p></p>}
              text2={p.node?.text2}
              img={urlFor(p.node?.img).quality(100).url()}
              caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p></p> }
              captionMobile={!!p.node.captionMobile? <BlockContent blocks={p.node.captionMobile} serializers={serialiser}/> :<p></p>}
            />
            <Space desktopHeight="12.5rem" mediumHeight="10rem" tabletLandscapeHeight="8.5rem" mobileHeight="3rem"/>
            <div className="lesserAdditionalPadding">
              <ProductCatalog 
                catalog={catalogItems}
                mobileImages={catalogItemsMobile}
                buttonText={p.node.cta.buttonText}
                buttonTextOnHover={p.node.cta.buttonTextOnHover}
              />
            </div>
          </div>
        ) 
    },
    
    gifts: (p) => {
      // console.log("serialgift",p.node?.giftImages?.trendsCarousel)
      let giftImages=[]
      for(let i=0;i<p.node?.giftImages?.trendsCarousel?.length;i++){
        // console.log(p.node?.giftImages?.trendsCarousel[i].width)
        let obj={}
        obj.img=urlFor(p.node?.giftImages?.trendsCarousel[i]?.img).quality(100).url()
        obj.height=p.node?.giftImages?.trendsCarousel[i].height
        obj.width=p.node?.giftImages?.trendsCarousel[i].width
        giftImages.push(obj)
      }
      // console.log("giftImages",giftImages)
      return (
        // <></>
        <div className="standardPaddingBottom ">
        <Gifts
          shortHeading={p.node?.shortHeading}
          topText1={p.node?.topText1}
          giftStory={giftImages}
          bottomSubText={!!p.node.bottomSubText? <BlockContent blocks={p.node.bottomSubText} serializers={serialiser}/> :<p></p>}
          bottomRightText1={p.node?.bottomRightText1}
          bottomRightSubText={!!p.node.bottomRightSubText? <BlockContent blocks={p.node.bottomRightSubText} serializers={serialiser}/> :<p></p>}
          bottomRightSubText2={p.node?.bottomRightSubText2}
        />
        </div>
      );
    },
    meetTheTeam: (p) => {
      // console.log("serial",p.node)
      return (
        // <></>
        <div className="standardPaddingBottom">
        <MeetTheTeam
          shortHeading={p.node?.shortHeading}
          text1={p.node?.text1}
          leftImage={urlFor(p.node?.leftImage).quality(100).url()}
          caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p></p>}
          text2={p.node?.text2}
          rightImage={urlFor(p.node?.rightImage).quality(100).url()}
        />
        </div>
      );
    },
    aboutTheConsumer: (p) => {
      // console.log("about consumer", p.node?.blackCaption, p.node);
      return (
        <div className="standardPaddingBottom">
          <OneImage
            img={urlFor(p.node?.img).quality(100).url()}
            caption1={!!p.node.caption1? <BlockContent blocks={p.node.caption1} serializers={serialiser}/> :<p></p>}
            caption2={!!p.node.caption2? <BlockContent blocks={p.node.caption2} serializers={serialiser}/> :<p></p>}
          />
        </div>
      );
    },
    imageSlider: (p) => {
      // console.log(p.node.link)
      let sliderImages=[]
      for(let i=0;i<p.node.imageCollection.trendsCarousel.length;i++){
        let obj={}
        obj.img=urlFor(p.node.imageCollection.trendsCarousel[i].img).quality(100).url()
        sliderImages.push(obj)
      }
      return (
        // <></>
        <div className="standardPaddingBottom">
        <SliderThree
          mainShortHeading={p.node?.mainShortHeading}
          bigHeading={p.node?.bigHeading}
          sliderImages={sliderImages}
          description={p.node?.description}
          blackCaption={p.node?.blackCaption}
          greyCaption={p.node?.greyCaption}
          link={p.node.link}
          linkText={p.node.linkText}
        />
        </div>
      );
    },
    textAndVideoSection: (p) => {
      // console.log(p.node)
      return (
        // <></>
        <div className="standardPaddingBottom">
        <FooterHero
          mainImage={urlFor(p.node?.mainImage).quality(100).url()}
          shortHeading={p.node?.shortHeading}
          mainHeading={p.node?.mainHeading}
          bannerDescription={p.node?.bannerCaption}
        />
        </div>
      );
    },

    //b-to-b
    threeStepText: (p) => {
      // console.log("threeStepText",p.node);
      return (
        <div className="standardPaddingBottom">
        <ThreeStepText 
          center={true} 
          // topText2Class="" 
          shortHeading={!!p.node?.shortHeading?<BlockContent blocks={p.node.shortHeading} serializers={serialiser}/>:<p></p>}
          topText1={!!p.node?.topText1?<BlockContent blocks={p.node.topText1} serializers={serialiser}/>:<p></p>}
          topText2={!!p.node?.topText2?<BlockContent blocks={p.node.topText2} serializers={serialiser}/>:<p></p>}
        />
        </div>
      )
    },
    imageAndTextButton:(p)=>{
      // console.log(p.node.cta)
      return(
        <div className="standardPaddingBottom">
        <ImageTextButton
          img={urlFor(p.node.img).quality(100).url()}
          shortHeading={p.node.shortHeading}
          desc={p.node.desc}
          buttonText={p.node.cta.buttonText}
          buttonTextOnHover={p.node.cta.buttonTextOnHover}
        />
        </div>
      )
    },
    services:(p)=> {
      // console.log("p.nodeservies",p.node)
      return (
        // <></>
        <div className="standardPaddingBottom">
        <Services
          shortHeading={p.node?.shortHeading}
          smallheading={p.node?.smallheading}
          bigDescription={p.node?.bigDescription}
          image={urlFor(p.node?.image).quality(100).url()}
        />
        </div>
      )
    },
    privateLabelCollections: (p) => {
      return(
        <div className="standardPaddingBottom">
        <PrivateLabelCollections
          img1={urlFor(p.node?.img1).quality(100).url()}
          caption={!!p.node?.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/>:<p></p>}
          captionMobile={!!p.node?.captionMobile? <BlockContent blocks={p.node.captionMobile} serializers={serialiser}/>:<p></p>}
          img2={urlFor(p.node?.img2).quality(100).url()}
          img3={urlFor(p.node?.img3).quality(100).url()}
          img3ForTablet={urlFor(p.node?.img3ForTablet).quality(100).url()}
          img4={urlFor(p.node?.img4).quality(100).url()}
          img4ForTablet={urlFor(p.node?.img4ForTablet).quality(100).url()}
          shortHeading={p.node?.shortHeading}
          heading1={p.node?.heading1}
          desc1={p.node?.desc1}
          buttonText={!!p.node?.cta?.buttonText?p.node.cta.buttonText :null}
          buttonTextOnHover={!!p.node?.cta?.buttonTextOnHover?  p.node.cta.buttonTextOnHover:null}
        />
        </div>
      )
    },
    brandManufacturing: (p) => {
      return(
        <div className="standardPaddingBottom">
        <BrandManufacturing
          mainShortHeading={p.node?.mainShortHeading}
          smallHeading={p.node?.smallHeading}
          imageOne={urlFor(p.node?.imageOne).quality(100).url()}
          imageTwo={urlFor(p.node?.imageTwo).quality(100).url()}
          imageThree={urlFor(p.node?.imageThree).quality(100).url()}
          description={p.node?.description}
          bigDescription={p.node?.bigDescription}
          caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p></p>}
        />
        </div>
      )
    },
    newBrandIncubation: (p) => {
      return(
        <div className="standardPaddingBottom">
        <NewBrandIncubation
          mainShortHeading={p.node?.mainShortHeading}
          description={p.node?.description}
          bigDescription={p.node?.bigDescription}
          caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p></p>}
          image={urlFor(p.node?.image).quality(100).url()}

        />
        </div>
      )
    },
    //home page
    leftHeadingAndRightContent:(p)=>{
      return (
        <div className="standardPaddingBottom">
        <LeftHeadingRightContent
          shortHeading={p.node.shortHeading}
          mainHeading={p.node.mainHeading}
          content={!!p.node.content? <BlockContent blocks={p.node.content} serializers={serialiser}/> :<p></p>}
         />
         </div>        
      )
    },
    twoImageAndTwoText:(p)=>{
      // console.log("two image and text ",p.node.cta)
      let leftSideData={};
      let rightSideData={};
      if(p.node.smallImageFirst==true){
        leftSideData.leftMediaType=p.node?.leftSideData?.leftSideMediaType;
        leftSideData.rightMediaType=p.node?.leftSideData?.rightSideMediaType;
        leftSideData.leftImage=!!p.node?.leftSideData?.leftImage ? urlFor(p.node?.leftSideData?.leftImage).quality(100).url():null;
        leftSideData.rightImage=!!p.node?.leftSideData?.rightImage ? urlFor(p.node?.leftSideData?.rightImage).quality(100).url():null;
        leftSideData.leftVideo=!!p.node?.leftSideData?.leftVideo ? p.node?.leftSideData?.leftVideo :null;
        leftSideData.rightVideo=!!p.node?.leftSideData?.rightVideo ? p.node?.leftSideData?.rightVideo:null;
        leftSideData.leftVideoUrl=!!p.node?.leftSideData?.leftVideo?.videoDesktop?   buildFileUrl(parseAssetId(p.node?.leftSideData?.leftVideo?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
        leftSideData.leftVideoUrlMobile=!!p.node?.leftSideData?.leftVideo?.videoMobile ? buildFileUrl(parseAssetId(p.node?.leftSideData?.leftVideo?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null
        leftSideData.rightVideoUrl=!!p.node?.leftSideData?.rightVideo?.videoDesktop?   buildFileUrl(parseAssetId(p.node?.leftSideData?.rightVideo?.videoDesktop?.asset._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
        leftSideData.leftVideoUrlMobile=!!p.node?.leftSideData?.rightVideo?.videoMobile ? buildFileUrl(parseAssetId(p.node?.leftSideData?.rightVideo?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null
      }else{
        rightSideData.rightMediaType=p.node?.rightSideData?.rightSideMediaType;
        rightSideData.leftMediaType=p.node?.rightSideData?.leftSideMediaType;
        rightSideData.leftImage=!!p.node?.rightSideData?.leftImage ? urlFor(p.node?.rightSideData?.leftImage).quality(100).url():null;
        rightSideData.rightImage=!!p.node?.rightSideData?.rightImage ? urlFor(p.node?.rightSideData?.rightImage).quality(100).url():null;
        rightSideData.leftVideo=!!p.node?.rightSideData?.leftVideo ? p.node?.rightSideData?.leftVideo :null;
        rightSideData.rightVideo=!!p.node?.rightSideData?.rightVideo ? p.node?.rightSideData?.rightVideo:null;
        rightSideData.leftVideoUrl=!!p.node?.rightSideData?.leftVideo?.videoDesktop?   buildFileUrl(parseAssetId(p.node?.rightSideData?.leftVideo?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
        rightSideData.leftVideoUrlMobile=!!p.node?.rightSideData?.leftVideo?.videoMobile ? buildFileUrl(parseAssetId(p.node?.rightSideData?.leftVideo?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
        rightSideData.rightVideoUrl=!!p.node?.rightSideData?.rightVideo?.videoDesktop?   buildFileUrl(parseAssetId(p.node?.rightSideData?.rightVideo?.videoDesktop?.asset._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
        rightSideData.leftVideoUrlMobile=!!p.node?.rightSideData?.rightVideo?.videoMobile ? buildFileUrl(parseAssetId(p.node?.rightSideData?.rightVideo?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null
      }
      return(
        <>
       {!!p.node.smallImageFirst  ?
       <TwoImageTwoText
          smallImageFirst={p.node.smallImageFirst}
          leftSideData={leftSideData} 
          shortHeading={p.node?.shortHeading}
          heading={!!p.node.heading? <BlockContent blocks={p.node.heading} serializers={serialiser}/> :<p></p>}
          buttonText={p.node?.cta?.buttonText}
          buttonTextOnHover={p.node?.cta?.buttonTextOnHover}
          description={!!p.node.description? <BlockContent blocks={p.node.description} serializers={serialiser}/> :<p></p>}
          link={p.node?.cta?.internalLink}
        />:
        <TwoImageTwoText
          smallImageFirst={p.node.smallImageFirst}
          rightSideData={rightSideData} 
          shortHeading={p.node?.shortHeading}
          heading={!!p.node.heading? <BlockContent blocks={p.node.heading} serializers={serialiser}/> :<p></p>}
          buttonText={p.node?.cta?.buttonText}
          buttonTextOnHover={p.node?.cta?.buttonTextOnHover}
          description={!!p.node.description? <BlockContent blocks={p.node.description} serializers={serialiser}/> :<p></p>}
          link={p.node?.cta?.internalLink}
        />
        }
      
        </>

      )
    },  
    imageSliderDescription: (p) => {
      let sliderDesign=[]
      for (let i=0;i<p.node?.slidierDesign?.length;i++){
        let obj={}
        // obj.shortHeadingTop=p.node?.slidierDesign[i].shortHeadingTop
        obj.img=urlFor(p.node?.slidierDesign[i].img).quality(100).url()
        obj.shortHeading=p.node?.slidierDesign[i].shortHeading
        obj.desc=p.node?.slidierDesign[i].desc 
        obj.buttonText=p.node?.slidierDesign[i]?.cta?.buttonText
        obj.buttonTextOnHover=p.node?.slidierDesign[i]?.cta?.buttonTextOnHover
        obj.link=p.node?.slidierDesign[i]?.cta?.internalLink
        // obj.link=!!p.node?.slidierDesign[i]?.cta?.link
        sliderDesign.push(obj)
      }
      // console.log("sliderDesign",sliderDesign)
      return(
        <div className="standardPaddingBottom">
        <ImageSliderDescription 
         shortHeading={p.node.shortHeading}
         sliderDesign={sliderDesign}
         displayShortHeadingFirst={p.node.displayShortHeadingFirst}
          topText1={!!p.node?.topText1? <BlockContent blocks={p.node.topText1} serializers={serialiser}/>:<p></p>}

        />
        </div>
      )
    },
    circleImages:(p)=>{
      // console.log(p.node)
      return (
        <div className="standardPaddingBottom">
        <CircleImages
        shortHeading={!!p.node.shortHeading?<BlockContent blocks={p.node.shortHeading} serializers={serialiser}/>:<p></p>}
        topText1={!!p.node?.topText1? <BlockContent blocks={p.node.topText1} serializers={serialiser}/>:<p></p>}
        topText2={!!p.node?.topText2? <BlockContent blocks={p.node.topText2} serializers={serialiser}/> :<p></p>}
        buttonText={p.node?.cta.buttonText}
        link={p.node?.cta?.internalLink}
        img1={urlFor(p.node?.img1).quality(100).url()}
        img2={urlFor(p.node?.img2).quality(100).url()}
        img3={urlFor(p.node?.img3).quality(100).url()}
        // img4={urlFor(p.node?.img4).quality(100).url()}
        // img5={urlFor(p.node?.img5).quality(100).url()}
        // img6={urlFor(p.node?.img6).quality(100).url()}
      />
      </div>
      )
    },
    leftContentRightImage:(p)=>{
      // console.log("leftContentRightImage",p.node)
      return (
        <div className="standardPaddingBottom">
        <LeftContentRightImages
        shortHeading={p.node.shortHeading}
        heading={p.node.heading}
        description={!!p.node?.description ?<BlockContent blocks={p.node.description} serializers={serialiser}/>:<p></p>}
        buttonText={p.node?.cta?.buttonText}
        buttonTextOnHover={p.node?.cta?.buttonTextOnHover}
        // img1={urlFor(p.node.img1).quality(100).url()}
        img2={urlFor(p.node.img2).quality(100).url()}
        caption1={!!p.node.caption1? <BlockContent blocks={p.node.caption1} serializers={serialiser}/> :<p></p>}
        caption2={!!p.node.caption2? <BlockContent blocks={p.node.caption2} serializers={serialiser}/> :<p></p>}
        link={p.node?.cta?.link}
    />
    </div>
      )
    },
    horizontalSlider:(p)=>{
      // console.log(p.node.horizontalSliderImages.trendsCarousel)
      let sliderImages=[]
      for(let i=0;i<p.node.horizontalSliderImages.trendsCarousel.length;i++){
        let obj={}
        obj.img=urlFor(p.node.horizontalSliderImages.trendsCarousel[i].img).quality(100).url()
        obj.width=(p.node.horizontalSliderImages.trendsCarousel[i].width)
        obj.height=(p.node.horizontalSliderImages.trendsCarousel[i].height)
        sliderImages.push(obj)
      }
      // console.log(sliderImages)
      return(

        <div className="marginBottom90"> <HorizontalSlider horizontalSection={sliderImages}/></div>
      )
    },
    counts:(p)=>{
      // console.log("count",p.node)
      return(
        <div className="standardPaddingBottom">
        <Counts
          heading={p.node.heading}
          description={p.node.description}
          countItem1={p.node.countItem1}
          countItem2={p.node.countItem2}
          countItem3={p.node.countItem3}
          countItem4={p.node.countItem4}
          countItem5={p.node.countItem5}
        />
        </div>
      )
    },
    articleList:(p)=>{
      // console.log("article",p.node.allArticles)
      let articleList=null
      if(p.node.allArticles){
         articleList=p.node.allArticles.map((article) =>{
          return {
            category:article.articleCategory[0].title,
            categorySlug:article.articleCategory[0].slug,
            imageType:"portrait",
            // excerpt:article.excerpt,
            description:article.description,
            author:article.author,
            label:article.label,
            slug:article.slug,
            title:article.title,
            portrait:article.articlePortraitImage?urlFor(article.articlePortraitImage).quality(100).url():null,
          }
      })

      }
      // console.log("**********",articleList)
      
      return (
        <>
        {!!articleList && <ArticleSection  title={p.node.title} articleCol={articleList} buttonText={!!p.node?.cta?.buttonText? p.node.cta.buttonText:null} textOnHover={!!p.node?.cta?.buttonTextOnHover? p.node.cta.buttonTextOnHover:null}/>}
        </>
      )
    },
    headingWithBigImageContent:(p)=>{
      return (
        <div className="standardPaddingBottom">
        <GloriousThought
        shortHeading={p.node?.shortHeading}
        heading={p.node?.heading?<BlockContent blocks={p.node.heading} serializers={serialiser}/> :<p></p>}
        bgImg={urlFor(p.node?.bgImg).quality(100).url()}
        textOnImg={p.node?.textOnImg}
        buttonText={p.node.cta.buttonText}
    />
    </div>
      )
    },
    imageLeftWithTextAndCtaOnRight:(p)=>{
      return (
        <>
        <div className="futureFocus standardPaddingBottom">
        <ImageLeftInfoCtaRight
            shortHeading={p.node?.shortHeading}
            img={urlFor(p.node.img).quality(100).url()}
            heading={p.node.heading? <BlockContent blocks={p.node.heading} serializers={serialiser}/> :<p></p>}
            description={p.node?.description?<BlockContent blocks={p.node.description} serializers={serialiser}/>:<p></p>}
            buttonText={p.node.cta.buttonText}
            buttonTextOnHover={p.node.cta.buttonTextOnHover}
            link={p.node.cta.internalLink}
        />
        
        {/* <Space desktopHeight="9rem" tabletLandscapeHeight="0rem" mobileHeight="0rem"/> */}
        {/* <div className="paddedContent"><div className="borderBottom"></div></div> */}
    </div>
    <style jsx>{`
      @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
        .futureFocus .borderBottom{
          // display:none;
        }
      }
    `}</style>
    </>
      )
    },
    conversation:(p)=>{
      return (
        <div className="standardPaddingBottom">
        <Conversation
          shortHeading={p.node?.shortHeading}
          heading={p.node?.heading}
          msg={p.node?.msg}
          desc={p.node?.desc}
          buttonText={p.node?.cta.buttonText}
          img={urlFor(p.node?.img).quality(100).url()}
        />
        </div>
      )
    },

    //group
    threeStepTextWithImageCarousel:(p)=>{
      
      let carouselImages=[]
      for(let i=0;i<p.node.imageCollection.trendsCarousel.length;i++){
        let obj={}
        obj.img=urlFor(p.node.imageCollection.trendsCarousel[i].img).quality(100).url()
        obj.height=(p.node.imageCollection.trendsCarousel[i].height)
        obj.width=(p.node.imageCollection.trendsCarousel[i].width)
        carouselImages.push(obj)
      }
      return (
        <div className="standardPaddingBottom ">
        <ThreeStepTextCarousel 
          shortHeading={p.node?.shortHeading?<BlockContent blocks={p.node.shortHeading} />:<p></p>}
          topText1={p.node?.topText1?<BlockContent blocks={p.node.topText1} serializers={serialiser}/>:<p></p>}
          topText2={p.node?.topText2?<BlockContent blocks={p.node.topText2} serializers={serialiser}/>:<p></p>}
          carouselImages={carouselImages}
          shortHeading1={p.node.headingAndDescriptionWithOptionalImage.shortHeading}
          desc={p.node.headingAndDescriptionWithOptionalImage.desc}
        />
       </div> 
      )
    },
    twoStepTextWithSmallImageCarousel:(p)=>{
      let images=[]
      for(let i=0;i<p.node.imageCollection.trendsCarousel.length;i++){
        let obj={}
        obj.img=urlFor(p.node.imageCollection.trendsCarousel[i]).quality(100).url()
        images.push(obj)
      }
      return (
        <div className="standardPaddingBottom ">
        <History 
          shortHeading={p.node?.shortHeading}
          heading={p.node.heading}
          historyImages={images}
        />
        </div> 
      )
    },
    textSurroundingWithImageCaption: (p) => {
      return(
        <div className="standardPaddingBottom">
        <TextSurroundedByImagesAndCta 
          image1={urlFor(p.node.image1).quality(100).url()}
          image1Caption={!!p.node.imageCapion1? <BlockContent blocks={p.node.imageCapion1} serializers={serialiser}/> :<p></p>}
          shortHeading={p.node?.shortHeading}
          heading={!!p.node.heading? <BlockContent blocks={p.node.heading} serializers={serialiser}/> :<p></p>}
          desc={p.node?.desc}
          image2={urlFor(p.node?.image2).quality(100).url()}
          image3={urlFor(p.node?.image3).quality(100).url()}
          image2Caption={!!p.node.imageCapion2? <BlockContent blocks={p.node.imageCapion2} serializers={serialiser}/> :<p></p>}
          buttonText={p.node.cta.buttonText}
          buttonTextOnHover={p.node.cta.buttonTextOnHover}
        /> 
        </div>
      )
    },
    headingAndDescriptionWithOptionalImage:(p)=>{
      return (
        <ShortHeadingAndDescriptionWithOptionalImage 
         shortHeading={p.node.shortHeading}
         desc={p.node.desc} 
         img={urlFor(p.node?.image).quality(100).url()}/>
      )
    },
    headingDescriptionAndImageCaption:(p)=>{
      return (
        <HeadingAndDescriptionLeftImageRight 
         heading={p.node.heading}
         desc={p.node.description}
         img={urlFor(p.node?.img).quality(100).url()}
         caption={{showArrow:p.node.showArrow,text:!!p.node.text?<BlockContent blocks={p.node.text} serializers={serialiser}/> :<p></p>}}
        />
      )
    },
    threeStepTextAndPoints:(p)=>{
      let points=[]
      for(let i=0;i<p.node.points.length;i++){
        let obj={}
        obj.heading=p.node.points[i].heading
        obj.text=p.node.points[i].text
        points.push(obj)
      }
      return (
        <div className="standardPaddingBottom ">
        <InfoAndPointsWithLines 
          heading1={p.node.heading1} 
          description={!!p.node?.description?<BlockContent blocks={p.node.description} serializers={serialiser}/>:<p></p>} 
          img1={urlFor(p.node?.img1).quality(100).url()}
          caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p></p>}
          points={points}
        />
        </div>
      )
    },
    teams: (p) => {
      let teamMembers=[]
      for(let i=0;i<p.node?.teamDetails.length;i++){
        let obj={}
        obj.desc=p.node?.teamDetails[i].description
        obj.name=p.node?.teamDetails[i].name
        obj.designation=!!p.node.teamDetails[i].designation?<BlockContent blocks={p.node.teamDetails[i].designation} serializers={serialiser}/> :<p></p>
        obj.img=urlFor(p.node?.teamDetails[i].img).quality(100).url()
        teamMembers.push(obj)
      }
      // console.log(teamMembers)
      return (
        // <></>
        <div className="standardPaddingBottom">
        <OurTeam
          shortHeading={p.node.shortHeading}
          desc={p.node.desc}
          teamMembers={teamMembers}
        />
        </div>
      )
    },
    
    textAndCtaOnImage:(p)=>{
      // console.log("banner cta on image",p.node.desc)
      return (
        <div className="standardPaddingBottom">
        <BannerCta 
          img={urlFor(p.node?.image).quality(100).url()}
          text={!!p.node.desc? <BlockContent blocks={p.node.desc} serializers={serialiser}/> :<p></p>}
          buttonText={p.node.cta.buttonText}
          buttonTextOnHover={p.node.cta.buttonTextOnHover}
          cmsRichContent={false}
          link={p.node.cta.internalLink}
        />
        </div>
      )
    },
    // CSR + people components starts here
    heroModulePeople: (p) => {
      return(
        <div className="standardPaddingBottom">
        <HeroModulePeople 
        image={urlFor(p.node?.image).quality(100).url()}
        shortHeading={p.node?.shortHeading}
        heading={p.node?.heading}
        description={p.node?.description}
        label={p.node?.label}
        />
        </div>
      )
    },
    ourResponse:(p)=>{
      // console.log('ourResponse', p.node)
      return (
        <div className="standardPaddingBottom">
        <OurResponse
         smallHeading={p.node.smallHeading}
         description={p.node.description}
         image={urlFor(p.node?.image).quality(100).url()}
        />
        </div>
      )
    },
    products: (p) => {
      return (
        <div className="standardPaddingBottom">
        <Products 
          shortHeading={p.node?.shortHeading}
          smallHeading={p.node?.smallHeading}
          description={p.node?.description}
          image={urlFor(p.node?.image).quality(100).url()}
        />
        </div>
      )
    },
    fullImage:(p)=> {
      return(
        <div className="standardPaddingBottom"><FullImage  img={urlFor(p.node?.img).quality(100).url()} objectFitInMobile={true}/></div>
      )
    },
    livingWage:(p)=>{
      return(
        <div className="standardPaddingBottom">
        <LivingWage
          shortHeading={p.node?.shortHeading}
          smallHeading={p.node?.smallHeading}
          description={p.node?.description}
          description2={p.node?.description2}
          image={urlFor(p.node?.image).quality(100).url()}
          caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p></p>}
        />
        </div>
      )
    },
    intepret: (p) => {
     return(
       <div className="standardPaddingBottom">
        <Intepret
          shortHeading={p.node?.shortHeading}
          smallHeading={!!p.node?.smallHeading? <BlockContent blocks={p.node.smallHeading} serializers={serialiser}/> :<p></p>}
          description={!!p.node?.description? <BlockContent blocks={p.node.description} serializers={serialiser}/> :<p></p>}
          image={urlFor(p.node?.image).quality(100).url()}
        />
        </div>
      )
    },
    championWomen: (p) => {
      // console.log("championingWomen",p.node)
      return (
        <div className="standardPaddingBottom">
        <ChampioningWomen
          shortHeading={p.node?.shortHeading}
          smallHeading={p.node?.smallHeading}
          descriptionLeft={p.node?.descriptionLeft}
          descriptionRight={p.node?.descriptionRight}
          image1={urlFor(p.node?.image1).quality(100).url()}
          image2={urlFor(p.node?.image2).quality(100).url()}
          image3={urlFor(p.node?.image3).quality(100).url()}
          caption1={!!p.node.caption1? <BlockContent blocks={p.node.caption1} serializers={serialiser}/> :<p></p>}
          caption2={!!p.node.caption2? <BlockContent blocks={p.node.caption2} serializers={serialiser}/> :<p></p>}
          caption3={!!p.node.caption3? <BlockContent blocks={p.node.caption3} serializers={serialiser}/> :<p></p>}
        />
        </div>
      )
    },

    // sustainability starts here

    twoStepAndImage: (p) => {
      //need to update image guidelines.
      return (
        <div className="standardPaddingBottom">
        <TwoStepAndImage 
          shortHeading={p.node?.shortHeading}
          description={!!p.node.description? <BlockContent blocks={p.node.description} serializers={serialiser}/>:<p></p>}
          bigDescription={p.node?.bigDescription}
          blackCaption={p.node?.blackCaption}
          greyCaption={p.node?.greyCaption}
          caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p></p>}
          image={urlFor(p.node?.image).quality(100).url()}
        />
        </div>
      )
    },
    contentWithColorBackground: (p) => {
      // console.log("toptext", p.node.topText)
      let pointsLeft=[]
        for(let i=0;i<p.node.pointsLeft.length;i++){
          let obj={}
          obj.pointItem=p.node.pointsLeft[i]
          pointsLeft.push(obj)
        }
        let pointsRight=[]
        for(let i=0;i<p.node.pointsRight.length;i++) {
          let obj={}
          obj.pointItem=p.node.pointsRight[i]
          pointsRight.push(obj)
        }
      return(
        <div className="standardPaddingBottom ">
        <ContentWithColorBackground
          shortHeading={p.node?.shortHeading}
          topText={!!p.node.topText? <BlockContent blocks={p.node.topText} serializers={serialiser}/>:<p></p>}
          singleImage={urlFor(p.node?.singleImage).quality(100).url()}
          heading={p.node?.heading}
          description={p.node?.description}
          shortHeadingLeft={p.node?.shortHeadingLeft}
          smallHeadingLeft={p.node?.smallHeadingLeft}
          shortHeadingRight={p.node?.shortHeadingRight}
          smallHeadingRight={p.node?.smallHeadingRight}
          pointsLeft={pointsLeft}
          pointsRight={pointsRight}
        />
        </div>
      )
    },
    threeIcons: (p) => {
      return(
        <ThreeIcons 
          iconLeft={urlFor(p.node?.iconLeft).quality(100).url()}
          shortHeadingLeft={p.node?.shortHeadingLeft}
          descriptionLeft={p.node?.descriptionLeft}
          iconCenter={urlFor(p.node?.iconCenter).quality(100).url()}
          shortHeadingCenter={p.node?.shortHeadingCenter}
          descriptionCenter={p.node?.descriptionCenter}
          iconRight={urlFor(p.node?.iconRight).quality(100).url()}
          shortHeadingRight={p.node?.shortHeadingRight}
          descriptionRight={p.node?.descriptionRight}
        />
      )
    },
    twoRandomImagesAndOneTextSection: (p) => {
      return (
        <div className="standardPaddingBottom">
        <TwoRandomImagesAndOneTextSection 
          bottomImageLeft={urlFor(p.node?.bottomImageLeft).quality(100).url()}
          caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p></p>}
          label={p.node?.label}
          bottomImageRight={urlFor(p.node?.bottomImageRight).quality(100).url()}
        />
        </div>
      )
    },
    craftingWithIntegrity: (p) => {
      return (
        <div className="standardPaddingBottom">
        <CraftingWithIntegrity 
          mainImage={urlFor(p.node?.mainImage).quality(100).url()}
          mainImageMobile={urlFor(p.node?.mainImageMobile).quality(100).url()}
          shortHeading={p.node?.shortHeading}
          mainHeading={!!p.node?.mainHeading? <BlockContent blocks={p.node.mainHeading} serializers={serialiser}/> :<p></p>}
          description={!!p.node.description? <BlockContent blocks={p.node.description} serializers={serialiser}/> :<p></p>}
          enableTextColor={!!p.node.enableTextColor?p.node.enableTextColor:false}
        />
        </div>
      )
    },
    twoImageSlideCenter: (p) => {
      // console.log("slider",p.node.sliderTwoImage.trendsCarousel)
      let sliderTwoImage=[]
      for(let i=0;i<p.node.sliderTwoImage.trendsCarousel.length;i++){
        let obj={}
        obj.img=urlFor(p.node.sliderTwoImage.trendsCarousel[i]).quality(100).url()
        sliderTwoImage.push(obj)
      }
      return(
        <div className="standardPaddingBottom ">
        <TwoImageSlideCenter
         sliderTwoImage={sliderTwoImage}
         mainShortHeading={p.node?.mainShortHeading}
         bigHeading={p.node?.bigHeading}
        />
        </div>
      )
    },
  
    //culture and careers
    threeStepTextWithTwoImagesAndCaptions:(p)=>{
      // console.log("serial data",p.node)
      return (

        < div className="standardPaddingBottom">
        <ThreeStepTextWithUpAndDownImages 
          shortHeading={!!p.node?.threeStepText.shortHeading?<BlockContent blocks={p.node.threeStepText.shortHeading}  serializers={serialiser}/>:<p></p>}
          topText1={!!p.node.threeStepText.topText1? <BlockContent blocks={p.node.threeStepText.topText1} serializers={serialiser}/>:<p></p>}
          topText2={!!p.node.threeStepText.topText2? <BlockContent blocks={p.node.threeStepText.topText2} serializers={serialiser}/> :<p></p>}
          img1={urlFor(p.node.imageAndCaption1.img).quality(100).url()}
          height1={p.node?.imageAndCaption1.height}
          width1={p.node?.imageAndCaption1.width}
          img2={urlFor(p.node.imageAndCaption2.img).quality(100).url()}
          height2={p.node?.imageAndCaption2.height}
          width2={p.node?.imageAndCaption2.width}
          img1Caption1={{showArrow:p.node.imageAndCaption1.showArrow1,text:!!p.node.imageAndCaption1.caption1?<BlockContent blocks={p.node.imageAndCaption1.caption1} serializers={serialiser}/>:<p></p>}} 
          img1Caption2={{showArrow:p.node.imageAndCaption1.showArrow2,text:!!p.node.imageAndCaption1.caption2 ? <BlockContent blocks={p.node.imageAndCaption1.caption2} serializers={serialiser}/>:<p></p>}}
          img2Caption1=""
          img2Caption2=""
          
          />
          {/* <ThreeStepTextWithUpAndDownImages 
                shortHeading="All about how we make it" 
                topText1="Walking Tree enables entry into a world of unlimited possibilities." 
                topText2="We aspire to create simply beautiful workspaces that in turn inspire creativity and collaboration. pooling our years of collective expertise and forensic eye for detail, we ensure every Walking Tree™ workspace is infused with the same combination of quality, consistency and comfort, resulting in office spaces that are a joy to spend time in."
                img1="/images/culture1.png"
                img2="/images/culture2.png"
                img1Caption1={{showArrow:true,text:"<strong>Lonnie Castle</strong>, Culture And Concepts Manager"}} 
                img1Caption2={{showArrow:true,text:`Design Studio & India Headquarters, <strong>Mumbai</strong>`}}
                img2Caption1=""
                img2Caption2=""
                cmsRichContent={true}
                /> */}
        </div>
      )
    },
    twoColumnTextWithImages:(p)=>{
      return (
        <div className="standardPaddingBottom">
        <OurCulture 
            shortHeading={p.node.shortHeading}
            heading={p.node.heading}
            leftDesc1={p.node.leftDesc1}
            leftDesc2={p.node.leftDesc2}
            rightDesc1={p.node.rightDesc1}
            rightDesc2={p.node.rightDesc2}
            img1={urlFor(p.node?.img1).quality(100).url()}
            img2={urlFor(p.node?.img2).quality(100).url()}
            rightCaption1={!!p.node.rightCaption1 ? <BlockContent blocks={p.node.rightCaption1} serializers={serialiser}/> :<p></p>}
            rightCaption2={!!p.node.rightCaption2 ? <BlockContent  blocks={p.node.rightCaption2} serializers={serialiser} /> : <p></p>}
            caption1={{showArrow:p.node.showArrow1,text:!!p.node.text1?<BlockContent blocks={p.node.text1} serializers={serialiser}/>:<p></p>}}
            caption2={{showArrow:p.node.showArrow2,text:!!p.node.text2?<BlockContent blocks={p.node.text2} serializers={serialiser}/>:<p></p>}}
          />
        </div>  
      )
    },
    threeStepTextWithImageCaption: (p) => {
      // console.log("imageWith caption",p.node.imageWithCaption3.img)
      return (
        <div className="standardPaddingBottom">
        <ThreeStepTextOnTheRightSurroundedByImages
          shortHeadingTop={!!p.node.threeStepText?.shortHeading?<BlockContent blocks={p.node.threeStepText.shortHeading} serializers={serialiser}/>:<p></p>}
          topText1Top={!!p.node.threeStepText?.topText1?<BlockContent blocks={p.node.threeStepText.topText1} serializers={serialiser}/>:<p></p>}
          topText2Top={!!p.node.threeStepText?.topText2?<BlockContent blocks={p.node.threeStepText.topText2} serializers={serialiser}/>:<p></p>}
          image1={urlFor(p.node.imageWithCaption1.img).quality(100).url()}
          image2={urlFor(p.node.imageWithCaption2.img).quality(100).url()}
          caption1={{showArrow:p.node?.imageWithCaption1?.showArrow,text:!!p.node.imageWithCaption1?.text?<BlockContent blocks={p.node.imageWithCaption1.text} serializers={serialiser}/>:<p></p>}}
          caption2={{showArrow:p.node.imageWithCaption2?.showArrow,text:!!p.node.imageWithCaption2?.text?<BlockContent blocks={p.node.imageWithCaption2.text} serializers={serialiser}/>:<p></p>}}
          image3={urlFor(p.node.imageWithCaption3.img).quality(100).url()}
          caption3=""
          cmsRichContent={false}
         />
        </div>  
      )
    },
    contentRightImageLeft:(p)=>{
      return (
        <div className="standardPaddingBottom">
        <InfoCtaLeftImageRight
        text={p.node?.text}
        img={urlFor(p.node.img).quality(100).url()}
        buttonText={p.node.cta.buttonText}
        buttonTextOnHover={p.node.cta.buttonTextOnHover}
        />
        </div>
      )
    },
    gridImage: (p) => {
      return (
        <div className="standardPaddingBottom"><FullImage img={urlFor(p.node?.img).quality(100).url()} objectFitInMobile={true}/></div>
      )
    },
    openings: (p) => {
      // console.log("openings",p.node.jobOpening)
      let jobOpenings=[]
      for(let i=0;i<p.node.jobOpening.length;i++){
        jobOpenings.push({department:p.node.jobOpening[i].name,position:p.node.jobOpening[i].position,_key:i})
      }
      // console.log("jobOpenings",jobOpenings)
      return (
        // <div className="standardPaddingBottom">
        //  <Openings 
        // //   shortHeading={p.node?.shortHeading}
        // //   heading1={p.node?.heading1}
        // //   heading2={p.node?.heading2}
        // //   description={p.node?.description}
        // //   jobOpenings={jobOpenings}
        // // />
        // </div>
        <></>
      )
    },
  //{*********** Single Articles *************}

  // style-and-innovation starts here 

    imageText: (p) => {
      return (
        <div className="">
        <ImageText 
          bigText={p.node?.bigText}
          descriptionUp={p.node?.descriptionUp}
          image={urlFor(p.node?.image).quality(100).url()}
          descriptionDown={p.node?.descriptionDown}
        />
        </div>
      )
    },
    oneSliderimage: (p) => {  
      let sliderFourImages=[]
      for(let i=0;i<p.node.oneImageslider.trendsCarousel.length;i++){
        let obj={}
        obj.img=urlFor(p.node.oneImageslider.trendsCarousel[i]).quality(100).url()
        sliderFourImages.push(obj)
      }
      return(
        <div className="standardPaddingBottom">
        <OneImageslider
          oneImageslider={sliderFourImages}
          shortHeading={p.node?.shortHeading}
          heading={!!p.node.heading? <BlockContent blocks={p.node.heading} serializers={serialiser}/> :<p></p>}
        />
        </div>
      )
    },
    threeImagesText: (p) => {
      // console.log(p.node?.secondImg)
      return(
        <div className="standardPaddingBottom">
        <ThreeImagesText
          mobileImageTop={urlFor(p.node?.mobileImageTop).url()}
          firstImg={urlFor(p.node?.firstImg).url()}
          secondImg={urlFor(p.node?.secondImg).url()}
          thirdImg={urlFor(p.node?.thirdImg).url()}
          desc={p.node?.desc}
        />
        </div>
      )
    },
    bigImageAndText:(p)=>{
      return(
        <div className="standardPaddingBottom">
      <BigImageAndText 
       singleImage={urlFor(p.node?.singleImage).quality(100).url()}
       heading={p.node?.heading}
       desc={p.node?.desc} 
      />
      </div>
      )
    },
    twoImagesAndNextPreviousButtons: (p) => {
      return(
        <div className="standardPaddingBottom">
        <TwoImagesAndNextPreviousButtons 
          firstImg={urlFor(p.node?.firstImg).quality(100).url()}
          secondImg={urlFor(p.node?.secondImg).quality(100).url()}
          caption1={!!p.node.caption1? <BlockContent blocks={p.node.caption1} serializers={serialiser}/> :<p></p>}
          caption2={!!p.node.caption2? <BlockContent blocks={p.node.caption2} serializers={serialiser}/> :<p></p>}
          rightText={p.node?.rightText}
          nextArticle={p.node?.nextArticle}
          previousArticle={p.node?.previousArticle}
        />
        </div>
      )
    },
    // twoTextAndOneImg : (p) => {
    //   return (
    //     <TwoImageTwoText 
    //     bigText={props?.bigText}
    //     desc={p.node?.desc}
    //     singleImage={urlFor(p.node?.singleImage).quality(100).url()}
    //     questions={p.node?.questions}
    //     shortAnswer={p.node?.shortAnswer}
    //     answer={p.node?.answer}
        
    //     />
    //   )
    // },tii
    twoTextAndOneImg: (p) => {
      return (
        <div className="standardPaddingBottom">
        <TwoTextAndOneImg
          bigText={p.node?.bigText}
          desc={p.node?.desc}
          singleImage={urlFor(p.node?.singleImage).quality(100).url()} 
          questions={p.node?.questions}
          shortAnswer={p.node?.shortAnswer}
          answer={p.node?.answer}
        />
        </div>
      )
    },
    threeImagesWithText: (p) => {
      return (
        <div className="standardPaddingBottom">
        <ThreeImagesWithText
          imgLeft={urlFor(p.node?.imgLeft).quality(100).url()}
          caption1Left={!!p.node.caption1Left? <BlockContent blocks={p.node.caption1Left}/> :<p></p>}
          caption2Left={!!p.node.caption2Left? <BlockContent blocks={p.node.caption2Left}/> :<p></p>}
          imgRight={urlFor(p.node?.imgRight).quality(100).url()}
          captionRight={!!p.node.captionRight? <BlockContent blocks={p.node.captionRight}/> :<p></p>} 
          imgDown={urlFor(p.node?.imgDown).quality(100).url()}
        />
        </div>
      )
    },
    twoQuestionAnswers: (p) => {
      return (
        <div className="standardPaddingBottom">
        <TwoQuestionAnswers
          questions={p.node?.questions}
          shortAnswer={p.node?.shortAnswer}
          answer={p.node?.answer}
          lastQuestion={p.node?.lastQuestion}
          smallBoldText={p.node?.smallBoldText} 
          answers={p.node?.answers}
        />
        </div>
      )
    },
    sliderThreeImages: (p) => {
      let slides=[]
      for(let i=0;i<p.node.slider.trendsCarousel.length;i++){
        let obj={}
        obj.img=urlFor(p.node.slider.trendsCarousel[i]).url()
        slides.push(obj)
      }
      return (
        <div className="standardPaddingBottom">
        <SliderThreeImages
        slides={slides}
        mainShortHeading={p.node?.mainShortHeading}
        desc={p.node?.desc}
        smallHeading={p.node?.smallHeading}
        />
        </div>
      )
    },
    video:(p)=> {
    // console.log("video",p.node)
      return(
        <div className="standardPaddingBottom">
        <SectionVideo
          mainImg={urlFor(p.node?.mainImg).quality(100).url()}
          shortHeading={p.node?.shortHeading}
          mainHeading={p.node?.mainHeading}
          buttonText={p.node?.cta?.buttonText}
          buttonTextOnHover={p.node?.cta?.buttonTextOnHover}
        />
        </div>

      )
    },
    regalTraditions: (p) => {
      return(
        <div className="standardPaddingBottom">
        <RegalTraditions
        img={urlFor(p.node?.img).quality(100).url()}
        shortHeading={p.node?.shortHeading}
        heading={p.node?.heading}
        description={p.node?.description} 
        // bottomImg1={urlFor(p.node?.bottomImg1).quality(100).url()}
        // bottomImg2={urlFor(p.node?.bottomImg2).quality(100).url()}
        />
        </div>
      )
    },
    // map:(p)=>{
    //   return (
    //     <Maps mapItems={p.node.map}/>
    //   )
    // },
    clientsAndBrandPartners: (p) => {
      
      let brandLogo=[]
      for(let i=0;i<p.node?.brandLogo?.brandLogo?.length;i++){
        let obj={}
        obj.img=urlFor(p.node?.brandLogo.brandLogo[i]).quality(100).url()
        brandLogo.push(obj)
      }
      return(
        // <></>
        <div className="standardPaddingBottom">
        <ClientsAndBrandPartners
          shortHeading={p.node?.shortHeading}
          heading={!!p.node.heading? <BlockContent blocks={p.node.heading} serializers={serialiser}/> :<p></p>}
          description={p.node?.description}
          rightText={p.node.rightText}
          caption={!!p.node.caption? <BlockContent blocks={p.node.caption} serializers={serialiser}/> :<p></p>}
          brandLogo={brandLogo}
        />
        </div>
      )
    },
    threeStepTextWithLandscapeImage: (p) => {
      let img =!!p.node?.img  ?urlFor(p.node?.img).quality(100).url():null;
      let videoUrl= !!p.node?.video?.videoDesktop?.asset?._ref ?buildFileUrl(parseAssetId(p.node?.video?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
      let videoUrlMobile=!!p.node?.video?.videoMobile?.asset?._ref ?buildFileUrl(parseAssetId(p.node?.video?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
      return (
        <div className="standardPaddingBottom">
        <ThreeStepTextWithLandscapeImage 
          center={true} 
          topText2Class="grey bigDescription" 
          shortHeading={!!p.node?.shortHeading?<BlockContent blocks={p.node.shortHeading} serializers={serialiser}/>:<p></p>}
          topText1={!!p.node?.topText1?<BlockContent serializers={serialiser} blocks={p.node.topText1}/>:<p></p>}
          topText2={!!p.node?.topText2?<BlockContent blocks={p.node.topText2} serializers={serialiser}/>:<p></p>}
          img={img}
          videoUrl={videoUrl}
          videoUrlMobile={videoUrlMobile}
          mediaType={p.node?.mediaType}
          video={p.node?.video}
        />
        </div>
      )
    },
    brandLogoSlider: (p) => {
      // console.log("brandLogoSlider",p.node)
      let brandLogoSlider=[]
      for(let i=0;i<p.node.trendsCollection.trendsCarousel.length;i++){
        let obj={}
        obj.img=urlFor(p.node.trendsCollection.trendsCarousel[i].img).quality(100).url()
        obj.width=(p.node.trendsCollection.trendsCarousel[i].width)
        // obj.height=(p.node.trendsCollection.trendsCarousel[i].height)
        brandLogoSlider.push(obj)
      }
      return (
        <div className="standardPaddingBottom ">
        <BrandLogoSlider
          shortHeading={p.node?.shortHeading}
          brandLogoSlider={brandLogoSlider}
        />
        </div>
      )
    },
    certificateAndBrandLogoSlider: (p) => {
      const trendsCarousel = p.node?.brandLogoSlider?.trendsCollection?.trendsCarousel
      let certificateAndBrandLogoSlider=[]
      if (Array.isArray(trendsCarousel) && trendsCarousel.length > 0) {
        for(let i=0;i<trendsCarousel.length;i++){
          if (!trendsCarousel[i]?.img) continue
          let obj={}
          obj.img=urlFor(trendsCarousel[i].img).quality(100).url()
          // obj.width=(p.node.brandLogoSlider.trendsCarousel[i].width)
          // obj.height=(p.node.brandLogoSlider.trendsCollection.trendsCarousel[i].height)
          certificateAndBrandLogoSlider.push(obj)
        }
      }
      return (
       <div className="standardPaddingBottom ">
      <CertificateAndBrandLogoSlider 
        shortHeading = {p.node?.shortHeading}
        heading={!!p.node.heading? <BlockContent blocks={p.node.heading} serializers={serialiser} /> :<p></p>}
        description={!!p.node.description? <BlockContent blocks={p.node.description} serializers={serialiser}/> :<p></p>}
        brandLogoSlider={certificateAndBrandLogoSlider}
        image1={'/images/logo21.png'}
        image2={'/images/logo22.png'}
      />
      </div>
      )
    },
    videoWithTwoStepText: (p) => {
      let img =!!p.node?.img  ?urlFor(p.node?.img).quality(100).url():null;
      let videoUrl= !!p.node?.video?.videoDesktop?.asset?._ref ?buildFileUrl(parseAssetId(p.node?.video?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
      let videoUrlMobile=!!p.node?.video?.videoMobile?.asset?._ref ?buildFileUrl(parseAssetId(p.node?.video?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
      return (
        <div className="standardPaddingBottom">
        <VideoWithTwoStepText 
        displayShortHeadingFirst={p.node.displayShortHeadingFirst}
          mediaType={p.node.mediaType}
          shortHeading={p.node.shortHeading}
          heading={p.node.heading}
          description={!!p.node.description? <BlockContent blocks={p.node.description} serializers={serialiser}/> :<p></p>}
          videoUrl={videoUrl}
          videoUrlMobile={videoUrlMobile}
          video={p.node?.video}
          img={img}
        />
        </div>
      )
    },

    twoStepTextAndImageOrVideo:(p) => {
      // console.log("textOrVideo",p.node)
      let img =!!p.node?.img  ?urlFor(p.node?.img).quality(100).url():null;
      let videoUrl= !!p.node?.video?.videoDesktop?.asset?._ref ?buildFileUrl(parseAssetId(p.node?.video?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
      let videoUrlMobile=!!p.node?.video?.videoMobile?.asset?._ref ?buildFileUrl(parseAssetId(p.node?.video?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
      return (
        <div className="standardPaddingBottom">
        <TwoStepTextAndImageOrVideo 
          heading={!!p.node?.heading ? <BlockContent blocks={p.node.heading} serializers={serialiser}/> :<p></p>}
          description={!!p.node.description? <BlockContent blocks={p.node.description} serializers={serialiser}/> :<p></p>}
          img={img}
          videoUrl={videoUrl}
          videoUrlMobile={videoUrlMobile}
          mediaType={p.node?.mediaType}
          video={p.node?.video}
        /> 
        </div>
      )
    },
    LandscapeFullScreenVideo:(p) => {
      let img =!!p.node?.img ?urlFor(p.node?.img).quality(100).url():null;
      let videoUrl= !!p.node?.video?.videoDesktop?.asset?._ref ?buildFileUrl(parseAssetId(p.node?.video?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
      let videoUrlMobile=!!p.node?.video?.videoMobile?.asset?._ref ?buildFileUrl(parseAssetId(p.node?.video?.videoMobile?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
      return (
        // <></>
        <div className="standardPaddingBottom">
        <LandscapeFullScreenVideo
          img={img}
          videoUrl={videoUrl}
          videoUrlMobile={videoUrlMobile}
          mediaType={p.node?.mediaType}
          video={p.node?.video}
          shortHeading={p.node?.shortHeading}
          heading={!!p.node.heading? <BlockContent blocks={p.node.heading} serializers={serialiser}/> :<p></p>}
          buttonText={p.node?.cta?.buttonText}
          buttonTextOnHover={p.node?.cta?.buttonTextOnHover}
          link={p.node.link}
          enableTextColor={!!p.node.enableTextColor?p.node.enableTextColor:false}
        />
        </div>
      )
    },
    heroModuleInternship :(p) =>{
      return (
        <div className="standardPaddingBottom">
        <HeroModuleInternship
          heading={p.node.heading}
          description={!!p.node?.description ?<BlockContent blocks={p.node.description} serializers={serialiser}></BlockContent>: <p></p>}
          image={urlFor(p.node?.image).quality(100).url()}
        />
        </div>
      )
    },
    noJobOpenings: (p) => {
      return (
        <div className="standardPaddingBottom">
        <NoJobOpenings
          heading={p.node.heading}
          desc={p.node.desc}
          applyButtonText={p.node.label}
          image={urlFor(p.node?.image).quality(100).url()}
          link={p.node.link}
          noStates={true}
        />
        </div>
      )
    },
   
    testimonialSlider: (p) => {
      let items=[]
      for(let i=0;i<p.node.sectionData.length;i++){
        console.log(p.node.sectionData[i])
        let obj={};
        obj.img=urlFor(p.node.sectionData[i].img).url()
        obj.shortHeading=p.node.sectionData[i].shortHeading;
        obj.heading=p.node.sectionData[i].heading;
        obj.description=!!p.node.sectionData[i].description?<BlockContent blocks={p.node.sectionData[i].description} serializers={serialiser}/> :<p></p>
        obj.caption=!!p.node.sectionData[i].caption?<BlockContent blocks={p.node.sectionData[i].caption} serializers={serialiser}/> :<p></p>
        items.push(obj);
      }
      return (
        <div className="standardPaddingBottom">
        <TestomonialSlider
            sectionData = {items}
        />
        </div>
      )
    },
    threeColumnItems: (p)=> {
      console.log("sedata",p.node)
      let articles=[]
      for(let i=0;i<p.node.people.length;i++){
        let obj={};
        obj.image=urlFor(p.node.people[i].image).url()
        obj.excerpt=p.node.people[i].excerpt;
        obj.description=p.node.people[i].description;
        obj.label=p.node.people[i].label;
        // obj.slug=p.node.people[i].slug;
        obj.link=p.node.people[i].link
        articles.push(obj);
      }
      return (
        // <></>
        <div className="standardPaddingBottom">
        <ThreeColNewArticle 
        articleCol={articles}
        />
        </div>
      )
    },
    imageSliderWithThreeStepText:(p)=>{
      // console.log(p.node.imageSlider)
      let carouselImages=[]
      for(let i=0;i<p.node?.trendsCollection?.trendsCarousel?.length;i++){
        let obj={};
        // obj.videoUrl=!!p.node.imageSlider[i].video?.videoDesktop?.asset?._ref?buildFileUrl(parseAssetId(p.node.imageSlider[i].video?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
        // obj.videoUrlMobile=!!p.node.imageSlider[i].video?.videoMobile?.asset?._ref? buildFileUrl(parseAssetId(p.node.imageSlider[i].video?.videoDesktop?.asset?._ref),{projectId:"1me0hcdt",dataset:"production"}):null;
        // obj.video=!!p.node.imageSlider[i].video?p.node.imageSlider[i].video:null;
        obj.img=urlFor(p.node?.trendsCollection?.trendsCarousel[i]?.img).quality(100).url()
        obj.width=(p.node.trendsCollection.trendsCarousel[i].width)
        obj.height=(p.node.trendsCollection.trendsCarousel[i].height)
        carouselImages.push(obj)
      }
      // console.log(carouselImages)
      return (
        // <></>
          <div className="standardPaddingBottom">
          <ImageSliderWIthTwoStepText 
          shortHeading1={p.node.text1}
          desc={p.node.text2}
          carouselImages={carouselImages}
          />
        </div>
      )
    },
    aistheticSection: (p) => {
      let randomThreeImages=[]
      for(let i=0;i<p.node?.trendsCollection?.trendsCarousel?.length;i++){
        let obj={}
        obj.img=urlFor(p.node?.trendsCollection?.trendsCarousel[i]?.img).quality(100).url()
        obj.width=(p.node.trendsCollection.trendsCarousel[i].width)
        obj.height=(p.node.trendsCollection.trendsCarousel[i].height)
        randomThreeImages.push(obj)
      }
      return (
        // <></>
        <div className="standardPaddingBottom">
          <ThreeImagesSliderWIthTwoStepText
            shortHeading={p.node?.shortHeading}
            heading={p.node?.heading}
            description={!!p.node.description ? <BlockContent blocks={p.node.description} serializers={serialiser}/> :<p></p>}
            randomThreeImages = {randomThreeImages}
          />
        </div>
      )
    },
    textAndGridImages: (p) => {
      // console.log("jhasbjcabsja",urlFor(p.node.imageRight).quality(100).url());
      return(
        // <></>
        <div className="standardPaddingBottom">
        <TextAndGridImages
          heading={p.node.heading}
          shortHeading={p.node.shortHeading}
          description={p.node.description}
          imageTop={urlFor(p.node?.imageTop).quality(100).url()}
          imageBottom={urlFor(p.node?.imageBottom).quality(100).url()}
          imageRight={urlFor(p.node?.imageRight).quality(100).url()}
        />
        </div>
        

      )
    }, 
    bigSliderwithContent: (p) => {
      // console.log("jhasbjcabsja",p.node);
      let randomThreeImages=[]
      for(let i=0;i<p.node?.map?.length;i++){
        let obj={}
        obj.img1=urlFor(p.node?.map[i]?.img1).quality(100).url()
        obj.img2=urlFor(p.node?.map[i]?.img2).quality(100).url()
        obj.img3=urlFor(p.node?.map[i]?.img3).quality(100).url()
        obj.heading=p.node?.map[i].heading;
        obj.link=p.node?.map[i].link;
        obj.bigDescription=p.node?.map[i].bigDescription
        obj.smallDescription=p.node?.map[i].smallDescription
        randomThreeImages.push(obj)
      }
      return (
        <div className="standardPaddingBottom ">
         <BigSliderwithContent
         shortHeading={p.node.shortHeading}
         sliderDesign={randomThreeImages}
         />
        </div>
      )
    }
    
  },
    

 
}