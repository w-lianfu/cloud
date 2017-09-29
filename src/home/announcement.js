import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './announcement.scss'

class Announcement extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className='announcement'>
        <dl>
          <dd>
            <Link to='/product'>
              [2017-09-29] 中国电信IDC机房网络安全加固通知网络安全加固通知网络安全加固通知
            </Link>
          </dd>
          <dd>
            <Link to='/product'>
              [2017-09-29] 中国电信IDC机房网络安全加固通知网络安全加固通知网络安全加固通知
            </Link>
          </dd>
          <dd>
            <Link to='/product'>
              [2017-09-29] 中国电信IDC机房网络安全加固通知网络安全加固通知网络安全加固通知
            </Link>
          </dd>
          <Link to='/product'>更多</Link>
        </dl>
      </section>
    )
  }
}

export default Announcement
