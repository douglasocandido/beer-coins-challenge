import React from 'react';
import Operations from './pages/Operations';
import Receipt from './pages/Receipt';
import Rewards from './pages/Rewards'
import Error from './pages/Error/Error';

const routes = [
  {
    path :"/operations",
    component: <Operations />
  },
  {
    path :"/receipt",
    component: <Receipt />
  },
  {
    path :"/rewards",
    component: <Rewards />
  },
  {
    path :"/*",
    component: <Error />
  },
]

export default routes;
