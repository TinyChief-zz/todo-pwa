<template>
  <div>
    <p>{{ firstText }}</p>
    <span @click="$router.push({name: to})">{{ secondText }}</span>
  </div>
</template>

<script>
export default {
  props: ['firstText', 'secondText', 'to'],
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  * {
    color: white;
    font-size: 16px;
  }
  // div {
  //   // margin-top: 25px;
  // }
  p {
    opacity: 0.5;
    display: inline-block;
  }

  span {
    opacity: 1;
    cursor: pointer;
  }
</style>
