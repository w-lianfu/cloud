import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './header.scss'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className='header'>
        <nav>
          <Link to='/activity'>最新活动</Link>
          <Link to='/product'>产品</Link>
          <Link to='/solution'>解决方案</Link>
          <Link to='/market'>云市场</Link>
          <Link to='/portal'>云社区</Link>
          <Link to='/partner'>合作与生态</Link>
          <Link to='/support'>支持与服务</Link>
        </nav>
      </header>
    )
  }
}

export default Header
