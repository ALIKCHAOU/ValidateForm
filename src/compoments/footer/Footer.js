import React, { Component } from 'react';
import "./Footer.css"
class Footer extends Component {
  constructor(props)
  { super(props)
    this.state ={
      name:"Ali",
      prenom:'kchaou',
      date: new Date(),
    };
    this.Onclick=this.Onclick.bind(this);


  }

  Onclick(){
    alert('A name was submitted: ' + this.state.name);
    return(
    <h1>this is a new h1</h1>)
  }
   
  
    render() {
      return (
        <div className="Footer">
          <h1>hello{this.state.name} it's : {this.state.date.toLocaleTimeString()}</h1>
          <button onClick={this.Onclick}>Click me</button>
        
        </div>
      );
    }
  }

  
  export default Footer;