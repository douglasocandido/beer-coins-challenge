import React, { useReducer, useContext, createContext } from 'react'

const AppStateContext = createContext({})
const AppDispatchContext = createContext<any[]>([])

const reducer = (state: any, action: any) => {
  console.log('action', action)
  return state
}

export const AppContextProvider = ({ children }: { children: any}) => {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <AppDispatchContext.Provider value={[dispatch]}>
      <AppStateContext.Provider value={state}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  )
}

export const useAppState = () => useContext(AppStateContext)
export const useAppDispatch = () => useContext(AppDispatchContext)