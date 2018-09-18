import React, { Component } from 'react';
import Header from './compoments/header/Header';
import Footer from './compoments/footer/Footer';
import Home from './compoments/Home/Home';
import './App.css';

class App extends Component {
state={
  fileds:{}
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
        <Home  onChange={(fileds)=>{this.onChange(fileds)}}/>
        <p>{JSON.stringify(this.state.fileds,null,2)}</p>
        <Footer />
      </div>
    );
  }
}

export default App;
