import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Button from 'material-ui/Button'

import Home from './home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <p>hello react !!</p>
        <Link to='/product'>Product</Link>
        <img src='/img/favicon.ico' />
        <Button>Hello, Redux</Button>
      </div>
    );
  }
}

export default App;
