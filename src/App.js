import React, {useState,useEffect} from 'react';
import './App.css'
import './tailwind.generated.css';
import {Router as Router,Switch,Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import LoginPage from './components/loginPage/LoginPage'
import Navbar from './components/navbar/Navbar'
import Postlist from './components/posts/Post'
import history from './history'


function App() {
  return (
  <Router history={history}>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/Login" component={LoginPage}/>
    <Route path="/post/id" component={Postlist}/>
    </Switch>
  </Router>
  );
}

export default App;
