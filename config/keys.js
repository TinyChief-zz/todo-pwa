export default {
  url: process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000/api/'
    : 'https://netlify-todo-app.herokuapp.com/api'
    // : 'https://desolate-anchorage-48724.herokuapp.com/api'
}
