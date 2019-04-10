import React, { Component } from 'react';
import Header from '../../components/Header';
//  同构： 一套react代码，在服务器端执行一次，在客户端再执行一次

class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>This is Login</div>
        <button
          onClick={() => {
            alert('请登录');
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default Login;
