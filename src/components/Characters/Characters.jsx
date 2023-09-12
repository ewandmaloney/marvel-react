import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Dimmer,
  Loader,
  Card,
  Image,
  Icon,
  Button,
  Modal,
} from "semantic-ui-react";
import "./Characters.scss";
import { useNavigate } from "react-router-dom";
import Insider from "../../img/insider.jpeg";

const Characters = ({
  setUrl,
  character,
  listCharacters,
  limit,
  setLimit,
  name,
}) => {
  const { loading, result } = listCharacters;
  const [item, setItem] = useState();
  const [itemUrl, setItemUrl] = useState();
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);

  const checkCharacterInfo = (id) => {
    setItemUrl(
      `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=838dd71c46e8209232ac75a7fae17f0a&hash=86347a5a0933c7668958401d1ad9d3ec`
    );
    setOpen(true);
  };

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(itemUrl);
      setItem(res.data.data.results);
    };
    fetch();
  }, [itemUrl]);
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
  console.log(item);

  return (
    <Card.Group itemsPerRow={5}>
      {character.map((res, index) => (
        <Card
          key={index}
          className="list-characters"
          onClick={() => checkCharacterInfo(res.id)}
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
            Cargar más personajes
          </Button>
        </div>
      )}
      {!item ? null : (
        <>
          {item.map((character, index) => (
            <Modal open={open} key={index} onClose={() => setOpen(false)}>
              <Modal.Header>Heroe: {character.name}</Modal.Header>
              <Modal.Content image scrolling>
                <Image
                  size="medium"
                  src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                  width="250px"
                  wrapped
                  ui={false}
                />

                <Modal.Description>
                  <h5>Description:</h5>
                  {character.description != "" ? (
                    <p>{character.description}</p>
                  ) : (
                    <p>This character has no description available</p>
                  )}
                  <h5>Comics appearances: {character.comics.available}</h5>
                  <h5>Series appearances: {character.series.available}</h5>
                  <h5>Stories appearances: {character.stories.available}</h5>
                  <h5>
                    <a
                      href={character.urls[character.urls.length - 1].url}
                      rel="external"
                      target="_blank"
                    >
                      Watch character's appearances
                    </a>
                  </h5>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button onClick={() => setOpen(false)} color="red">
                  Salir <Icon name="close" />
                </Button>
              </Modal.Actions>
            </Modal>
          ))}
        </>
      )}
    </Card.Group>
  );
};

export default Characters;
