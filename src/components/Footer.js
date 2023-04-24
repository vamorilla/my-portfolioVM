import imgFooter from "../assets/favorito.png";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    const [t] = useTranslation("global");

    return(
        <footer>
            <p>{t("footer.p")}<img src={imgFooter} alt="corazon" /> by <a href="https://www.linkedin.com/in/vamorilla/" target="_blank" rel="noreferrer">VM|Vane Morilla</a></p>
        </footer>
    )
}