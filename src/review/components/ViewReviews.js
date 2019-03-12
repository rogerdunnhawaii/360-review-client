import React, { Component, Fragment } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
// import apiUrl from '../../apiConfig'
import { viewReviews } from '../api'

class Reviews extends Component {
  constructor (props) {
    super(props)
    this.state = {
      reviews: null
    }
  }

  componentDidMount () {
    const { user } = this.props

    viewReviews(user)
      .then(response => {
        console.log(response)
        this.setState({ reviews: response.data.reviews })
      })
  }

  render () {
    if (!this.state.reviews) {
      return <p>loading...</p>
    }

    return (
      <Fragment>
        <h3> Reviews:</h3>
        <Link onClick={this.props.toggleCreateReviewForm} to="/review-create">Create a Review</Link>
        <ul>
          {this.state.reviews.map(review => (
            <div key={review.id} className="jumbotron mx-4">
              Worker Name:
              <h2>
                <Link to={`/reviews/${review.id}`}>{review.name}</Link>
              </h2>
              <li>Reviewer: {this.props.user.email}</li>
              <li>Phone: {review.phone}</li>
              <li>Address: {review.address}</li>
              <li>Vehicle: {review.vehicle}</li>
              <li>Shovel: {review.shovel}</li>
              <li>Payment: {review.payment}</li>
              <li>Respectful: {review.respectful}</li>
              <li>Punctual: {review.punctual}</li>
              <li>Honest: {review.honest}</li>
              <li>Attitude: {review.attitude}</li>
              <li>Team Player: {review.teamPlayer}</li>
              <li>Trustworthy: {review.trustworthy}</li>
              <li>Open to Feedback: {review.openToFeedback}</li>
              <li>Communication: {review.communication}</li>
              <li>Comments: {review.comments}</li>
            </div>
          ))}
        </ul>
      </Fragment>
    )
  }
}

export default Reviews
