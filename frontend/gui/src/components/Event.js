import React from 'react';
import { Col, Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';

const margin2em = {
  'margin-bottom': '2em'
};

const Event = ({ data }) => {
  return (
    <Col xs="12" md="6" lg="4" key={data.id} style={margin2em}>
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{data.title}</CardTitle>
          <CardText>{data.description}</CardText>
          <Button>More</Button>
        </CardBody>
      </Card>
    </Col>
  );
}

export default Event;
