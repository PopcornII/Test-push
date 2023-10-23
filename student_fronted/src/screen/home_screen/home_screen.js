import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  PlayCircleOutlined,
  HomeOutlined,
  LogoutOutlined,
  TeamOutlined
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Breadcrumb } from 'antd';
import './home_screen.css';
import { Footer } from 'antd/es/layout/layout';
import { useNavigate } from 'react-router-dom';


const { Header, Sider, Content } = Layout;
const Homepage = () => {
  const navigate = useNavigate();
 
  const [collapsed, setCollapsed] = useState(false); 
  const {
    token: {colorBgContainerDisabled},
  } = theme.useToken();
  
  return ( 

  
    <Layout style={{
      display:'flex',
    }}>
      <Sider trigger={null} collapsible collapsed={collapsed}> 
        <div className="sidebar-dashboard">
          <Menu
            theme="dark"
            mode="inline"         
            defaultSelectedKeys={['1']}
            onClick={(items) => {
              // item.key
              navigate(items.key);
            }}
            items={[ 
              
              {
                  key:'/home',
                  icon:<HomeOutlined />, 
                  label: 'Home',
              },
              {
                  key: 'Tv',
                  icon: <TeamOutlined />,
                  label: 'User Mangement',
                  
                                
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
                  key: '/',
                  icon: <LogoutOutlined />,
                  label: 'Logout',
            } 
            ]}
          />
        </div>
      </Sider>
      <Layout style={{background: 'darkgrey'}}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainerDisabled,
          }}
        >
          
          <Button      /*Menu */
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              color:'white',
              width: 64,
              height: 64,
              
            }}
          />
          
          <UserOutlined style={{
            display:'inline-flex',
            paddingLeft: '32cm',
            color: 'whitesmoke',
      
          }}/>
          
        </Header>
        
        <Breadcrumb style={{ /* routing */
          margin: '16px 0',
          paddingLeft:'20px', 
          }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
        <Content style={{
            fontSize:'100px',
            textAlign: 'center',
            fontFamily: "Georgia",
            margin: '10px 16px 0',
            padding: 24,
            minHeight: 585,
            background: 'whitesmoke',
          }}

        >
        <br/>
        <br/>
          Welcome Onboard
        </Content>
        <Footer style={{
          textAlign: "center",
          paddingBottom:'10px',
  
        }}>
          CopyRight ©2023 Created by Popcorn
        </Footer>
      </Layout>
    </Layout>

  );
};
export default Homepage;