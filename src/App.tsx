import React from 'react';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './pages/Admin';
import Client from './pages/Client';
import Login from './pages/Login';
import Operations from './pages/Operations';
import Receipt from './pages/Receipt';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/admin" component={Admin}>
          </Route>
          <Route path="/client" component={Client}>
          </Route>
          <Route exact path="/" component={Login}>
          </Route>
          <Route path="/operations" component={Operations}>
          </Route>
          <Route path="/receipt" component={Receipt}>
          </Route>
          <Route path="/register" component={Register}>
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
