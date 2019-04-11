import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../css/Dashboard.css'
import logo from '../assets/logopng1.png'
import logoAvatar from '../assets/jorge_avatar.png'

const searchingFor= (term) => {
  return (x)=> {
    return x.channel.name.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

class BodyDashboard extends Component {
    constructor(props) {
      super(props)
      this.state = {
          search:'',
          streamingList: []
      }
    }
    
    async componentDidMount() {
      await new Promise((resolve, reject) => {
        axios.get('https://api.twitch.tv/kraken/streams', {
        headers: {
          'Accept': 'application/vnd.twitchtv.v5+json',
          'Client-ID': 'scxdbzxpk53xsvdpof689m8hfj8fb6'
        }
      }).then((response) => {
        console.log(response.data.streams)
        this.setState({
          streamingList: this.state.streamingList.concat(response.data.streams)
        })
        resolve(true)
      })
    })
    }
  
    handleSearch= (e) => {
      this.setState({
        search: e.target.value
      });
    }

    handleStreaming = (e) => {
      console.log(e.target.id)
      this.props.history.push({
        pathname:`/Streaming`,
        state:{url: e.target.id }
    })
    }

    render() {
      return (  
        <div>
          <div className="BodyDash">
            <div id="search">
                <input value={this.state.search} type="text" placeholder="Search Rooms" id="filter-search" className="form-control form-control-sm ml-3 w-75" aria-label="Search" onChange={this.handleSearch}/>
            </div>
            <div id="covers">
            { 
              this.state.streamingList && this.state.streamingList.length > 0 ?
              this.state.streamingList.filter(searchingFor(this.state.search)).map((streaming) => {
                return (
                      <img key={streaming._id} id={streaming.channel.url} className="coverDash" src={streaming.preview.large} alt="Hola" onClick={this.handleStreaming}/>
                )
              })
              : null
            }
            </div>
          </div>
        </div>
      )
    }
  }

  export default withRouter(BodyDashboard)