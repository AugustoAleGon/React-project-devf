import React, { Component } from 'react';
import '../css/Signup.css'
import logo from '../assets/logopng.png'
import gql from 'graphql-tag'
import '../css/Login.css'

const CREATE_USER = gql`
mutation SIGNUP($email:String!, $username:String!, $password:String!, $name:String!){
  signUp(name:$name, username:$username, email:$email,password:$password)}
  {
    token
    user{
        name
        username
        email
      }
  }
`

export default class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      username: '',
      firstName: '',
      lastName: '',
      identification: ''
    }
  }

  componentDidMount() {
  }

  handleEmailChange = (e) => {
    // Verificar que el email no este registrado en base de datos
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleUsernameChange = (e) => {
    // Verificar que el username sea unico
    this.setState({
      username: e.target.value
    });
  }

  handleFisrtNameChange = (e) => {
    this.setState({
      firstName: e.target.value
    });
  }

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value
    });
  }

  handleIdChange = (e) => {
    this.setState({
      identification: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.client
    .mutate({ mutation: CREATE_USER, variables: { email: this.state.email, password: this.state.password , username:this.state.username, name:this.state.firstName} })
    .then(result => {
      console.log(result.data)
      // localStorage.setItem("token", result.data.login.token)
      // localStorage.setItem("user", user)
      //   this.props.history.push({
      //     pathname:`/Dashboard`
      // })
    })
  }

  render() {
    return (
      <div id="containerSignup" className="container">
        <div className="brand_container_logo">
          <a href='/'>
            <img src={logo} className="brand_container" alt="Logo" />
          </a>
        </div>
        <div id="persoCardSignup" className="card card-login mx-auto mt-5 perso">
          <div className="card-body">
            <div className="persoCardBodySignup">
              <form id="formSignup" onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <div className="form-label-group">
                    <input type="email" id="exampleInputEmail1" className="form-control" placeholder="Email address" aria-describedby="emailHelp" required="required" autoFocus="autoFocus" value={this.state.email} onChange={this.handleEmailChange} />
                    {/* <label for="inputEmail">Email</label> */}
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <input type="password" id="exampleInputPassword1" className="form-control" placeholder="Password" required="required" value={this.state.password} onChange={this.handlePasswordChange} />
                    {/* <label for="inputPassword">Contraseña</label> */}
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <input type="text" id="exampleInputUsername" className="form-control" placeholder="Username" required="required" value={this.state.username} onChange={this.handleUsernameChange} />
                    {/* <label for="inputEmail">Email</label> */}
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <input type="text" id="exampleInputFirstName" className="form-control" placeholder="First Name" required="required" value={this.state.firstName} onChange={this.handleFisrtNameChange} />
                    {/* <label for="inputEmail">Email</label> */}
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <input type="text" id="exampleInputLastName" className="form-control" placeholder="Last Name" required="required" value={this.state.lastName} onChange={this.handleLastNameChange} />
                    {/* <label for="inputEmail">Email</label> */}
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <input type="number" id="exampleInputIdentification" className="form-control" placeholder="ID" required="required" value={this.state.identification} onChange={this.handleIdChange} />
                    {/* <label for="inputEmail">Email</label> */}
                  </div>
                </div>
                <button id="Create" type="submit" className="btn btn-success btn-block"> Create User </button>
                {/* <Link to='/SignUp' className="btn btn-outline-secondary btn-sm perso2"> Sign Up </Link> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}