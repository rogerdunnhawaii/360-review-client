import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

import Lawn from '../css/lawn.jpg'
import Snow from '../css/snow.jpg'

class Slider extends Component {
  render () {
    return (
      <Carousel className="slider container-fluid" controls={false} interval={4000}>
        <Carousel.Item>
          <img
            className="d-block"
            src={Lawn}
            alt="Lawn"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block"
            src={Snow}
            alt="Snow"
          />
        </Carousel.Item>
      </Carousel>
    )
  }
}

export default Slider
