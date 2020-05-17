import React, { useContext, createContext, useReducer } from 'react'

const initialState = {
  todos: []    
}

const reducer = (state, action) => {
  switch(action.type) {
    case "setTodo":
      return {...state, todos: [...state.todos, action.payload]}
    default:
      return state
  }
}

export const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext)

export const AppProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <AppContext.Provider value={{...state, dispatch}}>
      { props.children }
    </AppContext.Provider>
  )
}
