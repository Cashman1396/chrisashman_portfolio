import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import L_REACT from "../../assets/imgs/skills/react.svg";
import L_POSTGRESQL from "../../assets/imgs/skills/postgresql.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/imgs/skills/redux.svg";
import L_HTML5 from "../../assets/imgs/skills/html-5.svg";
import L_CSS3 from "../../assets/imgs/skills/css3.svg";
import L_RAILS from "../../assets/imgs/skills/rails.svg"
import L_JAVAS from "../../assets/imgs/skills/javascript.svg"
import L_HEROKU from "../../assets/imgs/skills/heroku.svg"
import L_RUBY from "../../assets/imgs/skills/ruby.svg"
import L_PHP from "../../assets/imgs/skills/php.svg"
import L_WORDPRESS from "../../assets/imgs/skills/wordpress.svg";

import L_ORACLELIB from "../../assets/imgs/projects/oraclelibrary.webp"
import L_UNIVERSECAT from "../../assets/imgs/projects/universalcatalog.webp";
import L_POKEMON from "../../assets/imgs/projects/pokemondata.webp"
import L_TICTAC from "../../assets/imgs/projects/tictactoe.webp"
import L_STELLAR from "../../assets/imgs/projects/Stellar.webp"
import L_SUNMADE from "../../assets/imgs/projects/SunMade.webp"
import L_GALAXY from "../../assets/imgs/projects/galaxyweather.webp"
import L_ORICALEWP from "../../assets/imgs/projects/OricaleWP.webp"
import L_FORGE from "../../assets/imgs/projects/Forge.webp"
import L_PROMO from "../../assets/imgs/projects/Promotional.webp"
import L_VALS from "../../assets/imgs/projects/Valstrax.webp"
import L_WORKSGALLERY from "../../assets/imgs/projects/works-gallery.webp"
import L_BIKE from "../../assets/imgs/projects/BikeSite.webp"
import "./project-timeline.styles.css";


const Projects = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>

                <ImageEvent date="05/17/2022" className="text-center" text="Bike Site" src={L_BIKE} alt="BMW Bike Website">
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">PROJECT DETAILS</Accordion.Toggle>
                                    
                                    
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong> A BMW Motorcycle Website
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>A BMW Motorcycle Website to present my learning of Javascript.</li>
                                                <li>Created from HTML and CSS to showcase additional portfolio work</li>
                                                <li>Uses Javascript to transition the background into three different versions using color buttons</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech Used:</strong>
                                            <ul>
                                            <li>
                                                        <span>
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                HTML
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS"
                                                                rounded
                                                                className="image-style1 m-1" 
                                                                ></Image>{" "}
                                                                CSS3
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={L_JAVAS}
                                                                alt="JAVASCRIPT"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Javascript
                                                        </span> 
                                                    </li>     
                                              </ul>
                                          </Card.Body>
                                      </Accordion.Collapse>
                                  </Card>
                              </Accordion> 
                      </div>
                      <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://github.com/Cashman1396/BikeWebsite"
                        target="_blank">
                            SOURCE CODE
                        </UrlButton> 

                        <UrlButton href="https://cashman1396.github.io/BikeWebsite/"
                        target="_blank">
                            WATCH IT LIVE
                        </UrlButton>
                        
                        
                        </div>
                      </div>
                </ImageEvent>

                <ImageEvent date="04/24/2022" className="text-center" text="Portfolio Gallery" src={L_WORKSGALLERY} alt="Portfolio Works">
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">PROJECT DETAILS</Accordion.Toggle>
                                    
                                    
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong> A Image Gallery created to showcase additional works I have done
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Created from HTML and CSS to shwocase additional portfolio work</li>
                                                <li>Images use a lightbox for users to view images in higher quality and in color</li>
                                                <li>Uses a grayscale for images that are not hovered over but when hovered the image becomes color</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech Used:</strong>
                                            <ul>
                                            <li>
                                                        <span>
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                HTML
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS"
                                                                rounded
                                                                className="image-style1 m-1" 
                                                                ></Image>{" "}
                                                                CSS3
                                                        </span>
                                                    </li>
                                              </ul>
                                          </Card.Body>
                                      </Accordion.Collapse>
                                  </Card>
                              </Accordion> 
                      </div>
                      <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://github.com/Cashman1396/portfolio-gallery"
                        target="_blank">
                            SOURCE CODE
                        </UrlButton> 

                        <UrlButton href="https://cashman1396.github.io/portfolio-gallery/"
                        target="_blank">
                            WATCH IT LIVE
                        </UrlButton>
                        
                        
                        </div>
                      </div>
                </ImageEvent>

                <ImageEvent date="04/22/2022" className="text-center" text="SunMade" src={L_SUNMADE} alt="SunMade">
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">PROJECT DETAILS</Accordion.Toggle>
                                    
                                    
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong>A recently created front-page website that I created to showcase my works and services
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Created from HTML and CSS to create a quick front page website to showcase my skills</li>
                                                <li>Uses a custom logo created by myself</li>
                                                <li>A simple front page that can be expanded</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech Used:</strong>
                                            <ul>
                                            <li>
                                                        <span>
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                HTML
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS"
                                                                rounded
                                                                className="image-style1 m-1" 
                                                                ></Image>{" "}
                                                                CSS3
                                                        </span>
                                                    </li>
                                              </ul>
                                          </Card.Body>
                                      </Accordion.Collapse>
                                  </Card>
                              </Accordion> 
                      </div>
                      <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://github.com/Cashman1396/Quick-Website"
                        target="_blank">
                            SOURCE CODE
                        </UrlButton> 

                        <UrlButton href="https://cashman1396.github.io/Quick-Website/"
                        target="_blank">
                            WATCH IT LIVE
                        </UrlButton>
                        
                        
                        </div>
                      </div>
                </ImageEvent>

                <ImageEvent date="09/30/2021" className="text-center" text="Forge Site" src={L_FORGE} alt="Forge Site">
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">PROJECT DETAILS</Accordion.Toggle>
                                    
                                    
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong>The Third Project made during my time at DXAgency
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Created from HTML, CSS, PHP and WordPress</li>
                                                <li>Used media queries for resizing the content</li>
                                                <li>Used animations to bring some of the content to life</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech Used:</strong>
                                            <ul>

                                            <li>
                                                        <span>
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                HTML
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS"
                                                                rounded
                                                                className="image-style1 m-1" 
                                                                ></Image>{" "}
                                                                CSS3
                                                        </span>
                                                    </li>


                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={L_PHP}
                                                                alt="PHP"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                PHP
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={L_WORDPRESS}
                                                                alt="WordPress"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                WordPress
                                                        </span>
                                                    </li>

    
                                              </ul>
                                          </Card.Body>
                                      </Accordion.Collapse>
                                  </Card>
                              </Accordion> 
                      </div>
                      <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://github.com/Cashman1396/backup-forge"
                        target="_blank">
                            SOURCE CODE
                        </UrlButton> 
                        
                        </div>
                      </div>
                </ImageEvent>

                <ImageEvent date="03/07/2021" className="text-center" text="Galaxy Weather" src={L_GALAXY} alt="Galaxy Weather">
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">PROJECT DETAILS</Accordion.Toggle>
                                    
                                    
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong> A React Weather App that uses the OpenWeatherMap API to retrieve data for weather 
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Used Fetch to retrieve data of weather for different cities, states, and countries</li>
                                                <li>Shows a 7 day 3-hour forecast of a resulted search</li>
                                                <li>Uses a combination of Reactjs, HTML, and SASS to create the Application</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech Used:</strong>
                                            <ul>
                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={L_REACT}
                                                                alt="React"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                ReactJS
                                                        </span>
                                                    </li>
    
                                              </ul>
                                          </Card.Body>
                                      </Accordion.Collapse>
                                  </Card>
                              </Accordion> 
                      </div>
                      <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://github.com/Cashman1396/galaxy-weather"
                        target="_blank">
                            SOURCE CODE
                        </UrlButton>
                        <UrlButton href="https://cashman1396.github.io/galaxy-weather/"
                        target="_blank">
                            WATCH IT LIVE
                        </UrlButton>
                        
                        
                        </div>
                      </div>
                </ImageEvent>

                <ImageEvent date="02/05/2021" className="text-center" text="Stellar" src={L_STELLAR} alt="Stellar">
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">PROJECT DETAILS</Accordion.Toggle>
                                    
                                    
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong>A sample website I created from cafe services built using HTML, CSS, and Javascript.
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Used HTML to create the framework of the site</li>
                                                <li>Utilized fundamentals of HTML for its creation</li>
                                                <li>Utilized CSS and Javascript for styling and animation</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech Used:</strong>
                                            <ul>
                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={L_HTML5}
                                                                alt="HTML"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                HTML
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_CSS3}
                                                                alt="CSS"
                                                                rounded
                                                                className="image-style1 m-1" 
                                                                ></Image>{" "}
                                                                CSS3
                                                        </span>
                                                    </li>


                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={L_JAVAS}
                                                                alt="JAVASCRIPT"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Javascript
                                                        </span> 
                                                    </li>     
                                              </ul>
                                          </Card.Body>
                                      </Accordion.Collapse>
                                  </Card>
                              </Accordion> 
                      </div>
                      <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://github.com/Cashman1396/Stellar"
                        target="_blank">
                            SOURCE CODE
                        </UrlButton>
                        <UrlButton href="https://cashman1396.github.io/Stellar/"
                        target="_blank">
                            WATCH IT LIVE
                        </UrlButton>
                        
                        
                        </div>
                      </div>
                </ImageEvent>
              
                <ImageEvent date="11/13/2020" className="text-center" text="Cosmos Library" src={L_ORACLELIB} alt="Cosmos Library">
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">PROJECT DETAILS</Accordion.Toggle>
                                    
                                    
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong> A library that is created with a Rails API and React/Redux Frontend that is able to store different items you put.
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Powered by React and Ruby on Rails</li>
                                                <li>Keeps track of your different items</li>
                                                <li>Uses an Authentication System</li>
                                            </ul>
                                              <hr />
                                              <strong>Tech Used:</strong>
                                              <ul>
                                                  <li><span className="p-2">
                                                        <Image src={L_REACT} alt="React" rounded className="image-style m-1"></Image>{" "} 
                                                            ReactJS
                                                        </span>
                                                    </li>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_REDUX}
                                                                alt="Redux"
                                                                rounded
                                                                className="image-style1 m-1" 
                                                                ></Image>{" "}
                                                                Redux
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={L_RAILS}
                                                                alt="Rails"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Rails
                                                        </span>
                                                    </li>
                                              </ul>
                                          </Card.Body>
                                      </Accordion.Collapse>
                                  </Card>
                              </Accordion> 
                      </div>
                      <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://github.com/Cashman1396/React-Redux_VideoGameClient"
                        target="_blank">
                            SOURCE CODE
                        </UrlButton>
                        <UrlButton href="https://www.youtube.com/watch?v=FYsF4wynCp0&t"
                        target
                        ="_blank">
                            WATCH VIDEO
                        </UrlButton>
                        </div>
                      </div>
                </ImageEvent>

                

                  </Events>
              </Timeline>
            
            
        </div>
    )
}

export default Projects
