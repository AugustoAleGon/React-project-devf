import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../css/Dashboard.css'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      this.setState({
        isLoading: false
      })
    }
  }

  render() {
    if (this.state.isLoading) {
      this.props.history.push('/Login');
    } else {
      this.props.history.push('/Dashboard');
    }
    return (
      <div>
      </div>
    )
  }
}

export default withRouter(Home)