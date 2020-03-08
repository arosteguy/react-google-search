import React from "react";
import { Col, Row, Container } from "../components/Grid";

import BooksList from "../components/BooksList";

const Home = () => {
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
         
        </Col>
        <Col size="md-6 sm-12">
          <BooksList />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;