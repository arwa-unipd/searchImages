import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

const getInitialDarkMode = () => {
  const preferDarkMode = window.matchMedia(
    '(prefers-color-scheme:dark)'
  ).matches
  const storedDarkMode = localStorage.getItem('darkTheme')
  if (storedDarkMode === null) {
    return preferDarkMode
  }

  return storedDarkMode === 'true'
}

export const useAppContext = () => {
  return useContext(AppContext)
}
const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
  const [searchTerm, setSearchTerm] = useState('bird')
  const toggleTheme = () => {
    const newTheme = !isDarkTheme
    setIsDarkTheme(newTheme)
    localStorage.setItem('darkTheme', newTheme)
  }
  useEffect(() => {
    const body = document.querySelector('body')
    body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])
  return (
    <AppContext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        searchTerm,
        setSearchTerm,
        getInitialDarkMode,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider
