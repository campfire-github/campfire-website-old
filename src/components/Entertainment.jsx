import React from 'react' ;

class Entertainment extends React.Component{

  constructor() {
    super() ;
    this.state = {
      entertainmentHeadlind : [],
      entertainment : []
    }
  }




  render() {
    var allEntertainment = this._getAllEntertainment() ;
    return(
      <div>
        <HeadLine headline = "Entertainment Stuff"/>
        <section className="row">
          {allEntertainment}
        </section>
      </div>

    )

  }

  _getAllEntertainment() {
    console.log("get all ");
    return this.state.entertainment.map((each)=>{
      return(
        <Grid title={each.title} description={each.description} url={each.url} urlToImage={each.urlToImage} key={each.id}></Grid>
      );
    });
  }

}
export default Entertainment  ; 
