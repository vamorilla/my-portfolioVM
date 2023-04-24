import { useState, useEffect, useRef } from "react";
import { Col, Container, Row} from "react-bootstrap";
import { ArrowDownCircle } from "react-bootstrap-icons";
import { useTranslation } from "react-i18next";

export const Banner = () => {
    const [t] = useTranslation("global");
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [t("banner.web-developer")];
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
                        <h1>{t("banner.h1")}<br/><span className="wrap">{text}</span></h1>  
                        <p>{t("banner.p")}.</p>
                        <button ref={btnEl} onClick={scrollToSkills}><ArrowDownCircle /></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}