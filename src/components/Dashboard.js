import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProfileDashboard from './ProfileDashboard'
import BodyDashboard from './BodyDashboard'
import NavBar from './NavBar'
import Home from './Home'
import '../css/Dashboard.css'


 class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      isLogged: false
    }
  }

  async componentDidMount () {
    let token = localStorage.getItem("token")
    if (token) {
      this.setState({
        isLogged: true
      })
    }

  }

  render() {
    return (
      <div>
        <NavBar />
        <div>
          {this.state.isLogged ?   <div><ProfileDashboard /><BodyDashboard/></div> : <div>Loading...</div>
          }          
        </div>
      </div>
    )
    // return(
    //   <div>User not authenticated</div>
    // )
  }
}

export default withRouter(Dashboard)