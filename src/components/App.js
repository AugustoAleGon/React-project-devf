import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../css/App.css'


import Login from './login'
import SignUp from './signup'

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
        </ApolloProvider>
      </BrowserRouter>
    )
  }
}

export default App;
