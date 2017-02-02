import React from 'react'
import { Link } from 'react-router'

const HeadLine = props => (
  <div>
    <h1 className="HeadLine">
      <Link href={props.url} target="_blank">{props.title}</Link>
    </h1>
  </div>
)

export default HeadLine
