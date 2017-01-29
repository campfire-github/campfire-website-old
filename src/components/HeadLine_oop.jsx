import React from 'react'

class HeadLine extends React.Component{
  render() {
    return (
      <div>
        <h1 className="HeadLine">
          <a href="#" target="_blank">{this.props.headline}</a>
        </h1>
      </div>
    )
  }
}

export default HeadLine;
