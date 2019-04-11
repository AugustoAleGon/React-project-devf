import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Dashboard.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogged: true
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      this.setState({
        isLogged: true
      })
    }
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default withRouter(Home)