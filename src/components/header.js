import React, { useState } from 'react';
import './styles/header.scss';
import './styles/fonts.scss';
import logo from '../assets/images/logo.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { GoThreeBars } from 'react-icons/go';


function Header() {
    const [scrollY, setScrollY] = useState(true);
    window.addEventListener('scroll', () =>{// lodash debounce method.
        let supportPageOffset = window.pageXOffset !== undefined;
        let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
        let scroll = {
           x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
           y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
        };
    
        if(scroll.y > 100){
            setScrollY(false)
        } else {
            setScrollY(true)
        }
    }, 300);

    function showMsg() {
        alert("Let's add after send me the offer. I will add it for 5 hours");
    }

    return(
        <div className={scrollY?"header_container":"header_container_scroll"}>   
            <div className="left_container">
                <GoThreeBars onClick={showMsg}/>
            </div>      
            <div className="logo_container">
                <img src={logo} className="logo" alt="banner"/>
            </div>
            <div className="nav_container">
                <div className="color ralewaybold_13 menu" onClick={showMsg}>
                    ÚVOD
                </div>
                <div className="ralewaybold_13 menu" onClick={showMsg}>
                    O NÁS
                </div>
                <div className="ralewaybold_13 menu" onClick={showMsg}>
                    PRODUKTY
                </div>
                <div className="ralewaybold_13 menu" onClick={showMsg}>
                    OTÁZKY A ODPOVĚDI
                </div>
                <div className="ralewaybold_13 menu" onClick={showMsg}>
                    BLOG
                </div>
                <div className="ralewaybold_13 menu" onClick={showMsg}>
                    KONTAKT
                </div>
            </div>
            <div className="right_container">
                <FacebookIcon />
                <InstagramIcon />          
            </div>
        </div>
    )
}

export default Header;