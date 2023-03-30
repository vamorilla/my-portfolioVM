
export const ProjectCard = ({title, description, imgUrl, link}) => {
    return(
        <div className="card">
            <div className="box">
                <div className="imgBx">
                    <img src={imgUrl} alt="Imagen del proyecto" />
                </div>
                <div className="contentBx">
                    <div>
                        <h2>{title}</h2>
                        <p>{description}</p>
                        <a href={link} rel="noreferrer" target="_blank">Ver</a>
                    </div>
                </div>
            </div>
        </div>
    )
}