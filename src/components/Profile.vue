<template>
  <div :class="['wrapper', this.$store.getters.menuStatus ? 'menu-opened' : 'menu-closed']">
    <Toolbar
      leftIcon="fal fa-bars"
      title="Profile"
      @left-icon-clicked="leftAction"
    >
    </Toolbar>
    <div class="header">
      <h1 class="first-row">January</h1>
      <h3 class="second-row">2015</h3>
    </div>
    <div class="summary">
      <div class="summary-item" v-for="(item, i) in summaryItems" :key="i">
        <h5>{{ item.title }}</h5>
        <div class="row">
          <div class="progress">
            <img :src="require('../assets/images/progress-' + item.progress +'.png')" alt="progress" width="40px">
          </div>
          <div class="amount">{{ item.amount }}</div>
          <div class="btn" @click="$router.push({
                  path: `/lists/${item.title.toLowerCase()}`,
                  props: true}
                )">
            <i class="fal fa-list-ul"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/reusable/Toolbar.vue'

export default {
  name: 'Profile',
  components: { Toolbar },
  data () {
    return {
      toggleMenu: false,
      summaryItems: [
        {
          title: 'Completed',
          amount: '20',
          progress: '1'
        },
        {
          title: 'Snoozed',
          amount: '13',
          progress: '2'
        },
        {
          title: 'Overdue',
          amount: '6',
          progress: '3'
        }
      ]
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
.summary {
  width: 100%;
  overflow: scroll;
}

.summary-item {
  width: 100%;
  padding: 30px 15px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: url('../assets/images/divider.png') center;
    background-size: contain;
  }
  h5 {
    font-size: 14px;
    text-transform: uppercase;
    font-weight: 200;
    letter-spacing: 1px;
    margin-bottom: 15px;
  }
  .amount {
    font-size: 50px;
  }
  .row {
    position: relative;
  }
  .progress,
  .btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 8px;
    cursor: pointer;
  }
  .btn {
    right: 0%;
  }
  i {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    color: rgba(#cdcdcd, 0.8);
    transition: all 0.2s ease-in;
  }
}

.header {
  margin-bottom: 0;
}
</style>
