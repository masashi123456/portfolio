import {useState, useEffect} from 'react'
import {Container, Row, Col} from "react-bootstrap";
import IMGheader from "../assets/img/header.png"
import{Link} from 'react-router-dom';

export const Banner=()=>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["web Developer", "web designer", "Cloud Database Engineer"];
    const [delta, setDelta] = useState('')
    const [text, setText] = useState(300 - Math.random()*100);
    const period = 2000;

    
    

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>{'Hi Im Masashi'}<span className='wrap'>Masashi Ota</span></h1>
                    <p>I was born in Sapporo Japan, and I grew up in Japan until graduating a high school. After that I went to Brigham Young University and getting a certificate from Software Engineering Degree</p>
                    <Link to="/contact">
                       <button className="mms">Contact Me</button>
                    </Link>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={IMGheader}alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}