import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  HomeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Input, Button, Avatar, theme } from 'antd';
import { Outlet } from 'react-router';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import { FaSearch } from "react-icons/fa";
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

  getItem('User', 'sub1', <UserOutlined />),
  getItem('Room', 'sub2', <HomeOutlined />),
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
        <Menu className="mt-10" theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer, display: 'flex', alignItems: 'center', justifyContent: 'space-between',height:'130px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '30px', }}>
            <Input
              placeholder="Search..."
              prefix={<FaSearch />}
              style={{ paddingLeft: '20px' }}
            />

          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
            <Avatar style={{ marginRight: '10px' }} />
            <Button type="text" onClick={() => { dispatch(logout()) }}>Logout</Button>
          </div>
        </Header>
        <Outlet />
        <Footer style={{ textAlign: 'center' }}>

        </Footer>
      </Layout>
    </Layout>
  );
};

export default AuthLayout;
