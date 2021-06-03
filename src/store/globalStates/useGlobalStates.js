import { useContext } from 'react'
import { StateContext } from './Context'
import { Actions } from './Actions'

const useGlobalStates = () => {
  const [state, dispatch] = useContext(StateContext)
  const setToggleMenu = () => {
    dispatch({ type: Actions.TOGGLE_MENU })
  }
  const setToggleNightMode = () => {
    dispatch({ type: Actions.TOGGLE_NIGHT_MODE })
  }

  const setState = {
    setToggleMenu,
    setToggleNightMode
  }
  return { state, setState }
}

export default useGlobalStates
