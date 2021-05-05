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

import L_ORACLELIB from "../../assets/imgs/projects/oraclelibrary.webp"
import L_UNIVERSECAT from "../../assets/imgs/projects/universalcatalog.webp";
import L_POKEMON from "../../assets/imgs/projects/pokemondata.webp"
import L_TICTAC from "../../assets/imgs/projects/tictactoe.webp"
import L_STELLAR from "../../assets/imgs/projects/Stellar.webp"
import L_GALAXY from "../../assets/imgs/projects/galaxyweather.webp"
import L_ORICALEWP from "../../assets/imgs/projects/OricaleWP.webp"
import "./project-timeline.styles.css";


const Projects = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>


                <ImageEvent date="04/15/2021" className="text-center" text="Oricale WordPress" src={L_ORICALEWP} alt="Oricale WordPress">
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
                                                <li>Created from HTML, CSS, PHP and WordPress</li>
                                                <li>Uses PHP to talk to the WordPress backend</li>
                                                <li>Uses a combination of Reactjs, HTML, and SASS to create the Application</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech Used:</strong>
                                            <ul>
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
                       =
                        
                        
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




                <ImageEvent date="01/10/2021" className="text-center" text="Tic Tac Toe" src={L_TICTAC} alt="TicTac">
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">PROJECT DETAILS</Accordion.Toggle>
                                    
                                    
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong> A ReactJS made Tic Tac Toe game where users with a friend can play old fashion tic tac toe
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Uses React for build in the board and the components</li>
                                                <li>Can play multiple rounds of Tic Tac Toe </li>
                                                <li>Has a Two player functionality</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech Used:</strong>
                                            <ul>
                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={L_REACT}
                                                                alt="REACT"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                React
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
                        <UrlButton href="https://github.com/Cashman1396/tic-tac-toe"
                        target="_blank">
                            SOURCE CODE
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

                    <ImageEvent date="09/10/2020" className="text-center" text="Universal Catalog" src={L_UNIVERSECAT} alt="Universal Catalog">
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">PROJECT DETAILS</Accordion.Toggle>
                                    
                                    
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong> A Catalog that will be to contain multiple items such as Food, Television shows, you name it. This catalog is here to make making those decisions a bit easier
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Uses Ruby on Rails and Javascript to create a catalog website of food</li>
                                                <li>Uses to get data from the backend to implement new items into the catalog</li>
                                                <li>Utilizes Fetch to obtain data and send requests to the API</li>
                                            </ul>
                                            <hr />
                                            <strong>Tech Used:</strong>
                                            <ul>
                                                <li><span className="p-2">
                                                    <Image src={L_HTML5} alt="React" rounded className="image-style m-1"></Image>{" "} 
                                                        HTML5
                                                    </span>
                                                </li>

                                                    <li>
                                                        <span className="p-2">
                                                            <Image
                                                                src={L_RAILS}
                                                                alt="RAILS"
                                                                rounded
                                                                className="image-style1 m-1" 
                                                                ></Image>{" "}
                                                                RAILS
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={L_JAVAS}
                                                                alt="Rails"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Rails
                                                        </span>
                                                    </li>

                                                    <li>
                                                    <span>
                                                        <Image
                                                            src={L_HEROKU}
                                                            alt="Heroku"
                                                            rounded
                                                            className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Heroku
                                                        </span>
                                                    </li>

                                                    <li>
                                                    <span>
                                                        <Image
                                                            src={L_POSTGRESQL}
                                                            alt="Postgresql"
                                                            rounded
                                                            className="image-style1 m-1"
                                                            ></Image>{" "}
                                                            Postgresql
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
                        <UrlButton href="https://github.com/Cashman1396/Javascript-Rails-Food-Catalog"
                        target="_blank">
                            SOURCE CODE
                        </UrlButton>
                        <UrlButton href="http://universal-catalog-client.herokuapp.com/"
                        target="_blank">
                            WATCH IT LIVE
                        </UrlButton>
                        <UrlButton href="https://www.youtube.com/watch?v=FYsF4wynCp0&t"
                        target
                        ="_blank">
                            WATCH VIDEO
                        </UrlButton>
                        </div>
                      </div>
                    </ImageEvent>

                    <ImageEvent date="03/11/2020" className="text-center" text="Pokémon Database" src={L_POKEMON} alt="Pokémon Database">
                    <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="0" className="p-2 text-center accordian-main">PROJECT DETAILS</Accordion.Toggle>
                                    
                                    
                                    <Accordion.Collapse eventKey="0" className="text-left">
                                        <Card.Body>
                                            <strong>Description:</strong>A Ruby command line interface that can access of all the recent Pokémon out in the games.
                                            <hr />
                                            <strong>Features:</strong>
                                            <ul className="list-styles pt-1">
                                                <li>Utilized Nokogiri to create the scrape from the website and implement data</li>
                                                <li>Creates a database using ruby code to initialize a pokedex of all the pokemon up to #898</li>
                                                <li>Uses a CLI (command line interface) to search through the database </li>
                                            </ul>
                                            <hr />
                                            <strong>Tech Used:</strong>
                                            <ul>
                                                    <li>
                                                        <span>
                                                            <Image
                                                                src={L_RUBY}
                                                                alt="Ruby"
                                                                rounded
                                                                className="image-style1 m-1"
                                                                ></Image>{" "}
                                                                Ruby
                                                        </span>
                                                    </li>       
                                              </ul>
                                          </Card.Body>
                                      </Accordion.Collapse>
                                  </Card>
                              </Accordion> 
                      </div>
                      <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton href="https://github.com/Cashman1396/PokemonDatabase"
                        target="_blank">
                            SOURCE CODE
                        </UrlButton>
                        <UrlButton href="https://www.youtube.com/watch?v=GQ0C_m7cHP0&t"
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
