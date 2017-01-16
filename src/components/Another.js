var React = require('react')
var Link = require('react-router').Link
var jQuery = require('jquery')
function Another() {

  constructor(){
    super() ;
    this.state = {
      visits : 0
    }
  }

  componentWillMount(){
    this.getVisits() ;
  }

  getVisits(){
    jQuery.ajax({
      method: 'GET'
      url: 'http://www.campfire.news/1'
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Content-Type", "application/json");
      },
      data: "{body}",
      success: (result)=>{
        console.log(result);
        this.setState(visits: result);
      }

    })
  }

  return (
    React.createElement('div', { className: 'col-md-4' },
      React.createElement('article', {},
        React.createElement('p',{className: 'visitor'}, {this.state.visits})
      )
    )
  )
}

module.exports = Another
