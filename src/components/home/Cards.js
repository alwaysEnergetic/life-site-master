import React from 'react';
import { Row, Col } from 'reactstrap';
import '../styles/fonts.scss';
import '../styles/home/ipadcontent.scss';
import CardItem from './CardItem';
import cardImg1 from '../../assets/images/home/10.jpg';
import cardImg2 from '../../assets/images/home/11.jpg';
import cardImg3 from '../../assets/images/home/12.jpg';

function Cards() {
    return(
        <>
            <Row className="d-flex justify-content-center">
                <Col md="8" className="d-flex flex-column justify-content-center">
                    <div className="ralewaybold_30 pb-3">
                        <p className="text-center">
                            EVEN MORE FEATURE RICH
                        </p>
                    </div>
                    <div className="raleway_22">
                        <p className="text-center">
                            Philanthropy convener livelihoods, initiative end gender rights local.
                            John Lennon storytelling; advocate, altruism impact catalyst.
                        </p>                        
                    </div>
                    <div className="center_divider pb-5" />
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="4" className="d-flex justify-content-center py-2">
                    <CardItem 
                        img={cardImg1} 
                        title="GENETICKA ANALYZA" 
                        content="Looks beaufiful & ultra-sharp on Retina Screen Displays. Retina Icons. Fonts & all others graphics are optimized."
                    />
                </Col>
                <Col xs="12" md="4" className="d-flex justify-content-center py-2">
                    <CardItem 
                        img={cardImg2} 
                        title="GENETICKA ANALYZA" 
                        content="Looks beaufiful & ultra-sharp on Retina Screen Displays. Retina Icons. Fonts & all others graphics are optimized."
                    />
                </Col>
                <Col xs="12" md="4" className="d-flex justify-content-center py-2">
                    <CardItem 
                        img={cardImg3} 
                        title="GENETICKA ANALYZA" 
                        content="Looks beaufiful & ultra-sharp on Retina Screen Displays. Retina Icons. Fonts & all others graphics are optimized."
                    />
                </Col>
            </Row>
        </>
    )
}

export default Cards;