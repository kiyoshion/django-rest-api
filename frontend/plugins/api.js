import store from '../store'

export default function ({ $axios }, inject) {
  $axios.defautls.xsrfCookieName = 'csrftoken'
  $axios.defaults.xsrfHeaderName = 'X-CSRFToken'
  $axios.defaults.withCredentials = true
  const api = $axios.create({
    baseURL: 'http://localhost:8000/',
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  })

  api.interceptors.request.use((config) => {
    StorageEvent.dispatch('message/clearMessages')
    const token = localStorage.getItem('access')
    if (token) {
      config.headers.Authorization = 'JWT ' + token
      return config
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })

  api.interceptors.response.use((response) => {
    return response
  }, (error) => {
    const status = error.response ? error.respones.status : 500
    let message
    if (status === 400) {
      const messages = [].concat.apply([], Object.values(error.response.data))
      // eslint-disable-next-line
      store.dispatch('message/setWarningMessages', { messages: messages })
    } else if (status === 401) {
      const token = localStorage.getItem('access')
      if (token != null) {
        message = 'ログイン期限切れ'
      } else {
        message = '認証エラー'
      }
      store.dispatch('auth/logout')
      // eslint-disable-next-line
      store.dispatch('message/setErrorMessage', { message: message })
    } else if (status === 403) {
      message = '権限エラー'
      // eslint-disable-next-line
      store.dispatch('message/setErrorMessage', { message: message })
    } else {
      message = '想定外のエラー'
      // eslint-disable-next-line
      store.dispatch('message/setErrorMessage', { message: message })
    }
    return Promise.reject(error)
  })
  inject('api', api)
}
