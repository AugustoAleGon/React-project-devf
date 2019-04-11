import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import gql from 'graphql-tag'
import '../css/Login.css'
import logo from '../assets/logopng.png'
//  import { Query } from 'react-apollo'

const LOGIN_USER = gql`
mutation LOGIN($email:String!,$password:String!){
    login(email:$email, password:$password){
      token
      user{
        name
        username
        email
      }
    }
}
`

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
  }

  handleEmailChange = (e) => {
    //console.log(e.target.value)
    this.setState({
      email: e.target.value
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.client
    .mutate({ mutation: LOGIN_USER, variables: { email: this.state.email, password: this.state.password } })
    .then(result => {
      console.log(result.data)
      localStorage.setItem("token", result.data.login.token)
      localStorage.setItem("user", JSON.stringify(result.data.login.user))
      this.props.history.push({
        pathname:`/Dashboard`,
        state:{data: result.data.login.user}
    })
    })
  }

  render() {
    return (
      <div className="container">
        <div className="brand_logo_container">
                <img src={logo} className="brand_logo" alt="Logo"/>
        </div>
        <div id="persoCardLogin" className="card card-login mx-auto mt-5 ">
          <div className="card-body">
            <div id='persoCardBodyLogin'>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <div className="form-label-group">
                  <input type="email" id="exampleInputEmail1" className="form-control" placeholder="Email address" aria-describedby="emailHelp" required="required" autoFocus="autofocus" value={this.state.email} onChange={this.handleEmailChange} />
                  {/* <label for="inputEmail">Email</label> */}
                </div>
              </div>
              <div className="form-group">
                <div className="form-label-group">
                  <input type="password" id="exampleInputPassword1" className="form-control" placeholder="Password" required="required" value={this.state.password} onChange={this.handlePasswordChange} />
                  {/* <label for="inputPassword">Contraseña</label> */}
                </div>
              </div>
              <button type="submit" id="auth" className="btn btn-primary btn-block">Login</button>
              </form>
              <Link id="persoButtonLinkLogin" to='/SignUp' className="btn btn-secondary btn-sm btn-block"> Sign Up </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Login)