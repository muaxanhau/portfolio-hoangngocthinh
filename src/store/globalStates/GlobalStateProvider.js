import React, { useReducer } from 'react'
import { StateContext } from './Context'
import { States } from './States'
import { Reducer } from './Reducer'

const GlobalStateProvider = props => {
  const [state, dispatch] = useReducer(Reducer, States)
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  )
}

export default GlobalStateProvider
