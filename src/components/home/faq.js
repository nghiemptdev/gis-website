import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  return(
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>Geographic information system</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="How to see the map?" key="1">
            <p>You have to login and payment for some package to see the map with map'price.</p>
          </Panel>
          <Panel header="Can I change access the map at any time?" key="2">
            <p>You have to login and payment for some package to see the map with map'price.</p>
          </Panel>
          <Panel header="How to access through cloud?" key="3">
            <p>You have to login and payment for some package to see the map with map'price.</p>
          </Panel>
          <Panel header="Can I manage multiple task?" key="4">
            <p>You have to login and payment for some package to see the map with map'price.</p>
          </Panel>
          <Panel header="How can I change my password?" key="5">
            <p>You have to login and payment for some package to see the map with map'price.</p>
          </Panel>
          <Panel header="How to manage my account?" key="6">
            <p>You have to login and payment for some package to see the map with map'price.</p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Would you like to ask question ?</h3>
          <p>description</p>
          <Button type="primary" size="large"><i className="fas fa-envelope"></i> Email your question</Button>
        </div>
      </div>
    </div>  
  );
}

export default AppFaq;