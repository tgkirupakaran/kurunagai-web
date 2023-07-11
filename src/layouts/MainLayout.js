import {
  UploadOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Avatar, Button } from "antd";
import React from "react";
const { Header, Content, Footer, Sider } = Layout;
const MainLayout = (userDetails) => {
  const user = userDetails.user;
  console.log(JSON.stringify(user));
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const logout = () => {
		window.open(process.env.REACT_APP_API_URL+'/api/google/auth/logout', "_self");
	};
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <center>
          <div className="demo-logo-vertical">
            {user ? (
              <Avatar size={64} src={user.picture} />
            ) : (
              <Avatar size={64} icon={<UserOutlined />} />
            )}
          </div>
          
          <Button type="primary" onClick={logout}>Logout</Button>
        </center>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: 1,
              icon: React.createElement(UserOutlined),
              label: "Profile",
            },
            {
              key: 2,
              icon: React.createElement(UploadOutlined),
              label: "Upload",
            },
            { key: 3, icon: <SettingOutlined />, label: "Setttings" },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        ></Header>

        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            content
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Kurunagai ©2023 Created by Kurunagai Tech.
        </Footer>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
