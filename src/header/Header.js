import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
//
// const alwaysOptions = (
//   <React.Fragment>
//     <button><Link to="/">Home</Link></button>
//   </React.Fragment>
// )

const authenticatedOptions = (
  <React.Fragment>
    <div id="authenticatedOptions">
      <button><Link to="/reviews">Reviews</Link></button>
      <button><Link to="/change-password">Change Password</Link></button>
      <button><Link to="/sign-out">Sign Out</Link></button>
    </div>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <div className="d-flex justify-content-center" id="unauthenticatedOptions">
      <button className="flex-item"><Link to="/sign-up">Sign Up</Link></button>
      <button className="flex-item"><Link to="/sign-in">Sign In</Link></button>
    </div>
  </React.Fragment>
)

const Header = ({ user }) => (
  <header className="main-header">
    <h3>A Rating System for Snow Removal and Landscaping Workers</h3>
    <nav>
      <div>
        { user && <span>Welcome, {user.email}</span>}
      </div>
      <div>
        { user ? authenticatedOptions : unauthenticatedOptions }
        { /* alwaysOptions } */}
      </div>
    </nav>
  </header>
)

export default Header
