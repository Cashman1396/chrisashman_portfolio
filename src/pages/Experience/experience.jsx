import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_ORICALE from "../../assets/imgs/Oricale.webp"
import Tilt from "react-tilt";
import "./experience.styles.css"

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container>
                  <Tilt options={{ max: 25 }}>
                  <Card>
                    <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                        <Card.Img variant="top" className="img-resize" src={L_ORICALE} alt="Accenture logo" />
                    </Card.Header>
                    <Card.Body className="d-flex justify-content-center flex-column">
                        <div>
                        <Card.Title className="text-center">Freelance Web Developer</Card.Title>
                        </div>
                        <div>
                            <Card.Text className="text-center style">
                                <strong className="body-title-style ">Full Stack Developer</strong>
                                <br />
                                <strong>Duration:</strong> January 2021 - Present
                                <br />
                                <strong> Description </strong>

                            </Card.Text>
                        </div>
                    </Card.Body>
                  </Card>

                  </Tilt>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default Experience
