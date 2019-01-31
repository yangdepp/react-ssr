import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './App.jsx'
// ReactDOM.hydrate(<App />, document.getElementById('root'))

const root = document.getElementById('root')
const render = Component =>{
  ReactDOM.hydrate(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    // require方式，commonjs规范要加上default
    const NextApp = require('./App.jsx').default
    // ReactDOM.hydrate(<NextApp />, document.getElementById('root'))
    render(NextApp)
  })
}