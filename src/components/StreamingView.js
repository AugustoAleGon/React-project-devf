import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import logo from '../assets/logopng.png'
import { withRouter } from 'react-router-dom';
import '../css/StreamingView.css'
// import logoAvatar from '../assets/jorge_avatar.png'

class StreamingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      stream: ''
    }
  }
  componentDidMount() {
    console.log("Stream", this.props)
    this.setState({
      url: this.props.location.state.url,
      name: this.props.location.state.name,
      views: this.props.location.state.views,
      game: this.props.location.state.game
    })
    console.log(this.state)
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
              <button className="btn btn-success my-2 my-sm-0" >Logout</button>
            </form>
          </nav>
        </div>
        <div className="playerComponent">
          <ReactPlayer url={this.state.url} playing width="850px" height="478px" />
          <div className="gameTitle">
            {
              this.state.game
            }
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(StreamingView)