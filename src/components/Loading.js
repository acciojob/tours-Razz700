import React from 'react'

const Loading = (props) => {
  return (
    <div>
        {props.check && <p>Loading....</p>}
    </div>
  )
}

export default Loading