import React from 'react';
import Form from './Form.jsx';


class PopupModal extends React.Component{

  constructor(props){
    super(props) ;
    this.state ={

      all :[]
    }
  }

  getModalClassName() {
    var modalclassname = "popupmodal-div-show";
    if(this.props.modalShow === false){
      modalclassname = false ;
    }
    return modalclassname
  }

  render(){
    console.log ("modalshow");
    var modalclassname = "popupmodal-div-show container-fluid col-md-10 col-sm-10 col-xs-10" ;
    return (
      <div className={modalclassname}>


        <div className="modal-content">
          <span className="close" onClick = {this.props.onClick()} >&times;</span>
          <p>Search</p>
          <Form></Form>
        </div>

      </div>


    )
  }



}
export default PopupModal;
