import React from 'react';
import {BrowserRouter,Route, Redirect, Switch } from 'react-router-dom'
// import 'materialize-css/dist/js/materialize'
// import 'materialize-css/dist/css/materialize.min.css'
import Header from './componet/header/header'
import Footer from './componet/footer/footer'
import Login from './componet/login/login'
import Dashboard from './componet/dashboard/dashboard'
import './assoc/css/style.css'
import ValidatePage from './componet/dashboard/validate';

function App() {
  
  const NoMatch = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  )

  return (
    <BrowserRouter>
        <div className="App">
          <Header />
            <div>
              <Switch>
                <Route path="/" component={Login} exact />
                <Route path="/dashboard" component={ValidatePage}  />
                <Route component={Login}/>
              </Switch>
              
             
              
            </div>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
