import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { deleteReview, viewReview } from '../api'
import messages from '../messages'

class Review extends Component {
  constructor () {
    super()

    this.state = {
      Review: null,
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
    if (this.state.Review === null) {
      this.setState({ shouldRedirect: true })
    } else {
      const id = this.props.match.params.id
      viewReview(id, user)
        .then(response => this.setState({ review: response.data.review }))
        .catch(() => this.setState({ shouldRedirect: true }))
    }
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

    console.log('this.props', this.props)

    return (
      <article>
        <ul>
          <li>Name: {name} </li>
          <li>Phone: {phone}</li>
          <li>Address: {address}</li>
          <li>Vehicle: {vehicle}</li>
          <li>Shovel: {shovel}</li>
          <li>Payment: {payment}</li>
          <li>Respectful: {respectful}</li>
          <li>Punctual: {punctual}</li>
          <li>Honest: {honest}</li>
          <li>Attitude: {attitude}</li>
          <li>Team Player: {teamPlayer}</li>
          <li>Trustworthy: {trustworthy}</li>
          <li>Open to Feedback: {openToFeedback}</li>
          <li>Communication: {communication}</li>
          <li>Comments: {comments}</li>
        </ul>
        <button onClick={this.onDeleteReview}>Delete</button>
        <Link to={`/reviews/${this.props.match.params.id}/edit`}>
          <button>Edit</button>
        </Link>
      </article>
    )
  }
}

export default Review
