// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      const themeChange = () => {
        toggleTheme()
      }
      const navbarDark = isDarkTheme ? 'dark-theme' : 'light-theme'
      const linkComponents = isDarkTheme
        ? 'dark-theme-link'
        : 'light-theme-link'

      return (
        <div className={navbarDark}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
          )}

          <div className="linking-comp">
            <Link to="/" className="link">
              <h1 className={linkComponents}>Home</h1>
            </Link>
            <Link to="/about" className="link">
              <h1 className={linkComponents}>About</h1>
            </Link>
          </div>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
              alt="dark theme"
              className="theme"
              onClick={themeChange}
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
              alt="dark theme"
              className="theme"
              onClick={themeChange}
            />
          )}
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
