import { Actions } from './Actions'

export const Reducer = (state, action) => {
  switch (action.type) {
    case Actions.TOGGLE_MENU:
      return { ...state, isMenuOpen: !state.isMenuOpen }
    case Actions.TOGGLE_NIGHT_MODE:
      return { ...state, isNightMode: !state.isNightMode }
    default:
      return state
  }
}
