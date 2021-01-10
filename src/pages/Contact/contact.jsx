import React from 'react'
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "./contact.styles.css"

const Contact = () => {
    return (
        <div id="contact">
             <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
             <Jumbotron class="contact-jumbotron">
                 <Row>
                 <Col className="d-flex justify-content-center flex-wrap">
                     <div className="m-2">
                        <a href="mailto:chrisashman96@gmail.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline-danger" title="Chrisashman96@gmail.com">
                          <i className="fas fa-envelop-square"></i> Email Me 
                          </Button>
                        </a>
                    </div>

                    <div className="m-2">
                        <a href="https://www.linkedin.com/in/cashman1996/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-primary" title="Visit my LinkenIn">
                                <i className="fab fa-linkedin"></i> LinkedIn
                            </Button>
                        </a>
                    </div>

                    <div className="m-2">
                        <a href="https://github.com/Cashman1396" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-dark" title="More projects">
                                <i className="fab fa-github-square"></i> GitHub
                            </Button>
                        </a>
                    </div>

                    <div className="m-2">
                        <a href="https://chrisashman96.medium.com/" target="_blank" rel="noopener noreferrer">
                            <Button variant="outline-dark" title="More projects">
                                <i className="fab fa-medium-square"></i> Blog
                            </Button>
                        </a>
                    </div>
                 </Col>
                 </Row>
             </Jumbotron>
        </div>
    )
}

export default Contact
