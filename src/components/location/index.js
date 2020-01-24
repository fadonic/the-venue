import React from 'react'

const Location = () => {
  return (
    <div className='location_wrapper'>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.0572746893677!2d5.20176151403496!3d7.2343078947777055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047856037bbe7e1%3A0x6c22e1d1fc66ed84!2sSijuade%20St%2C%20Akure!5e0!3m2!1sen!2sng!4v1579844976362!5m2!1sen!2sng'
        width='100%'
        height='500px'
        frameBorder='0'
        allowFullScreen=''
      ></iframe>
      <div className='location_tag'>
        <div>Location</div>
      </div>
    </div>
  )
}

export default Location
