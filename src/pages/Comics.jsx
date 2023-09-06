import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Grid, Header } from "semantic-ui-react";
import axios from "axios";
import Container from "../components/Container/Container";
import ListComics from "../components/ListComics/ListComics";

const Comics = () => {
  const [renderComics, setRenderComics] = useState(10);

  const listComics = useFetch(
    `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=838dd71c46e8209232ac75a7fae17f0a&hash=86347a5a0933c7668958401d1ad9d3ec&orderBy=focDate&limit=${renderComics}`
  );

  const [url, setUrl] = useState(
    `https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=838dd71c46e8209232ac75a7fae17f0a&hash=86347a5a0933c7668958401d1ad9d3ec&orderBy=focDate&limit=${renderComics}`
  );

  const [comic, setComic] = useState();

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(url);
      setComic(res.data.data.results);
    };
    fetch();
  }, [url]);

  return (
    <div className="comics-page">
      <div id="slide-comics-image" />
      <Grid>
        <Grid.Column>
          <Container bg="light">
            <Header as="h2">Los mejores Comics</Header>
            <ListComics
              setUrl={setUrl}
              comic={comic}
              listComics={listComics}
              renderComics={renderComics}
              setRenderComics={setRenderComics}
            />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
};

export default Comics;
