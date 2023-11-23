import { Container, ImgPerfil, NamePerfil, InfoLevelPerfil, LevelPerfil } from "./style";
import PerfilImg from "../../assets/patio.jpg";

const PerfilPato = () => {
    return(
        <Container>
           
            <ImgPerfil img src={PerfilImg} alt="Deu ruim" title="Perfil"></ImgPerfil>
            <NamePerfil>O Pato</NamePerfil>
            <InfoLevelPerfil>Nivel de maldade:</InfoLevelPerfil>
            <LevelPerfil>8000!!!</LevelPerfil>
        </Container>
    )
}

export default PerfilPato;