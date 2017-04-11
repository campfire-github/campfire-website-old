import React from 'react';
import jQuery from '../../dist/js/jquery-3.1.1.js'
import Grid from './Grid.jsx';
import Masonry from 'react-masonry-component';
class Form extends React.Component{
    constructor() {
      super()  ;
      this.state= {
        all :[],
        inputValue :""
      }


    }

    _getAllResult() {
      console.log("get all ");
      if(this.state.all.length > 0){
        return this.state.all.map((each)=>{
          return(
            <Grid title={each.title} description={each.description} url={each.url} urlToImage={each.urltoimage} key={each.url}></Grid>
          );
        });
      }
    }

    updateInputValue(e) {
      console.log("in updateInputValue");
      console.log(e.target.value);
      this.setState({inputValue: e.target.value});
    }

    onSubmit(e){
      this.searching()  ;
      console.log("submit "+this.state.inputValue);
    }

    searching(){
      var urllink = "http://www.campfire.news/api/v1/search/"+this.state.inputValue;
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
          this.setState({all:array});
        }
      })
    }

    render() {
      var result = this._getAllResult()  ;
      return (

        <div className = "col-md-12 col-sm-12 col-xs-12">

          <form className="form-horizontal col-md-12 col-sm-12 col-xs-12">
            <input className = "col-md-9 col-sm-9 col-xs-12" type="text"  onChange={this.updateInputValue.bind(this)}/>
            <button type="button" onClick={this.onSubmit.bind(this)} className="search-button">Search</button>
          </form>

          <div className = "col-md-12 col-sm-12 col-xs-12">
            <section className="row">
              <Masonry className={'my-gallery-class'} >
                    {result}
              </Masonry>
            </section>
          </div>

        </div>

      );
  }

}

export default Form  ;
