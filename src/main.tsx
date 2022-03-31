import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { GlobalCtxProvider } from '~/context/global'

import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <GlobalCtxProvider>
      <App />
    </GlobalCtxProvider>
  </BrowserRouter>
, document.querySelector('#app'))
