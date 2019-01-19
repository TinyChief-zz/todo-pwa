import TaskService from '@/services/TaskService'

// import router from '@/router'
import toast from '@/toast'

async function getUserTasks ({ commit }) {
  try {
    const tasks = await TaskService.getUserTasks({
      userId: this.state.user._id,
      jwt: this.state.jwt
    })
    const result = tasks.data.map((el, i) => {
      if (Object.keys(iconNames).includes(el.type || el.types)) {
        el.icon = iconNames[el.type || el.types]
      } else {
        el.icon = iconNames['default']
      }
      return el
    })
    commit('setUserTasks', result)
  } catch (err) {
    console.log(err)
  }
}
async function createTask ({ commit }, payload) {
  try {
    const response = await TaskService.addNewTask({
      task: {
        ...payload,
        userId: this.state.user._id
      },
      jwt: this.state.jwt
    })
    response.data.icon = iconNames[response.data.type]
    commit('addTaskToUser', response.data)
    // Check if need to add to todayTasks list
    const todayDay = new Date().getDate()
    const todayMonth = new Date().getMonth()
    const todayYear = new Date().getFullYear()
    const taskDate = new Date(response.data.date)

    if (
      todayDay === taskDate.getDate() &&
      todayMonth === taskDate.getMonth() &&
      todayYear === taskDate.getFullYear()
    ) {
      commit('addTodayTask', response.data)
    }
    commit('openNewTask')
    toast.taskSuccess()
  } catch (err) {
    commit('openNewTask')
    toast.taskError()
    console.error(err)
  }
}

function getTodayTasks ({ commit }) {
  const todayDay = new Date().getDate()
  const todayMonth = new Date().getMonth()
  const todayYear = new Date().getFullYear()

  const result = this.state.userTasks.filter(task => {
    const taskDate = new Date(task.date)
    // Day of the month
    const taskDay = taskDate.getDate()
    const taskMonth = taskDate.getMonth()
    const taskYear = taskDate.getFullYear()

    if (
      todayDay === taskDay &&
      todayMonth === taskMonth &&
      todayYear === taskYear
    ) {
      return true
    }
  })
  commit('setTodayTasks', result)
}

function openNewTask ({ commit }) {
  commit('openNewTask')
}

export { getUserTasks, createTask, getTodayTasks, openNewTask }

const iconNames = {
  'работа': 'fal fa-briefcase',
  'еда': 'fal fa-utensils',
  'встреча': 'fal fa-comments-alt',
  'учеба': 'fal fa-graduation-cap',
  'развлечение': 'fal fa-smile',
  'покупки': 'fal fa-shopping-cart',
  'отдых': 'fal fa-umbrella-beach',
  'default': 'fal fa-edit'
}
