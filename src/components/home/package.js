import React from 'react';

import { List, Card, Button } from 'antd';

const data = [
  {
    title: 'Basic',
    content: [
      {
        price: '$29.99',
        space: '1000 giscoins',
        user: '1 user',
        support: '24/7 support',
        backup: 'Safe',
        access: 'Access from device'
      }
    ]
  },
  {
    title: 'Premium',
    content: [
      {
        price: '$59.99',
        space: '5000 giscoins',
        user: '5 users',
        support: '24/7 support',
        backup: 'Safe',
        access: 'Access from device'
      }
    ]
  },
  {
    title: 'Enterprise',
    content: [
      {
        price: '$99.99',
        space: 'Unlimited giscoins',
        user: '15 users',
        support: '24/7 support',
        backup: 'Safe',
        access: 'Access from device'
      }
    ]
  }
];

function AppPricing() {
  return (
    <div id="package" className="block packageBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Choose a package to fit your needs</h2>
          <p>package / month</p>
        </div>
        <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.title}>
                <p className="large">{item.content[0].price}</p>
                <p>{item.content[0].space}</p>
                <p>{item.content[0].user}</p>
                <p>{item.content[0].support}</p>
                <p>{item.content[0].backup}</p>
                <p>{item.content[0].access}</p>
                <Button type="primary" size="large"><i className="fab fa-telegram-plane"></i> Get Started</Button>
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>  
  );
}

export default AppPricing;