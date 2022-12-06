import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/proj-img1.png";
import projImg2 from "../assets/img/proj-img2.png";
import projImg3 from "../assets/img/proj-img3.png";
import projImg4 from "../assets/img/proj-img4.png";
import projImg5 from "../assets/img/proj-img5.jpg";
import projImg6 from "../assets/img/proj-img6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [
        {
          title: "Bank of NJIT",
          description: "HTML,CSS and PHP",
          imgUrl: projImg1,
        },
        {
          title: "Intelligent Intrusion Detection System",
          description: "Python",
          imgUrl: projImg2,
        },
        {
          title: "Contactless Sanitiser Dispenser with Fever Detection",
          description: "Embedded Software Development",
          imgUrl: projImg3,
        },
        {
          title: "Secure Biometric System",
          description: "MATLAB",
          imgUrl: projImg4,
        },
        {
          title: "Voice Controlled Robot",
          description: "Embedded Software Development",
          imgUrl: projImg5,
        },
        {
          title: "Garbage Monitor",
          description: "Embedded Software Development",
          imgUrl: projImg6,
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
                          projects.map((project, index) => {
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
                        <p>Every project is an opportunity to learn, to figure out problems and challenges, to invent and reinvent.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <p>Every project is an opportunity to learn, to figure out problems and challenges, to invent and reinvent.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container> 
              </div>}
            </TrackVisibility>           
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt =""></img>
    </section>
  )
}
