import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import App from './App'
import Product from './product'
import Solution from './solution'
import Market from './market'

import './scss/common.scss'

render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/product' component={Product} />
      <Route path='/solution' component={Solution} />
      <Route path='/market' component={Market} />
    </div>
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()
