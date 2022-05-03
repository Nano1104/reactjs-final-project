import React from 'react'

const Loading = ({text}) => {
  return (
    <div className="center">
        <div className="circle"></div>
        <span className="loadText">{text}</span>
    </div>
  )
}

export default Loading