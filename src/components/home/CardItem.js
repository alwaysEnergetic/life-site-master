import React from 'react';
import '../styles/home/content.scss';
import GrayButton from '../GrayButton';

function CardItem(props) {
    return(
        <div className="card_item">
            <div className="h-50">
                <img src={props.img} width="100%" height="100%" className="card_img" alt="product"/>
            </div>
            <div className="h-50 py-4 px-3 d-flex flex-column align-items-center">
                <p className="raleway_18 text-center">
                    {props.title}
                </p>
                <p className="lato text-center">
                    {props.content}
                </p>
                <GrayButton height="30px" width="100px" txt="Zjistit vice"/>
            </div>
        </div>
    );
}

export default CardItem;