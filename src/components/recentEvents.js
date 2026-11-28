import React from "react";
import ArticleListItem from "./articleListItem";

function RecentEvents(props) {
  return (
    <>
      <div className="title">
        {props.title && <h1 className="smallHeading">{props.title}</h1>}
      </div>
      <div className="events flexItems">
        <div className="eventsLeft">
          <ArticleListItem
            square="/images/841.png"
            shortHeading="Event"
            description="Our annual meet with our clients, brands, partners and teams over a two day long eat and meet greet in Mumbai. India. The day …"
            shortHeadingGrey="By Katerina Perez"
            shortHeadingReadON="READ ON"
            imageType="square"
          />
        </div>
        <div className="eventsCenter">
          <ArticleListItem
            square="/images/841.png"
            shortHeading="Launch"
            description="Antwerp-based concept jewellery brand Unsaid Library presents its first pop-up boutique at the list. Jewellery in …"
            shortHeadingGrey="By Shontel Horne"
            shortHeadingReadON="READ ON"
            imageType="square"
          />
        </div>
        <div className="eventsRight">
          <ArticleListItem
            square="/images/841.png"
            shortHeading="Exhibition"
            description="Moda Exhibition, Birmigham, United Kingdom, Walking Tree par took in the exhibition with other 100+ global brands …"
            shortHeadingGrey="By Anesha George"
            shortHeadingReadON="READ ON"
            imageType="square"
          />
        </div>
      </div>
      <style jsx>{`
        .title {
          padding-bottom: 5.2rem;
          padding-top: 15rem;
        }
        .eventsLeft {
          padding-right: 2.3rem;
        }
        .eventsCenter {
          padding-right: 2.3rem;
        }
        .eventsRight {
          padding-right: 2.3rem;
        }
      `}</style>
    </>
  );
}

export default RecentEvents;
