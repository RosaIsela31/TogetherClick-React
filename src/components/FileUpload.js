import React, { Component } from 'react';
import firebase from 'firebase';

class FileUpload extends Component{
  constructor(){
    super();
    this.state = {
      uploadValue : 0,
      picture : null
    }
  }
  render(){
    return(
      <div>
        {/* Progress es una barra para cuando se va a dibujar un fichero, el valor de la barra va a ser el estado */}
        <progress value={this.state.uploadValue} max='100'></progress>
        <br/>
        <input type='file' onChange={this.props.onUpload}/>
        <br/>
        <img src={this.state.picture} width='320' alt='newimage'/>
      </div>
    );
  }

}

export default FileUpload;