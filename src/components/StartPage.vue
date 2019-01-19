<template>
  <div class="outter-wrapper">

  </div>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      // email: 'vadim2@gmail.com',
      // password: '123456',
      name: null,
      error: null
    }
  },
  methods: {
  },
  beforeCreate () {
    if (window.localStorage.getItem('name')) {
      this.$router.push('/home')
    } else {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/style/_vars.scss';
.wrapper {
  justify-content: flex-end;
}

.logo {
  width: 140px;
  height: 140px;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 60%;
  }
}

.logo-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
