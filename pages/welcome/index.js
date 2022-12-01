import { useRouter } from 'next/router';
import { ContainerHome, StyledImage, BoxTitle, TitleApp, BoxButton, StyledImageBackground } from "../../styles/styled-welcome/index.js";
import logo from "../../public/assests/logo2.jpg";
import capa from "../../public/assests/capa3.jpg";

export default function Welcome() {
  const router = useRouter();

  function gohome(){
    router.push('/home')
  }
  return (
    <ContainerHome>
      <StyledImageBackground src={capa} alt="capa"/>
      <StyledImage src={logo}/>
      <BoxTitle>
        <TitleApp><p>Gerenciador</p><p className="d">de</p><p>Sessão</p></TitleApp>
      </BoxTitle>
      <BoxButton>
        <button onClick={gohome}>Entrar</button>
      </BoxButton>
    </ContainerHome>
  );
}
