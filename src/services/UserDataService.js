import Api from '@/services/Api'

export default {
  updateTasksList (credentials) {
    return Api().post('update', credentials)
  }
}
