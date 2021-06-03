import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStateProvider from './store/globalStates/GlobalStateProvider'
import App from './App'
import './index.css'

ReactDOM.render(
  <GlobalStateProvider>
    <App />
  </GlobalStateProvider>,
  document.getElementById('root')
)
