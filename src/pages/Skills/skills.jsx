import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import { skillsnames } from './skills-data'
import './skills.styles.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image' 

const Skills = () => {
    return (
        <div id="skill">
          <div className="pt-3 pb-3" id="skills">
            <h1 className="text-center font-details-b pb-4">TECH SKILLS</h1>
            <CardDeck>
                <Row className="d-flex justify-content-around">
                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center card-title">FrontEnd</Card.Title>
                                <hr />
                                <Card.Text className="card-text d-flex justify-content-start flex-column">
                                    {skillsnames.frontend.map((skillsnames, index) =>(
                                        <span className="p-2" key={`${skillsnames.skillName}${index}`}>
                                        <a className="text-dark text-decoration-none" href={skillsnames.link} target="_blank" rel="noopener noreferrer">
                                          <Image src={skillsnames.imgSrc} alt={skillsnames.imgAltText} rounded className="image-style m-1"></Image> {skillsnames.skillName}
                                        </a>
                                      </span>
                                    ))}
                                </Card.Text>
                                {console.log(skillsnames)}
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className="focus mt-2 mb-2">
                            <Card.Body>
                                <Card.Title className="text-center  card-title">Backend</Card.Title>
                                <hr />
                                    <Card.Text className="card-text d-flex justify-content-start flex-column">
                                            {skillsnames.backend.map((skillsnames, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skillsnames.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skillsnames.imgSrc} alt={skillsnames.imgAltText} rounded className="image-style m-1"></Image> {skillsnames.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>


            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsnames.hostingPlatforms.map((skillsnames, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skillsnames.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skillsnames.imgSrc} alt={skillsnames.imgAltText} rounded className="image-style m-1"></Image> {skillsnames.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsnames.programmingLanguages.map((skillsnames, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skillsnames.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skillsnames.imgSrc} alt={skillsnames.imgAltText} rounded className="image-style m-1"></Image> {skillsnames.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsnames.databases.map((skillsname, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skillsname.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skillsname.imgSrc} alt={skillsname.imgAltText} rounded className="image-style m-1"></Image> {skillsname.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Version Control */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Version Control</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href={skillsnames.versionControl[0].link} target="_blank" rel="noopener noreferrer">
                      <Image src={skillsnames.versionControl[0].imgSrc} alt={skillsnames.versionControl[0].imgAltText} rounded className="image-style m-1"></Image> {skillsnames.versionControl[0].skillName}
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
                </Row>
            </CardDeck>
          </div>   
        </div>
    )
}

export default Skills
