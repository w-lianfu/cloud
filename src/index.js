import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import App from './App'
import Activity from './activity'
import Product from './product'
import Solution from './solution'
import Market from './market'
import Portal from './portal'
import Partner from './partner'
import Support from './support'

import 'semantic-ui-css/semantic.css'
import './scss/override.scss'
// import './scss/common.scss'

render(
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/activity' component={Activity} />
      <Route path='/product' component={Product} />
      <Route path='/solution' component={Solution} />
      <Route path='/market' component={Market} />
      <Route path='/portal' component={Portal} />
      <Route path='/partner' component={Partner} />
      <Route path='/support' component={Support} />
    </div>
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()
