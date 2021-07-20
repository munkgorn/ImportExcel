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
    {seq: '1', title: 'Result', path: '/result', component: <Result />},
    {seq: '0', title: 'Import', path: '/', component: <UploadExcel />}
  ];
  React.useEffect(()=>{
    console.log(menus.find(f => f.path === location.pathname).seq.toString())
    console.log(_.orderBy(menus, ['seq'], ['asc']));
  },[location,menus]);

  return (
    <div className="App">
        <Layout>
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${menus.find(f => f.path === location.pathname).seq.toString()}`]}>
              {menus && _.orderBy(menus, ['seq'], ['asc']).map((v,i) => (
                <Menu.Item key={i}><Link to={v.path}>{v.title}</Link></Menu.Item>
              ))}
            </Menu>
          </Header>
          <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
              
                <Switch>
                  {menus && _.orderBy(menus, ['seq'], ['desc']).map((v,i) => (<Route path={v.path}>{v.component}</Route>))}
                </Switch>
                
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>&copy;2021 Created by mg</Footer>
        </Layout>
    </div>
  );
}

export default App;
