<template>
  <div>
    <h1 class="text-2xl mb-2">Users</h1>
    <ul data-test-id="users">
      <li v-for="user in allUsers" :data-test-id="`user-${user.id}`" v-bind:key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'users-index',

  data() {
    return {
      users: [],
    }
  },
  created() {
    this.getAllUsers()
  },
  computed: {
    ...mapGetters(['allUsers']),
  },
  methods: {
    ...mapActions(['getAllUsers']),
  },
}
</script>
