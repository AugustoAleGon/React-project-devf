import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../css/App.css'


import Login from './Login'
import SignUp from './Signup'
import DashBoard from './Dashboard'
import StreamingView from './StreamingView'
import Home from './Home'

import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'
import client from '../graphQL'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Route exact path='/' component={() => <Home client={client}/>} />
          <Route exact path='/Login' component={() => <Login client={client}/>} />
          <Route exact path='/SignUp' component={() => <SignUp client={client}/>} />
          <Route exact path='/Dashboard' component={() => <DashBoard client={client}/>} />
          <Route exact path='/Streaming' component={() => <StreamingView client={client}/>} />
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}

export default App;
