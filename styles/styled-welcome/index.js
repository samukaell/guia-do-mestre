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

const BoxTitle = styled.div`
  z-index: 2;
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

const BoxButton = styled.div`
  z-index: 2;
  margin-top: 4vh;
  font-family: "Lato", sans-serif;
  button {
    width: 40vw;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: white;
    font-size: 18px;
    color: #0d1114;
  }
`;

const StyledImage = styled(Image)`
  z-index: 2;
  width: 40vw;
  height: 40vw;
  border-radius: 100%;
`;

const StyledImageBackground = styled(Image)`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  filter: brightness(20%)
`;

export { ContainerHome, StyledImage, BoxTitle, TitleApp, BoxButton, StyledImageBackground };
