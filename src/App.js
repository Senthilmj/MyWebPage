import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import {  Route,  Switch} from 'react-router-dom'
import Home from './Home/Home'

class App extends Component {
 
   
    render() {
        return (
          <div>
            <Header />
            <Switch>
              <Route path="/" exact={true} component={Home} />
           </Switch>
           
          </div>

        )
    }
}

export default App;
