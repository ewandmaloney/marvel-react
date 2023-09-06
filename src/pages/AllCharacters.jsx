import { useState, useEffect } from "react";
import axios from "axios";
import useFetch from "../hooks/useFetch";
import { Grid, Header, Input } from "semantic-ui-react";
import Container from "../components/Container/Container";
import Characters from "../components/Characters/Characters";

const AllCharacters = () => {
  const [limit, setLimit] = useState(15);
  const [name, setName] = useState();
  const listCharacters = useFetch(
    `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=838dd71c46e8209232ac75a7fae17f0a&hash=86347a5a0933c7668958401d1ad9d3ec&orderBy=name&limit=${limit}}`
  );
  const [character, setCharacter] = useState();
  const [url, setUrl] = useState(
    `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=838dd71c46e8209232ac75a7fae17f0a&hash=86347a5a0933c7668958401d1ad9d3ec&orderBy=name&limit=${limit}}`
  );

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      setCharacter(res.data.data.results);
    };
    fetch();
  }, [url]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const nombre = event.target.value;
      setUrl(
        `https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=838dd71c46e8209232ac75a7fae17f0a&hash=86347a5a0933c7668958401d1ad9d3ec&nameStartsWith=${nombre}&orderBy=name&limit=${limit}`
      );
      setName(nombre);
    }
  };

  return (
    <div className="characters-page">
      <div id="slide-characters-image" />
      <Grid>
        <Grid.Column>
          <Container bg="light">
            <Header as="h2">Personajes de Marvel</Header>
            <Input
              icon="search"
              className="search-character"
              onKeyDown={handleKeyDown}
              placeholder="Busca tu heroe..."
            />
            <Characters
              name={name}
              setUrl={setUrl}
              character={character}
              listCharacters={listCharacters}
              limit={limit}
              setLimit={setLimit}
            />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default AllCharacters;
