import React, { Component } from 'react';
import gql from 'graphql-tag'
import '../css/Dashboard.css'
import logoAvatar from '../assets/jorge_avatar.png'

// const GET_USER = gql`
// mutation GETUSER($email:String!){
//     SearchUser(email:$email)
// }
// `

export default class ProfileDashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      username: '',
      email: ''
    }
  }

  componentDidMount() {
    // this.props.client
    //   .query({ query: GET_USER, variables: { email: this.state.email }})
    //   .then(result => {
    //     console.log(result.data)
    //     //set state name, username and mail
    //   })
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
