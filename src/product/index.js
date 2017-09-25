import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

import './index.scss'

class Product extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='product'>
        <p className='text'>product page</p>
        <Button inverted color='olive'>olive</Button>
      </div>
    )
  }
}

export default Product
