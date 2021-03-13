import React from 'react';
import {Button} from 'antd';
import './App.css';
import {Layout, Menu, Breadcrumb} from 'antd';
import {UserOutlined, LaptopOutlined, NotificationOutlined} from '@ant-design/icons';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

const App = () => (
  <Layout>
    <Header style={{position: 'fixed', zIndex: 1, width: '100%'}}>
      <div className="logo"/>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{padding: '0 50px', marginTop: 64, marginBottom: 64}}>
      <Breadcrumb style={{margin: '16px 0'}}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Layout className="site-layout-background" style={{padding: '24px 0'}}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub3']}
            style={{height: '100%'}}
          >
            <SubMenu key="sub1" icon={<UserOutlined/>} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined/>} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined/>} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
              <Menu.Item key="13">option13</Menu.Item>
              <Menu.Item key="14">option14</Menu.Item>
              <Menu.Item key="15">option15</Menu.Item>
              <Menu.Item key="16">option16</Menu.Item>
              <Menu.Item key="17">option17</Menu.Item>
              <Menu.Item key="18">option18</Menu.Item>
              <Menu.Item key="19">option19</Menu.Item>
              <Menu.Item key="20">option20</Menu.Item>
              <Menu.Item key="21">option21</Menu.Item>
              <Menu.Item key="22">option22</Menu.Item>
              <Menu.Item key="23">option23</Menu.Item>
              <Menu.Item key="24">option24</Menu.Item>
              <Menu.Item key="25">option25</Menu.Item>
              <Menu.Item key="26">option26</Menu.Item>
              <Menu.Item key="27">option27</Menu.Item>
              <Menu.Item key="28">option28</Menu.Item>
              <Menu.Item key="29">option29</Menu.Item>
              <Menu.Item key="30">option30</Menu.Item>
              <Menu.Item key="31">option31</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{padding: '0 24px', minHeight: 280}}>Content</Content>
      </Layout>
    </Content>
    {/*style={{ position: 'fixed', zIndex: 1, width: '100%'*/}
    <Footer style={{textAlign: 'center', position: 'fixed', zIndex: 1, width: '100%', bottom: 0}}>Ant Design ©2018
      Created by Ant
      UED</Footer>
  </Layout>
);

export default App;