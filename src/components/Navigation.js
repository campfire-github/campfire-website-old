import React from 'react'
import { Link } from 'react-router'

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 bg-info">
            <h2><Link to="/business">Business</Link></h2>
            <a href="http://www.stuff.co.nz/business/money/87691355/budget-buster-how-you-can-get-out-of-that-parking-ticket"><h3>How to get out of a parking ticket</h3></a>
            <a href="https://www.theguardian.com/us-news/2016/dec/18/donald-trump-senate-backlash-cabinet-of-billionaires"><h3>Donald Trump faces Senate backlash over ‘cabinet of billionaires’</h3></a>
          </div>
          <div className="col-md-6 bg-danger">
            <h2>Entertainment</h2>
            <a href="http://www.stuff.co.nz/entertainment/film/87688745/rogue-one-a-big-hit-at-us-box-office"><h3>Rogue One a big hit at US box office</h3></a>
            <a href="http://www.stuff.co.nz/entertainment/celebrities/87681134/watch-james-cordens-carpool-karaokes-starstudded-christmas-special"><h3>Watch James Corden's Carpool Karaoke's star-studded Christmas special</h3></a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 bg-warning">
            <h2>Sport</h2>
            <a href="http://www.stuff.co.nz/sport/golf/87631984/tiger-woods-changes-golf-balls-to-bridgestone"><h3>Tiger Woods changes golf balls to Bridgestone</h3></a>
            <a href="http://www.stuff.co.nz/sport/other-sports/87631659/floyd-mayweather-takes-aim-at-notorious-quitter-conor-mcgregor"><h3>Ronda Rousey blasts Conor McGregor and Floyd Mayweather over obsession with money</h3></a>
          </div>
          <div className="col-md-6 bg-success">
            <h2>Technology</h2>
            <a href="http://www.stuff.co.nz/business/industries/87597170/hackers-stole-data-from-more-than-one-billion-user-accounts-yahoo"><h3>Hackers stole data from more than one billion user accounts: Yahoo</h3></a>
            <a href="https://www.theguardian.com/technology/2016/dec/16/facebook-fake-news-system-problems-fact-checking"><h3>Facebook's plan to tackle fake news raises questions over limitations</h3></a>
          </div>
        </div>
      </div>
    )
  }
}
