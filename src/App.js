import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom';
import './App.css';
import Header from './Header/Header'
import Home from './Home/Home'
import Login from './Admin/Login/Login'

class App extends Component {
 
   
    render() {
        return (
         
        <Router>
          <div className="webpage">
            <Header />
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/admin"  component={Login} />
            </Switch> 
          </div>
        </Router>
          

        )
    }
}

export default App;
