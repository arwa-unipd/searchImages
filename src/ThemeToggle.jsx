import { useAppContext } from './context'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useAppContext()
  return (
    <section className="toggle-container">
      <button
        type="button"
        className="dark-toggle"
        onClick={() => toggleTheme()}
      >
        {isDarkTheme ? (
          <BsFillSunFill className="toggle-icon" />
        ) : (
          <BsFillMoonFill className="toggle-icon" />
        )}
      </button>
    </section>
  )
}

export default ThemeToggle
