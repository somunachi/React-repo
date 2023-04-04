import GoogleLogo from "./googlelogo";
import Searchbar from "./Searchbar";
import "./index.css";
import React from 'react';
import Menu from './Menu';
import Languages from "./languages";
import Buttons from "./Buttons";
import Footer1 from "./Footer1";

function Container(){
    return (
        <>
         <Menu />
        <GoogleLogo />
        <Searchbar />
        <Buttons search={"Google Search"} lucky={"I'm Feeling Lucky"} />
        <Languages hausa={"Hausa"} igbo={"Igbo"} yoruba={"Ede Yoruba"} pidgin={"Nigerian Pidgin"}/>
        <Footer1 />
        </>
    )
}

export default Container;