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
    console.log ( "weather mounting");
    this._fetch5dayforcast() ;
  }

  componentDidMount(){
    console.log("refreshing weather");
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
      //  var json = JSON.parse(result);
        for(var i =0 ; i<6 ;i++ ){
            array.push(result[i]);
        }
        this.setState({all:array});
      }
    })
  }

  _getWeather() {
  //  var a = this.state.all ;
    //
    var a = this.state.all ;

    return a.map((each)=>{
      console.log("a" + each.temp +" "+ each.icon +" "+ each.description +" "+ each.wind );
      return (

        <WeatherGrid temp={each.temp} icon = {each.icon} description={each.description} wind={each.wind}></WeatherGrid>
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
