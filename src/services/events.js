import axios from 'axios'
import NProgress from 'nprogress'

const apiClient = axios.create({
    baseURL: `https://my.api.mockaroo.com`,
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

apiClient.interceptors.request.use(config => {
    NProgress.start()
    return config
})

apiClient.interceptors.response.use(response => {
    NProgress.done()
    return response
})

export function getEvents() {
    return apiClient.get('/events?key=9970b2f0').then(
        response => { return response.data }
    )
}