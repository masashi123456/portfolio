import {useState, useEffect} from 'react';
import{Container, Col, Row} from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import web from '../assets/img/web.png';
import cloud from '../assets/img/cloud.png';
import game from '../assets/img/game.png';
import language from '../assets/img/language.png';

export const MySkill=()=>{
    const responsive = {
        superLargeDesktop:{
            breakpoint: { max: 4000, min:3000 },
            item: 5
        },
        desktop:{
            breakpoint: {max: 3000, min:1024 },
            item: 3
        },
        tablet: {
            breakpoint: {max: 1024, min:464},
            item: 2
        },
        mobile:{
            breakpoint: {max: 464, min:0},
            item:1
        }

    };

    return(
        <section className="mySkill" id="mySkill">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            My skills as a Software Engineer
                        </h2>
                        <p>My Skills</p>
                    
                        <div className="skill-items">
                            <div className="item">
                                <img src={web} alt="web"/ >
                                <h5>Web Designer</h5>
                            </div>
                            <div className="item">
                                <img src={cloud} alt="cloud"/ >
                                <h5>Cloud Database</h5>
                            </div>
                            <div className="item">
                                <img src={game} alt="game"/ >
                                <h5>Game Developer</h5>
                            </div>
                            <div className="item">
                                <img src={language} alt="lang"/ >
                                <h5>English</h5>
                            </div>
                            <div className="item">
                                <img src={language} alt="lang"/ >
                                <h5>Spanish</h5>
                            </div> 
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}