import React, { Component } from 'react';
import '../css/Dashboard.css'
import logo from '../assets/logopng.png'
//  import logoAvatar from '../assets/jorge_avatar.png'


export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
  }

  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-dark bg-primary navbarDash">
            <a className="navbar-brand" href="/">
              <img src={logo} width="50" height="50" className="imgNav" alt="" />
              <span className="labelNav">BetLab</span>
            </a>
            <form className="form-inline">
              <button className="btn btn-success my-2 my-sm-0" onClick={this.handleLogout}>Logout</button>
            </form>
          </nav>
        </div>
      </div>
    )
  }
}