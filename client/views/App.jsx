import React from 'react'
import {
  Link,
} from 'react-router-dom'
import Routes from '../config/rooter'

export default class App extends React.Component {
  componentDidMount() {
    // do
  }
  render() {
    return [
      <div>
        <Link to="/">首页</Link>
        <br />
        <Link to="/detail">详情页</Link>
      </div>,
      <Routes />,
    ]
  }
}
