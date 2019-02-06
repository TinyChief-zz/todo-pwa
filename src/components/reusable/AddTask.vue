<template>
  <button
    class="btn--add"
    @click="addTask"
  >
    <img src="../../assets/images/plus.png" alt="plus" width="35px">
  </button>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    addTask: function () {
      this.$router.push({ name: 'New' })
    }
  }
}
</script>

<style scoped lang="scss">
.btn--add {
  position: absolute;
  bottom: 10px;
  width: 60px;
  height: 60px;
  background-color: #ff3366;
  border-radius: 50%;
  font-size: 26px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}
</style>
