import React from 'react'

function Languages(props) {
  return (
    <div className='text'>
        <p>Google offered in:</p>
        <a href="#">{props.hausa}</a>
        <a href="#">{props.igbo}</a>
        <a href="#">{props.yoruba}</a>
        <a href="#">{props.pidgin}</a>
    </div>
  )
}

export default Languages