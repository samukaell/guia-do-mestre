import {
  ContainerHome,
  StyledImageBackground,
  BoxTitle,
  TitleApp,
} from "../../styles/styled-home/index.js";
import capa from "../../public/assests/capa4.jpg";
export default function Home() {
  return (
    <ContainerHome>
      <StyledImageBackground src={capa} />
      <BoxTitle>
        <TitleApp>
          <p>Bem vindo a home page</p>
        </TitleApp>
      </BoxTitle>
    </ContainerHome>
  );
}
