import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { deleteReview, viewReview } from '../api'
import messages from '../messages'
import StarRating from 'react-star-ratings'

class Review extends Component {
  constructor () {
    super()

    this.state = {
      review: null,
      shouldRedirect: false,
      redirectMessage: 'Something went wrong'
    }
  }

  onDeleteReview = () => {
    const { alert, history } = this.props
    deleteReview(this.props.match.params.id, this.props.user)
      .then(() => alert(messages.deleteReviewSuccess, 'success'))
      .then(() => history.push('/review'))
      .catch(() => this.setState({ shouldRedirect: true }))
  }

  componentDidMount () {
    const user = this.props.user
    const id = this.props.match.params.id
    viewReview(id, user)
      .then(response => this.setState({ review: response.data.review }))
      .catch(() => this.setState({ shouldRedirect: true }))
  }

  render () {
    const { review, shouldRedirect, redirectMessage } = this.state

    if (shouldRedirect) {
      return <Redirect to={{
        pathname: '/reviews',
        state: { message: redirectMessage }
      }} />
    }

    if (!review) {
      return <p>loading...</p>
    }

    const { name,
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
      comments
    } = review

    return (
      <div id="addMarginTop" className="jumbotron mx-4">
        <article>
          <Link to="/reviews">Back to all Reviews</Link>
          <br />
          <ul>
            <li><h3>Worker Name: {name} </h3></li>
            <li>Reviewer: {this.props.user.email}</li>
            <li>Phone: {phone}</li>
            <li>Address: {address}</li>
            <li>Vehicle: {vehicle}</li>
            <li>Shovel: {shovel}</li>
            <li>Payment: {payment}</li>
            <li>Respectful:
              <StarRating
                starRatedColor="red"
                rating={respectful}
                name="respectful"
              />
            </li>
            <li>Punctual:
              <StarRating
                starRatedColor="red"
                rating={punctual}
                name="punctual"
              />
            </li>
            <li>Honest:
              <StarRating
                starRatedColor="red"
                rating={honest}
              />
            </li>
            <li>Attitude:
              <StarRating
                starRatedColor="red"
                rating={attitude}
              /> </li>
            <li>Team Player:
              <StarRating
                starRatedColor="red"
                rating={teamPlayer}
              />
            </li>
            <li>Trustworthy:
              <StarRating
                starRatedColor="red"
                rating={trustworthy}
              />
            </li>
            <li>Open to Feedback:
              <StarRating
                starRatedColor="red"
                rating={openToFeedback}
              />
            </li>
            <li>Communication:
              <StarRating
                starRatedColor="red"
                rating={communication}
              />
            </li>
            <li>Comments: {comments}</li>
          </ul>
          <button onClick={this.onDeleteReview}>Delete</button>
          <Link to={`/reviews/${this.props.match.params.id}/edit`}>
            <button>Edit</button>
          </Link>
        </article>
      </div>
    )
  }
}

export default Review
