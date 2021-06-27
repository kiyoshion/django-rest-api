<template>
  <div class="flex flex-col">
    <h1>Login</h1>
    <form class="flex flex-col" action="" @submit.prevent="login">
      <input v-model="form.username" type="text">
      <input v-model="form.password" type="password">
      <button type="submit">
        Login
      </button>
    </form>
  </div>
</template>

<script>

export default {
  middleware ({ store }) {
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async login ({ store }) {
      try {
        await this.$auth.loginWith('local', {
          data: this.form
        }).then((res) => {
          console.log(res.data)
          console.log(this.$store.$auth.user)
          return res
        })
        if (this.$auth.loggedIn) {
          console.log('LoggedIn!')
        }
      } catch (err) {
        console.log(err.message)
      }
    }
    // login () {
    //   this.$api.$post('/auth/jwt/crate/', {
    //   // eslint-disable-next-line
    //   'username': this.form.username, 'password': this.form.password
    //   // eslint-disable-next-line
    //   }).then(res => {
    //     console.log('This is login', res.data.access)
    //     localStorage.setItem('access', res.data.access)
    //   })
    // }
  }
}
</script>
