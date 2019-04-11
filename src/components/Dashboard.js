import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProfileDashboard from './ProfileDashboard'
import BodyDashboard from './BodyDashboard'
import NavBar from './NavBar'
import '../css/Dashboard.css'

 class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      isLoading: true
    }
  }

  async componentDidMount () {
    // console.log(this.props.location.state.data.email)
    let token = localStorage.getItem("token")
    if (token) {
      this.setState({
        isLoading: false
      })
    }

  }

  render() {
    //this.state.isLoading ? <div>Loading...</div> : <div>Hola usuario</div>
    // if(localStorage.getItem("token")){
    return (
      <div>
        <NavBar />
        <div>
          {this.state.isLoading ? <div>Loading...</div> : <div><ProfileDashboard user={this.props.location.state.data} /><BodyDashboard/></div>
          }          
          {/* <ProfileDashboard client={this.props.client} />
          <BodyDashboard /> */}
        </div>
      </div>
    )
    // return(
    //   <div>User not authenticated</div>
    // )
  }
}

export default withRouter(Dashboard)