import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assets/images/home/5.jpg';
import img2 from '../../assets/images/home/6.jpg';
import img3 from '../../assets/images/home/7.jpg';
import user from '../../assets/images/home/author.jpg';
import RoundImage from '../RoundImage';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/fonts.scss';
import '../styles/home/ipadcontent.scss';


function CarouselContainer() {
    return(
        <div className="position-relative">
            <div className="overlay_carousel">
                <p className="ralewaybold_30_white">
                    WHAT CLIENTS SAY?
                </p>
                <div className="center_divider"/>
                <div className="py-4">
                    <RoundImage img={user}/>
                </div>
                <div className="creteround_22">
                    <p className="text-center">
                        "Natus voluptatum enim quod necessitatibus quis expedita harum provident eos<br/>
                        obcaecati id culpa corpories molestias."
                    </p>
                </div>
                <div className="ralewaybold_16_ccc">
                    -COLLIS TAEED
                </div>
                <div className="ralewaybold_13_444">
                    Envato Inc.
                </div>
            </div>
            <Carousel autoPlay interval={2000} infiniteLoop showThumbs={false}>
                <div>
                    <img src={img1} alt="img1"/>
                </div>
                <div>
                    <img src={img2} alt="img2"/>
                </div>
                <div>
                    <img src={img3} alt="img3"/>
                </div>           
            </Carousel>            
        </div>
    )
}

export default CarouselContainer;