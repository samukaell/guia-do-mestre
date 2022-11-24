import styled from "styled-components";
import Image from "next/image";

const ContainerHome = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const StyledImageBackground = styled(Image)`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  filter: brightness(20%);
`;

const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleApp = styled.h1`
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-family: "Russo One", sans-serif;
    margin-top: 2px;
    margin-bottom: 2px;
    font-size: 28px;
  }
  .d {
    font-family: "Russo One", sans-serif;
    font-size: 18px;
  }
`;

const ContainerEvents = styled.div`
  margin-top: 60px;
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxScreen = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const TitleAlert = styled.h1`
  font-family: "Russo One", sans-serif;
  margin-top: 2px;
  margin-bottom: 2px;
  font-size: 20px;
  color: white;
`;

export {
  ContainerHome,
  StyledImageBackground,
  BoxTitle,
  TitleApp,
  ContainerEvents,
  BoxScreen,
  TitleAlert
};
