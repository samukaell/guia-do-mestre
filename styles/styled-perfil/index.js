import styled from "styled-components";

const BoxPerfil = styled.main`
  width: 80%;
  background-color: #0d1114;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoxInfo = styled.div`
  width: 90%;
`;

const TitleNick = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

const TextDescription = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  color: white;
`;

const BoxProgress = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextProgreess = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 18px;
  color: #e4341c;
  margin-right: 5px;
`;

const StyledImage = styled.div`
  margin-top: 2vw;
  width: 90%;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export {
  BoxPerfil,
  BoxInfo,
  StyledImage,
  TitleNick,
  TextDescription,
  BoxProgress,
  TextProgreess
};
