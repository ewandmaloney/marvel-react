import React from "react";
import { Dimmer, Loader, Card, Image, Icon, Button } from "semantic-ui-react";
import "./Characters.scss";
import { useNavigate } from "react-router-dom";

const Characters = ({
  setUrl,
  character,
  listCharacters,
  limit,
  setLimit,
  name,
}) => {
  const { loading, result } = listCharacters;
  const navigate = useNavigate();

  //id Character
  //https://gateway.marvel.com:443/v1/public/characters/5?apikey=

  if (loading || !result || !character)
    return (
      <Dimmer active inverted>
        <Loader inverted>Loading...</Loader>
      </Dimmer>
    );

  const loadMoreCharacters = () => {
    const newLimit = limit;
    if (!name) {
      setUrl(
        `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=838dd71c46e8209232ac75a7fae17f0a&hash=86347a5a0933c7668958401d1ad9d3ec&orderBy=name&limit=${
          newLimit + 5
        }}`
      );
    } else {
      setUrl(
        `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=838dd71c46e8209232ac75a7fae17f0a&hash=86347a5a0933c7668958401d1ad9d3ec&nameStartsWith=${name}&orderBy=name&limit=${
          newLimit + 5
        }`
      );
    }
    setLimit(newLimit + 5);
  };

  console.log(character);

  return (
    <Card.Group itemsPerRow={5}>
      {character.map((res, index) => (
        <Card
          key={index}
          className="list-characters"
          onClick={() => navigate(`/character/${res.id}`)}
        >
          <Image
            src={`${res.thumbnail.path}.${res.thumbnail.extension}`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{res.name}</Card.Header>
            <Card.Meta>
              <span>Digital ID: {res.id}</span>
            </Card.Meta>
          </Card.Content>
        </Card>
      ))}
      {character.length < limit ? null : (
        <div className="container-button">
          <Button color="red" onClick={() => loadMoreCharacters()}>
            <Icon name="plus" />
            Cargar más personajes,
          </Button>
        </div>
      )}
    </Card.Group>
  );
};

export default Characters;
