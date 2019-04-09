import React, { Component } from 'react';
import '../css/Dashboard.css'
import logo from '../assets/logopng1.png'
import logoAvatar from '../assets/jorge_avatar.png'

const searchingFor= (term) => {
  return (x)=> {
    return x.alt.toLowerCase().includes(term.toLowerCase()) || !term
  }
}

export default class BodyDashboard extends Component {
    constructor(props) {
      super(props)
      this.state = {
          search:'',
          streamingCovers:[
            {id:1,alt:'lol',src:logoAvatar, name:'Room 1'},
            {id:2,alt:'wow',src:logo , name:'Room 2'},
            {id:3,alt:'bunny',src:logoAvatar, name:'Room 3'},
            {id:4,alt:'bunnyHola',src:logo, name:'Room 4'}
          ]
      }
    }
    
    componentDidMount() {
    }
  
    handleSearch= (e) => {
      this.setState({
        search: e.target.value
      });
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
              this.state.streamingCovers.filter(searchingFor(this.state.search)).map((streaming) =>{
                return (
                      <img key={streaming.id} id={streaming.id} className="coverDash" src={streaming.src} alt={streaming.alt} />
                )
              })
            }
            </div>
          </div>
        </div>
      )
    }
  }