import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Layout, Menu, Card } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import UploadExcel from './page/UploadExcel';
import Result from './page/ResultPrint';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
              <Menu.Item key="1"><Link to="/">Import</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/result">Result</Link></Menu.Item>
            </Menu>
          </Header>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
              
                <Switch>
                  <Route path="/result">
                    <Result />
                  </Route>
                  <Route path="/">
                    <UploadExcel />
                  </Route>
                </Switch>
                
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
