import {
  ContainerHome,
  StyledImageBackground,
  BoxTitle,
  TitleApp,
  ContainerEvents,
  BoxScreen,
  TitleAlert
} from "../../styles/styled-home/index.js";
import capa from "../../public/assests/capa4.jpg";
import Header from "../../components/Header/index.js";
import Events from "../../components/Events/index.js";
import { events } from "../../DATA/index.js";
import { useEffect, useState } from "react";
export default function Home() {
  const [eventsList, setEvents] = useState([]);

  useEffect(() => {
    setEvents(events);
    console.log('Event list', eventsList);
  }, []);
  return (
    <ContainerHome>
      <StyledImageBackground src={capa} />
      <BoxScreen>
        <Header />
        <BoxTitle>
          <TitleApp></TitleApp>
        </BoxTitle>
        <ContainerEvents>
          {events.length === 0 ? (
            <TitleAlert>Sem eventos essa semana T-T</TitleAlert>
          ) : (
            eventsList.map((event) => {
              return (
                <Events
                  image = {event.image}
                  title={event.title}
                  text={event.text}
                  data={event.data}
                  time={event.time}
                  key={event.id}
                />
              );
            })
          )}
        </ContainerEvents>
      </BoxScreen>
    </ContainerHome>
  );
}
