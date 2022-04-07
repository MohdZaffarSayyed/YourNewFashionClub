import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../Images/logo.jpg";


const Header = () => {
    return ( <
        ReactNavbar burgerColor = "#830505"
        burgerColorHover = "#000"
        logo = { logo }
        logoWidth = "13vmax"
        navColor1 = "#cfb0b0"
        logoHoverSize = "10px"
        logoHoverColor = "#eb4034"
        link1Text = "Home"
        link2Text = "Products"
        link3Text = "Contact"
        link4Text = "About"

        link1Url = "/"
        link2Url = "/products"
        link3Url = "/contact"
        link4Url = "/about"

        link1Size = "1.2vmax"
        link1Color = "rgba(35, 35, 35,0.8)"
        nav1justifyContent = "flex-end"
        nav2justifyContent = "flex-end"
        nav3justifyContent = "flex-start"
        nav4justifyContent = "flex-start"

        link1ColorHover = "#830505"
        link1Margin = "2vmax"

        profileIconUrl = "/login"


        profileIconColor = "rgba(35, 35, 35,0.8)"
        searchIconColor = "rgba(35, 35, 35,0.8)"
        cartIconColor = "rgba(35, 35, 35,0.8)"
        profileIconColorHover = "#eb4034"
        searchIconColorHover = "#eb4034"
        cartIconColorHover = "#eb4034"
        cartIconMargin = "1vmax"

        /
        >
    );
};

export default Header;