import { createContext, useEffect, useState } from "react"
import {
  ISDARK,
  _clearData,
  _retrieveData,
  _storeData,
} from "@/lib/utils/localstorage"

export const ThemeContext = createContext()
const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(
    _retrieveData(ISDARK) ? _retrieveData(ISDARK) : true
  )

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    _storeData(ISDARK, !isDark)
    setIsDark((isDark) => !isDark)
  }

  useEffect(() => {
    if (_retrieveData(ISDARK) === null) {
      _storeData(ISDARK, false)
      setIsDark(false)
      // document.documentElement.classList.add("dark")
    } else if (_retrieveData(ISDARK)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDark(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider