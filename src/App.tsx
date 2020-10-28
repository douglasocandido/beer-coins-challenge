import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Admin from './pages/Admin/Admin';
import Client from './pages/Client';
import SecuredRoute from './components/SecuredRoute/SecuredRoute';

import { useAppDispatch, SET_USER, useAppState } from './AppContext';
import { TokenService } from './services/TokenService';
import routes from './routes';
import Login from './pages/Login';
import { ITokenData } from './interfaces/Token';

function App() {
  const [dispatch] = useAppDispatch();
  const { user } = useAppState();
  const isLoggedIn = !!user && !!user.token
  const isAdmin = !!user && user.Perfil === 'ROLE_ADMIN';

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    if (!token) return
    const user = TokenService.decodeToken<ITokenData>(token)
    dispatch({
      type: SET_USER,
      user: {...user, token}
    })
  }, [dispatch])

  return (
    <div className="App">
      <Router>
        <Switch>
          <SecuredRoute exact path="/" renderCondition={isLoggedIn} component={ isAdmin ? <Admin /> : <Client /> }/>
          <SecuredRoute path="/login" renderCondition={!isLoggedIn} component={ <Login /> } redirectTo="/"/>
          {routes.map(({path, component}) => (
            <SecuredRoute key={path} path={path} renderCondition={isLoggedIn} component={component}/>
          ))}
        </Switch>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
