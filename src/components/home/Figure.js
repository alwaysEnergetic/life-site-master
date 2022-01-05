import React from 'react';
import '../styles/home/figure.scss';
import '../styles/fonts.scss';


function Figure(props) {
    return(
        <div className="figure_container">
            <img src={props.img} alt="sign"/>
            <div className="raleway_18 pb-4">
                <p>{props.title}</p>
            </div>
            <div className="lato">
                <p className="text-center">{props.txt}</p>
            </div>
        </div>
    )
}

export default Figure;