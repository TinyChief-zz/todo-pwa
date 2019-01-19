<template>
  <div :class="['wrapper', this.$store.getters.menuStatus ? 'menu-opened' : 'menu-closed']">
    <Toolbar
      leftIcon="fal fa-bars"
      title="Lists"
      @left-icon-clicked="leftAction"
    >
    </Toolbar>
    <h1>{{type}}</h1>
  </div>
</template>

<script>
import Toolbar from '@/components/reusable/Toolbar.vue'

export default {
  name: 'Lists',
  components: {
    Toolbar
  },
  data () {
    return {
      toggleMenu: false,
      type: this.getType()
    }
  },
  methods: {
    leftAction: function () {
      this.$store.dispatch('toggleMenu')
    },
    getType: function () {
      return this.$route.params.type
    }
  }
}
</script>

<style scoped lang="scss">
</style>
