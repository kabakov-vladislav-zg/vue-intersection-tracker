<template>
  <section v-tracker="callback" class="demo-1 position-relative vh-100">
    <div class="d-flex flex-column h-100 justify-content-between">
      <FlyingOwl class="demo-1__flying-owl" :progress="through"/>
      <MovingCyclist class="demo-1__moving-cyclist" :progress="up2"/>
    </div>
  </section>
</template>

<script>
import MovingCyclist from "./MovingCyclist";
import FlyingOwl from "./FlyingOwl";
export default {
  name: "Demo1",

  components: {FlyingOwl, MovingCyclist},

  data() {
    return {
      up2: 0,
      through: 0
    }
  },

  methods: {
    callback({up2, through}) {
      this.up2 = up2
      this.through = through
    }
  }
}
</script>

<style scoped>
.demo-1 {
  background: url("../assets/park.jpg") center no-repeat;
  background-size: cover;
  overflow: hidden;
}
.demo-1__moving-cyclist {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3rem;
}
.demo-1__flying-owl {
  position: absolute;
  top: 25%;
  left: 50%;
}
</style>