import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions'
//  同构： 一套react代码，在服务器端执行一次，在客户端再执行一次

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getHomeList()
  }


  render() {
    return (
      <div>
        <Header />
        <div>This is {this.props.name}</div>
        {
          this.props.list.map((item) => {
            return (
              <div key={item.id}>hello</div>
            )
          })
        }
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
  list: state.home.newsList,
  name: state.home.name,
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
