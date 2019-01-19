<template>
  <div :class="[divClass, 'icon-fa']">
    <i :class="iconClass"></i>
  </div>
</template>

<script>
export default {
  props: ['iconClass', 'divClass'],
  name: 'Icon',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.icon-fa {
  position: absolute;
  left: 0;
  top: 0;
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center
}
i {
  font-size: 28px;
  color: rgba(#cdcdcd, 0.8);
  transition: all 0.2s ease-in;
}
.menu-icon {
  width: 35px;
  i {
    font-size: 30px;
  }
}
</style>
