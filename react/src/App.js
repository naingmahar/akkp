import React from 'react';
import {BrowserRouter,Route } from 'react-router-dom'
// import 'materialize-css/dist/js/materialize'
// import 'materialize-css/dist/css/materialize.min.css'
import Header from './componet/header/header'
import Footer from './componet/footer/footer'
import Login from './componet/login/login'
import Dashboard from './componet/dashboard/dashboard'
import './assoc/css/style.css'
function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
            <div>
              <Route path="/" component={Login} exact/>
              <Route path="/dashboard" component={Dashboard} />
            </div>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
