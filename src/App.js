import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'
import {  Route,  Switch} from 'react-router-dom'
import Home from './Home/Home'
import Login from './Admin/Login/Login'

class App extends Component {
 
   
    render() {
        return (
          <div className="webpage">
            <Header />
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/admin"  component={Login} />
           </Switch>
           
          </div>

        )
    }
}

export default App;
