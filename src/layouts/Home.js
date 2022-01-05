import React from 'react';
import StyledDiv from './styles/home';
import Header from '../components/header';
import HomeBanner from '../components/home/HomeBanner';
import Content from '../components/home/Content';
import Footer from '../components/Footer';

function Home() {
    return(
        <StyledDiv>
            <Header />
            <HomeBanner />
            <Content />
            <Footer />
        </StyledDiv>
    );
}

export default Home;