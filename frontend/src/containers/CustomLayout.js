import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import CustomNavbar from '../components/CustomNavbar'

const padding0 = {
  padding: '0'
};

const margin2em = {
  'marginBottom': '2em'
};

const CustomLayout = ({ children }) => {
    return (
      <>
        <Container fluid={true} style={margin2em}>
          <Row>
            <Col style={padding0}>
              <CustomNavbar />
            </Col>
          </Row>
        </Container>
        <Container fluid={false}>
          {children}
        </Container>
      </>
    );
}

export default CustomLayout;
