import React from 'react';
import './App.css'
import './tailwind.generated.css';
import { Router,Switch,Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import LoginPage from './components/loginPage/LoginPage'
import Navbar from './components/navbar/Navbar'
import Postlist from './components/posts/Post'
import history from './history'
import New from './components/new/new'
import {AuthProvider} from './components/Provider/AuthProvider'



function App() {
  return (
  <AuthProvider>
  <Router history={history}>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/Login" component={LoginPage}/>
    <Route path="/post/id" component={Postlist}/>
    <Route path="/new" component={New}/>
    </Switch>
  </Router>
  </AuthProvider>
  );
}

export default App;
