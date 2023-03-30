import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import bootstrap from "../assets/skills/bootstrap.svg";
import java from "../assets/skills/java.svg";
import javaScript from "../assets/skills/javascript.svg";
import angular from "../assets/skills/angular.svg";
import react from "../assets/skills/react.svg";
import git from "../assets/skills/git.svg";
import mysql from "../assets/skills/mysql.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box">
                            <h2>
                                Habilidades
                            </h2>
                            <Carousel responsive={responsive} infinite="true" className="skill-slider">
                                <div className="item">
                                    <img src={html} alt="HTML" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={css} alt="CSS" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={javaScript} alt="JavaScript" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={bootstrap} alt="Bootstrap" />
                                    <h5>Bootstrap</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="React" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={angular} alt="Angular" />
                                    <h5>Angular</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt="Java" />
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={mysql} alt="MySQL" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={git} alt="Git" />
                                    <h5>Git</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}