import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use(config => {
  const user = localStorage.getItem('medicare_user')
  if (user) {
    // config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export const getDoctors = () => api.get('/doctors')
export const getDoctor = (id) => api.get(`/doctors/${id}`)
export const getAppointments = () => api.get('/appointments')
export const createAppointment = (data) => api.post('/appointments', data)
export const getArticles = () => api.get('/articles')
export const getSymptoms = () => api.get('/symptoms')
export const getDepartments = () => api.get('/departments')
export const getPharmacy = () => api.get('/pharmacy')
export const login = (data) => api.post('/auth/login', data)
export const register = (data) => api.post('/auth/register', data)
export const healthCheck = () => api.get('/health')

export default api
