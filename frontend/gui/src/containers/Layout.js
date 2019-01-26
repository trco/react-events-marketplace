import React from 'react';
import { Container, Row } from 'reactstrap';

const CustomLayout = ({ children }) => {
    return (
      <Container fluid={false}>
        <Row>
          {children}
        </Row>
      </Container>
    );
}

export default CustomLayout;
