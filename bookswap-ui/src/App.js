import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Library from './Library';
import Login from './Login'
import Home from './Home'
import Books from './Books';
import PrivateRoute from './PrivateRoute'
import store from './store/';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route component={Login} exact path='/login' />
            <Route component={Home} exact path='/' />
            <Route component={Library} path='/library' />
            <Route component={Books} path='/books' />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
