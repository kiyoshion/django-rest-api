export const state = () => ({
  username: '',
  isLoggedIn: ''
})

export const getters = {
  username: state => state.username,
  isLoggedIn: state => state.isLoggedIn
}

export const mutations = {
  set (state, payload) {
    state.username = payload.user.username
    state.isLoggedIn = true
  },
  clear (state) {
    state.username = ''
    state.isLoggedIn = false
  }
}

// export const actions = {
//   async login ({ commit }) {
//     return await this.$api.$post('/auth/jwt/create/', {
//       // eslint-disable-next-line
//       'username': payload.username,
//       // eslint-disable-next-line
//       'password': payload.password
//     }).then((res) => {
//       // eslint-disable-next-line
//       console.log('This is login', res.data.access)
//       localStorage.setItem('access', res.data.access)
//     })
//   }
// }

export const actions = {
  login (context, payload) {
    return this.$api.$post('/auth/jwt/crate/', {
      // eslint-disable-next-line
      'username': payload.username,
      // eslint-disable-next-line
      'password': payload.password
      // eslint-disable-next-line
    }).then(res => {
      console.log('This is login', res.data.access)
      localStorage.setItem('access', res.data.access)
      return context.dispatch('reload')
        .then(user => user)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response.data)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log(error.message)
      }
    })
  },
  logout (context) {
    localStorage.removeItem('access')
    context.commit('clear')
  },
  reload (context) {
    return this.$api.$get('/auth/users/me/')
    // eslint-disable-next-line
      .then(res => {
        const user = res.data
        // eslint-disable-next-line
        context.commit('set', { user: user })
        return user
      })
  }
}
