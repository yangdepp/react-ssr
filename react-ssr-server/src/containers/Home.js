import React, { Component } from 'react';

//  同构： 一套react代码，在服务器端执行一次，在客户端再执行一次

class Home extends Component {
  render() {
    return (
      <div>
        <div>This is Home</div>
        <button
          onClick={() => {
            alert('hello world');
          }}
        >
          click
        </button>
      </div>
    );
  }
}

export default Home;
