import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';

//  同构： 一套react代码，在服务器端执行一次，在客户端再执行一次

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <div>This is {this.props.name}</div>
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
const mapStateToProps = (state) => ({
  name: state.name,
});
export default connect(
  mapStateToProps,
  null,
)(Home);
