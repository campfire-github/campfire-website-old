import React from 'react'
import { Link } from 'react-router'
import Header from './Header.jsx'

let w = window.innerWidth
let h = window.innerHeight

export default function SecretLink(props) {
  return (
    <div>
      <Header />
      <iframe src={props.url}, width={w}, height={h} />
    </div>
  )
}
