import React from 'react'

const ReviewForm = ({ handleChange, handleSubmit, review, CreateReviewFormStatus }) => (
  <form className='review-create' onSubmit={handleSubmit}>
    <label htmlFor="Name">Name:</label>
    <input
      type="string"
      name="Name"
      value={review.name}
      placeholder="Name"
      required
      onChange={handleChange}
    />
    <br />
    <label htmlFor="Phone">Phone:</label>
    <input
      type="string"
      name="Phone"
      value={review.phone}
      placeholder="Phone number" onChange={handleChange}
      required
    />
    <br />
    <label htmlFor="Address">Address:</label>
    <input
      type="string"
      name="Address"
      value={review.address}
      placeholder="Address"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="Vehicle">Vehicle:</label>
    <input
      type="string"
      name="Vehicle"
      value={review.vehicle}
      placeholder="yes or no"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="shovel">shovel:</label>
    <input
      type="string"
      name="shovel"
      value={review.shovel}
      placeholder="yes or no"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="payment">payment:</label>
    <input
      type="string"
      name="payment"
      value={review.payment}
      placeholder="Venmo Paypal or Cash app"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="respectful">respectful:</label>
    <input
      type="integer"
      name="respectful"
      value={review.respectful}
      placeholder="from 1 to 5"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="punctual">punctual:</label>
    <input
      type="integer"
      name="punctual"
      value={review.punctual}
      placeholder="from 1 to 5"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="honest">honest:</label>
    <input
      type="integer"
      name="honest"
      value={review.respectful}
      placeholder="from 1 to 5"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="attitude">attitude:</label>
    <input
      type="integer"
      name="attitude"
      value={review.attitude}
      placeholder="from 1 to 5"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="teamPlayer">Team Player?:</label>
    <input
      type="integer"
      name="teamPlayer"
      value={review.teamPlayer}
      placeholder="from 1 to 5"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="trustworthy">trustworthy:</label>
    <input
      type="integer"
      name="trustworthy"
      value={review.trustworthy}
      placeholder="from 1 to 5"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="openToFeedback">Open to Feedback:</label>
    <input
      type="integer"
      name="openToFeedback"
      value={review.openToFeedback}
      placeholder="from 1 to 5"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="communication">Communication:</label>
    <input
      type="integer"
      name="communication"
      value={review.communication}
      placeholder="from 1 to 5"
      onChange={handleChange}
    />
    <br />
    <label htmlFor="Comments">Comments:</label>
    <input
      type="text"
      name="comments"
      value={review.comments}
      placeholder="what are your thoughts on this worker"
      onChange={handleChange}
    />
    <br />
    <button type="submit">{CreateReviewFormStatus ? 'Create Review' : 'Update Review'}</button>
  </form>
)

export default ReviewForm
