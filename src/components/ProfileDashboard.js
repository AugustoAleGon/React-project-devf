import React, { Component } from 'react';
//  import { Redirect } from 'react-router-dom';
//  import gql from 'graphql-tag'
//  import { Query } from 'react-apollo'
// import { Link } from 'react-router-dom';
import '../css/Dashboard.css'
// import logo from '../assets/logopng.png'
import logoAvatar from '../assets/jorge_avatar.png'

export default class ProfileDashboard extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name:'Juan camilo marin',
        username:'Camilin99',
        email:'jcamilo@hotmail.com'
      }
    }
  
    componentDidMount() {
    }

    render() {
      return (
        <div>
          <div className="bodyProf">
            <img className="ProfImg" src={logoAvatar} alt="" />
            <div>
              <span className="UsernameSpan">{this.state.username}</span>
            </div>
            <div>
              <span className="NameSpan">{this.state.name}</span>
            </div>
            <div>
              <span className="EmailSpan">{this.state.email}</span>
            </div>
          </div>
        </div>
      )
    }
  }
