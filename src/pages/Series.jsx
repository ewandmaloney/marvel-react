import { Grid, Header } from "semantic-ui-react";
import Container from "../components/Container";
import useFetch from "../hooks/useFetch";
import ListSeries from "../components/ListSeries/ListSeries";

const Series = () => {
  const listSeries = useFetch(
    `https://gateway.marvel.com:443/v1/public/series?ts=1&apikey=838dd71c46e8209232ac75a7fae17f0a&hash=86347a5a0933c7668958401d1ad9d3ec&orderBy=startYear&limit=20`
  );

  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image" />
        <Grid>
          <Grid.Column>
            <Container bg="light">
              <Header as="h2">Las últimas series de Marvel</Header>
              <ListSeries listSeries={listSeries} />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Series;
