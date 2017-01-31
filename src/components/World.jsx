import React from 'react' ;

class World extends React.Component{

  constructor() {
    super() ;
    this.state = {
      worldHeadlind : [],
      world : []
    }
  }




  render() {
    var allworld = this._getAllWorld() ;
    return(
      <div>
        <HeadLine headline = "World Stuff"/>
        <section className="row">
          {alltech}
        </section>
      </div>

    )

  }

  _getAllWorld() {
    console.log("get all ");
    return this.state.world.map((each)=>{
      return(
        <Grid title={each.title} description={each.description} url={each.url} urlToImage={each.urlToImage} key={each.id}></Grid>
      );
    });
  }

}

export default World ; 
