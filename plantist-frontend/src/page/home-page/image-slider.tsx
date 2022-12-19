import React from 'react'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './image-slider.css'
import { Link } from "react-router-dom";
import environment from '../../environment/environment.json'

const images = [
    {url:'/slide1.png', link: ''},
    {url:'/slide2.png', link: '/plants'},
    {url:'/slide3.png', link: '/search'},
    {url:'/slide4.png', link: ''},
    {url:'/slide5.png', link: ''},
];

const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}

const ImageSlider = () => {
    function onSlideClick(index: number) {
        if(index === 3){
            window.location.href = environment.linkedinLink;
        }
        if(index === 4){
            window.location.href = environment.githubLink;
        }
    }

    return (
        <div className="containerSlide">
            <Slide {...properties}>
                {images.map((slideImage, index) => (
                    <Link to={slideImage.link}>
                        <div className="each-slide" key={index}>
                            <div
                                onClick={() => onSlideClick(index)}
                                style={{'backgroundImage': `url(${process.env.PUBLIC_URL}${slideImage.url})`}}>
                            </div>
                        </div>
                    </Link>
                ))}
            </Slide>
        </div>
    )
}

export default ImageSlider;