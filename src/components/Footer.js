import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AnimationIcon from './AnimationIcon';
import "./styles/footer.scss";
import { IoIosMail } from 'react-icons/io';
import { FaHeadphones } from 'react-icons/fa';
import { FaSkype } from 'react-icons/fa';

function Footer() {
    return(
        <div className="footer">       
            <Container className="themed-container py-5">
                <Row>
                    <Col md="6" xs="12" className="footer-left">
                        <div className="footer_fonts py-1">                            
						    <p>Copyrights © 2014 All Rights Reserved by Canvas Inc.</p>
                        </div>
                        <div className="d-flex footer_fonts py-1">                            
						    <a href="#" className="footer_fonts footer_link mr-2">Terms of Use</a>
                            <a href="#" className="footer_fonts footer_link">Privacy Policy</a>/
                        </div>
                    </Col>
                    <Col md="6" xs="12" className="footer-right">
                        <div>
                            <div>
                                <AnimationIcon icon='FaFacebookF'/>
                            </div>
                        </div>
                        <div className="footer_fonts d-flex align-items-center">
                            <IoIosMail />
                            info@canvas.com
                            <span className="px-2">·</span>
                            <FaHeadphones />
                            +91-11-6541-6369
                            <span className="px-2">·</span>
                            <FaSkype />
                            CanvasOnSkype
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;