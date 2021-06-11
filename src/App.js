import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Home,Users,Revenue} from './pages/Home';
import Reports from './pages/Reports';
import {Products,Products1,Products2,Products3} from './pages/Products';
import {Messages} from './pages/Messages';
import {Team} from './pages/Team';
import {Support} from './pages/Support';


function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/home/users' exact component={Users} />
          <Route path='/home/revenue' exact component={Revenue} />
          <Route path='/reports'  exact component={Reports} />
          <Route path='/products' exact component={Products} />
          <Route path='/products/products1' exact component={Products1} />
          <Route path='/products/products2' exact component={Products2} />
          <Route path='/products/products3' exact component={Products3} />
          <Route path='/team' exact component={Team} />
          <Route path='/messages' exact component={Messages} />
          <Route path='/support' exact component={Support} />
        </Switch>
      </Router>
    </>
  );
}

export default App;