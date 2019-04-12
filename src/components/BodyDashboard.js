import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../css/Dashboard.css'
import logo from '../assets/logopng1.png'
import logoAvatar from '../assets/jorge_avatar.png'

const searchingFor= (term) => {
  return (x)=> {
    return x.channel.game.toLowerCase().includes(term.toLowerCase()) || !term
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
      const {name, views , game , url } = JSON.parse(e.target.alt).channel
      this.props.history.push({
        pathname:`/Streaming`,
        state:{name, views, game, url }
    })
    }

    render() {
      return (  
        <div>
          <div className="BodyDash">
            <div className="search" id="search">
                <input value={this.state.search} type="text" placeholder="Search Rooms" id="filter-search" className="form-control form-control-sm ml-3 w-75" aria-label="Search" onChange={this.handleSearch}/>
            </div>
            <div id="coversDash">
            { 
              this.state.streamingList && this.state.streamingList.length > 0 ?
              this.state.streamingList.filter(searchingFor(this.state.search)).map((streaming) => {
                console.log(streaming)
                return (
                      <img key={streaming._id} id={streaming._id} alt={JSON.stringify(streaming)} className="coverDash" src={streaming.preview.large} onClick={this.handleStreaming}/>
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