import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Input, Button, Avatar, theme } from 'antd';
import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user/userSlice';
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const AuthLayout = () => {
  const dispatch = useDispatch()
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className='m-5'>
          <img className='rounded-xl ' src="https://www.adobe.com/content/dam/cc/us/en/creativecloud/design/discover/mascot-logo-design/mascot-logo-design_fb-img_1200x800.jpg"></img>
        </div>
        <Menu className="mt-10"theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Input placeholder="Search..." style={{ marginLeft: '20px'}}  />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px'}}>
            <Avatar style={{ marginRight: '10px' }} />
            <Button type="text" onClick={() =>{dispatch(logout( ))}}>Logout</Button>
          </div>
        </Header>
        <Outlet />
        <Footer style={{ textAlign: 'center' }}>
          hello
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AuthLayout;
