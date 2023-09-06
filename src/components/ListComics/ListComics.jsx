import React from "react";
import { Dimmer, Loader, Card, Image, Icon, Button } from "semantic-ui-react";
import "./ListComics.scss";

const ListComics = ({
  listComics,
  renderComics,
  setRenderComics,
  comic,
  setUrl,
}) => {
  const { loading, result } = listComics;

  if (loading || !result || !comic)
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading...</Loader>
      </Dimmer>
    );

  const loadMoreComics = () => {
    const numberComics = renderComics;
    setUrl(
      `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=838dd71c46e8209232ac75a7fae17f0a&hash=86347a5a0933c7668958401d1ad9d3ec&orderBy=focDate&limit=${
        numberComics + 5
      }`
    );
    setRenderComics(numberComics + 5);
  };

  return (
    <Card.Group itemsPerRow={5}>
      {comic.map((res, index) => (
        <Card key={index} className="list-comics fadeIn">
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
