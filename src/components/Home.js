import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Dashboard.css'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogged: ''
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      this.setState({
        isLogged: true
      })
    }
    else{
      this.setState({
        isLogged: false
      })
    }
  }

  render() {
    return (
      <div>
      {
        this.state.isLogged ? this.props.history.push('/Dashboard') : this.props.history.push('/Login')
      }
      </div>
    )
  }
}

export default withRouter(Home)