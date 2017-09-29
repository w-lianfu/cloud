import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Header from './header'
import Carousel from './carousel'
import Notice from './notice'
import Announcement from './announcement'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>
        <Header />
        <Carousel />
        <Notice />
        <Announcement />
      </section>
    )
  }
}

export default Home
