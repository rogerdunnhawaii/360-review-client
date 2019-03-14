import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
}

const authenticatedOptions = (
  <React.Fragment>
    <div id="authenticatedOptions">
      <h5><Link to="/reviews">Reviews</Link></h5>
      <h5><Link to="/change-password">Change Password</Link></h5>
      <h5><Link to="/sign-out">Sign Out</Link></h5>
    </div>
  </React.Fragment>
)

const unauthenticatedOptions = (
  <React.Fragment>
    <div className="d-flex justify-content-center" id="unauthenticatedOptions">
      <h5><Link to="/sign-up">Sign Up</Link></h5>
      <h5><Link to="/sign-in">Sign In</Link></h5>
    </div>
  </React.Fragment>
)

const Header = ({ user }) => {
  return (
    <div className="main-header">
      <AppBar>
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <div>
              { user && <span>Welcome,<br /> {user.email}</span>}
            </div>
          </IconButton>
          <Typography variant="h3" color="inherit">
          A Rating System for Snow Removal and Landscaping Workers
          </Typography>
          <Button color="inherit">
            { user ? authenticatedOptions : unauthenticatedOptions }
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Header)
