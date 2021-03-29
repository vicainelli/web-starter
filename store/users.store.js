import httpClient from '@/api/httpClient'
const END_POINT = 'api/users'

const state = {
  isLoading: false,
  data: [],
}

const getters = {
  allUsers: (state) => state.data,
  isLoading: (state) => state.isLoading,
}

const actions = {
  getAllUsers: async ({ commit }) => {
    commit('SET_LOADING', true)
    const response = await httpClient.get(END_POINT)
    commit('SET_USERS', response.data.users ? response.data.users : response.data)
    commit('SET_LOADING', false)
  },
}

const mutations = {
  SET_USERS: (state, payload) => (state.data = payload),
  SET_LOADING: (state, payload) => (state.isLoading = payload),
}

export default {
  namespace: true,
  state,
  getters,
  actions,
  mutations,
}
