import React from 'react';
import Figure from './Figure';
import { Container, Row, Col } from 'reactstrap';
import s1 from '../../assets/images/home/s1.png';
import s4 from '../../assets/images/home/s4.png';
import s5 from '../../assets/images/home/s5.png';
import {BackgroundDiv, BackgroundFreeDiv} from '../styles/home/background';
import ipad from '../../assets/images/home/ipad-section.png';
import '../styles/home/content.scss';
import IpadContent from './IpadContent';
import DarkList from './DarkList';
import TypicallyResponsive from './TypicallyResponsive';
import Cards from './Cards';
import Carousel from './Carousel';

function Content() {
    return(
        <>
            <Container className="themed-container pt-5">
                <Row className="pb-5">
                    <Col xs="12" md="4" className="pt-5 pb-5">
                        <Figure img={s1} title="Responsive Layout" txt="Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view." />
                    </Col>
                    <Col xs="12" md="4" className="pt-5 pb-5">
                        <Figure img={s4} title="Retina Ready Graphics" txt="Looks beautiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others graphics are optimized."/>
                    </Col>
                    <Col xs="12" md="4" className="pt-5 pb-5">
                        <Figure img={s5} title="Powerful Performance" txt="Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance."/>
                    </Col>
                </Row>            
            </Container>
            <BackgroundDiv>
                <img src={ipad} className="background" alt="ipad"/>
                <Container className="themed-container py-5">
                    <Col xs="12" md="7" className="pt-5 pb-5">
                        <IpadContent 
                            btnName="START TRIAL"
                            title="AWESOME SCALABLE APPS" 
                            subTitle="Our Template acts & behaves truly as a Canvas." 
                            contentFirst="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem maiores pariatur voluptatem placeat laborum iste accusamus nam unde, iure id." 
                            contentSecond = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet cumque, perferendis accusamus porro illo exercitationem molestias, inventore obcaecati ut omnis voluptatibus ratione odio amet magnam quidem tempore necessitatibus quaerat, voluptates excepturi voluptatem, veritatis qui temporibus."
                        />
                    </Col>
                </Container>
            </BackgroundDiv>
            <DarkList />
            <BackgroundFreeDiv>
                <Container className="themed-container py-5">
                    <TypicallyResponsive />
                </Container>
            </BackgroundFreeDiv>
            <Container className="themed-container py-5">
                <Cards />
            </Container>
            <Carousel />
        </>
    )
}

export default Content;