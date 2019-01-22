import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import { store } from '@/store/index.js'
import vueCalendar from 'vue2-simple-calendar'
import '@/assets/vue-calendar.css'
import '@/assets/izitoast.min.css'
import '@/assets/fontawesome/css/all.css'

import '@/registerServiceWorker'

Vue.config.productionTip = false

Vue.use(vueCalendar, {
  firstDay: 0,
  showLimit: 3,
  locale: 'en',
  fullDayNames: false,
  fullMonthNames: false,
  componentName: 'vue-calendar',
  languages: {},
  disableDays: [],
  highlightDays: []
})

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
