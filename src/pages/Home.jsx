import React from "react";
import BestCharacters from "../components/BestCharacters";
import ListLastEvents from "../components/ListLastEvents/ListLastEvents";
import Insider from "../components/Insider/Insider";

const Home = () => {
  return (
    <>
      <BestCharacters></BestCharacters>
      <ListLastEvents></ListLastEvents>
      <Insider></Insider>
    </>
  );
};

export default Home;
