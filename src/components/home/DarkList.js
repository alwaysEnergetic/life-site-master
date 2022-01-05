import React from 'react';
import DarklistItem from './DarklistItem';
import { IoIosDesktop } from 'react-icons/io';
import { FaEye } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { FaThumbsUp } from 'react-icons/fa';
import { FaMagnet } from 'react-icons/fa';
import { GoBeaker } from 'react-icons/go';
import '../styles/home/content.scss';
import { Container, Row, Col } from 'reactstrap';

function DarkList() {
    return(
            <div className="darklist_container">            
                <Container className="themed-container pt-5">
                    <Row>
                        <Col xs="12" md="4" className="pb-5 px-3">
                            <div className="dark_item_container">
                                <div className="blue_icon">
                                    <IoIosDesktop/>
                                </div>
                                <DarklistItem title="RESPONSIVE LAYOUT" content="Powerful Layout with Responsive functionality that can be adapted to any screen size. Resize browser to view."/>
                            </div>                            
                        </Col>
                        <Col xs="12" md="4" className="pb-5 px-3">
                            <div className="dark_item_container">
                                <div className="blue_icon">
                                    <FaEye/>
                                </div>
                                <DarklistItem title="RETINA READY GRAPHICS" content="Looks beautiful & ultra-sharp on Retina Screen Displays. Retina Icons, Fonts & all others graphics are optimized."/>
                            </div>
                        </Col>
                        <Col xs="12" md="4" className="pb-5 px-3">
                            <div className="dark_item_container">
                                <div className="blue_icon">
                                    <GoBeaker/>
                                </div>
                                <DarklistItem title="POWERFUL PERFORMANCE" content="Canvas includes tons of optimized code that are completely customizable and deliver unmatched fast performance."/>
                            </div>
                        </Col>
                    </Row>       
                    <Row>
                        <Col xs="12" md="4" className="pb-5 px-3">
                            <div className="dark_item_container">
                                <div className="blue_icon">
                                    <FaCheck/>
                                </div>
                                <DarklistItem title="12+ HEADER DESIGNS" content="We have included 12+ Header + Menu Designs for your convenience so that you can match your style."/>
                            </div>                            
                        </Col>
                        <Col xs="12" md="4" className="pb-5 px-3">
                            <div className="dark_item_container">
                                <div className="blue_icon">
                                    <FaThumbsUp/>
                                </div>
                                <DarklistItem title="AWESOME MEGA MENU" content="Completely Customizable 2 Columns, 3 Columns, 4 Columns & 5 Columns Mega Menus are available with Canvas."/>
                            </div>
                        </Col>
                        <Col xs="12" md="4" className="pb-5 px-3">
                            <div className="dark_item_container">
                                <div className="blue_icon">
                                    <FaMagnet/>
                                </div>
                                <DarklistItem title="POWERFUL PERFORMANCE" content="Smooth & Stylish Sticky Menu is what will make your Website differentiate with others."/>
                            </div>
                        </Col>
                    </Row>                
                </Container>
            </div>
    )
}

export default DarkList;