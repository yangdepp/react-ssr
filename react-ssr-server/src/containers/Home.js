import React, { Component } from 'react';

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
