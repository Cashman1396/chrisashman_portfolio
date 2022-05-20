import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Profile2 from '../../assets/imgs/Profile2.webp'

import './about.styles.css'



const About = () => {
    return (
        <div id="about">
           
            <div className="about">
            <h1 className="pt-3 text-center font-details pb-3">About Me</h1>
            <Container>
                <Row className="pt-3 pb-5 align-items-center">
                    {/* Profile Picture for website */}
                    <Col xs={12} md={6}>
                        <Row className="justify-content-center mb-2 mr-2 ">
                            <Image className="profile justify-content-end" alt="profile" src={Profile2} thumbnail fluid/>
                        </Row>
                    </Col>
                    <Col xs={12} md={6}>
                        <Row className=" align-items-start p-2 my-details rounded">
                            Hi There! I am <strong>&nbsp;Christiphor Ashman</strong>
                            <br />I am a passionate individual and programmer that is always eager to learn new technology. Highly skilled Full Stack Web Developer/Designer in HTML, CSS, Reactjs<br />
                            I graduated from The College of New Jersey  and the Flatiron School of Software Engineering to advance my skills of Web Development and Design.
                            <br /> I love learning about new technology and contributing to the growth of my environment as well as helping others reach their potential while reaching my own. 
                            I want to use these opportunities to learn and grow as Web Developer and Designer.
                            <br />

                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">
                                            Let's Chat
                                        </Button></a>
                                </div>
                                <div>
                                    <a href="https://docs.google.com/document/d/11rb2sAQz1EjKsqUr7V3-Zyu9eJN8s_Frj58pthJTRxo/edit?usp=sharing" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-info">
                                            My Resume
                                        </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://github.com/Cashman1396" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-dark">
                                            Github
                                        </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="https://www.linkedin.com/in/cashman1996/" target="_blank" rel="noopener noreferrer">
                                        <Button className="m-2" variant="outline-secondary">
                                            LinkedIn
                                        </Button>
                                    </a>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
           
            </div>
        </div>
    )
}

export default About
