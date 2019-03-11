import apiUrl from '../apiConfig'
import axios from 'axios'

export const createReview = (data, user) => {
  return axios({
    url: apiUrl + '/reviews',
    method: 'POST',
    headers: {
      Authorization: `Token token=${user.token}`
    },
    data: { review: data }
  })
}

export const viewReviews = (user) => {
  return axios({
    url: apiUrl + '/reviews',
    method: 'GET',
    headers: {
      Authorization: `Token token=${user.token}`
    }
  })
}

export const viewReview = (id, user) => {
  return axios({
    url: apiUrl + '/reviews/' + id,
    method: 'GET',
    headers: {
      Authorization: `Token token=${user.token}`
    }
  })
}

export const deleteReview = (id, user) => {
  return axios({
    url: apiUrl + '/reviews/' + id,
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${user.token}`
    }
  })
}

export const editReview = (id, data, user) => {
  return axios({
    url: apiUrl + '/reviews/' + id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${user.token}`
    },
    data: {
      review: data }
  })
}
