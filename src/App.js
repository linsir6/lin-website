import React from 'react';
import {Button} from 'antd';
import './App.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

const App = () => (
  <Layout theme="light">
    <Header style={{position: 'fixed', zIndex: 1, width: '100%', background: 'white'}} theme="light">
      <div className="logo"/>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1" style={{fontSize: '26px'}}>Home page</Menu.Item>
        <Menu.Item key="2" style={{fontSize: '26px'}}>About me</Menu.Item>
      </Menu>
    </Header>
    <Content style={{padding: '0 50px', marginTop: 64, marginBottom: 64}}>
      <Layout className="site-layout-background" style={{padding: '24px 0'}}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1', 'sub2', 'sub3']}
            style={{height: '100%'}}
          >
            <SubMenu key="sub1" icon={<UserOutlined/>} title="Android">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Web">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Algorithm">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{padding: '0 24px', minHeight: 280}}>Content</Content>
      </Layout>
    </Content>
    {/*style={{ position: 'fixed', zIndex: 1, width: '100%'*/}
    <Footer style={{textAlign: 'center', position: 'fixed', zIndex: 1, width: '100%', bottom: 0}}>Linsir Personal Page
      ©2021
      Created by linsir</Footer>
  </Layout>
);

export default App;