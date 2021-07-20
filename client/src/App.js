import React from 'react';
import {
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { Layout, Menu, Card } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import UploadExcel from './page/UploadExcel';
import Result from './page/ResultPrint';
import _ from 'lodash';
const { Header, Content, Footer } = Layout;

function App() {
  
  const location = useLocation();
  let menus = [
    {title: 'Import', path: '/', component: <UploadExcel />},
    {title: 'Result', path: '/result', component: <Result />}
  ];

  return (
    <div className="App">
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[_.findIndex(menus, f => f.path === location.pathname).toString()]}>
              {menus && menus.map((v,i) => (
                <Menu.Item key={i}><Link to={v.path}>{v.title}</Link></Menu.Item>
              ))}
            </Menu>
          </Header>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
              
                <Switch>
                  {menus && menus.map((v,i) => (<Route path={v.path}>{v.component}</Route>))}
                </Switch>
                
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>&copy;2021 Created by mg</Footer>
        </Layout>
    </div>
  );
}

export default App;
