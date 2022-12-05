import React from 'react';

import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function AppFaq() {
  return(
    <div id="faq" className="block faqBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Frequently Asked Questions</h2>
          <p>description</p>
        </div>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="How to setup the theme?" key="1">
            <p>description</p>
          </Panel>
          <Panel header="Can I change plan or cancel at any time?" key="2">
            <p>description</p>
          </Panel>
          <Panel header="How to access through cloud?" key="3">
            <p>description</p>
          </Panel>
          <Panel header="Can I manage multiple task?" key="4">
            <p>description</p>
          </Panel>
          <Panel header="How can I change my password?" key="5">
            <p>description</p>
          </Panel>
          <Panel header="How to manage my account?" key="6">
            <p>description</p>
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