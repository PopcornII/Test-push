import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  PlayCircleOutlined,
  HomeOutlined,
  LogoutOutlined,
  
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import './home_screen.css';

const { Header, Sider, Content } = Layout;
const Homepage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: {colorBgContainerDisabled},
  } = theme.useToken();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="sidebar-dashboard" />
        <Menu
          theme="dark"
          mode="inline"         
          defaultSelectedKeys={['1']}
          items={[

            {
                key:'1',
                icon:<HomeOutlined />, 
                label: 'Home',
            },
            {
                key: '2',
                icon: <UserOutlined />,
                label: 'User Management',
            },
            {
                key: '3',
                icon: <UploadOutlined/>,
                label: 'Upload',
            },
            {
                key: '4',
                icon: <PlayCircleOutlined />,
                label: 'Music',
            },
            {
                key: '5',
                icon: <LogoutOutlined />,
                label: 'Logout',
               
           } 
          ]}
        />
      </Sider>
      <Layout style={{background: 'darkblue'}}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainerDisabled,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              color:'whitesmoke'
              
            }}
          />
        </Header>
        <Content style={{
            fontSize:'100px',
            textAlign: 'center',
            fontFamily: "Georgia",
            margin: 0,
            padding: 24,
            minHeight: 650,
            background: 'lightgrey',
          }}

        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};
export default Homepage;