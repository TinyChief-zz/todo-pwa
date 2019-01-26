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
        <div v-for="(hero, index) in tasks[day]" v-bind:key="index" class="block-item">
          <Icon :iconClass="hero.icon"></Icon>
          <div class="block-item__content">
            <p class="block-item__title">
              {{ hero.title }}
              <span v-if="hero.time">{{hero.time}}</span>
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
import Icon from '@/components/reusable/Icon'

export default {
  name: 'Timeline',
  components: {
    Toolbar,
    Icon
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
    }
  },
  computed: {},
  beforeMount: function () {
    const daysWithTasks = new Set()
    const options = {
      weekday: 'long',
      month: 'long',
      day: '2-digit',
      year: 'numeric'
    }
    const tasks = {}
    let timeline = {}
    if (!this.$store.getters.timeline) {
      this.$store.getters.userTasks.forEach(el => {
        const cdate = new Date(el.date).toLocaleDateString('ru-Ru', options)
        daysWithTasks.add(cdate)
        if (!tasks[cdate]) {
          tasks[cdate] = []
          tasks[cdate].push(el)
        } else {
          tasks[cdate].push(el)
        }
      })
      this.$store.dispatch('setTimeline', { tasks, daysWithTasks })
      console.log('here')
      timeline = this.$store.getters.getTimeline
      this.tasks = timeline.tasks
      this.daysWithTasks = timeline.daysWithTasks
    } else {
      timeline = this.$store.getters.getTimeline
      this.tasks = timeline.tasks
      this.daysWithTasks = timeline.daysWithTasks
    }
    console.log(timeline)
    // console.log(days)
    // console.log(sortedTasks)
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
.block-item__title span {
  margin-top: 10px;
}
.block-item__type {
  margin-top: 10px;
}
.block-item__title {
  margin: 0;
}
</style>
