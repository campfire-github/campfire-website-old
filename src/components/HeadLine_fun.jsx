import React from 'react'

const HeadLine = props => (
  <div>
    <h1 className="HeadLine">
      <a href={props.url} target="_blank">{props.title}</a>
    </h1>
  </div>
)

export default HeadLine
