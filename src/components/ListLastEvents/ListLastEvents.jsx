import React from "react";
import "./ListLastEvents.scss";
import { Card, Header } from "semantic-ui-react";
import Container from "../Container/Container";
import useFetch from "../../hooks/useFetch";

const ListLastEvents = () => {
  //const lastEventsFetch = useFetch(`${process.env.REACT_APP_URL_BASE}`);
  console.log(process.env.REACT_APP_URL_BASE);
  return (
    <div className="container-list-last-events">
      <Header size="large">Ultimos eventos</Header>
      <Container bg="light">
        <Card.Group itemsPerRow={5}>
          <p>Ultimos eventos</p>
          <p>Ultimos eventos</p>
          <p>Ultimos eventos</p>
          <p>Ultimos eventos</p>
          <p>Ultimos eventos</p>
          <p>Ultimos eventos</p>
          <p>Ultimos eventos</p>
          <p>Ultimos eventos</p>
        </Card.Group>
      </Container>
    </div>
  );
};

export default ListLastEvents;
