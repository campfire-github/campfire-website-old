import React from 'react' ;

class Technology extends React.Component{

  constructor() {
    super() ;
    this.state = {
      techHeadlind : [],
      tech : []
    }
  }




  render() {
    var alltech = this._getAllTech() ;
    return(
      <div>
        <HeadLine headline = "Technology Stuff"/>
        <section className="row">
          {alltech}
        </section>
      </div>

    )

  }

  _getAllTech() {
    console.log("get all ");
    return this.state.tech.map((each)=>{
      return(
        <Grid title={each.title} description={each.description} url={each.url} urlToImage={each.urlToImage} key={each.id}></Grid>
      );
    });
  }

}
export default Technology ; 