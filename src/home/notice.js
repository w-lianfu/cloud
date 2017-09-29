import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './notice.scss'

class Notice extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='notice-box'>
        <nav>
          <Link to='/market'>
            <p className='icon'></p>
            <p><span>热销专区</span><u>超全配置&nbsp;&nbsp;一键上云</u></p>
          </Link>
          <Link to='/market'>
            <p className='icon'></p>
            <p><span>新用户专区</span><u>云服务器全场5折</u></p>
          </Link>
          <Link to='/market'>
            <p className='icon'></p>
            <p><span>对象存储服务</span><u>多配置资源包全新上线</u></p>
          </Link>
          <Link to='/market'>
            <p className='icon'></p>
            <p><span>CloudIDE限量公测</span><u>让软件开发更简单高效</u></p>
          </Link>
        </nav>
      </section>
    )
  }
}

export default Notice
