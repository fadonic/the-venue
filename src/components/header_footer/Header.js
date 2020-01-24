import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import SideDrawer from './SideDrawer'

class Header extends Component {
  state = {
    drawerOpen: false,
    headerShow: false
  }

  handleScroll = () => {
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      })
    } else {
      this.setState({
        headerShow: false
      })
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  toggleDrawer = value => {
    this.setState({ drawerOpen: value })
  }
  render () {
    return (
      <AppBar
        position='fixed'
        style={{
          backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
          boxShadow: 'none',
          padding: '5px 0px'
        }}
      >
        <Toolbar>
          <div className='header_logo'>
            <div className='font-righteous header_logo_venue'>the Venue</div>
            <div className='header_logo_title'>Musical Event</div>
          </div>

          <IconButton
            arial-label='Menu'
            color='inherit'
            onClick={() => {
              this.toggleDrawer(true)
            }}
          >
            <MenuIcon />
          </IconButton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={value => {
              this.toggleDrawer(value)
            }}
          />
        </Toolbar>
      </AppBar>
    )
  }
}

export default Header
