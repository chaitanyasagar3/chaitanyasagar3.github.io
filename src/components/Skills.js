import { Container} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    
    return (
        <section className="skills" id="skills">
            <Container>
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>In a world that is constantly changing, there is no one subject or set of subjects that will serve you for the foreseeable future, let alone for the rest of your life. The most important skill to acquire now is learning how to learn.</p>
                            <Carousel responsive={responsive} infinite={true} className = "skill-slidder">
                                <div className="skill-slider">
                                    <img src = {meter1} alt="img"/>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="skill-slider">
                                    <img src = {meter2} alt="img"/>
                                    <h5>Data Structures and Alogrithms</h5>
                                </div>
                                <div className="skill-slider">
                                    <img src = {meter3} alt="img"/>
                                    <h5>Software Development</h5>
                                </div>
                                <div className="skill-slider">
                                    <img src = {meter2} alt="img"/>
                                    <h5>Data Analysis</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="img"/>
        </section>
    )
}