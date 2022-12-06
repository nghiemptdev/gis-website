import React from 'react';

import image1 from '../../assets/images/fea-01.jpg';
import image2 from '../../assets/images/fea-02.jpg';
import image3 from '../../assets/images/fea-03.jpg';
import image4 from '../../assets/images/fea-04.jpg';
import image5 from '../../assets/images/fea-05.jpg';
import image6 from '../../assets/images/fea-06.jpg';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Features and Benefits</h2>
          <p>Geographic information system</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Nested data class" src={image1} />}
            >
              <Meta title="Nested data class" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="World map" src={image2} />}
            >
              <Meta title="World map" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Measure data" src={image3} />}
            >
              <Meta title="Measure data" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="The river system" src={image4} />}
            >
              <Meta title="The river system" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Related news" src={image5} />}
            >
              <Meta title="Related news" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Area details" src={image6} />}
            >
              <Meta title="Area details" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;