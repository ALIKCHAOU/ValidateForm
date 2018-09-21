import React, { Component } from 'react';
import Header from './compoments/header/Header';
//import Footer from './compoments/footer/Footer';
//import Home from './compoments/Home/Home';
import './App.css';
import Forms from'./compoments/Forms';

class App extends Component {
state={
  fileds:{},  sidedroweropen:false,
};
onChange=(updatedvalue)=>{
  this.setState({
    fileds:{
      ...this.state.fileds,
      ...updatedvalue}
  })
  

}
  render() {
    return (
      <div className="App">
        <Header />
        <main>
       <h1>this is the main </h1>
     </main>
        <footer>
         <Forms />
         </footer>
      </div>
    );
  }
}

export default App;
