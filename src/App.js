import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from './home/Home.jsx'
import {  Route,Switch } from 'react-router-dom'
import Header from './home/header/Header'

class App extends Component {

  render() {
   return( <Switch> 
      <Route path='/child' component={Home} />
      <Route path="/home/:id" component={Header} />
   </Switch>)
  }
}
export default App;