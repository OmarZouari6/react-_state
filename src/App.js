import './App.css';
import './style.css';
import React, { Component } from 'react'
import omar from './omar.png';

export default class App extends Component {
  state={
    fullName:"Omar Zouari",
    bio:"hello react", 
    imgSrc: omar ,
    profession:"Technicien génie civil",
    cont:0,
    show: false,
  }
isShow=()=>{
  this.setState({show: !this.state.show, cont:0})
}
componentDidMount(){
  setInterval(() => {this.setState({cont:this.state.cont+1})
  }, 1000);
}
  render() {
    
    return (
      <div>
        <button onClick={this.isShow} >{this.state.show? "Masquer le profil":"Afficher le profil"}</button>
        {
          this.state.show&&<div className="container">
          <img src={this.state.imgSrc} alt="" />
        <h3>Full name: {this.state.fullName}</h3>
        <h3>Bio: {this.state.bio}</h3>
        <h3>Profession: {this.state.profession}</h3>
        <h4 >{this.state.cont}</h4>
        </div>
        }
      </div>
    )
  }
}
