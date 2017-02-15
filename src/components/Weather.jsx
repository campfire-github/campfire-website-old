import React from 'react';
import WeatherGrid from './WeatherGrid.jsx'
import jQuery from '../../dist/js/jquery-3.1.1.js'


class Weather extends React.Component{
  constructor() {
    super() ;
    this.state = {
      all : []
    };
  }

  componentWillMount() {
    console.log ( "mounting")
    this._fetch5dayforcast() ;
  }

  componentDidMount(){
    console.log("refreshing news");
    this._timer = setInterval(
                  ()=>this._fetch5dayforcast(),
                  30000);
    }

    componentWillUnmount(){ // memory leak solving
      clearInterval(this._timer);
    }
  _fetch5dayforcast() {
    var array = [] ;
    var urllink = "http://www.campfire.news/api/v1/weather";
    jQuery.ajax({
      method:'GET',
      url: urllink,
      beforeSend: function (xhrObj) {
         xhrObj.setRequestHeader("Content-Type", "application/json");
      },
      data:"{body}",
      success :(result)=>{
        var json = JSON.parse(result);
        for(var i =0 ; i<6 ;i++ ){
            array.push(json[i]);
        }
        this.setState({all:array});
      }
    })
  }

  _getWeather() {
    var a = this.state.all ;
    console.log( "a---" + a  );
    console.log("a" + a );
    return a.map((each)=>{
      return (
        <WeatherGrid icon={each.icon} temp={each.temp} description={each.description} wind={each.wind}></WeatherGrid>
      )
    });


  }

  render() {

    var allweather = this._getWeather() ;
    return (
      <div>
        {allweather}
      </div>

    )



  }


}

export default Weather ;
