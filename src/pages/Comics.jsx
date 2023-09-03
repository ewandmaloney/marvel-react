import React from "react";
import { Link } from "react-router-dom";

const Comics = () => {
  return (
    <>
      <div>
        <p>Estamos dentro de comics</p>
      </div>
      <Link to="/home">Ir a home</Link>
    </>
  );
};

export default Comics;
