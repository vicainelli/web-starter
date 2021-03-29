import axios from 'axios'

const END_POINT = 'api/users'

export default {
  getAll: async () => {
    const response = await axios.get(END_POINT)
    return response.data
  },
}
