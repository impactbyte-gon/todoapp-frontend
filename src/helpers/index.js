import axios from 'axios'

const token = localStorage.getItem('token') || ''

export const request = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API_URL || 'http://localhost:8000',
  timeout: 1000,
  headers: {
    Authorization: `Bearer ${token}`
  }
})
