import React from 'react';


class WeatherGrid extends React.Component{
  constructor() {
    super()  ;
    this.state = {
      all : []
    };
  }

  render() {
    var icon = "http://openweathermap.org/img/w/"+this.props.icon +".png";
    return (
      <div className = "weather_grid col-md-2 col-xs-2">
        <img className = "temp-p col-md-10 col-xs-10" src ={icon} ></img>
        <h2 className = "temp-p">{this.props.temp}</h2>
        <p className = "temp-p">{this.props.description}</p>
        <p className = "tempdescription-p">{this.props.wind}</p>
      </div>
    )
  }


}

export default WeatherGrid ;
