ReactJS / Redux / SCSS / Styled-component / React-hooks

live site is https://wizardly-bardeen-fa23e9.netlify.com/

Redux, React-hooks sample code: src/components/home/BannerContent.js

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


=================================*****************==================================


Styled-component sample code: src/components/GrayButton.js

const BtnDiv = styled.div`
    width: ${props=>props.width};
    height: ${props=>props.height};
    background-color: #444;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        -webkit-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.75);
        cursor: pointer;
    }
`




if you have some question, please contact with my skype  live:.cid.23e72f9558ae8dc
