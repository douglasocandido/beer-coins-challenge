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
import Login from './pages/Login/Login';
import Operations from './pages/Operations';
import Receipt from './pages/Receipt';
import Register from './pages/Register';

import APIService from './services/APIService'
import AxiosHandler from './services/AxiosHandler'
import { AppContextProvider } from './AppContext';

const axiosHandler = new AxiosHandler(process.env.REACT_APP_API_URL || 'http://localhost')
export const apiService = new APIService(axiosHandler)

function App() {
  return (
    <AppContextProvider>
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/admin" component={Admin} />
            <Route path="/client" component={Client} />
            <Route exact path="/" component={Login} />
            <Route path="/operations" component={Operations} />
            <Route path="/receipt" component={Receipt} />
            <Route path="/register" component={Register} />
          </Switch>
      </Router>
    </div>
    </AppContextProvider>
  );
}

export default App;
