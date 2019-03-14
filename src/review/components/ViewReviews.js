import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
// import apiUrl from '../../apiConfig'
import { viewReviews } from '../api'
import StarRating from 'react-star-ratings'

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
        this.setState({ reviews: response.data.reviews })
      })
  }

  render () {
    if (!this.state.reviews) {
      return <p>loading...</p>
    }

    return (
      <div id="addMarginTop">
        <h3> Reviews:</h3>
        <h3><Link onClick={this.props.toggleCreateReviewForm} to="/review-create">Create a Review</Link></h3>
        <ul>
          {this.state.reviews.map(review => (
            <div key={review.id} className="jumbotron mx-4">
              <h3>
                <Link to={`/reviews/${review.id}`}>Worker Name: {review.name}</Link>
              </h3>
              <li>Reviewer: {this.props.user.email}</li>
              <li>Phone: {review.phone}</li>
              <li>Address: {review.address}</li>
              <li>Vehicle: {review.vehicle}</li>
              <li>Shovel: {review.shovel}</li>
              <li>Payment: {review.payment}</li>
              <li>Respectful:
                <StarRating
                  starRatedColor="red"
                  rating={review.respectful}
                  name="respectful"
                />
              </li>
              <li>Punctual:
                <StarRating
                  starRatedColor="red"
                  rating={review.punctual}
                  name="punctual"
                />
              </li>
              <li>Honest:
                <StarRating
                  starRatedColor="red"
                  rating={review.honest}
                />
              </li>
              <li>Attitude:
                <StarRating
                  starRatedColor="red"
                  rating={review.attitude}
                /> </li>
              <li>Team Player:
                <StarRating
                  starRatedColor="red"
                  rating={review.teamPlayer}
                />
              </li>
              <li>Trustworthy:
                <StarRating
                  starRatedColor="red"
                  rating={review.trustworthy}
                />
              </li>
              <li>Open to Feedback:
                <StarRating
                  starRatedColor="red"
                  rating={review.openToFeedback}
                />
              </li>
              <li>Communication:
                <StarRating
                  starRatedColor="red"
                  rating={review.communication}
                />
              </li>
              <li>Comments: {review.comments}</li>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default Reviews
