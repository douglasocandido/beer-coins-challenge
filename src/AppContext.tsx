import React, { useReducer, useContext, createContext } from 'react';
import { ITokenData } from './interfaces/Token';
import { ContextDevTool } from 'react-context-devtool';

const initialState = {
  user: {
    Nome:'',
    Perfil: ''
  }
}

const AppStateContext = createContext<IAppState>(initialState)
const AppDispatchContext = createContext<any[]>([])

export interface IAppState {
  user: ITokenData
}

export const SET_USER = 'SET_USER'

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_USER:
      return { user: action.user }
    }
  return state
}

export const AppContextProvider = ({ children }: { children: any}) => {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <AppDispatchContext.Provider value={[dispatch]}>
      <AppStateContext.Provider value={state}>
        {children}
        <ContextDevTool context={AppStateContext} id="beerCoinsContext" displayName="BeerCoins Context" />
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}

export const useAppState = () => useContext<IAppState>(AppStateContext)
export const useAppDispatch = () => useContext(AppDispatchContext)