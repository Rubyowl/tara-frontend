import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const postRequest = payload => api.post(`/requests`, payload)
export const getAllReleases = () => api.get(`/releases`)
export const getAllRequests = () => api.get(`/requests`)
//xport const updateMovieById = (id, payload) => api.put(`/movie/${id}`, payload)
//export const deleteMovieById = id => api.delete(`/movie/${id}`)
//export const getMovieById = id => api.get(`/movie/${id}`)

const apis = {
    getAllReleases,
    getAllRequests,
    postRequest
}

export default apis