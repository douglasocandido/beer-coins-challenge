
import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Admin from './pages/Admin/Admin';
import Client from './pages/Client';
import Login from './pages/Login';
import Operations from './pages/Operations';
import Receipt from './pages/Receipt';
import Rewards from './pages/Rewards'
import Error from './pages/Error/Error';


import APIService from './services/APIService'
import AxiosHandler from './services/AxiosHandler'
import { useAppDispatch, useAppState, SET_USER } from './AppContext';
import { TokenService } from './services/TokenService';
import { ITokenData } from './interfaces/Token';

const tokenService = new TokenService(window.localStorage);
const apiUrl = process.env.REACT_APP_API_URL || 'https://beertech-banco.herokuapp.com/beercoins';
const axiosHandler = new AxiosHandler(apiUrl, tokenService);
export const apiService = new APIService(axiosHandler)

function App() {
  const appState = useAppState();
  const [dispatch] = useAppDispatch();

  const isLoggedIn = appState && !!appState.user.Nome;
  const isAdmin = isLoggedIn && appState.user.Perfil === 'ROLE_ADMIN';

  useEffect(() => {
    try {
      const token = tokenService.getToken();
      if (token) {
        const user = TokenService.decodeToken<ITokenData>(token)
        dispatch({ type: SET_USER, user })
      }
    } catch (error) {
      console.error('fail to get and decode token', error)
    }
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
              !isLoggedIn ? <Redirect to="/login" /> :
                isAdmin ? <Admin /> : <Client />
            }
          </Route>
          <Route path="/login">
            {
              !isLoggedIn ? <Login /> : <Redirect to="/" />
            }
          </Route>
          <Route path="/operations">
            {
              !isLoggedIn ? <Login /> : <Operations />
            }
          </Route>
          <Route path="/receipt" >
            {
              !isLoggedIn ? <Login /> : <Receipt />
            }
          </Route>
          <Route path="/rewards">
            {
              !isLoggedIn ? <Login /> : <Rewards />
            }
          </Route>
          <Route path="*" component={Error} />
        </Switch>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
