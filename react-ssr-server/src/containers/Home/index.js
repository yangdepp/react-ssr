import React, { Component } from 'react';
import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/actions';
//  同构： 一套react代码，在服务器端执行一次，在客户端再执行一次

class Home extends Component {
  constructor(props) {
    super(props);
  }

  //  componentDidMount在服务器端是不执行的
  componentDidMount() {
    if (!this.props.list.length) {
      this.props.getHomeList();
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div>This is Hello world</div>
        {this.props.list.map(item => {
          return <div key={item.id}>{item.shop}</div>;
        })}
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

//  给Home组件增加一个静态方法
//  这个函数负责在服务器渲染之前，把这个路由需要的异步数据提前加载好
Home.loadData = (store) => {
  return store.dispatch(getHomeList())
};

const mapStateToProps = state => ({
  list: state.home.newsList,
});

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
