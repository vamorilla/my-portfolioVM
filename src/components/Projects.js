import { Container } from "react-bootstrap";
import proy1 from "../assets/projectsImg/proy1.jpg";
import proy2 from "../assets/projectsImg/proy2.png";
import imgPlaceholder from "../assets/projectsImg/proyectos.png";
import proy4 from "../assets/projectsImg/proy4.png";
import proy5 from "../assets/projectsImg/proy5.png";
import proy7 from "../assets/projectsImg/proy7.jpg";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

    const projects = [
        {
            title: "Videogame",
            description: "Video juego retro realizado con React.",
            imgUrl: proy1,
            link: "https://slidetheworm.netlify.app/"
        },
        {
            title: "Lista de Pokemones",
            description: "Paginación realizada con Fetch, consumiendo recursos de la API 'PokeAPI'.",
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
            title: "Conversor de texto a voz",
            description: "Narrador utilizando API SpeechSynthesis, en donde logica escrita en JavaScript toma el texto ingresado por el usuario y le da salida mediante dispositivos de audio.",
            imgUrl: proy4,
            link: "https://narradorvm.netlify.app/"
        },
        {
            title: "Generador de QR",
            description: "Este generador está realizado con lógica escrita en JavaScript, consumiendo datos de la API 'qrserver'.",
            imgUrl: proy5,
            link: "https://qrgeneratorvm.netlify.app/"
        },
        {
            title: "Pelispedia",
            description: "Utilizando React realizamos este proyecto de enciclopedia de peliculas, en el marco del Curso React de Codo a Codo.",
            imgUrl: proy7,
            link: "https://pelispedia.netlify.app/login"
        }
    ];

    return(
        <section className="projects" id="projects">
            <Container>
                <h2 className="title-project">Proyectos</h2>
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
            <button className="btn-github"><a href="https://github.com/vamorilla" rel="noreferrer" target="_blank">Mis Proyectos</a></button>
        </section>
    )
}