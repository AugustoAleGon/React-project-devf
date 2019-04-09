import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../css/App.css'


import Login from './Login'
import SignUp from './Signup'
import DashBoard from './Dashboard'

import { ApolloProvider } from 'react-apollo'
import { BrowserRouter, Route } from 'react-router-dom'
import client from '../graphQL'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Route exact path='/' component={() => <Login client={client}/>} />
          <Route exact path='/SignUp' component={() => <SignUp client={client}/>} />
          <Route exact path='/dashboard' component={() => <DashBoard client={client}/>} />
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}

export default App;
