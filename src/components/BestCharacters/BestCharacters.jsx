import React from "react";
import "./BestCharacters.scss";
import { Header, Button, Grid, Image } from "semantic-ui-react";
import Container from "../Container/Container";
import marvelImage from '../../img/marvel.png'

const BestCharacters = () => {
  return (
    <Container>
      <div className="best-characters">
        <Grid columns={2} divided={"vertically"}>
          <Grid.Column>
            <Header as="h1">Los mejores personajes de marvel</Header>
            <Header as="h3">Disfruta del mejor contenido</Header>
            <Button>Ver todos los personajes</Button>
          </Grid.Column>
          <Grid.Column className="image-container">
            <Image src={marvelImage} alt="Marvel APP" />
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
};

export default BestCharacters;
