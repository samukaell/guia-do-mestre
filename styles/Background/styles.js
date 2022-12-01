import styled from "styled-components";
import Image from "next/image";

const StyladeMain = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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

const StyledImageBackground = styled(Image)`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  filter: brightness(20%);
`;

export { StyladeMain, BoxScreen,  StyledImageBackground };
