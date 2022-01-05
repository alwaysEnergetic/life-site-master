import React from 'react';
import { Row, Col } from 'reactstrap';
import phone from '../../assets/images/home/iphone-solid.png';
import IpadContent from './IpadContent';

function TypicallyResponsive() {
    return(
        <>
            <Row className="py-5">
                <Col xs="12" md="6" className="py-3 d-flex align-items-center">
                    <img src={phone} alt="phone" className="double_iphone"/>
                </Col>
                <Col xs="12" md="6" className="d-flex align-items-center">
                    <IpadContent 
                        btnName="VIEW GALLERY"
                        title="TYPICALLY RESPONSIVE" 
                        subTitle="Our App scales beautifully to different Devices." 
                        contentFirst="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet cumque, perferendis accusamus porro illo exercitationem molestias, inventore obcaecati ut omnis voluptatibus ratione odio amet magnam quidem tempore necessitatibus quaerat, voluptates excepturi voluptatem, veritatis qui temporibus." 
                    />
                </Col>
            </Row>
        </>
    );
}

export default TypicallyResponsive;