// Write your code here

import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const ThemeContainer = isDarkTheme ? 'dark-container' : 'light-container'
      const homeHeading = isDarkTheme ? 'dark-head-home' : 'light-head-home'
      return (
        <div className={`home-container ${ThemeContainer}`}>
          <Navbar />
          <div className="flex-home-container">
            {isDarkTheme ? (
              <img
                alt="home"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                className="image-home"
              />
            ) : (
              <img
                alt="home"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                className="image-home"
              />
            )}

            <h1 className={homeHeading}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
