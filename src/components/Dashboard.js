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
      isLoading: true,
      isLogged: false
    }
  }

  async componentDidMount () {
    // console.log(this.props.location.state.data.email)
    let token = localStorage.getItem("token")
    if (token) {
      this.setState({
        isLoading: false,
        isLogged: true
      })
    }

  }

  render() {
    return (
      <div>
        <NavBar />
        <div>
          {this.state.isLogged ?  this.state.isLoading ? <div>Loading...</div> : <div><ProfileDashboard /><BodyDashboard/></div> : <Home/>
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