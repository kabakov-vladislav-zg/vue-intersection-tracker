<template>
  <div class="flying-owl">
    <div class="flying-owl__owl" :style="{transform: `translate(-50%, -50%) scale(${3 * progress})`}">
      <img src="../assets/owl/owl.png" width="119" height="124" alt="">
      <img
        :style="{transform: `rotateZ(${this.deg}deg)`}"
        class="flying-owl__wing flying-owl__wing_left"
        src="../assets/owl/owl_left-wing.png"
        width="386"
        height="130"
        alt=""
      >
      <img
        :style="{transform: `rotateZ(${-this.deg}deg)`}"
        class="flying-owl__wing flying-owl__wing_right"
        src="../assets/owl/owl_right-wing.png"
        width="442"
        height="147"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "FlyingOwl",

  props: {
    progress: {
      type: Number,
      default: 0
    }
  },

  computed: {
    deg() {
      return Math.cos(24 * this.progress) * 20
    }
  }
}
</script>

<style scoped lang="scss">
.flying-owl {
  position: relative;
}
.flying-owl__owl {
  position: absolute;
  z-index: 5;
  transform-origin: 50% 0;
}
.flying-owl__wing {
  position: absolute;
  z-index: -1;
  &_left {
    top: -80px;
    left: -340px;
    transform-origin: 100% 100%;
  }
  &_right {
    top: -80px;
    right: -400px;
    transform-origin: 0 100%;
  }
}
</style>