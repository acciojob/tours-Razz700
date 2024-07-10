import React from 'react'

const Loading = (props) => {
  return (
    <div>
        {props.check && <p className="loading">Loading....</p>}
    </div>
  )
}

export default Loading