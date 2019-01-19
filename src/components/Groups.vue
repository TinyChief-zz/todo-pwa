<template>
  <div :class="['wrapper', this.$store.getters.menuStatus ? 'menu-opened' : 'menu-closed']">
    <Toolbar
      leftIcon="fal fa-bars"
      title="Groups"
      @left-icon-clicked="leftAction"
    >
    </Toolbar>
  </div>
</template>

<script>
import Toolbar from '@/components/reusable/Toolbar.vue'

export default {
  name: 'Groups',
  components: {
    Toolbar
  },
  data () {
    return {
      toggleMenu: false
    }
  },
  methods: {
    leftAction: function () {
      this.$store.dispatch('toggleMenu')
    }
  }
}
</script>

<style scoped lang="scss">
</style>
