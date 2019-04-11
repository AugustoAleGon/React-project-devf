import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import logo from '../assets/logopng.png'
import { withRouter } from 'react-router-dom';
// import logoAvatar from '../assets/jorge_avatar.png'

class StreamingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  componentDidMount (){
    console.log("Stream",this.props)
  }
  render () {
    return (
        <div>
          <div>
            <nav className="navbar navbar-dark bg-primary navbarDash">
              <a className="navbar-brand" href="/">
                <img src={logo} width="50" height="50" className="imgNav" alt=""/>
                <span className="labelNav">BetLab</span>
              </a>
              <form className="form-inline">
                <button className="btn btn-success my-2 my-sm-0" >Logout</button>
              </form>
            </nav>  
          </div>  
          <div> 
          <ReactPlayer url={this.props.location.state.url} playing />
          </div>
          
        </div>
    )
  }
}

export default withRouter(StreamingView)