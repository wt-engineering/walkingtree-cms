import React, { useState } from "react";
import Link from "next/link";
import { MOBILE_BREAKPOINT } from "../config";

export default function NavbarPageBlog(props) {
  const [menuBar, setMenuBar] = useState(false);
  return (
    <>
      <div
        className={`navBar paddedContent positionRelative flexItems positionRelative ${
          menuBar ? "showMenuBar" : "hideMenuBar"
        }`}
      >
        <div
          onClick={() => setMenuBar(!menuBar)}
          className="leftMenuBar cursorPointer"
        >
          <div className="lineOne"></div>
          <div className="lineTwo"></div>
        </div>
        <Link href="/">

          <div className="middleLogo positionAbsolute white font24 cursorPointer">
            <div className="logo">{props.logo}W T</div>
          </div>

        </Link>
        <div className="rightMenu bannerDescription">
          <div className="group">{props.group}The Group</div>
          <div>Events</div>
          <div>Contact Us</div>
        </div>
      </div>
      <style jsx>{`
        .navBar {
          background: transparent;
          height: 8rem;
          //width:100%;
          justify-content: space-between;
          align-items: center;
        }
        .leftMenuBar div {
          width: 21px;
          height: 2px;
          background: #ffffff;
        }
        .lineOne {
          margin-bottom: 0.7rem;
        }
        .linetwo {
        }
        .showMenuBar .lineOne {
          animation: menuBarLineOneAnimation 0.5s ease-out forwards;
        }
        .showMenuBar .lineTwo {
          animation: menuBarLineTwoAnimation 0.5s ease-out forwards;
        }
        .rightMenu div {
          margin-right: 3.2rem;
          cursor: pointer;
        }
        .rightMenu div:last-child {
          margin-right: 0;
        }
        .rightMenu {
          display: flex;
        }
        .middleLogo {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          letter-spacing: 12px;
        }
        @keyframes menuBarLineOneAnimation {
          0% {
            transform: translateY(0);
          }
          60% {
            transform: translateY(4.5px);
          }
          100% {
            transform: translateY(4.5px) rotate(45deg);
          }
        }
        @keyframes menuBarLineTwoAnimation {
          0% {
            transform: translateY(0);
          }
          60% {
            transform: translateY(-4.5px);
          }
          100% {
            transform: translateY(-4.5px) rotate(-45deg);
          }
        }
        @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
          .navBar {
            height: 5.5rem;
          }
          .middleLogo {
            width: fit-content;
            letter-spacing: 4px;
          }
          .rightMenu {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
