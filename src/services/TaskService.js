import Api from '@/services/Api'

export default {
  addNewTask (credentials) {
    return Api().post('tasks/', credentials.task, {
      headers: {
        Authorization: credentials.jwt
      }
    })
  },
  getUserTasks (credentials) {
    return Api().get(`tasks/${credentials.userId}`, {
      headers: {
        Authorization: credentials.jwt
      }
    })
  }
}
