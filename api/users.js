import httpClient from './httpClient'

const END_POINT = 'api/users'

export default {
  getAll: async () => {
    const response = await httpClient.get(END_POINT)
    return response.data.users ? response.data.users : response.data
  },
}
