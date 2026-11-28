import { useRef, useState, useEffect } from "react";
import LongArrow from "./longArrow";
import { MOBILE_BREAKPOINT,TABLET_LANDSCAPE_BREAKPOINT,TABLET_BREAKPOINT } from "../config";
import Link from "next/link";
import Animate from "./animate";
const openings = [
  {
    _key: "345",
    department: "Creative",
    count: 3,
    positions: [
      {
        _key: "123",
        title1: "Art Director",
        title2: "Brand: Her Story",
        shortDescription:
          "The Art Director is an integral part of the basic team and helps to provide support to one of its major clients, google. you…",
      },
      {
        _key: "1234",
        title1: "Copy Lead",
        title2: "Group: Walking Tree China",
        shortDescription:
          "You are a thinker, innovator, leader, and writer. You bring concepts to life with the power of language. Ideas come…",
      },
      {
        _key: "12345",
        title1: "Design Lead/Design Director",
        title2: "Group: Business To Business",
        shortDescription:
          "Design is your business. Direction is your focus. Guidance is your way. You believe the details matter, and you’re able to…",
      },
    ],
  },
  {
    _key: "3456",
    department: "Marketing",
    count: 3,
    positions: [
      {
        _key: "123",
        title1: "Art Director",
        title2: "Brand: Her Story",
        shortDescription:
          "The Art Director is an integral part of the basic team and helps to provide support to one of its major clients, google. you…",
      },
      {
        _key: "1234",
        title1: "Copy Lead",
        title2: "Group: Walking Tree China",
        shortDescription:
          "You are a thinker, innovator, leader, and writer. You bring concepts to life with the power of language. Ideas come…",
      },
      {
        _key: "12345",
        title1: "Design Lead/Design Director",
        title2: "Group: Business To Business",
        shortDescription:
          "Design is your business. Direction is your focus. Guidance is your way. You believe the details matter, and you’re able to…",
      },
    ],
  },
  {
    _key: "3455435",
    department: "Operations",
    count: 3,
    positions: [
      {
        _key: "123",
        title1: "Art Director",
        title2: "Brand: Her Story",
        shortDescription:
          "The Art Director is an integral part of the basic team and helps to provide support to one of its major clients, google. you…",
      },
      {
        _key: "1234",
        title1: "Copy Lead",
        title2: "Group: Walking Tree China",
        shortDescription:
          "You are a thinker, innovator, leader, and writer. You bring concepts to life with the power of language. Ideas come…",
      },
      {
        _key: "12345",
        title1: "Design Lead/Design Director",
        title2: "Group: Business To Business",
        shortDescription:
          "Design is your business. Direction is your focus. Guidance is your way. You believe the details matter, and you’re able to…",
      },
    ],
  },
  {
    _key: "3454555",
    department: "Production",
    count: 3,
    positions: [
      {
        _key: "123",
        title1: "Art Director",
        title2: "Brand: Her Story",
        shortDescription:
          "The Art Director is an integral part of the basic team and helps to provide support to one of its major clients, google. you…",
      },
      {
        _key: "1234",
        title1: "Copy Lead",
        title2: "Group: Walking Tree China",
        shortDescription:
          "You are a thinker, innovator, leader, and writer. You bring concepts to life with the power of language. Ideas come…",
      },
      {
        _key: "12345",
        title1: "Design Lead/Design Director",
        title2: "Group: Business To Business",
        shortDescription:
          "Design is your business. Direction is your focus. Guidance is your way. You believe the details matter, and you’re able to…",
      },
    ],
  },
  {
    _key: "34533333",
    department: "Technology",
    count: 3,
    positions: [
      {
        _key: "123",
        title1: "Art Director",
        title2: "Brand: Her Story",
        shortDescription:
          "The Art Director is an integral part of the basic team and helps to provide support to one of its major clients, google. you…",
      },
      {
        _key: "1234",
        title1: "Copy Lead",
        title2: "Group: Walking Tree China",
        shortDescription:
          "You are a thinker, innovator, leader, and writer. You bring concepts to life with the power of language. Ideas come…",
      },
      {
        _key: "12345",
        title1: "Design Lead/Design Director",
        title2: "Group: Business To Business",
        shortDescription:
          "Design is your business. Direction is your focus. Guidance is your way. You believe the details matter, and you’re able to…",
      },
    ],
  },
];

export default function Openings(props) {
  const [expanded, setExpanded] = useState(null);
  const shortHeadingRef = useRef();
  const headingRef = useRef();
  const descRef = useRef();
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, openings.length);
  }, [openings]);

  return (
    <>
      <div className="wrapper lesserAdditionalPadding">
        <div className="top marginBottom90">
          <Animate><div ref={shortHeadingRef} className="mainShortHeading shortHeading marginBottom26">{props.shortHeading}</div></Animate>
          <Animate>
            <div ref={headingRef} className="headingAndLine marginBottom55">
              <div className="bigHeading line1">{props.heading1} </div>
              <div className="bigHeading line2">{props.heading2} <span className="line inlineBlock"></span></div>
            </div>
          </Animate>
          <Animate><div ref={descRef} className="bigDescription descTop grey" dangerouslySetInnerHTML={{ __html: props.description }} ></div></Animate>
        </div>
        <div className="bottom">
          <div className="openings">
            {Array.isArray(props.jobOpenings) && props.jobOpenings.map((opening,id) => {
              return (
                  <div ref={el => itemsRef.current[id] = el}  className={`opening ${expanded == opening._key ? "expanded" : ""}`} key={opening._key}>
                  <Animate>
                    <div className="openingTop cursorPointer" onClick={() => setExpanded(expanded == opening._key ? null : opening._key)}>
                      <div className="department mainShortHeading black">
                        {opening.department}
                      </div>
                      <div className="openingsCount black description">Openings ({opening.position.length})</div>
                      <div className="icon">
                        {expanded == opening._key ? (<span className="inlineBlock collapseLine"></span>) 
                        : 
                          (<LongArrow
                            arrowLength="5px"
                            arrowWidth="1px"
                            color="black"
                            direction="bottom-left"
                            lineLength="10px"
                            marginTop="6px"
                            transformX="3.3px"
                            transformY="1px"
                          />)
                        }
                      </div>
                    </div>
                    <div className="positionContent flexItems">
                      <div className="space"></div>
                      <div className="positions">
                        {opening.position.map((position, index) => {
                          return (
                            <div className="position" key={index}>
                              <Link legacyBehavior href={!!position.slug?`/culture-and-career/${position.slug}`:"#"}>
                                  <a className="black">
                                    <div className="title1 moderatMedium">{position.title1}</div>
                                    <div className="title2 moderatRegular">{position.title2}</div>
                                    <div className="shortDescription description moderatLight">{position.shortDescription}</div>
                                  </a>
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    </Animate>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
      <style jsx>{`
        .opening {
          border-bottom: 1px solid #000000;
        }
        .openings .opening:first-child {
          border-top: 1px solid #000000;
        }
        .positions {
          transform: translateY(-2rem);
          transition: transform 0.5s ease-out;
        }
        .expanded .positions {
          transform: translateY(0);
        }
        .positions .position:not(:last-child) {
          border-bottom: 1px solid #000000;
        }
        .positions .position:nth-child(1){
          border-top: 1px solid #000000;
        }
        .position {
          padding-top: 3.5rem;
          padding-bottom: 3.5rem;
        }
        .title1 {
          font-size: 2rem;
          line-height: 2.8rem;
        }
        .title2 {
          font-size: 1.6rem;
          line-height: 2.1rem;
          margin-top: 0.9rem;
        }
        .shortDescription {
          margin-top: 3rem;
        }
        .space {
          flex: 1 0 50%;
        }
        .positionContent {
          flex: 1 0 50%;
          height: 0;
          overflow: hidden;
        }
        .expanded .positionContent {
          height: auto;
        }
        .collapseLine {
          border-bottom: 1px solid #000000;
          width: 1.5rem;
        }
        .openingTop {
          display: flex;
          padding-top: 3rem;
          padding-bottom: 3rem;
          align-items: center;
        }
        .department {
          flex: 1 0 50%;
        }
        .openingsCount {
          flex: 1 1 50%;
        }
        .icon {
          flex: 0 0 auto;
          padding-right: 4px;
        }
        .smallHeading {
          flex: 1 1 auto;
        }
        .line {
          width: 5rem;
          border-bottom: 1px solid #000000;
          flex: 0 0 auto;
          transform: translateY(-0.7rem);
        }
        @media screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) {
          
        }
        @media screen and (max-width: ${TABLET_BREAKPOINT}px) {
          .shortHeading,.headingAndLine,.descTop{
            text-align:center;
          }
          .smallHeading{
            display: inline-block;
            white-space: pre-wrap;
          }
          .line{
            display:none;
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .space {
            flex: 1 0 0%;
          }
          .positionContent {
            flex: 1 0 100%;
          }
          .positions{
            padding: 0 4%;
          }
          .position {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
          }
          .title1 {
            font-size: 1.4rem;
            line-height: 1.4rem;
          }
          .title2 {
            font-size: 1rem;
            line-height: 1.4rem;
            margin-top: 0.9rem;
          }
          .shortDescription {
            margin-top: 1rem;
          }
          .openingsCount {
            font-size:1.2rem;
          }
          .openingTop {
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
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
