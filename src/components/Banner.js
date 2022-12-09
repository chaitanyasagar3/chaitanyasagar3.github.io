import { useState, useEffect } from "react"
import {Row, Col, Container } from "react-bootstrap"
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import { ArrowDownCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img3.svg'
import resumePDF from '../assets/SagarChaitanya.pdf'


export const Banner = () => {
    const [loopNum, setLoopNum]= useState(0);
    const [isDeleting , setIsDeleting] = useState(false);
    const toRotate = ["Software Developer", "Web Developer", "Software Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta]= useState(300 - Math.random()*100);
    const [index, setIndex] = useState(1);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
          tick();
        }, delta);
    
        return () => { clearInterval(ticker) };
      }, [text])
    
      const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);
    
        if (isDeleting) {
          setDelta(prevDelta => prevDelta / 2);
        }
    
        if (!isDeleting && updatedText === fullText) {
          setIsDeleting(true);
          setIndex(prevIndex => prevIndex - 1);
          setDelta(period);
        } else if (isDeleting && updatedText === '') {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
          setIndex(1);
          setDelta(500);
        } else {
          setIndex(prevIndex => prevIndex + 1);
        }
      }
    
    return( 
        <section className="banner" id ="home">
            <Container>
                <Row className = "align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                        {({isVisible})=> 
                            <div className = {isVisible ? "animate__animated animate__fadeIn": ""}>
                                <span className="tagline">Welcome to my Portfolio</span>
                                <h1> {`Hi I'm Chaitanya Sagar\n`}</h1>
                                <h1><span className="txt-rotate" dataperiod="1000" data-rotate='["Software Developer", "Web Developer", "Software Engineer"]'><span className="wrap">{text}</span></span></h1>
                                <p>I am a Master of Science Student at the New Jersey Institute of Technology. I am passionate about various aspects of coding and how we can turn small ideas into real-life project throw technologies like web development, data analysis, software development, and embedded software development. Also, I’m certified in C, C++, Java, Python, and R Programming moreover have expertise in web development also in languages like HTML, CSS, Angular, JavaScript, ReactJS, NodeJS and ExpressJS</p>
                                <button>
                                  <a className ='button' href={resumePDF} download="Chaitanya_Resume.pdf">
                                  Download Resume</a>
                                <ArrowDownCircle size={25}/></button>
                            </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={headerImg} alt="Header Img"/>
                            </div>}
                    </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}