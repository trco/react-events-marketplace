import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import CustomNavbar from '../components/CustomNavbar'

const padding0 = {
  padding: '0'
};

const margin2em = {
  'margin-bottom': '2em'
};

const CustomLayout = ({ children }) => {
    return (
      <div>
        <Container fluid={true} style={margin2em}>
          <Row>
            <Col style={padding0}>
              <CustomNavbar />
            </Col>
          </Row>
        </Container>
        <Container fluid={false}>
          <Row style={margin2em}>
            {children}
          </Row>
        </Container>
      </div>
    );
}

export default CustomLayout;
