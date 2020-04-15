import axios from 'axios'

export function getEvents() {
    return axios.get('https://my.api.mockaroo.com/events?key=9970b2f0').then(
        response => { return response.data }
    )
}