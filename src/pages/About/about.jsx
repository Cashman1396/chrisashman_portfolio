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
                            Hello There! I am <strong>&nbsp;Christiphor Ashman</strong>
                            <br />A passionate individual and programmer who is always ready to learn new technology. I am a Full Stack Web Developer and Designer with Skills in HTML5, CSS, Reactjs, and Ruby on Rails.<br />
                            I graduated from The College of New Jersey in Ewing, New Jersey in 2018, with a focus in Interactive Multimedia and Game Design. <br />
                            After creating my first website back in college. I went to the Flatiron School to learn Software Engineering and advance my skills of learning Web Development.
                            <br /> I love learning about new information and contributing to the growth of my environment. I want to use the opportunities to learn and grow as Developer.
                            <br /><br />

                            <Col className="d-flex justify-content-center flex-wrap">
                                <div>
                                    <a href="#contact">
                                        <Button className="m-2" variant="outline-primary">
                                            Let's Chat
                                        </Button></a>
                                </div>
                                <div>
                                    <a href="https://drive.google.com/file/d/1vxH7RqwwLffZbuJFXuYqvFmAoo3AGFlq/view?usp=sharing" target="_blank" rel="noopener noreferrer">
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
