import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import { FaPinterestP } from 'react-icons/fa';
import { FaVimeo } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaYahoo } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './styles/home/animationIcon.scss';
import "./styles/animation.scss";

function Animation(props) {
    return (
        <div className="animation_icon">
            <div  className="link_icon mr-2">
                <FaFacebookF/>
            </div>    
            <div  className="link_icon mr-2">
                <FaTwitter/>
            </div>
            <div  className="link_icon mr-2">
                <TiSocialGooglePlus/>
            </div>      
            <div  className="link_icon mr-2">
                <FaPinterestP/>
            </div>    
            <div  className="link_icon mr-2">
                <FaVimeo/>
            </div>  
            <div  className="link_icon mr-2">
                <FaGithub/>
            </div>   
            <div  className="link_icon mr-2">
                <FaYahoo/>
            </div> 
            <div  className="link_icon mr-2">
                <FaLinkedin/>
            </div> 
        </div>
    );
}

export default Animation;