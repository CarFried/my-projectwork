import React,{useContext} from 'react';
import './App.css'
import './tailwind.generated.css';
import { Router,Switch,Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import LoginPage from './components/loginPage/LoginPage'
import Navbar from './components/navbar/Navbar'
import history from './history'
import New from './components/new/new'
import {AuthProvider} from './components/Provider/AuthProvider'
import Details from './components/details/Details'
import Contact from './components/contact/Contact'
import {AuthContext} from './components/Provider/AuthProvider'








function App() {

  const {currentUser} = useContext(AuthContext)
  console.log (currentUser)
  return (
  <AuthProvider>
  <Router history={history}>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/Login" component={LoginPage}/>
    <Route path="/post/:id" component={Details}/>
    <Route path="/new" component={New}/>
    <Route path="/contact" component={Contact}/>
    </Switch>
  </Router>
  </AuthProvider>
  );
}

export default App;
