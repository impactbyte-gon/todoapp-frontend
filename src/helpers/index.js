import axios from 'axios'

export const request = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:8000',
  timeout: 1000,
  headers: { Authorization: 'Bearer jwt_token_here' }
})
