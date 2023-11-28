import { Container, ImgPerfil, NamePerfil, ContainerPerfil, Descriptions } from "./style";
import PerfilImg from "../../assets/patio.jpg";

const PerfilPato = () => {
    return(
        <Container>
            <ContainerPerfil>
                <ImgPerfil img src={PerfilImg} alt="Deu ruim" title="Perfil"></ImgPerfil>
                <NamePerfil>O Pato</NamePerfil> 
            </ContainerPerfil>
            <Descriptions>Texto</Descriptions>
        </Container>
    )
}

export default PerfilPato;