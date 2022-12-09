import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj-img1.png";
import projImg2 from "../assets/img/proj-img2.png";
import projImg3 from "../assets/img/proj-img3.png";
import projImg4 from "../assets/img/proj-img4.png";
import projImg5 from "../assets/img/proj-img5.jpg";
import projImg6 from "../assets/img/proj-img6.jpg";
import wikiproj from "../assets/img/wikidump.jpg";
import ocr_proj from "../assets/img/ocr_proj1.png";
import ocr_proj2 from "../assets/img/ocr_img2.png";
import protfolio from "../assets/img/protfolio.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects_1 = [
        {
          title: "Search Engine for WikiDump",
          description: "Java and Python",
          imgUrl: wikiproj,
          url: "https://github.com/chaitanyasagar3/WikiDump_Search_Engine",
        },
        {
          title: "Portfolio Website",
          description: "React, Node.js, Animate.CSS, React-BootStrap, Mailchimp",
          imgUrl: protfolio,
          url: "https://github.com/chaitanyasagar3/Portfolio-Website",
        },
        {
          title: "Bank of NJIT",
          description: "HTML,CSS, PHP, MySQL and Relation Database Management",
          imgUrl: projImg1,
          url: "https://github.com/chaitanyasagar3/BankofNJIT",
        },
        {
          title: "Intelligent Intrusion Detection System",
          description: "Python and OpenCV2",
          imgUrl: projImg2,
          url: "https://github.com/chaitanyasagar3/IIDS",
        },
        {
          title: "Hybrid Image Processing OCR II",
          description: "Python and OpenCV",
          imgUrl: ocr_proj,
          url: "https://github.com/chaitanyasagar3/hybrid_image_processing_ocr_2",
        },
        {
          title: "Secure Biometric System",
          description: "MATLAB",
          imgUrl: projImg4,
          url: "https://github.com/chaitanyasagar3/Securing-biometric-user-template-using-modified-minutiae-attributes",
        },
      ];
      const projects_2 = [
        {
          title: "Hybrid Image Processing OCR II",
          description: "Python and OpenCV",
          imgUrl: ocr_proj2,
          url: "https://github.com/chaitanyasagar3/hybrid_image_processing_ocr",
        },
        {
          title: "Contactless Sanitiser Dispenser with Fever Detection",
          description: "Embedded Software Development",
          imgUrl: projImg3,
          url: "https://github.com/chaitanyasagar3/Contactless-Temperature-Reader-and-Sanitiser-Dispenser",
        },
        {
          title: "Voice Controlled Robot",
          description: "Embedded Software Development",
          imgUrl: projImg5,
          url: "https://github.com/chaitanyasagar3/Voice-controlled-Robot",
        },
        {
          title: "Garbage Monitor",
          description: "Embedded Software Development",
          imgUrl: projImg6,
          url: "https://github.com/chaitanyasagar3/Garbage-Monitor-ardunio-esp32",
        },
      ];

      return (
        <section className="project" id="projects">
          <Container>
            <Row>
              <Col size={12}>
                <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                    <h2>Projects</h2>
                            <p>Every project is an opportunity to learn, to figure out problems and challenges, to invent and reinvent.</p>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                      <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                          <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                        <Tab.Pane eventKey="first">
                          <Row>
                            {
                              projects_1.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <Row>
                            {
                              projects_2.map((project, index) => {
                                return (
                                  <ProjectCard
                                    key={index}
                                    {...project}
                                    />
                                )
                              })
                            }
                          </Row>
                            </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <p>Coming Soon !</p>                    
                            </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>}
                </TrackVisibility>
              </Col>
            </Row>
          </Container>
          <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>
      )
    }
    