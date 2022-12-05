import React from 'react';

import image1 from '../../assets/images/layer.png';
import image2 from '../../assets/images/layer.png';
import image3 from '../../assets/images/layer.png';
import image4 from '../../assets/images/layer.png';
import image5 from '../../assets/images/layer.png';
import image6 from '../../assets/images/layer.png';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Key Features and Benefits</h2>
          <p>description</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Title" src={image1} />}
            >
              <Meta title="Title" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Title" src={image2} />}
            >
              <Meta title="Title" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Title" src={image3} />}
            >
              <Meta title="Title" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Title" src={image4} />}
            >
              <Meta title="Title" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Title" src={image5} />}
            >
              <Meta title="Title" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Title" src={image6} />}
            >
              <Meta title="Title" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;