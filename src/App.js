import React, { Component } from 'react'
import './App.scss'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from './auth/components/AuthenticatedRoute'
import Header from './header/Header'
import SignUp from './auth/components/SignUp'
import SignIn from './auth/components/SignIn'
import SignOut from './auth/components/SignOut'
import ChangePassword from './auth/components/ChangePassword'
import ViewReviews from './review/components/ViewReviews'
import Review from './review/components/Review'
import CreateReview from './review/components/CreateReview'
import UpdateReview from './review/components/UpdateReview'

import Alert from 'react-bootstrap/Alert'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: [],
      showingAlert: false
    }
  }

  handleClickShowAlert () {
    this.setState({
      showingAlert: true
    })

    setTimeout(() => {
      this.setState({
        showingAlert: false
      })
    }, 2000)
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = (message, type) => {
    this.setState({ alerts: [...this.state.alerts, { message, type }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <React.Fragment>
        <Header user={user} />
        {alerts.map((alert, index) => (
          <Alert key={index} dismissible variant={alert.type}>
            <Alert.Heading>
              {alert.message}
            </Alert.Heading>
          </Alert>
        ))}
        <main className="container">
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/reviews' render={() => (
            <ViewReviews alert={this.alert} user={user} toggleCreateReviewForm={this.toggleCreateReviewForm}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/review-create' render={() => (
            <CreateReview alert={this.alert} user={user} CreateReviewFormStatus={this.state.CreateReviewFormStatus}
            />
          )} />
          <AuthenticatedRoute user={user} exact path='/reviews/:id' render={({ match }) => (
            <Review match={match} alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} exact path='/reviews/:id/edit' render={({ match }) => (
            <UpdateReview match={match} alert={this.alert} user={user} />
          )} />
        </main>
      </React.Fragment>
    )
  }
}

export default App
