import React from "react";
import "./ListLastEvents.scss";
import { Card, Header } from "semantic-ui-react";
import Container from "../Container/Container";
import useFetch from "../../hooks/useFetch";
import LastEvent from "../LastEvent/LastEvent";

const ListLastEvents = () => {
  const lastEventsFetch = useFetch(
    `https://gateway.marvel.com:443/v1/public/events?ts=1&apikey=838dd71c46e8209232ac75a7fae17f0a&hash=86347a5a0933c7668958401d1ad9d3ec&orderBy=startDate&limit=4`
  );

  console.log(lastEventsFetch);

  return (
    <div className="container-list-last-events">
      <Header size="large">Ultimos eventos</Header>
      <Container bg="light">
        <Card.Group className="list-last-responsive" itemsPerRow={4} stackable={true}>
          <LastEvent lastEventsFetch={lastEventsFetch} />
        </Card.Group>
      </Container>
    </div>
  );
};

export default ListLastEvents;
