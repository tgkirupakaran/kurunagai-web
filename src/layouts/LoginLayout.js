import { LockOutlined, UserOutlined, GoogleOutlined } from '@ant-design/icons';
import { Layout, theme, Input, Button, Form, Typography, notification } from 'antd';
import React from 'react';

const { Title } = Typography;
const { Content, Footer } = Layout;
const LoginLayout = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const googleAuth = () => {
		window.open(
			process.env.REACT_APP_API_URL+'/api/google/auth/callback',
			"_self"
		);
	};
  const handleSubmit = (e) => {
    openNotification('Login Form','Direct login is suspended at this moment. Please use Google sign in. ')
  };
  const openNotification = (title, message) => {
    const key = `open${Date.now()}`;
    // const btn = (
    //   <Button type="primary" size="small" onClick={() => notification.close(key)}>
    //     Confirm
    //   </Button>
    // );
    notification.open({
      message: title,
      description: message,
      // btn,
      key,
      onClose: console.log('Notification Closed.'),
    });
  };
  return (
    <>
    <Layout>
      {/* <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      /> */}

      <Content
        style={{
          alignContent:'center',
        }}
      >
        <div
          style={{
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Title level={2}>Login</Title>
          <div style={{
            padding: 5,
            background: colorBgContainer,
              }}>
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
              </div>
              <div style={{
            padding: 5,
            background: colorBgContainer,
              }}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </div>
            <div style={{
            padding: 5,
            background: colorBgContainer,
              }}>
              <Button
                type="primary"
                onClick={handleSubmit}
              > 
                Log in 
              </Button>
            </div>
            
          <div style={{
            padding: 5,
            background: colorBgContainer,
          }}>
          <Button
            icon={<GoogleOutlined className="site-form-item-icon"/>}
            type="primary"
            onClick={googleAuth}
            
          > 
          
            Sign in with Google 
          </Button>
          </div>
          <div style={{
            padding: 5,
            background: colorBgContainer,
          }}/>
          <a href='#'> Forgot Password </a> or <a href='#'> Register</a>
          <div />
          

        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Kurunagai ©2023 Created by Kurunagai Tech.
      </Footer>
    </Layout>
  </>
  );
};
export default LoginLayout;