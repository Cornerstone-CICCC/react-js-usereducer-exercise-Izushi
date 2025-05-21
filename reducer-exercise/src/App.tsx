import { useReducer } from "react"
import { changeStyleReducer } from "./reducers/changeStyle"

const App = () => {
  const initialState = {
    isDark: false,
    fSize: 16
  }

  const [state, dispatch] = useReducer(changeStyleReducer, initialState)

  const handleToggleDarkMode = () => {
    dispatch({ type: "TOGGLE_DARK_MODE" })
  }

  const handleIncreaseFontSize = () => {
    dispatch({ type: "INCREASE_FONT_SIZE" })
  }

  const handleDecreaseFontSize = () => {
    dispatch({ type: "DECREASE_FONT_SIZE" })
  }


  return (
    <div className={`min-h-screen p-8 transition-colors flex flex-col items-center justify-center ${state.isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <h1 className="text-2xl mb-4" style={{ fontSize: `${state.fSize}px` }}>
        Hello, World!
      </h1>
      <div className="flex flex-low gap-4">
        <button className="px-4 py-2 rounded outline cursor-pointer" onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
        <button className="px-4 py-2 rounded outline cursor-pointer" onClick={handleIncreaseFontSize}>Increase Font Size</button>
        <button className="px-4 py-2 rounded outline cursor-pointer" onClick={handleDecreaseFontSize}>Decrease Font Size</button>
      </div>
    </div>
  )
}

export default App