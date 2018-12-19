import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header'

class App extends React.Component {
 
    // fires before component is mounted
    constructor(props) {
 
        // makes this refer to this component
        super(props);
 
        // set local state
        this.state = {
            date: new Date(),
            showResults: false
        };
 
    }

    componentDidMount() {
      this.timerId = setInterval( 
        () => this.tick(),1000
      )
    }
    componentWillUnmount() {
      clearInterval(this.timerId);
    }
  
    tick = () => {
      this.setState({
        date: new Date()
      })
    } 
  
    onClick = () => {
      let isShow = true;
      if(this.state.showResults === true) {
        isShow = false;
      } else {
        isShow = true
      }
      this.setState({ showResults: isShow });
      console.log(this.state.showResults)
    } 

    render() {
        return (
          <div>
            <Header />
            <h1>
              It is {this.state.date.toLocaleTimeString()}.
            </h1>
            <input type="submit" value="Search" onClick={this.onClick} />
                { this.state.showResults ? "hi": null }
          </div>

        )
    }
}

export default App;
