import React, { Component } from 'react';
import { Form, Input, Card, Button } from 'antd';
import './style.less';
import { connect } from 'dva';
@Form.create()

@connect(state => ({
    isLoading: state.user,
    // currentUser: state.user.currentUser,
}))

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: Date.now()
    };
  }

  componentDidMount() {
    console.log('this props data is:', this.props);
  }

  onLoginClick = () => {
    const { form, dispatch } = this.props;

    form.validateFields((errors, values) => {
      if (errors) return;
      const { identity, password } = values;
      console.log('login data is:',values);
        dispatch({
            type: 'user/loginAct',
            payload: {
                identity,
                password
            }
        });
    });
  };
  render() {
    const { form, isLoading} = this.props;

    const { getFieldDecorator } = form;
    return (
      <div className="login-container">
        <div className="login-header">
          <div className="login-logo">
            <h1>个人助手系统</h1>
          </div>
        </div>
        <div className="login-content">
          <div className="login-content-wrapper">
            <div className="login-form-wrapper">
              <Card title="欢迎登录个人助手系统">
                <Form className="login-form">
                  <Form.Item className="login-form-item">
                    {getFieldDecorator('identity', {
                      rules: [{ required: true, message: '请输入账号' }]
                    })(
                      <Input
                        placeholder="账号"
                        onPressEnter={this.onLoginClick}
                        prefix={<img src={require('./assets/icon-user.svg')} />}
                      />
                    )}
                  </Form.Item>
                  <Form.Item className="login-form-item">
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: '请输入密码' }]
                    })(
                      <Input
                        type="password"
                        placeholder="密码"
                        onPressEnter={this.onLoginClick}
                        prefix={<img src={require('./assets/icon-pwd.svg')} />}
                      />
                    )}
                  </Form.Item>
                </Form>
                <div className="login-btn-wrapper">
                  <Button
                    onClick={this.onLoginClick}
                    size="large"
                    type="primary"
                  >
                    登录
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
