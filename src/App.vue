<template>
  <div id="app">
    <div class="container">
      <new v-if="this.$store.getters.openNewTask"></new>
      <div class="outter-wrapper" v-show='!this.$store.getters.openNewTask'>
        <Menu v-if="this.$store.getters.userData"></Menu>
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import New from './components/New'
import Menu from './components/reusable/Menu'

export default {
  components: { New, Menu },
  name: 'App',
  beforeMount: async function () {
    if (window.localStorage.getItem('name')) {
      await this.$store.dispatch('setUserFromStorage', { user: {
        email: window.localStorage.getItem('email'),
        password: window.localStorage.getItem('password'),
        name: window.localStorage.getItem('name'),
        _id: window.localStorage.getItem('_id'),
        registered: window.localStorage.getItem('registered'),
        phone: window.localStorage.getItem('phone')
      },
      jwt: window.localStorage.getItem('jwt') })
    } else {
      this.$router.push({ name: 'Login' })
    }
    // Comment these two lines
    await this.$store.dispatch('getUserTasks')
    this.$store.dispatch('getTodayTasks')
    // // this.time = this.getTime()
  }
}
</script>

<style lang="scss">
@import '@/style/_vars.scss';
// @import '/assets/fontawesome/css/all.css';

@font-face {
  font-family: 'Avenir Book';
  src: url('assets/fonts/Avenir-Book.ttf') format('ttf');
}
@font-face {
  font-family: 'Avenir Light';
  src: url('assets/fonts/Avenir-Light.ttf') format('ttf');
}
@font-face {
  font-family: 'Avenir Next';
  src: url('assets/fonts/AvenirNextCyr-Thin.ttf') format('ttf');
}

#app {
  font-family: 'Avenir Next', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  color: white;
  display: flex;
  align-items: center;
  background: url('assets/images/image.png') center no-repeat;
}

.container {
  width: 768px;
  margin: 0 auto;
  height: 100vh;
  @include for-tablet {
    width: $phoneWidth;
  }
  @include for-phone {
    width: 100%;
  }
  @include for-small-phone {
    width: 100%;
  }
}
.outter-wrapper {
  margin: 0 auto;
  height: 100%;
  width: $phoneWidth;
  position: relative;
  overflow: hidden;
  @include for-tablet {
    width: 100%;
  }
}
.wrapper {
  height: 100%;
  position: relative;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: 0.3s transform ease-out;
  @include for-small-phone {
    padding: 10px 18px;
  }
}

.menu-opened {
  transform: translateX(300px);
  @include for-small-phone {
    transform: translateX(250px);
  }
}

.blocks {
  width: 100%;
  overflow-y: scroll;
}
.block-item {
  height: 80px;
  display: flex;
  align-items: center;
  padding-left: 60px;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    height: 2px;
    width: 100%;
    bottom: 0;
    left: 0;
    background: url('./assets/images/divider.png') center;
    background-size: contain;
  }
  &__content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  img:first-child {
    height: 28px;
    position: absolute;
    left: 0;
    top: 16px;
  }

  input {
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: white;
    opacity: 0.8;
    &::placeholder {
      color: white;
      opacity: 0.6;
    }
  }
  .block-item__title {
    display: flex;
    justify-content: space-between;
    text-align: left;
    margin-bottom: 10px;
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 1px;
    width: 100%;
    span {
      font-size: 14px;
      text-transform: none;
    }
  }
  .block-item__type {
    color: rgba(255, 255, 255, 0.5);
    text-align: left;
  }
}
.header {
  padding: 20px 0;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 15px;
  width: 100%;
  .first-row {
    font-size: 36px;
    width: 100%;
    text-align: center;
    background-color: transparent;
    border: none;
    margin-bottom: 6px;
    letter-spacing: 1px;
  }
  .second-row {
    width: 100%;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
  }
}
.photo-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: center center / contain;
}

.week-day {
  @include for-small-phone {
    width: 40px;
    height: 40px;
  }
}
</style>
