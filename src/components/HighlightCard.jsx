import React from 'react';


class HighlightCard extends React.Component{



  render() {
    return (
      <div className = "col-md-12 highlightcard-div" >
        <div className = "col-md-8 highlightcard-imgdiv">

        </div>
        <div className = "col-md-4 highlightcard-titledescription-div">
          <a className="grid-a col-md-12 col-sm-12 col-xs-12" href={this.props.url} target="_blank">
            <h2 className = "col-md-12">{this.props.title}</h2>
          </a>
          <p>{this.props.description}</p>

        </div>

      </div>


    );


  }


}
export default HighlightCard ;
