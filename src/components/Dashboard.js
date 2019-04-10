import React, { Component } from 'react';
import ProfileDashboard from './ProfileDashboard'
import BodyDashboard from './BodyDashboard'
import NavBar from './NavBar'
import '../css/Dashboard.css'


export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email:'',
      isLoading: true
    }
  }

  componentDidMount() {
    //  console.log(this.props.location.state)
    // get email from login
    let token = localStorage.getItem("token")
    if (token) {
      this.setState({
        isLoading: false
      })
    }
  }

  //establecer this.state.isLoading ? <div>Loading...</div> : <div>Hola usuario</div>
  render() {
    return (
      <div>
        <NavBar/>
        <div>
          <ProfileDashboard client={this.props.client}/>
          <BodyDashboard />
        </div>
      </div>
    )
  }
}