import React from 'react';
import { Route, Redirect } from "react-router-dom";

interface ISecureRouteProps {
  renderCondition: boolean
  path: string
  component: any
  exact?: boolean
  redirectTo?: string
}

export default function SecuredRoute({ renderCondition, path, component, exact=false, redirectTo= '/login' }: ISecureRouteProps) {
  return (
    <Route path={path} exact={exact}>
      { renderCondition ? component: <Redirect to={redirectTo} /> }
    </Route>
  );
}