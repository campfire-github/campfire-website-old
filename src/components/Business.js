var React = require('react')
var Link = require('react-router')
var Header = require('./Header.js')
var Footer = require('./Footer.js')

function Business() {
  return (
    
  )
}

export default class Business extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        <h2 className="bg-info">Business</h2>
        <div className="row">
          <div className="col-md-6">
            <a href="http://www.stuff.co.nz/business/money/87691355/budget-buster-how-you-can-get-out-of-that-parking-ticket"><h3>How to get out of a parking ticket</h3></a>
            <a href="https://www.theguardian.com/us-news/2016/dec/18/donald-trump-senate-backlash-cabinet-of-billionaires"><h3>Donald Trump faces Senate backlash over ‘cabinet of billionaires’</h3></a>
            <a href="http://www.stuff.co.nz/business/87597385/loyalty-nz-boss-wants-more-after-extraordinary-year"><h3>How to beat Fly Buys</h3></a>
            <a href="http://www.stuff.co.nz/business/industries/87673942/sorry-uber-your-new-app-may-drive-me-back-to-taxis"><h3>Sorry, Uber, your new app may drive me back to taxis</h3></a>
          </div>
          <div className="col-md-6">
            <a href="http://www.stuff.co.nz/business/money/87691355/budget-buster-how-you-can-get-out-of-that-parking-ticket"><h3>How to get out of a parking ticket</h3></a>
            <a href="https://www.theguardian.com/us-news/2016/dec/18/donald-trump-senate-backlash-cabinet-of-billionaires"><h3>Donald Trump faces Senate backlash over ‘cabinet of billionaires’</h3></a>
            <a href="http://www.stuff.co.nz/business/87597385/loyalty-nz-boss-wants-more-after-extraordinary-year"><h3>How to beat Fly Buys</h3></a>
            <a href="http://www.stuff.co.nz/business/industries/87673942/sorry-uber-your-new-app-may-drive-me-back-to-taxis"><h3>Sorry, Uber, your new app may drive me back to taxis</h3></a>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
