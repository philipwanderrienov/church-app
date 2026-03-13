import axios from 'axios'

// Create a pre-configured instance of axios
const apiClient = axios.create({
  // Use the environment variable for the base URL
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Export an object with methods for each API endpoint
export default {
  getCongregations() {
    return apiClient.get('/congregations')
  },
  // You can add other API calls here as your app grows
  // getCongregation(id) { ... }
  // createCongregation(data) { ... }
}
