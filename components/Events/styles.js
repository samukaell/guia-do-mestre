import styled from "styled-components";
import Image from "next/image";

const StylesMain = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
  background-color: #0d1114;
  border-radius: 10px;
`;

const TitleEvent = styled.h1`
  font-family: "Lato", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: white;
`;

const TextEvent = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 16px;
  color: white;
`;

const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 2vw;
  margin-right: 2vw;
`;

const Data = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 14px;
  color: white;
`;

const Time = styled.p`
  font-family: "Lato", sans-serif;
  font-size: 14px;
  color: #e4341c;
`;

const Datatime = styled.div`
  display: flex;
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
  StylesMain,
  TitleEvent,
  TextEvent,
  TitleText,
  Data,
  Time,
  Datatime,
  StyledImage,
};
