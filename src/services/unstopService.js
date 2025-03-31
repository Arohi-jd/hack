import axios from 'axios'
import { API_CONFIG } from '../config/api'

export const unstopService = {
  async getHackathons() {
    try {
      const response = await axios.get(`${API_CONFIG.UNSTOP_API_BASE_URL}/hackathons`, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_CONFIG.UNSTOP_API_KEY}`,
        },
      })
      return response.data
    } catch (error) {
      console.error('Error fetching hackathons:', error)
      throw error
    }
  },

  async getHackathonDetails(hackathonId) {
    try {
      const response = await axios.get(
        `${API_CONFIG.UNSTOP_API_BASE_URL}/hackathons/${hackathonId}`,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_CONFIG.UNSTOP_API_KEY}`,
          },
        },
      )
      return response.data
    } catch (error) {
      console.error('Error fetching hackathon details:', error)
      throw error
    }
  },
}
