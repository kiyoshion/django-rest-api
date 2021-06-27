export const state = () => ({
  error: '',
  warnings: [],
  info: ''
})

export const getters = {
  error: state => state.error,
  warnings: state => state.warnings,
  info: state => state.info
}

export const mutations = {
  set (state, payload) {
    if (payload.error) {
      state.error = payload.error
    }
    if (payload.warnings) {
      state.warnings = payload.warnings
    }
    if (payload.info) {
      state.info = payload.info
    }
  },
  clear (state) {
    state.error = ''
    state.warnings = ''
    state.info = ''
  }
}

export const actions = {
  setErrorMessage (context, payload) {
    context.commit('clear')
    // eslint-disable-next-line
    context.commit('set', {'error': payload.message})
  },
  setWarningMessages (context, payload) {
    context.commit('clear')
    // eslint-disable-next-line
    context.commit('set', { 'warnings': payload.messages })
  },
  setInfoMessage (context, payload) {
    context.commit('clear')
    // eslint-disable-next-line
    context.commit('set', { 'info': payload.message })
  },
  clearMessage (context) {
    context.commit('clear')
  }
}
