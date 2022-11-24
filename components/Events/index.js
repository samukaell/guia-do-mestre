import {
  StylesMain,
  TitleEvent,
  TextEvent,
  TitleText,
  Time,
  Data,
  Datatime,
  StyledImage
} from "./styles";

export default function Events(props) {
  const { title, text, data, time, image } = props;
  return (
    <StylesMain>
      <TitleText>
        <StyledImage>
            <img src={image} alt='imagem capa da sessao'/>
        </StyledImage>
        <TitleEvent>{title}</TitleEvent>
        <TextEvent>{text}</TextEvent>
      </TitleText>
      <Datatime>
        <Time>{time}</Time>
        <Data> - {data}</Data>
      </Datatime>
    </StylesMain>
  );
}
