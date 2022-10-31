import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { routeConfig } from './routes/routeConfig';
import {Routes, Route, Link} from 'react-router-dom';

const { Header, Content, Footer } = Layout;



function App() {
  return (<>
    <Layout>

      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
            >
                <Menu.Item key={1}><Link to='/admin/CustomerList'>Customer List</Link></Menu.Item>
                <Menu.Item key={2}><Link to='/admin/CustomerDetail'>Customer Detail</Link></Menu.Item>
                <Menu.Item key={3}><Link to='/admin/CustomerUpdate'>Customer Update</Link></Menu.Item>
                <Menu.Item key={4}><Link to='/admin/AddCustomer'>Add Customer</Link></Menu.Item>
            </Menu>
      </Header>

      <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>

        <Routes>
          {
            routeConfig && routeConfig.map((item, key) => {
              return <Route key={key} path={item.path} element={item.element} />
            })
          }
        </Routes>

        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 Created by Recep KURT</Footer>

    </Layout>
    </>
  )
}

export default App;
