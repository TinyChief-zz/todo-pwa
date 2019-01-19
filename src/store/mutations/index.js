// import state from '../state'

export default {
  setTodayDate (state, payload) {
    state.todayDate = new Date()
  },
  createTask (state, payload) {
    state.userTasks.push(payload)
  },
  setUser (state, payload) {
    state.user = payload.user
    state.jwt = payload.jwt
  },
  setLoading (state, payload) {
    state.loading = payload
  },
  logoutUser (state, payload) {
    state.user = null
    state.userTasks = null
  },
  setUserTasks (state, payload) {
    // if (!state.userTasks) {
    //   state.userTasks = payload
    // }
    state.userTasks = payload
  },
  setTodayTasks (state, payload) {
    state.todayTasks = payload
  },
  addTaskToUser (state, payload) {
    state.userTasks.push(payload)
  },
  addTodayTask (state, payload) {
    state.todayTasks.push(payload)
  },
  initializeUserTasks (state, payload) {
    state.userTasks = []
    state.userTasks.push(payload)
  },
  toggleMenu (state) {
    state.toggleMenu = !state.toggleMenu
  },
  openNewTask (state) {
    state.openNewTask = !state.openNewTask
  }
}
