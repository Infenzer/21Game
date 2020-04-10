import React from 'react'

const Interface: React.FC = (props) => {
  return (
    <div id="interface" className = 'interface'>
      <div className="btn-wrapper">
        {props.children}
      </div>
    </div>
  )
}

export default Interface