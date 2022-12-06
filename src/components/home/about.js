import React from 'react';

import { Row, Col } from 'antd';

const items = [
  {
    key: '1',
    icon: <i class="fa-solid fa-user"></i>,
    title: 'User management',
    content: 'Login - Profile',
  },
  {
    key: '2',
    icon: <i class="fa-solid fa-layer-group"></i>,
    title: 'Layer',
    content: 'Many layer in map',
  },
  {
    key: '3',
    icon: <i class="fa-solid fa-pen-fancy"></i>,
    title: 'Utilities',
    content: 'Interaction with map',
  },
]

function AppAbout() {
  return (
    <div id="about" className="block aboutBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>About Us</h2>
          <p>Geographic information system</p>
        </div>
        <div className="contentHolder">
          <p>There are different approaches to GIS definition. From a systems perspective, GIS can be understood as a system consisting of components: human , hardware , software , database and process-expert knowledge? [ citation needed ] , which gathers regulations, norms, standards, orientations, application guidelines of managers, specialized knowledge and information technology knowledge.</p>
        </div>
        <Row gutter={[16, 16]}>   
          {items.map(item => {
            return (
              <Col md={{ span: 8 }} key={item.key}>
                <div className="content">
                  <div className="icon">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}

export default AppAbout;