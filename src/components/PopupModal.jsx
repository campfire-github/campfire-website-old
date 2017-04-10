import React from 'react';



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
    var modalclassname = "popupmodal-div-show" ;
    return (
      <div className={modalclassname}>


        <div className="modal-content">
          <span className="close" onClick = {this.props.onClick()} >&times;</span>
          <p>Some text in the Modal..</p>
        </div>

      </div>


    )
  }



}
export default PopupModal;
