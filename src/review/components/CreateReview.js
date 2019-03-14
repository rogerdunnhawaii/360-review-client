// code taken from Sign In

import React, { Component } from 'react'
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
      respectful: 0,
      punctual: 0,
      honest: 0,
      attitude: 0,
      teamPlayer: 0,
      trustworthy: 0,
      openToFeedback: 0,
      communication: 0,
      comments: '',
      shouldRedirect: false
    }
  }

  changeRating = (newRating, name) => {
    this.setState({
      [name]: newRating
    })
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
      .then(response => this.setState({ createdReviewId: response.data.review.id }))
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
          respectful: 0,
          punctual: 0,
          honest: 0,
          attitude: 0,
          teamPlayer: 0,
          trustworthy: 0,
          openToFeedback: 0,
          communication: 0,
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

    const { handleChange, handleSubmit, changeRating } = this

    return (
      <div id="addMarginTop" className="jumbotron mx-4">
        <h3> Create a new review</h3>
        <h2><Link to="/reviews">Back to all Reviews</Link></h2>
        <br />

        <ReviewForm handleChange={handleChange} handleSubmit={handleSubmit} changeRating={changeRating}
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
      </div>
    )
  }
}

export default withRouter(CreateReview)
