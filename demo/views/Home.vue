<template>
  <div>
    <DemoTitle />
    <Demo1 />
  </div>
</template>

<script>
import Demo1 from "../components/Demo1";
import DemoTitle from "../components/DemoTitle";

export default {
  name: 'Home',
  components: {
    DemoTitle,
    Demo1,
  },
  data() {
    return {
      style: null
    }
  },
  methods: {
    track({up2}) {
      this.style = {transform: `rotateZ(${up2 * 20000}deg)`}
    }
  },
}
</script>
<style>

</style>
