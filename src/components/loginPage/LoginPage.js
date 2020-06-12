import React from 'react';
import Dashboard from '../dashboard/Dashboard.js'
import LoginForm from '../loginform/LogInForm.js'



function LoginPage() {
  return (
    <div className="App">
       <div className="Login">
        <Dashboard/>
        <LoginForm/>
       </div>
  </div>
  );
}

export default LoginPage;