import React from "react";
import { Dimmer, Loader, Card, Image, Icon, Button } from "semantic-ui-react";
import "./ListComics.scss";

const ListComics = ({ listComics, renderComics, setRenderComics }) => {
  const { loading, result } = listComics;

  if (loading || !result)
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading...</Loader>
      </Dimmer>
    );

  const { results } = result.data;

  const loadMoreComics = () => {
    const numberComics = renderComics;
    setRenderComics(numberComics + 5);
  };

  console.log(results);

  return (
    <Card.Group itemsPerRow={5}>
      {results.map((res, index) => (
        <Card key={index} className="list-comics">
          <Image
            src={`${res.images[0].path}.${res.images[0].extension}`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{res.title}</Card.Header>
            <Card.Meta>
              <span>Digital ID: {res.id}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content>
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
      <div className="container-button">
        <Button color="red" onClick={() => loadMoreComics()}>
          <Icon name="plus" />
          Cargar más cómics
        </Button>
      </div>
    </Card.Group>
  );
};

export default ListComics;
