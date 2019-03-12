import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
//
// const docStyle = document.documentElement.style
// const aElem = document.querySelector('button')
// const boundingClientRect = aElem.getBoundingClientRect()
//
// aElem.onmousemove = function (e) {
//   const x = e.clientX - boundingClientRect.left
//   const y = e.clientY - boundingClientRect.top
//
//   const xc = boundingClientRect.width / 2
//   const yc = boundingClientRect.height / 2
//
//   const dx = x - xc
//   const dy = y - yc
//
//   docStyle.setProperty('--rx', `${dy / -1}deg`)
//   docStyle.setProperty('--ry', `${dx / 10}deg`)
// }
//
// aElem.onmouseleave = function (e) {
//   docStyle.setProperty('--rx', '0')
//   docStyle.setProperty('--ry', '0')
// }
//
// aElem.onmousedown = function (e) {
//   docStyle.setProperty('--tz', '-25px')
// }
//
// document.body.onmouseup = function (e) {
//   docStyle.setProperty('--tz', '-12px')
// }

const alwaysOptions = (
  <React.Fragment>
    <button><Link to="/">Home</Link></button>
  </React.Fragment>
)

const authenticatedOptions = (
  <React.Fragment>
    <button><Link to="/reviews">Reviews</Link></button>
    <button><Link to="/change-password">Change Password</Link></button>
    <button><Link to="/sign-out">Sign Out</Link></button>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <button><Link to="/sign-up">Sign Up</Link></button>
    <button><Link to="/sign-in">Sign In</Link></button>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h3>Yelp, But For Snow Removal and Landscaping Workers</h3>
    <nav>
      { user && <span>Welcome, {user.email}</span>}
      { user ? authenticatedOptions : unauthenticatedOptions }
      { alwaysOptions }
    </nav>
  </header>
)

export default Header
