import AuthenticationService from '@/services/AuthenticationService'
// import UserDataService from '@/services/UserDataService'
// import TaskService from '@/services/TaskService'

import router from '@/router'
import toast from '@/toast'

async function signUserUp ({ commit }, payload) {
  commit('setLoading', true)
  try {
    await AuthenticationService.register({
      email: payload.email,
      password: payload.password,
      name: payload.name,
      phone: payload.phone
    })
    toast.registerSuccess()
    router.push({
      name: 'Login'
    })
    commit('setLoading', false)
  } catch (error) {
    commit('setLoading', false)
    console.log(error)
    this.error = error.response.data.error
    if (this.error === 'You must provide a valid email') {
      toast.registerEmailError()
    } else if (this.error === 'You must provide a valid password') {
      toast.registerPasswordError()
    } else if (this.error === 'This email account already in use.') {
      toast.registerEmailRepeat()
    }
  }
}

async function signUserIn ({ commit }, payload) {
  commit('setLoading', true)
  // SIGN IN USER
  try {
    const response = await AuthenticationService.login({
      email: payload.email,
      password: payload.password
    })
    const userData = response.data.user
    commit('setUser', { user: userData, jwt: response.data.token })
    // ROUTER GO TO HOME PAGE
    for (let key in userData) {
      window.localStorage.setItem(key, userData[key])
    }
    window.localStorage.setItem('jwt', response.data.token)
    const name = userData.name
    toast.loginSuccess(name)
    router.push({
      name: 'Home'
    })
  } catch (error) {
    console.log(error)
    toast.loginError()
  }
}

function setUserFromStorage ({ commit }, payload) {
  commit('setUser', { user: payload.user, jwt: payload.jwt })
}

function logoutUser ({ commit }, payload) {
  toast.logoutUser(false)
  setTimeout(() => {
    document
      .querySelector('.logout')
      .addEventListener('click', function () {
        commit('toggleMenu')
        commit('logoutUser', payload)
        for (let key in window.localStorage) {
          localStorage.removeItem(key)
        }
        router.push({ name: 'Login' })
      })
  }, 100)
}

export { signUserIn, signUserUp, logoutUser, setUserFromStorage }
