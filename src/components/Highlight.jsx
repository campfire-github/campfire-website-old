import React from 'react' ;
import HighlightCard from './HighlightCard.jsx';



class Highlight extends React.Component{
    constructor() {
        super() ;
        this.state = {
          currentNews : 0  ,
          highlightArray: [{title:"adfadf", url:"dsfadsf"},{title:"adfadfs", url:"dsfadssf"}]
        }
      };


    _stateUpdate(){
      this.setState({currentNews:0});
      this.setState({highlightArray: this.props.arrays}) ;
    }

    componentWillMount(){
      //this._stateUpdate() ;
    }

    componentDidMount() {
    this._timer =setInterval(
                  ()=>this._stateUpdate(),
                  1000);
    }


      _getTitleAsLink() {
        var a = this.state.highlightArray ;
      //  console.log("a" + a );
        return a.map((each)=>{
          return (
            <HighlightCard title={each.title} url={each.url} key={each.url} urlToImage= {each.urltoimage} description={each.description}></HighlightCard>
          )
        });
      }

      _getObject() {
        var a = this.state.highlightArray ;
        return a[1];
      }

  render() {
    var a =this.state.highlightArray[this.state.currentNews];
    console.log("a " + this.state.highlightArray  + "-" +this.state.currentNews);
    return (
      <div className = "col-md-12">
          <HighlightCard title={a.title} url={a.url} ></HighlightCard>
      </div>


    )
  }
}

export default Highlight ;
