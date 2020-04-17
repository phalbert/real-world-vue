import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
  baseURL: `https://5d6516c05b26ae001489eb85.mockapi.io/api/v1`,
  withCredentials: false, // This is the default
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 10000
})

apiClient.interceptors.request.use(config => {
  NProgress.start()
  return config
})

apiClient.interceptors.response.use(response => {
  NProgress.done()
  return response
})

export default {
  getEvents(page, perPage) {
    return apiClient.get('/events?page=' + perPage + ' &limit=' + page)
  },
  getEvent(id) {
    return apiClient.get('/events/' + id)
  },
  postEvent(event) {
    return apiClient.post('/events', event)
  }
}
