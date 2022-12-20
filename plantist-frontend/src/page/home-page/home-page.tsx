import './home-page.css'
import React from "react";
import ImageSlider from "./image-slider";
import Footer from "../../shared/footer/footer";

const HomePage = () => {
    return (
        <>
            <ImageSlider/>
            <Footer/>
        </>
    );
}
export default HomePage;