// Write your code herea
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutheadingChange = isDarkTheme ? 'dark-about' : 'light-about'
      const changeAboutTheme = isDarkTheme
        ? 'about-dark-con'
        : 'about-light-con'

      return (
        <div className={changeAboutTheme}>
          <Navbar />
          <div className="about-con">
            {isDarkTheme ? (
              <img
                alt="about"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                className="about-image"
              />
            ) : (
              <img
                alt="about"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                className="about-image"
              />
            )}

            <h1 className={aboutheadingChange}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
