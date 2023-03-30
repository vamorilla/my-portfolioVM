import { useState, useEffect, useRef } from "react";
import { Col, Container, Row} from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Desarrolladora web"];
    const [delta, setDelta] = useState(180 - Math.random() * 100);
    const [text, setText] = useState('');
    const timePeriod = 2000;

    const btnEl = useRef();

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        },delta)

        return () => { clearInterval(ticker)};
        
    })

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);
    
        setText(updateText);

        if(isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if(isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(timePeriod);
        }else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum);
            setDelta(500);
        }
    
    }

    const scrollToSkills = () => {
        btnEl.current.scrollIntoView({ behavior: 'smooth' });
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{`Hola soy Vanesa! `}<br/><span className="wrap">{text}</span></h1>  
                        <p> Dedicada al desarrollo de aplicaciones web desde el año 2020, enfocada y decidida, autodidacta y en la constante búsqueda de aprender e incorporar nuevos conocimientos. Soy una persona que disfruta del trabajo en equipo, siempre dando lo mejor para alcanzar los objetivos.</p>
                        <button ref={btnEl} onClick={scrollToSkills}><ArrowDownCircle /></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}