import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../styles/home/banner.scss';
import AppleIcon from '@material-ui/icons/Apple';
import actionType from '../../redux/actions';

function BannerContent() {    
    const dispatch = useDispatch();    
    const data = useSelector(store=>store.home)
    const [appleColor, setAppleColor] = React.useState(false);
    const changeColor = () => {
        setAppleColor(!appleColor)
    }

    useEffect(()=> {
        dispatch({type:actionType.SET_HOME_BANNER_TITLE, title:"The new way to create awesome websites. Try using Canvas Template."});    
    },[])
    
    return(
        <div className="banner_content">
            <div className="ralewaybold_52 content">
                {data.home_banner_title}
            </div>
            <div className="bannerBtn" onMouseEnter={changeColor} onMouseLeave={changeColor}>
                <AppleIcon style={!appleColor?{ fontSize: 50, color: 'white' }:{ fontSize: 50, color: '#333' }} className="apple"/>
                <div>
                    <div className="ralewaybold_22 banner_button_title">
                        START YOUR FREE TRIAL
                    </div>
                    <div className="creteround_14 banner_button_content">
                        30-Days &amp; No Credit card Required
                    </div>
                </div>                
            </div>
        </div>
    )
} 

export default BannerContent;