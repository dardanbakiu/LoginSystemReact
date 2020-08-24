import React from 'react';
import axios from 'axios';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Signin from './pages/signin/Signin'
import Signup from './pages/signup/Signup'
import Error from './pages/Error'
import Navigation from './pages/Navigation'


class App extends React.Component {
  state = {
    data: []
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
