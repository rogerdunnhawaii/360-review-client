import React, { Component, Fragment } from 'react'
import Alert from 'react-bootstrap/Alert'
import { Redirect } from 'react-router'
import ReviewForm from './ReviewForm'
import { viewReview, editReview } from '../api'
import messages from '../messages'

class ReviewEdit extends Component {
  constructor () {
    super()

    this.state = {
      status: '',
      message: null,
      shouldRedirect: false,
      redirectMessage: ''
    }
  }

  componentDidMount () {
    viewReview(this.props.match.params.id, this.props.user)
      .then(response => this.setState({
        Customer: response.data.review.Customer,
        Worker: response.data.review.Worker,
        Price: response.data.review.Price,
        Address: response.data.review.Address,
        Date: response.data.review.Date,
        status: response.data.review.status
      }))
      .catch(() => this.setState(
        { shouldRedirect: true, redirectMessage: 'Review not found' }
      ))
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

  handleRadioButtons = event => {
    console.log(event.target.value)
    this.setState({
      status: event.target.value
    })
  }

  render () {
    const { handleChange, handleSubmit, handleRadioButtons } = this
    const { Customer, Worker, Price, Date, Address, message, shouldRedirect, redirectMessage, createdReviewId } = this.state

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
      <Fragment>
        { message && <Alert variant="danger">{message}</Alert> }
        <ReviewForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleRadioButtons={handleRadioButtons}
          review={{ Address, Customer, Worker, Price, Date, status }}
          CreateReviewFormStatus={false}
        />
      </Fragment>
    )
  }
}

export default ReviewEdit
