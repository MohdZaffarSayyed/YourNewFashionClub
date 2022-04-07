import { React, Fragment } from "react"; 
import MetaData from "../layout/MetaData";
import Brand from "../../Images/logo.jpg";
import './AboutUs.css';

const AboutJs =()=>{
    return(
        <Fragment>
            <MetaData title = "About Us" / >
                <div className="mainContainer">
                    <div className="leftContainer">
                        <img src={Brand} alt="NewFashionClub" />
                    </div>
                    <div className="rightContainer">
                        <h1>New Fashion Club</h1><br />
                        <h3>A club of members and organizers</h3><br />
                        <p>We try to provide you the best quality in the cheapest rate</p>
                        <p>and offcourse the trending wearables in the fashion world</p>
                    </div>

                </div>
        </Fragment>
    );
};

export default AboutJs;
