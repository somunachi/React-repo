import React from 'react'

function Buttons({search, lucky}) {
  return (
        <div className="buttons">
            <button className="btn-1">{search}</button>
            <button>{lucky}</button>
        </div>
  )
}

export default Buttons