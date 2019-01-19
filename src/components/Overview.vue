<template>
  <div :class="['wrapper', this.$store.getters.menuStatus ? 'menu-opened' : 'menu-closed']">
    <Toolbar
      leftIcon="fal fa-bars"
      title="Overview"
      @left-icon-clicked="leftAction"
    >
    </Toolbar>
    <div class="tabs">
      <ul>
        <li>Active</li>
        <li>Popular</li>
        <li>Recent</li>
      </ul>
    </div>
    <div class="types">
      <ul>
        <li v-for="(item, i) in typesList" :key="i">
          <div class="picture" v-bind:style="{backgroundImage : 'url(' + require('../assets/images/' + item.name.toLowerCase() + '-img.png') + ')' }"></div>
          <div class="text-content">
            <h2>{{ item.name }}</h2>
            <div class="amount">{{ item.amount }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Toolbar from '@/components/reusable/Toolbar.vue'

export default {
  name: 'Overview',
  components: { Toolbar },
  data () {
    return {
      toggleMenu: false,
      typesList: [
        {
          name: 'Salads',
          amount: '6'
        },
        {
          name: 'Travel',
          amount: '3'
        },
        {
          name: 'Work',
          amount: '8'
        },
        {
          name: 'Travel',
          amount: '5'
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
.tabs {
  width: 100%;
  margin-bottom: 10px;
  ul {
    display: flex;
    justify-content: space-around;
  }
  li {
    padding: 8px 0;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.7);
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      position: absolute;
      bottom: 0px;
      left: 0;
      background-color: rgba(255, 255, 255, 0.5);
      opacity: 0;
      transition: 0.2s all ease-in-out;
    }
    &:hover::after {
      opacity: 1;
    }
  }
}

.types {
  width: 100%;
  height: 610px;
  overflow-y: scroll;
  li {
    display: flex;
    height: 190px;
    position: relative;
    margin-bottom: 8px;
  }
  .picture {
    width: 50%;
    background: center center;
    background-size: cover;
  }
  .text-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background-color: rgba(255, 255, 255, 0.1);
  }
  h2 {
    width: 100%;
    font-size: 26px;
    margin-bottom: 12px;
  }
  .amount {
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 16px;
  }
}
</style>
