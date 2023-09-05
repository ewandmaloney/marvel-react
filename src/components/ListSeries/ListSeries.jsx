import React from "react";
import "./ListSeries.scss";
import { Card, Dimmer, Image, Loader, Icon, Button } from "semantic-ui-react";

const ListSeries = ({ listSeries }) => {
  const { loading, result } = listSeries;

  if (loading || !result)
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading...</Loader>
      </Dimmer>
    );

  const { results } = result.data;

  return (
    <Card.Group itemsPerRow={5}>
      {results.map((res, index) => (
        <Card key={index} className="list-series">
          <Image
            src={`${res.thumbnail.path}.${res.thumbnail.extension}`}
            wrapped
            alt={res.title}
            ui={false}
          />
          <Card.Content>
            <Card.Header>{res.title}</Card.Header>
            <Card.Meta>
              <span>
                <Icon name="users" /> {res.creators.available}
              </span>
            </Card.Meta>
            <Card.Meta>
              <span>
                <Icon name="rebel" /> {res.id}
              </span>
            </Card.Meta>
            <Card.Description>{res.description}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button
              animated
              fluid
              as="a"
              href={res.urls[0].url}
              target="_blank"
              color="black"
            >
              <Button.Content visible>Más información</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default ListSeries;
