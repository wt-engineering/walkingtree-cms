import {MOBILE_BREAKPOINT} from "../config"

export default function SubNavigation(props){
    return (
        <>
            <div className="subNav">
                <ul className="listStyleNone inlineList moderatLight">
                    <li className="active lpRegular">About Us</li>
                    <li>Legacy</li>
                    <li>Ecosystem</li>
                    <li>Values</li>
                    <li>Team</li>
                    <li>Sustainability</li>
                    <li>Offices</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <style jsx>{`
                .subNav{
                    font-size:1.4rem;
                    letter-spacing:0.15px;
                    padding-left:9.7%;
                    padding-right:9.7%;
                }
                ul{
                    padding-left:0;
                    padding-bottom:2rem;
                    border-bottom: 1px solid #707070;
                    white-space:nowrap;
                    width:100%;
                    overflow:scroll;
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
                ul::-webkit-scrollbar {
                    display: none;
                }
                ul li{
                    margin-right:2.4rem;
                    background:#F5F3F3;
                    padding:1.5rem;
                    color:#9E9E9E;
                    cursor:pointer;
                    border-radius:4rem;
                }
                ul li.active{
                    color:#313133;
                    text-transform:uppercase;
                }
                @media screen and (max-width: ${MOBILE_BREAKPOINT}px) {
                    .subNav{
                        padding-left:0%;
                        padding-right:0%;
                    }
                    ul li:first-child{
                        margin-left:3rem;
                    }
                }
            `}</style>
        </>
    )
}