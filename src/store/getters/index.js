export default {
  menuStatus (state) {
    return state.toggleMenu
  },
  userData (state) {
    return state.user
  },
  userTasks (state) {
    return state.userTasks
  },
  todayTasks (state) {
    const todayDay = new Date().getDate()
    const todayMonth = new Date().getMonth()
    const todayYear = new Date().getFullYear()
    if (!state.userTasks) {
      return ['Loading']
    }
    return state.userTasks.filter((task) => {
      const taskDate = new Date(task.date)
      // Day of the month
      const taskDay = taskDate.getDate()
      const taskMonth = taskDate.getMonth()
      const taskYear = taskDate.getFullYear()

      if ((todayDay === taskDay) && (todayMonth === taskMonth) && (todayYear === taskYear)) {
        return true
      }
    })
  },
  userTask (state) {
    return (taskId) => {
      return state.userTasks.find((task) => {
        return task.id === taskId
      })
    }
  },
  openNewTask (state) {
    return state.openNewTask
  },
  getTodayDate (state) {
    return state.todayDate
  }
}
