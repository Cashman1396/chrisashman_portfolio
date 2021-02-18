import React from 'react';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import L_Oricale from "../../assets/imgs/Oricale.webp"
import Tilt from "react-tilt";
import "./experience.styles.css"

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Jumbotron className="jumbo-style">
                <Container></Container>
            </Jumbotron>
        </div>
    )
}

export default Experience
