import React from 'react' ;
import jQuery from '../../dist/js/jquery-3.1.1.js';

class Todaynews extends React.Component(){




  constructor(){
      super() ;
      this.state ={
        todaynewsArray = [],
        data = []
      }

    }

    componentWillMount(){
      this._getTodaynews() ;
    }
    componentDidMount(){
      this._timer = setInterval(
                    ()=>this._getHighlightnews(),
                    1000000);
    }

    componentWillUnmount(){ // memory leak solving
      clearInterval(this._timer);
    }
/*
    _insertToData(id){
      var dataarray = this.state.data.slice();
      dataarray.push(id);
      this.setState({ data: dataarray });
    }

    _updateAll(){
      var data1 = this.state.data;
      var urllink = "http://www.campfire.news/api/headlineUpdateAll"
      jQuery.ajax({
        method:'POST',
        url: urllink,
        data : JSON.stringify({'dataArray' : data1}),
        beforeSend: function (xhrObj) {
           xhrObj.setRequestHeader("Content-Type", "application/json"); // this will accepte the reply from server in post request
        },
        success :(result)=>{
          console.log(result) ;
        }
      })

    }*/

    _headlineUpdate(id ){
      var urllink = "http://www.campfire.news/api/headlineUpdate"
      jQuery.ajax({
        method:'POST',
        url: urllink,

        data : JSON.stringify({ "id": id}),
        beforeSend: function (xhrObj) {
           xhrObj.setRequestHeader("Content-Type", "application/json"); // this will accepte the reply from server in post request
        },
        success :(result)=>{
          console.log(result) ;
        }
      })

    }

    _getAllNews() {
      console.log("get all ");
      return this.state.all.map((each)=>{

        return(
          <div className = "col-md-12">
              <div className = "col-md-10">
                <img className="col-md-3" src={each.props.urltoimage}></img>
                <div className="col-md-7">
                  <h3 className="col-md-12">{each.props.title}</h3>
                  <p className="col-md-12">{each.props.description}</p>
                </div>
                <div className = "col-md-2">
                  <p> {each.highlight}</p>
                </div>
              </div>
              <div className = "col-md-2">
                <button onClick={this._headlineUpdate.bind(this,id)}>Update</button>
              </div>
          </div>
        );
      });
    }



    _getTodaynews(){
      var urllink = "http://www.campfire.news/api/v1/search/todaynews";
      jQuery.ajax({
        method:'GET',
        url: urllink,
        beforeSend: function (xhrObj) {
           xhrObj.setRequestHeader("Content-Type", "application/json");
        },
        data:"{body}",
        success :(result)=>{
          console.log("result "+ result);
          var json = JSON.parse(result);
          var array = [] ;
          for (var i = 0; i<json.length; i++){
            array.push(json[i]);
          }
          this.setState({todaynewsArray:array});
        }
      })
    }

    render(){
      var news = this._getTodaynews() ;
      return(
          <div className = "col-md-12">
            {news}

          </div>

      );


    }


}

export default Todaynews ;
