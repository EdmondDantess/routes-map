import React from 'react';
import { Layout } from 'antd';
import './app.scss';
import { MainContent } from '../features/MainContent/MainContent';
import { SiderRoutes } from '../features/Sider/SiderRoutes';

function App() {
  return (
    <Layout className={'layout-app'}>
      <SiderRoutes />
      <MainContent />
    </Layout>
  );
}

export default App;
