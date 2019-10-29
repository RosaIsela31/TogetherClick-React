import React, { Component } from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user : null
    };

    this.handleAuth = this.handleAuth.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }


  // Este es un método del ciclo de vida de React - Se dispara una vez que el componente ha sido renderizado
  // componentDidMount (){
  //   firebase.auth().onAuthStateChanged(function (user) {
  //     // setState modifica el estado
  //     this.setState({
  //       user : user
  //     });
  //   })
  // }


  handleAuth = () =>{
    // Creando un proveedor de Google
    const provider = new firebase.auth.GoogleAuthProvider();
    
    // signIn devuelve una promesa
    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  } 

  handleLogout = () => {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  } 

  

  renderLoginButton = () => {
    // Si el usuario está logueado puede hacer una cosa
    if(this.state.user) {
      return(
      <div>
        <img src={this.state.user.photoURL} alt={this.state.user.displayName} />
        <p>Hola {this.state.user.displayName}</p>
        <button onClick={this.handleLogout}>Salir</button>
      </div>
      );
    }else{
     // Si no está logueado, no puede
     return(
      <button onClick={this.handleAuth}>Login con Google</button>
     )
    }
  }
      

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>together</h1>
        </header>
        <div>
          {this.renderLoginButton()}
        </div>
      </div>
    );
  }
}

export default App;
