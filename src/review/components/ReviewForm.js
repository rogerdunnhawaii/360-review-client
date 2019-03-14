import React from 'react'
import StarRating from 'react-star-ratings'

const ReviewForm = ({ handleChange, handleSubmit, changeRating, review, CreateReviewFormStatus }) => (
  <form className='review-create' onSubmit={handleSubmit}>
    <label htmlFor="Name">Name:</label>
    <input
      type="string"
      name="name"
      maxLength="30"
      value={review.name}
      placeholder="Name"
      required
      onChange={handleChange}
    />
    <br />
    <label htmlFor="Phone">Phone:</label>
    <input
      type="string"
      name="phone"
      maxLength="15"
      value={review.phone}
      placeholder="Phone number" onChange={handleChange}
      required
    />
    <br />
    <label htmlFor="Address">Address:</label>
    <input
      type="string"
      name="address"
      maxLength="140"
      value={review.address}
      placeholder="Address"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="Vehicle">Vehicle:</label>
    <input
      type="string"
      name="vehicle"
      maxLength="3"
      value={review.vehicle}
      placeholder="yes or no"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="shovel">shovel:</label>
    <input
      type="string"
      name="shovel"
      maxLength="3"
      value={review.shovel}
      placeholder="yes or no"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="payment">payment:</label>
    <input
      type="string"
      name="payment"
      maxLength="10"
      value={review.payment}
      placeholder="Venmo Paypal or Cash app"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="respectful">respectful:</label>
    <StarRating
      rating={review.respectful}
      starRatedColor="red"
      value={review.respectful}
      numberOfStars={5}
      changeRating={ changeRating }
      onChange={handleChange}
      name="respectful"
    />
    <br />
    <label htmlFor="punctual">punctual:</label>
    <StarRating
      rating={review.punctual}
      value={review.punctual}
      numberOfStars={5}
      starRatedColor="red"
      changeRating={ changeRating }
      onChange={handleChange}
      name="punctual"
    />
    <br />
    <label htmlFor="honest">honest:</label>
    <StarRating
      rating={review.honest}
      value={review.honest}
      numberOfStars={5}
      starRatedColor="red"
      changeRating={ changeRating }
      onChange={handleChange}
      name="honest"
    />
    <br />
    <label htmlFor="attitude">attitude:</label>
    <StarRating
      rating={review.attitude}
      value={review.attitude}
      starRatedColor="red"
      numberOfStars={5}
      changeRating={ changeRating }
      onChange={handleChange}
      name="attitude"
    />
    <br />
    <label htmlFor="teamPlayer">Team Player?:</label>
    <StarRating
      rating={review.teamPlayer}
      value={review.teamPlayer}
      starRatedColor="red"
      numberOfStars={5}
      changeRating={ changeRating }
      onChange={handleChange}
      name="teamPlayer"
    />
    <br />
    <label htmlFor="trustworthy">trustworthy:</label>
    <StarRating
      rating={review.trustworthy}
      value={review.trustworthy}
      starRatedColor="red"
      numberOfStars={5}
      changeRating={ changeRating }
      onChange={handleChange}
      name="trustworthy"
    />
    <br />
    <label htmlFor="openToFeedback">Open to Feedback:</label>
    <StarRating
      rating={review.openToFeedback}
      value={review.openToFeedback}
      starRatedColor="red"
      numberOfStars={5}
      changeRating={ changeRating }
      onChange={handleChange}
      name="openToFeedback"
    />
    <br />
    <label htmlFor="communication">Communication:</label>
    <StarRating
      rating={review.communication}
      value={review.communication}
      starRatedColor="red"
      numberOfStars={5}
      changeRating={ changeRating }
      onChange={handleChange}
      name="communication"
    />
    <br />
    <label htmlFor="Comments">Comments:</label>
    <input
      type="text"
      name="comments"
      maxLength="140"
      value={review.comments}
      placeholder="what are your thoughts on this worker"
      onChange={handleChange}
    />
    <br />
    <button type="submit">{CreateReviewFormStatus ? 'Create Review' : 'Update Review'}</button>
  </form>
)

export default ReviewForm
