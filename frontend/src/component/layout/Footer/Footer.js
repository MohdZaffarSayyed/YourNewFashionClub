import React from "react";
import playStore from "../../../Images/playStoreLogo.png";
import appStore from "../../../Images/appStoreLogo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>DOWNLOAD OUR APP</h4>
                <p>Download App for Android and IOS mobile phone</p>
                <img src={playStore} alt="playstore" />
                <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>NewFashionClub</h1>
        <p>Best service is our moto</p>

        <p>Copyrights 2022 &copy; MohammedZaffarSayyed</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com/MohammedZaffar.Sayyed">Facebook</a>
        <a href="https://www.facebook.com/MohammedZaffar.Sayyed">Youtube</a>
        <a href="https://www.facebook.com/MohammedZaffar.Sayyed">Instagram</a>
      </div>
        </footer>

    );
};

export default Footer;