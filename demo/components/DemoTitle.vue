<template>
  <section
    v-tracker="callback"
    class="vh-100 d-flex justify-content-center align-items-center overflow-hidden"
  >
    <h1
      class="display-6 text-uppercase text-center text-nowrap"
      :style="{
        letterSpacing: `${progress * 5}rem`,
        opacity: `${1 - 2 * progress}`
      }"
    >
      Простой плагин, для <br>создания анимации при скролле. <br>Результат ограничен только <br>вышим воображением!
    </h1>
  </section>
</template>

<script>
export default {
  name: "DemoTitle",

  data() {
    return {
      progress: 0
    }
  },

  methods: {
    callback({up2}) {
      this.progress = up2
    }
  }
}
</script>

<style scoped>
section {
  background-color: #EBF7F6;
}
</style>