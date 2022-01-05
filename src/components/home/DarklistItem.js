import React from 'react';
import '../styles/fonts.scss';

function DarklistItem(props) {
    return(
        
        <div className="pl-3">
            <div className="ralewaybold_16_ccc">
                {props.title}
            </div>
            <div className="lato_888">
                {props.content}
            </div>
        </div>
     
    )
}

export default DarklistItem;