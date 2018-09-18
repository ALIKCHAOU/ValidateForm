import React, { Component } from 'react';
import "./Home.css";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      Errfirstname: '',
      Lastname: '',
      Errlastname: '',
      email: '',
      ErrEmail: '',
      Password: '',
      ErrPassword: '',
      Loadpicture: false,
    };



  }

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.onChange({ [e.target.name]: e.target.value });
  }


  validation = () => {
    let isError = false;
    const errors = {
       Errfirstname: '',      
      Errlastname: '',      
      ErrEmail: '',    
      ErrPassword: '',   
    };
    if (this.state.firstname.length < 5) {
      isError = true;
      errors.Errfirstname = 'first name is less the 4 carater';
    }
    if (this.state.Lastname.length < 3) {
      isError = true;
      errors.Errlastname = 'first name is less the 4 carater';
    }
    if (this.state.email.indexOf('@')===-1) {
      isError = true;
      errors.ErrEmail = 'require valide Email';
    }

   
      this.setState({
        ...this.state,
        ...errors
      });
    
    return isError;

  }
  OnSubmit = (e) => {
    // console.log(this.state);
    e.preventDefault();
    this.setState({
      Errfirstname: '',      
      Errlastname: '',      
      ErrEmail: '',    
      ErrPassword: '',     

    })
    this.props.onChange({ [e.target.name]: e.target.value });

    // clear form 
    const err = this.validation();
    if (!err) {
      this.setState({
        firstname: '',
        Lastname: '',
        email: '',
        Password: '',
        Loadpicture: false,
      })
      /*this.props.onChange({
        firstname: '',
        Lastname: '',
        email: '',
        Password: '',
        Loadpicture: false,
      })*/
    }
  }
  handleChanepicture = (event) => {
    alert('picture is loded: ')
    this.setState({ Loadpicture: !this.state.Loadpicture });
  }


  render() {
    return (

      <form >
        <label>
          FirstName:
          <input type="text" value={this.state.firstname} Errtext={this.state.Errfirstname} onChange={this.change} placeholder=" FirstName:" name="firstname" />
          <label>{this.state.Errfirstname}</label>
        </label>
        <label>{this.state.Errfirstname}</label>
        <br />
        <label>
          LastName:
          <input type="text" value={this.state.Lastname} Errtext={this.state.Errlastname} onChange={this.change} placeholder=" lastName:" name="Lastname" />
          <label>{this.state.Errlastname}</label>
        </label>
        <label>{this.state.Errlastname}</label>
        <br />
        <label>
          Mail Adress:
          <input type="email" value={this.state.email} Errtext={this.state.ErrEmail} onChange={this.change} placeholder=" email" name="email" />
        </label>
        <label>{this.state.ErrEmail}</label>
        <br />
        <label>
          Password:
          <input type="password" value={this.state.Password} Errtext={this.state.ErrPassword} onChange={this.change} placeholder="Password" name="Password" />
        </label>
        <label>{this.state.ErrPassword}</label>
        <br />
        <label>
          Image :
        <input type="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleChanepicture} />
        </label>
        <button onClick={(e) => this.OnSubmit(e)}>Submit</button>

      </form>
    );
  }
}

export default Home;