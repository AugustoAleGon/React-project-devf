import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//  import { Redirect } from 'react-router-dom';
//  import gql from 'graphql-tag'
//  import { Query } from 'react-apollo'
import '../css/Login.css'
import logo from '../assets/logopng.png'

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    // setTimeout(() => {
    //     this.setState({
    //         goToHome:true
    //     })
    // }, 10000);
  }

  handleEmailChange = (e) => {
    console.log(e.target.value)
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
    //console.log(this.props.client.query(GET_USERS))
    // if (this.state.email !== "" && this.state.password !== "") {
    //     this.setState({
    //         email: '',
    //         password: ''
    //     });
    // }
    // this.props.client
    // .query({query:GET_USERS})
    // .then(result => console.log(result.data.Users))

    // this.props.client
    //     .mutate({mutation: LOGIN_USER, variables:{ email: this.state.email, password: this.state.password }})
    //     .then(result => console.log(result))
    //     .catch((err)=>{
    //         console.log(err)
    //     })

    e.preventDefault();




  }

  render() {
    return (
      <div className="container">
        <div className="brand_logo_container">
                <img src={logo} class="brand_logo" alt="Logo"/>
        </div>
        <div id="persoCardLogin" className="card card-login mx-auto mt-5 ">
          <div className="card-body">
            <div id='persoCardBodyLogin'>
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
              <button id="auth" className="btn btn-primary btn-block" onClick="autenticar()">Login</button>
              <Link id="persoButtonLinkLogin" to='/SignUp' className="btn btn-secondary btn-sm btn-block"> Sign Up </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}