import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

import './carousel.scss'

class Carousel extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let setting = {
      dots: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      slidersToShow: 1,
      slidersToScroll: 1
    }

    return (
      <Slider {...setting}>
        <Link to='/product' className='car-link'><img src='/img/c01.jpg' /></Link>
        <Link to='/product' className='car-link'><img src='/img/c02.jpg' /></Link>
        <Link to='/product' className='car-link'><img src='/img/c03.jpg' /></Link>
        <Link to='/product' className='car-link'><img src='/img/c04.png' /></Link>
      </Slider>
    )
  }
}

export default Carousel
