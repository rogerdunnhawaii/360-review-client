import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import PropTypes from 'prop-types'
// import { withStyles } from '@material-ui/core/styles'
// import AppBar from '@material-ui/core/AppBar'
// import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'
// import Button from '@material-ui/core/Button'
// import IconButton from '@material-ui/core/IconButton'

// const styles = {
//   root: {
//     flexGrow: 1
//   },
//   grow: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20
//   }
// }

const authenticatedOptions = (
  <React.Fragment>
    <div id="authenticatedOptions">
      <Link to="/reviews">Reviews</Link>
      <Link to="/change-password">Change Password</Link>
      <Link to="/sign-out">Sign Out</Link>
    </div>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <div className="d-flex justify-content-around" id="unauthenticatedOptions">
      <Link to="/sign-up">Sign Up</Link>
      <Link className="ml-3" to="/sign-in">Sign In</Link>
    </div>
  </React.Fragment>
)

const Header = ({ user }) => {
  return (
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <div className="navbar-brand col-sm-3 col-md-4 mr-0"><span className="lead">360 Review</span></div>

      { user && <span>Welcome,<br /> {user.email}</span>}

      { user ? authenticatedOptions : unauthenticatedOptions }
    </nav>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default Header
// withStyles(styles)(Header)
