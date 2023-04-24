import { Container } from "react-bootstrap";
import proy1 from "../assets/projectsImg/proy1.jpg";
import proy2 from "../assets/projectsImg/proy2.png";
import imgPlaceholder from "../assets/projectsImg/proyectos.png";
import proy4 from "../assets/projectsImg/proy4.png";
import proy5 from "../assets/projectsImg/proy5.png";
import proy7 from "../assets/projectsImg/proy7.jpg";
import { ProjectCard } from "./ProjectCard";
import { useTranslation } from "react-i18next";

export const Projects = () => {

    const [t] = useTranslation("global");
    const projects = [
        {
            title: t("projects.videogame-title"),
            description: t("projects.videogame-description"),
            imgUrl: proy1,
            link: "https://slidetheworm.netlify.app/"
        },
        {
            title: t("projects.list-pokemons-title"),
            description: t("projects.list-pokemons-description"),
            imgUrl: proy2,
            link: "https://pokeapivm.netlify.app/"
        },
        {
            title: "En construcción...",
            description: "Conocé más proyectos en mi Hithub",
            imgUrl: imgPlaceholder,
            link: "https://github.com/vamorilla"
        },
        {
            title: t("projects.text-to-speech-title"),
            description: t("projects.text-to-speech-description"),
            imgUrl: proy4,
            link: "https://narradorvm.netlify.app/"
        },
        {
            title: t("projects.qr-generator-title"),
            description: t("projects.qr-generator-description"),
            imgUrl: proy5,
            link: "https://qrgeneratorvm.netlify.app/"
        },
        {
            title: t("projects.pelispedia-title"),
            description: t("projects.pelispedia-description"),
            imgUrl: proy7,
            link: "https://pelispedia.netlify.app/peliculas"
        }
    ];

    return(
        <section className="projects" id="projects">
            <Container>
                <h2 className="title-project">{t("projects.h2")}</h2>
                <div className="contenedor-cards">
                    <div className="cards">
                        {
                            projects.map((project, index) => {
                                return(
                                    <ProjectCard 
                                            key={index}
                                            {...project}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </Container>
            <button className="btn-github"><a href="https://github.com/vamorilla" rel="noreferrer" target="_blank">{t("projects.btn")}</a></button>
        </section>
    )
}