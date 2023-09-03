import React from "react";
import "./Container.scss";
import { Container as Content } from "semantic-ui-react";

const Container = ({ children }) => {
  return (
    <div className="container-bg">
      <Content>{children}</Content>
    </div>
  );
};

export default Container;
