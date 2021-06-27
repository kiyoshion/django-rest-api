import store from '../store'

export default (context) => {
  context.app.router.beforeEach((to, form, next) => {
    const isLoggedIn = store.getters['auth/isLoggedIn']
    const token = localStorage.getItem('access')
    console.log(isLoggedIn)
    console.log(token)
  })
}
