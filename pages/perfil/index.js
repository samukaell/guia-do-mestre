import {
  StyladeMain,
  BoxScreen,
  StyledImageBackground,
} from "../../styles/Background/styles";
import {
  BoxPerfil,
  BoxInfo,
  StyledImage,
  TitleNick,
  TextDescription,
  BoxProgress,
  TextProgreess,
} from "../../styles/styled-perfil";
import Header from "../../components/Header";
import capa from "../../public/assests/capa4.jpg";
import { useState, useEffect } from "react";
import { perfil } from "../../DATA/index.js";
import Progress from "../../components/Progress";
export default function Perfil() {
  const [perfilUser, setPefilUser] = useState({});
  useEffect(() => {
    setPefilUser(perfil[0]);
    console.log("Perfil", perfil);
  }, []);
  return (
    <StyladeMain>
      <StyledImageBackground src={capa} alt="capa" />
      <BoxScreen>
        <Header />
        <BoxPerfil>
          <StyledImage>
            <img src={perfilUser.image} alt="Imagem do perfil do personagem" />
          </StyledImage>
          <BoxInfo>
            <TitleNick>{perfilUser.nick}</TitleNick>
            <TextDescription>{perfilUser.description}</TextDescription>

            <BoxProgress>
              <TextProgreess>XP</TextProgreess>
              <Progress/>
            </BoxProgress>
          </BoxInfo>
        </BoxPerfil>
      </BoxScreen>
    </StyladeMain>
  );
}
