import React from 'react'
import Button from '@material-ui/core/Button'
import TicketIcon from '../../resources/images/icons/ticket.png'

const MyButton = props => {
  return (
    <Button
      href=''
      varient='contained'
      size='small'
      style={{ background: props.bck, color: props.color, padding: '10px' }}
    >
      <img src={TicketIcon} className='iconImage' alt='icon_button' />
      {props.text}
    </Button>
  )
}

export default MyButton
