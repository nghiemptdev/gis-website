import React from 'react';
import 'antd/dist/reset.css';
import { Layout } from 'antd';
import './App.css';

import AppHeader from './components/common/header';
import AppFooter from './components/common/footer';
import AppHome from './components/views/home';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="app">
      <Header>
        <AppHeader/>
      </Header>
      <Content>
        <AppHome/>
      </Content>
      <Footer>
        <AppFooter/>  
      </Footer>      
    </Layout>
  );
}

export default App;
