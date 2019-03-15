import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert'
import { Redirect } from 'react-router'
import ReviewForm from './ReviewForm'
import { viewReview, editReview } from '../api'
import messages from '../messages'
import { Link } from 'react-router-dom'

class ReviewEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      status: '',
      message: null,
      shouldRedirect: false,
      redirectMessage: '',
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
    }
  }

  componentDidMount () {
    this.mounted = true
    viewReview(this.props.match.params.id, this.props.user)
      .then(response => {
        if (this.mounted) {
          this.setState({
            name: response.data.review.name,
            phone: response.data.review.phone,
            address: response.data.review.address,
            vehicle: response.data.review.vehicle,
            shovel: response.data.review.shovel,
            payment: response.data.review.payment,
            respectful: response.data.review.respectful,
            punctual: response.data.review.punctual,
            honest: response.data.review.honest,
            attitude: response.data.review.attitude,
            teamPlayer: response.data.review.teamPlayer,
            trustworthy: response.data.review.trustworthy,
            openToFeedback: response.data.review.openToFeedback,
            communication: response.data.review.communication,
            comments: response.data.review.comments
          })
        }
      })
      .catch(() => this.setState(
        { shouldRedirect: true, redirectMessage: 'Review not found' }
      ))
  }

  componentWillUnmount () {
    this.mounted = false
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { alert, history, user } = this.props

    editReview(this.props.match.params.id, this.state, user)
      .then(response => this.setState({ createdReviewId: response.data.review.id }))
      .then(() => {
        alert(messages.updateReviewSuccess, 'success')
      })
      .then(() => history.push('/reviews'))
      .catch(() => this.setState({ shouldRedirect: true }))
  }

  changeRating = (newRating, name) => {
    this.setState({
      [name]: newRating
    })
  }

  render () {
    const { handleChange, handleSubmit, changeRating } = this
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
      comments,
      message, shouldRedirect, redirectMessage, createdReviewId } = this.state

    if (shouldRedirect) {
      return <Redirect to ={{
        pathname: '/reviews',
        state: { message: redirectMessage }
      }} />
    }

    if (createdReviewId) {
      return <Redirect to={`/reviews/${createdReviewId}`} />
    }

    return (
      <div id="addMarginTop" className="jumbotron mx-4">
        { message && <Alert variant="danger">{message}</Alert> }
        <Link to={`/reviews/${this.props.match.params.id}`}>Back to Review</Link>
        <br />
        <h3> Update Review:</h3>
        <ReviewForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          changeRating={changeRating}
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
            comments }}
          CreateReviewFormStatus={false}
        />
      </div>
    )
  }
}

export default ReviewEdit
