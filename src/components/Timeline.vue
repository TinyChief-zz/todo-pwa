<template>
  <div :class="['wrapper', this.$store.getters.menuStatus ? 'menu-opened' : 'menu-closed']">
    <Toolbar
      leftIcon="fal fa-bars"
      title="Timeline"
      @left-icon-clicked="leftAction"
    >
    </Toolbar>
    <div class="blocks blocks-tasks">
      <div v-for="(day, i) in daysWithTasks" :key="i" class="days-block">
        <p class="day-title">{{ day }}</p>
        <div v-for="(hero, index) in getTaskForDay(day)" v-bind:key="index" class="block-item">
          <Icon :iconClass="hero.icon"></Icon>
          <div class="block-item__content">
            <p class="block-item__title">
              {{ hero.title }}
              <span>{{hero.time}}</span>
            </p>
            <p class="block-item__type">{{hero.type}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/reusable/Toolbar.vue'

export default {
  name: 'Timeline',
  components: {
    Toolbar
  },
  data () {
    return {
      daysWithTasks: [],
      tasks: []
    }
  },
  methods: {
    leftAction: function () {
      this.$store.dispatch('toggleMenu')
    },
    getDays: function () {
      let days = []
      // let allDays = []
      const options = {
        weekday: 'long',
        month: 'long',
        day: '2-digit'
      }
      this.tasks.map(el => {
        days.push(new Date(el.date))
      })
      // SORT DAYS IN INCREASING WAY
      days.sort((a, b) => {
        return a - b
      })
      // TRANSFORM DATE OBJECTS TO HUMAN READBLE STRING
      days = days.map(el => {
        return new Date(el).toLocaleDateString('ru-Ru', options)
      })
      // REMAIN ONLY UNIQUE VALUES
      days = [...new Set(days)]

      return (this.daysWithTasks = days)
    },
    getTaskForDay: function (day) {
      const tasksForDay = []
      const options = {
        weekday: 'long',
        month: 'long',
        day: '2-digit'
      }
      this.tasks.map(el => {
        const taskDay = new Date(el.date).toLocaleDateString('ru-RU', options)
        if (day === taskDay) {
          tasksForDay.push(el)
        }
      })
      return tasksForDay
    }
  },
  computed: {},
  mounted: function () {
    this.tasks = this.$store.getters.userTasks
    this.tasks.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.date) - new Date(b.date)
    })
    this.getDays()
  }
}
</script>

<style scoped lang="scss">
.days-block {
  width: 100%;
  .day-title {
    text-align: left;
    padding: 20px 15px;
    background-color: rgba(255, 255, 255, 0.08);
    text-transform: uppercase;
    // font-weight: 200;
    font-size: 14px;
    letter-spacing: 1px;
  }
}
</style>
