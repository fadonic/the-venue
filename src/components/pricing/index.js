import React, { Component } from 'react'
import MyButton from '../utils/MyButton'
import Zoom from 'react-reveal/Zoom'

class Pricing extends Component {
  state = {
    pricing: [100, 200, 300],
    positions: ['Balcony', 'Medium', 'Start'],
    desc: [
      'Lorem ipsum dolor sit, amet',
      'Lorem ipsum dolor sit, amet',
      'Lorem ipsum dolor sit, amet'
    ],
    linkTo: ['', '', ''],
    delay: [500, 0, 500]
  }

  showBoxes = () =>
    this.state.pricing.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className='pricing_item'>
          <div className='pricing_inner_wrapper'>
            <div className='pricing_title'>
              <span>$ {this.state.pricing[i]}</span>
              <span>{this.state.positions[i]}</span>
            </div>
            <div className='pricing_description'>{this.state.desc[i]}</div>
            <div className='pricing_buttons'>
              <MyButton
                text='purchase'
                bck='#564356'
                color='#ffffff'
                link={this.state.linkTo[i]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
  render () {
    return (
      <div className='bck_black'>
        <div className='center_wrapper pricing_section'>
          <h2>Pricing</h2>
          <div className='pricing_wrapper'>{this.showBoxes()}</div>
        </div>
      </div>
    )
  }
}

export default Pricing
