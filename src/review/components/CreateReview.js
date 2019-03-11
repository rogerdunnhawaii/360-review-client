// code taken from Sign In

import React, { Component, Fragment } from 'react'
import { withRouter, Link } from 'react-router-dom'
import ReviewForm from './ReviewForm'
import { createReview } from '../api'
import messages from '../messages'

class CreateReview extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      phone: '',
      address: '',
      vehicle: '',
      shovel: '',
      payment: '',
      respectful: '',
      punctual: '',
      honest: '',
      attitude: '',
      team_player: '',
      trustworthy: '',
      open_to_feedback: '',
      communication: '',
      comments: '',
      shouldRedirect: false
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { alert, history, user } = this.props

    createReview(this.state, user)
      .then(response => this.setState({ createdReviewId: response.data.job.id }))
      .then(() => {
        alert(messages.createReviewSuccess, 'success')
      })
      .then(() => history.push(`/reviews/${this.state.createdReviewId}`))
      .catch(error => {
        console.error(error)
        this.setState({
          name: '',
          phone: '',
          address: '',
          vehicle: '',
          shovel: '',
          payment: '',
          respectful: '',
          punctual: '',
          honest: '',
          attitude: '',
          team_player: '',
          trustworthy: '',
          open_to_feedback: '',
          communication: '',
          comments: ''
        })
        alert(messages.createReviewFailure, 'danger')
      })
  }

  render () {
    const {
      name,
      phone,
      address,
      vehicle,
      shovel,
      payment,
      respectful,
      punctual,
      honest,
      attitude,
      teamPlayer,
      trustworthy,
      openToFeedback,
      communication,
      comments } = this.state

    const { handleChange, handleSubmit } = this

    return (
      <Fragment>
        <h3> Create a new review</h3>
        <Link to="/reviews">Back to all Reviews</Link>
        <br />

        <ReviewForm handleChange={handleChange} handleSubmit={handleSubmit}
          review={{ name,
            phone,
            address,
            vehicle,
            shovel,
            payment,
            respectful,
            punctual,
            honest,
            attitude,
            teamPlayer,
            trustworthy,
            openToFeedback,
            communication,
            comments }} CreateReviewFormStatus={true} />
      </Fragment>
    )
  }
}

export default withRouter(CreateReview)
