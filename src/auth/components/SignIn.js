import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { signIn } from '../api'
import messages from '../messages'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signInSuccess, 'success'))
      .then(() => history.push('/reviews'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="auth-div px-4">
        <form className='auth-form' onSubmit={this.onSignIn}>
          {/* <h2>Sign In</h2> */}
          <label htmlFor="email">Email</label>
          <input
            required
            type="email"
            name="email"
            value={email}
            placeholder="email@example.com"
            onChange={this.handleChange}
          />
          <label htmlFor="password">Password</label>
          <input
            required
            name="password"
            value={password}
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(SignIn)
