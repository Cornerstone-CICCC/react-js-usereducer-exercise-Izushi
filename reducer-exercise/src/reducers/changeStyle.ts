type State = {
  isDark: boolean
  fSize: number
}

type Action =
  | { type: 'TOGGLE_DARK_MODE' }
  | { type: 'INCREASE_FONT_SIZE' }
  | { type: 'DECREASE_FONT_SIZE' }

export const changeStyleReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        isDark: !state.isDark
      }
    case "INCREASE_FONT_SIZE":
      return {
        ...state,
        fSize: state.fSize + 1
      }
    case "DECREASE_FONT_SIZE":
      return {
        ...state,
        fSize: state.fSize > 0 ? state.fSize - 1 : 1
      }
    default:
      return state
  }
}