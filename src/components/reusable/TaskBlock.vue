<template>
  <div class="block-item">
    <Icon :iconClass="task.icon"></Icon>
    <div class="block-item__content">
      <p class="block-item__title">
        {{ task.title }}
        <span>{{`${getHours(task.date)}:${getMinutes(task.date)}`}}</span>
      </p>
      <p class="block-item__type">{{task.type}}</p>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/reusable/Icon'

export default {
  components: { Icon },
  name: 'TaskBlock',
  props: ['task'],
  data () {
    return {}
  },
  methods: {
    getHours: function (date) {
      const hours = new Date(date).getHours()
      return hours < 10 ? `0${hours.toString()}` : hours
    },
    getMinutes: function (date) {
      const minutes = new Date(date).getMinutes()
      return minutes < 10 ? `0${minutes.toString()}` : minutes
    }
  }
}
</script>

<style lang="scss">
</style>
