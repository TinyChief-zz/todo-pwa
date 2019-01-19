<template>
  <button class="btn--large" @click="$emit('btn-clicked')">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/style/_vars.scss';

.btn--large {
  background-color: transparent;
  border: 1px solid white;
  padding: 22px 0;
  font-size: 18px;
  font-family: 'Avenir Book', Avenir;
  width: 350px;
  border-radius: 44px;
  justify-self: flex-end;
  margin: 40px 0 30px 0;
  color: white;
  cursor: pointer;
  @include for-phone {
    width: 100%;
  }
}
</style>
